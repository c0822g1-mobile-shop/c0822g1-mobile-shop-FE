import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillRoutingModule } from './bill-routing.module';

import { BillCreateComponent } from './bill-create/bill-create.component';
import {ReactiveFormsModule} from '@angular/forms';

import { CustomerSelectComponent } from './customer-select/customer-select.component';
import {FormsModule} from '@angular/forms';
import {CommodityModule} from '../commodity/commodity.module';
import {CommoditySelectComponent} from "../commodity/commodity-select/commodity-select.component";


@NgModule({

  declarations: [CustomerSelectComponent, BillCreateComponent],
    imports: [
        CommonModule,
        BillRoutingModule, FormsModule, ReactiveFormsModule, CommodityModule
    ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class BillModule { }
