import {HttpClientModule} from "@angular/common/http";
import {ManageCustomerModule} from "./manage-customer/manage-customer.module";
import {BillHistoryModule} from "./bill-history/bill-history.module";
import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AngularFireStorageModule} from "@angular/fire/storage";
import {AngularFireModule} from "@angular/fire";
import {environment} from "../environments/environment";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {WarehouseModule} from "./warehouse/warehouse.module";
import {SupplierModule} from "./supplier/supplier.module";
import {HeaderComponent} from "./home/header/header.component";
import {BodyComponent} from "./home/body/body.component";
import {FooterComponent} from "./home/footer/footer.component";
import {HomeModule} from "./home/home.module";
import {CommodityModule} from "./commodity/commodity.module";
import {SalesReportModule} from "./sales-report/sales-report.module";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";

import {ToastrModule} from "ngx-toastr";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent
  ],
  imports: [
    CommonModule,
    SupplierModule,
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
    WarehouseModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    SalesReportModule,
    ToastrModule.forRoot(),
    RouterModule,
    WarehouseModule,
    AngularFireStorageModule,
    WarehouseModule,
    AngularFireStorageModule,
    WarehouseModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ], schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {
}
