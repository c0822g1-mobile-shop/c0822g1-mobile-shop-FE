import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillRoutingModule } from './bill-routing.module';
import { BillCreateComponent } from './bill-create/bill-create.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    BillCreateComponent
  ],
  imports: [
    CommonModule,
    BillRoutingModule,
    ReactiveFormsModule
  ]
})
export class BillModule { }
