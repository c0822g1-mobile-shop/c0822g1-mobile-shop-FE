import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCommodityComponent } from './list-commodity/list-commodity.component';
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../app-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AppComponent} from "../app.component";

import { CommodityRoutingModule } from './commodity-routing.module';
import { CommoditySelectComponent } from './commodity-select/commodity-select.component';
import {FormsModule} from "@angular/forms";


@NgModule({


  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
  CommodityRoutingModule,
  ],

  declarations: [
    CommoditySelectComponent,
  ListCommodityComponent
  ],
  exports: [],


})
export class CommodityModule { }
