import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WarehouseRoutingModule } from './warehouse-routing.module';
import { WareHousingComponent } from './ware-housing/ware-housing.component';
import {FormsModule} from "@angular/forms";
import {AngularFireStorageModule} from "@angular/fire/storage";
import {AngularFireModule} from "@angular/fire";
import {environment} from "../../environments/environment";
import {CommodityModule} from "../commodity/commodity.module";


@NgModule({
  declarations: [WareHousingComponent],
  imports: [
    CommonModule,
    WarehouseRoutingModule,
    FormsModule,
    CommodityModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment)
  ]
})
export class WarehouseModule { }
