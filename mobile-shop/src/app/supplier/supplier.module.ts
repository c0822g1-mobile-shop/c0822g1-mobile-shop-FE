import {SupplierListComponent} from './component/supplier-list/supplier-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SupplierRoutingModule} from './supplier-routing.module';


@NgModule({
  declarations: [SupplierListComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SupplierRoutingModule
  ]
})
export class SupplierModule {
}
