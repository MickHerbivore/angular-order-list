import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  @Input() items: any[] = [];
  @Output() seleccionarItemEvent = new EventEmitter<number>();

  itemSeleccionado: number|null = null;

  constructor() { }

  ngOnInit(): void {
  }

  seleccionarItem( index: number ) {
    this.itemSeleccionado = index;
    this.seleccionarItemEvent.emit( index );
  }

  limpiarItemSeleccionado() {
    this.itemSeleccionado = null;
    console.log(this.itemSeleccionado);
  }

}
