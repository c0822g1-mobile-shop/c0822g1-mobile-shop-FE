import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListComponent} from './component/supplier-list/list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class SupplierModule {
}
