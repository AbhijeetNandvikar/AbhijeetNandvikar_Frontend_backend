import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'

import { GetapiService } from "./getapi.service";
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [GetapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
