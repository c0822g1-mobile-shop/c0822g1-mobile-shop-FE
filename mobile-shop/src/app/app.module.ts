
// @ts-ignore
// @ts-ignore
import {NgModule} from '@angular/core';
// @ts-ignore

import {ManageCustomerModule} from "./manage-customer/manage-customer.module";
import {BillHistoryModule} from "./bill-history/bill-history.module";
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
// @ts-ignore
// @ts-ignore
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
// @ts-ignore
// @ts-ignore
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
// @ts-ignore
import {AngularFireStorageModule} from "@angular/fire/storage";
// @ts-ignore
import {AngularFireModule} from "@angular/fire";
import {environment} from "../environments/environment";
import {CommodityModule} from "./commodity/commodity.module";
import {HeaderComponent} from "./home/header/header.component";
import {FooterComponent} from "./home/footer/footer.component";
import {HomeModule} from "./home/home.module";
import {SalesReportModule} from "./sales-report/sales-report.module";
import {WarehouseModule} from "./warehouse/warehouse.module";
import {RouterModule} from "@angular/router";
import {SupplierModule} from "./supplier/supplier.module";
import {CommonModule} from "@angular/common";
import {ToastrModule} from "ngx-toastr";
import {BrowserModule} from "@angular/platform-browser";
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './log-in/security/auth.interceptor';
import {ScanQrCodeModule} from "./scan-qr-code/scan-qr-code.module";
import {BillModule} from "./bill/bill.module";


// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    ScanQrCodeModule,
    CommonModule,
    SupplierModule,
    BrowserModule,
    AppRoutingModule,
    ManageCustomerModule,
    BillHistoryModule,
    SupplierModule,
    ReactiveFormsModule,
    FormsModule,
    HomeModule,
    ReactiveFormsModule,
    FormsModule,
    WarehouseModule,
    AngularFireStorageModule,
    HttpClientModule,
    SalesReportModule,
    ToastrModule.forRoot(),
    RouterModule,
    WarehouseModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BillModule
  ], schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {
}
