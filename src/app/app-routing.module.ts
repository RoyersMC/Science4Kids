import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { ModuloOceanoComponent } from './modulo-oceano/modulo-oceano.component';
import { ModuloSelvaComponent } from './modulo-selva/modulo-selva.component';
import { ModuloCuerpoHumanoComponent } from './modulo-cuerpo-humano/modulo-cuerpo-humano.component';
import { ModuloSistemaSolarComponent } from './modulo-sistema-solar/modulo-sistema-solar.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'oceano',
    component: ModuloOceanoComponent
  },
  {
    path: 'selva',
    component: ModuloSelvaComponent
  },
  {
    path: 'cuerpoHumano',
    component: ModuloCuerpoHumanoComponent
  },
  {
    path: 'sistemaSolar',
    component: ModuloSistemaSolarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
