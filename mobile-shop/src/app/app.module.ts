import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AngularFireStorageModule} from "@angular/fire/storage";
import {AngularFireModule} from "@angular/fire";
import {environment} from "../environments/environment";
import {BodyComponent} from "./home/body/body.component";
import {HomeModule} from "./home/home.module";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {WarehouseModule} from "./warehouse/warehouse.module";
import {FooterComponent} from "./home/footer/footer.component";
import {HeaderComponent} from "./home/header/header.component";
import {CommodityModule} from "./commodity/commodity.module";





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent
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
    WarehouseModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {
}
