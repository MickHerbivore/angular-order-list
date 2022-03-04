import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  @ViewChild('tableBody') tableBody!: ElementRef;

  @Input() items: any[] = [];
  @Output() seleccionarItemEvent = new EventEmitter<number | null>();

  itemSeleccionado: number|null = null;

  constructor() {}

  ngOnInit(): void {}

  seleccionarItem( index: number ) {
    this.itemSeleccionado = index;
    this.seleccionarItemEvent.emit( this.itemSeleccionado );
  }

  limpiarItemSeleccionado() {
    this.itemSeleccionado = null;
    this.seleccionarItemEvent.emit( this.itemSeleccionado );
  }

}
