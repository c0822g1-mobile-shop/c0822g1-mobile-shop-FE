import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ManageCustomerRoutingModule} from './manage-customer-routing.module';
import {ManagerListComponent} from './manager-list/manager-list.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [ManagerListComponent],
  imports: [
    CommonModule,
    ManageCustomerRoutingModule,
    FormsModule
  ]
})
export class ManageCustomerModule { }
