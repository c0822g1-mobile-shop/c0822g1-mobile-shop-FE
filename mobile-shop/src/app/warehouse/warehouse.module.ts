import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WarehouseRoutingModule } from './warehouse-routing.module';
import { WareHousingComponent } from './ware-housing/ware-housing.component';
import {FormsModule} from "@angular/forms";
// @ts-ignore
import {AngularFireStorageModule} from "@angular/fire/storage";
// @ts-ignore
import {AngularFireModule} from "@angular/fire";
import {environment} from "../../environments/environment";
import {CommodityModule} from "../commodity/commodity.module";
import {ScanQrCodeModule} from "../scan-qr-code/scan-qr-code.module";


@NgModule({
  declarations: [WareHousingComponent],
    imports: [
        CommonModule,
        WarehouseRoutingModule,
        FormsModule,
        CommodityModule,
        AngularFireStorageModule,
        AngularFireModule.initializeApp(environment),
        ScanQrCodeModule,

    ]
})
export class WarehouseModule { }
