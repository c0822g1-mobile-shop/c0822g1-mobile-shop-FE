import {CreateCommodityComponent} from "./create-commodity/create-commodity.component";

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListCommodityComponent} from './list-commodity/list-commodity.component';
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {CommodityRoutingModule} from './commodity-routing.module';
import {CommoditySelectComponent} from './commodity-select/commodity-select.component';
import {EditCommodityComponent} from "./edit-commodity/edit-commodity.component";
import {environment} from "../../environments/environment";
import {AngularFireStorageModule} from "@angular/fire/storage";
import {AngularFireModule} from "@angular/fire";


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    CommodityRoutingModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  declarations: [
    CommoditySelectComponent,
    ListCommodityComponent,
    CreateCommodityComponent,
    EditCommodityComponent,

  ],
  exports: [],
})
export class CommodityModule {
}
