import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeModule} from "./home/home.module";
import {FooterComponent} from "./home/footer/footer.component";
import {HeaderComponent} from "./home/header/header.component";

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommodityModule} from "./commodity/commodity.module";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ReactiveFormsModule,
    FormsModule,
    CommodityModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
