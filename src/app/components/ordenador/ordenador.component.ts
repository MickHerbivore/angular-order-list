import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ordenador',
  templateUrl: './ordenador.component.html',
  styleUrls: ['./ordenador.component.css']
})
export class OrdenadorComponent implements OnInit {

  @ViewChild('divOrdenador') divOrdenador!: ElementRef;

  @Input() itemSeleccionado: number|null = null;
  @Input() items: any[] = [];
  @Output() nuevoItemSeleccionadoEvent = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  subir() {
    if (this.itemSeleccionado != null && this.itemSeleccionado > 0) {
      const toIndex = this.itemSeleccionado - 1;

      let element = this.items[this.itemSeleccionado];
      this.items.splice(this.itemSeleccionado, 1);
      this.items.splice(toIndex, 0, element);
      this.itemSeleccionado--;
      this.nuevoItemSeleccionadoEvent.emit(this.itemSeleccionado);
    }
  }

  bajar() {
    if (this.itemSeleccionado != null && this.itemSeleccionado < (this.items.length - 1)) {
      const toIndex = this.itemSeleccionado + 1;

      let element = this.items[this.itemSeleccionado];
      this.items.splice(this.itemSeleccionado, 1);
      this.items.splice(toIndex, 0, element);
      this.itemSeleccionado++;
      this.nuevoItemSeleccionadoEvent.emit(this.itemSeleccionado);
    }
  }

}
