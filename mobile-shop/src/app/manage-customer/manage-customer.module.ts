import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ManageCustomerRoutingModule} from './manage-customer-routing.module';
import {ManagerListComponent} from './manager-list/manager-list.component';
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";


@NgModule({
  declarations: [ManagerListComponent],
  imports: [
    // BrowserModule,
    CommonModule,
    ManageCustomerRoutingModule,
    FormsModule
  ]
})
export class ManageCustomerModule {
}
