import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';//Para gets

import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
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
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [MaruchanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
