import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./home/header/header.component";
import {FooterComponent} from "./home/footer/footer.component";
import {HomeModule} from "./home/home.module";
import {HttpClientModule} from "@angular/common/http";
import {ManageCustomerModule} from "./manage-customer/manage-customer.module";
import {BillHistoryRoutingModule} from "./bill-history/bill-history-routing.module";
import {BillHistoryModule} from "./bill-history/bill-history.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
    ManageCustomerModule,
    BillHistoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
