import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillRoutingModule } from './bill-routing.module';

import { BillCreateComponent } from './bill-create/bill-create.component';
import {ReactiveFormsModule} from "@angular/forms";


import { CustomerSelectComponent } from './customer-select/customer-select.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [CustomerSelectComponent, BillCreateComponent],
    imports: [
        CommonModule,
        BillRoutingModule, FormsModule,ReactiveFormsModule
    ]

})
export class BillModule { }
