import {NgModule} from '@angular/core';
import {ManageCustomerModule} from "./manage-customer/manage-customer.module";
import {BillHistoryModule} from "./bill-history/bill-history.module";
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AngularFireStorageModule} from "@angular/fire/storage";
import {AngularFireModule} from "@angular/fire";
import {environment} from "../environments/environment";
import {CommodityModule} from "./commodity/commodity.module";
import {HeaderComponent} from "./home/header/header.component";
import {FooterComponent} from "./home/footer/footer.component";
import {BodyComponent} from "./home/body/body.component";
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


// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent
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
    CommodityModule,
    HttpClientModule,
    WarehouseModule,
    AngularFireStorageModule,
    HttpClientModule,
    SalesReportModule,
    ToastrModule.forRoot(),
    RouterModule,
    WarehouseModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
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
