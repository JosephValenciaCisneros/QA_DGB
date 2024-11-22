import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DgbComponent } from './dgb/dgb.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { AvisoPrivacidadComponent } from './aviso-privacidad/aviso-privacidad.component';
import { FormsModule } from '@angular/forms';
import { ResultadoFolioComponent } from './resultado-folio/resultado-folio.component';

@NgModule({
  declarations: [
    AppComponent,
    DgbComponent,
    QuienesSomosComponent,
    ConsultasComponent,
    AvisoPrivacidadComponent,
    ResultadoFolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
