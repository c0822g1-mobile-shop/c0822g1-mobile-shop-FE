import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScanQrCodeRoutingModule } from './scan-qr-code-routing.module';
import { ScanQrCodeComponent } from './scan-qr-code/scan-qr-code.component';
import {QRCodeModule} from "angular2-qrcode";


@NgModule({
  declarations: [ScanQrCodeComponent],
  imports: [
    CommonModule,
    ScanQrCodeRoutingModule,
    QRCodeModule
  ]
})
export class ScanQrCodeModule { }
