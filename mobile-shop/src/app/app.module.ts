import {ManageCustomerModule} from "./manage-customer/manage-customer.module";
import {BillHistoryModule} from "./bill-history/bill-history.module";
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AngularFireStorageModule} from "@angular/fire/storage";
import {environment} from "../environments/environment";
import {AppRoutingModule} from './app-routing.module';
import {SupplierModule} from "./supplier/supplier.module";
import {HeaderComponent} from "./home/header/header.component";

import {FooterComponent} from "./home/footer/footer.component";
import {HomeModule} from "./home/home.module";
import {CommodityModule} from "./commodity/commodity.module";
import {HttpClientModule} from "@angular/common/http";
import {WarehouseModule} from "./warehouse/warehouse.module";
import {ToastrModule} from "ngx-toastr";
import {AngularFireModule} from "@angular/fire";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ManageCustomerModule,
    BillHistoryModule,
    SupplierModule,
    ReactiveFormsModule,
    FormsModule,
    HomeModule,
    ReactiveFormsModule,
    FormsModule,
    CommodityModule,
    HttpClientModule,

    ToastrModule.forRoot(),
    WarehouseModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
