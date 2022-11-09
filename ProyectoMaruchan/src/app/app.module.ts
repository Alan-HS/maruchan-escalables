import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';//Para gets

import { AppComponent } from './app.component';

import { MaruchanService } from './maruchan.service';
import { MostrarComponent } from './mostrar/mostrar.component';
import { AgregarComponent } from './agregar/agregar.component';

@NgModule({
  declarations: [
    AppComponent,
    MostrarComponent,
    AgregarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [MaruchanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
