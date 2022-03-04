import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { OrdenamientoService } from './services/ordenamiento.service';
import { TablaComponent } from './components/tabla/tabla.component';
import { OrdenadorComponent } from './components/ordenador/ordenador.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild(TablaComponent) tabla!: TablaComponent;
  @ViewChild(OrdenadorComponent) ordenador!: OrdenadorComponent;

  personajes: any[] = [];
  personajeSeleccionadoIndex: number|null = null;

  constructor( private service: OrdenamientoService, private renderer: Renderer2 ) {
    this.renderer.listen('window', 'click', (e:Event) => {
      if(!this.tabla.tableBody.nativeElement.contains(e.target) //Si el click no es sobre los elementos de la tabla
        && !this.ordenador.divOrdenador.nativeElement.contains(e.target) // Si el click no es sobre los ordenadores
        && this.personajeSeleccionadoIndex != null) { //Si el item seleccionado no es null
        this.tabla.limpiarItemSeleccionado();
      }
    });
  }

  ngOnInit(): void {
    this.getPersonajes();
  }

  getPersonajes() {
    this.personajes = this.service.getPersonajes()
  }

  seleccionarPersonaje( index: number | null ) {
    this.personajeSeleccionadoIndex = index;
  }

  setpersonajeSeleccionadoIndex( index: number ) {
    this.personajeSeleccionadoIndex = index;
    this.tabla.seleccionarItem(this.personajeSeleccionadoIndex);
  }

}
