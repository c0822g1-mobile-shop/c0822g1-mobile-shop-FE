import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WarehouseRoutingModule } from './warehouse-routing.module';
import { WareHousingComponent } from './ware-housing/ware-housing.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [WareHousingComponent],
  imports: [
    CommonModule,
    WarehouseRoutingModule,
    FormsModule
  ]
})
export class WarehouseModule { }
