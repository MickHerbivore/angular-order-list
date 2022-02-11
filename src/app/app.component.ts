import { Component, OnInit, ViewChild } from '@angular/core';
import { OrdenamientoService } from './services/ordenamiento.service';
import { TablaComponent } from './components/tabla/tabla.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild(TablaComponent) tabla!: TablaComponent;

  title = 'angular-order-list';
  personajes: any[] = [];
  personajeSeleccionadoIndex: number|null = null;

  constructor( private service: OrdenamientoService ) { }

  ngOnInit(): void {
    this.getPersonajes();
  }

  getPersonajes() {
    this.personajes = this.service.getPersonajes()
  }

  seleccionarPersonaje( index: number ) {
    this.personajeSeleccionadoIndex = index;
  }

  setpersonajeSeleccionadoIndex( index: number ) {
    this.personajeSeleccionadoIndex = index;
    this.tabla.seleccionarItem(this.personajeSeleccionadoIndex);
  }

}
