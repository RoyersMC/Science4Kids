import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './master/header/header.component';
import { FooterComponent } from './master/footer/footer.component';
import { ModuloOceanoComponent } from './modulo-oceano/modulo-oceano.component';
import { ModuloSelvaComponent } from './modulo-selva/modulo-selva.component';
import { ModuloCuerpoHumanoComponent } from './modulo-cuerpo-humano/modulo-cuerpo-humano.component';
import { ModuloSistemaSolarComponent } from './modulo-sistema-solar/modulo-sistema-solar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    ModuloOceanoComponent,
    ModuloSelvaComponent,
    ModuloCuerpoHumanoComponent,
    ModuloSistemaSolarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
