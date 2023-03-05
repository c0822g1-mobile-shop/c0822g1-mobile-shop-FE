import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommoditySelectComponent } from './commodity-select/commodity-select.component';
import { CommodityRoutingModule } from './commodity-routing.module';
import {CreateCommodityComponent} from "./create-commodity/create-commodity.component";
import {ListCommodityComponent} from './list-commodity/list-commodity.component';
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {EditCommodityComponent} from "./edit-commodity/edit-commodity.component";
import {environment} from "../../environments/environment";
import {AngularFireStorageModule} from "@angular/fire/storage";
import {AngularFireModule} from "@angular/fire";


@NgModule({
  imports: [
    AppRoutingModule,
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
    exports: [
        CommoditySelectComponent
    ],
})
export class CommodityModule {
}
