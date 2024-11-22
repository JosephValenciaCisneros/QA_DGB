import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DgbComponent } from './dgb/dgb.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { AvisoPrivacidadComponent } from './aviso-privacidad/aviso-privacidad.component';
import { ResultadoFolioComponent } from './resultado-folio/resultado-folio.component';

const routes: Routes = [
  { path: '', component: DgbComponent, data: { breadcrumb: 'DGB' } },
  { path: 'quienes-somos', component: QuienesSomosComponent, data: { breadcrumb: '¿Quiénes somos?' } },
  { path: 'consultas', component: ConsultasComponent, data: { breadcrumb: 'Consultas' } },
  { path: 'aviso-privacidad', component: AvisoPrivacidadComponent, data: { breadcrumb: 'Aviso de Privacidad' } },
  { path: 'resultado-folio/:folio', component: ResultadoFolioComponent, data: { breadcrumb: 'Resultados' } },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
