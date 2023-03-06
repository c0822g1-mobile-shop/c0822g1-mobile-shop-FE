// @ts-ignore
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
// @ts-ignore
import { CommonModule } from '@angular/common';
import { CommoditySelectComponent } from './commodity-select/commodity-select.component';
import { CommodityRoutingModule } from './commodity-routing.module';
import {CreateCommodityComponent} from "./create-commodity/create-commodity.component";
import {ListCommodityComponent} from './list-commodity/list-commodity.component';
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../app-routing.module";
// @ts-ignore
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
// @ts-ignore
import {HttpClientModule} from "@angular/common/http";
import {EditCommodityComponent} from "./edit-commodity/edit-commodity.component";
import {environment} from "../../environments/environment";
// @ts-ignore
import {AngularFireStorageModule} from "@angular/fire/storage";
// @ts-ignore
import {AngularFireModule} from "@angular/fire";


// @ts-ignore
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
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CommodityModule {
}
