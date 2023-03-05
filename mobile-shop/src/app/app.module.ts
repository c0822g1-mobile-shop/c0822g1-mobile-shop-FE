import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AngularFireStorageModule} from "@angular/fire/storage";
import {AngularFireModule} from "@angular/fire";
import {environment} from "../environments/environment";
import {CommodityModule} from "./commodity/commodity.module";
import {HeaderComponent} from "./home/header/header.component";
import {FooterComponent} from "./home/footer/footer.component";
import {BodyComponent} from "./home/body/body.component";

import {HomeModule} from "./home/home.module";

import {FooterComponent} from "./home/footer/footer.component";
import {HeaderComponent} from "./home/header/header.component";
import {CommodityModule} from "./commodity/commodity.module";
import {HttpClientModule} from "@angular/common/http";
import {WarehouseModule} from "./warehouse/warehouse.module";





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HomeModule,
    ReactiveFormsModule,
    FormsModule,
    CommodityModule,
    HttpClientModule,

    WarehouseModule

    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
