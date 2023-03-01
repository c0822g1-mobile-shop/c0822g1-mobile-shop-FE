import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SupplierModule} from "./supplier/supplier.module";
import {HeaderComponent} from "./home/header/header.component";
import {BodyComponent} from "./home/body/body.component";
import {FooterComponent} from "./home/footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SupplierModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
