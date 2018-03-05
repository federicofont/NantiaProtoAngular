import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { MapaComponent } from './mapa/mapa.component';
import { MarkerService } from './service/marker.service';

@NgModule({
  declarations: [
    AppComponent,
    MapaComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCc3YdY2qpqHP9V7rY4WEyuzi7UxS5gE14'
    })
    ]  ,
      providers: [],
      bootstrap: [AppComponent]
 })
export class AppModule {}