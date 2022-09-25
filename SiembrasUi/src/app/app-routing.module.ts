import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArbolesComponent } from './arboles/arboles.component'
import { MunicipiosComponent } from './municipios/municipios.component'
import { VeredasComponent } from './veredas/veredas.component'
import { ContratistasComponent } from './contratistas/contratistas.component'
import { SiembrasComponent } from './siembras/siembras.component'

const routes: Routes = [
  {path: 'arboles', component:ArbolesComponent},
  {path: 'siembras', component:SiembrasComponent},
  {path: 'contratistas', component:ContratistasComponent},
  {path: 'veredas', component:VeredasComponent},
  {path: 'municipios', component:MunicipiosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
