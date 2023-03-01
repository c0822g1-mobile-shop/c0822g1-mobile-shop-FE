import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommoditySelectComponent } from './commodity-select/commodity-select.component';
import {FormsModule} from "@angular/forms";
import { CommodityRoutingModule } from './commodity-routing.module';





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
