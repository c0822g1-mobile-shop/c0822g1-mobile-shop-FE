import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommodityRoutingModule } from './commodity-routing.module';
import { CommoditySelectComponent } from './commodity-select/commodity-select.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [CommoditySelectComponent],
  exports: [
    CommoditySelectComponent
  ],
    imports: [
        CommonModule,
        CommodityRoutingModule,
        FormsModule
    ]
})
export class CommodityModule { }
