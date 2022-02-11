import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { OrdenadorComponent } from './components/ordenador/ordenador.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaComponent,
    OrdenadorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
