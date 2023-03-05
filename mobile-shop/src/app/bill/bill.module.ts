import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillRoutingModule } from './bill-routing.module';
import { CustomerSelectComponent } from './customer-select/customer-select.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [CustomerSelectComponent],
    imports: [
        CommonModule,
        BillRoutingModule, FormsModule
    ]
})
export class BillModule { }
