import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MunicipiosComponent } from './municipios/municipios.component';
import { VerMunicipiosComponent } from './municipios/ver-municipios/ver-municipios.component';
import { VeredasComponent } from './veredas/veredas.component';
import { ArbolesComponent } from './arboles/arboles.component';
import { ContratistasComponent } from './contratistas/contratistas.component';
import { SiembrasComponent } from './siembras/siembras.component';
import { VerContratistasComponent } from './contratistas/ver-contratistas/ver-contratistas.component';
import { VerArbolesComponent } from './arboles/ver-arboles/ver-arboles.component';
import { VerVeredasComponent } from './veredas/ver-veredas/ver-veredas.component';
import { VerSiembrasComponent } from './siembras/ver-siembras/ver-siembras.component';
import { EditarSiembrasComponent } from './siembras/editar-siembras/editar-siembras.component';
import { ServicioDbpyService } from './servicio-dbpy.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MunicipiosComponent,
    VerMunicipiosComponent,
    VeredasComponent,
    ArbolesComponent,
    ContratistasComponent,
    SiembrasComponent,
    VerContratistasComponent,
    VerArbolesComponent,
    VerVeredasComponent,
    VerSiembrasComponent,
    EditarSiembrasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ServicioDbpyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
