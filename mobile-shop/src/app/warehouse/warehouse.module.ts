// @ts-ignore
import { NgModule } from '@angular/core';
// @ts-ignore
import { CommonModule } from '@angular/common';

import { WarehouseRoutingModule } from './warehouse-routing.module';
import { WareHousingComponent } from './ware-housing/ware-housing.component';
// @ts-ignore
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
// @ts-ignore
import {AngularFireStorageModule} from "@angular/fire/storage";
// @ts-ignore
import {AngularFireModule} from "@angular/fire";
import {environment} from "../../environments/environment";
import {ScanQrCodeModule} from "../scan-qr-code/scan-qr-code.module";
import {CommodityModule} from "../commodity/commodity.module";


// @ts-ignore
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
        ReactiveFormsModule,

    ]
})
export class WarehouseModule { }
