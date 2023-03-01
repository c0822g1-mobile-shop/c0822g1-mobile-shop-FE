import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCommodityComponent } from './list-commodity/list-commodity.component';
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AppComponent} from "../app.component";



@NgModule({
  declarations: [
    AppComponent,
    ListCommodityComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ]
})
export class CommodityModule { }
