import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ScanQrCodeRoutingModule} from './scan-qr-code-routing.module';
import {ScanQrCodeComponent} from './scan-qr-code/scan-qr-code.component';
// @ts-ignore
import {QRCodeModule} from "angular2-qrcode";
import {ToastrModule} from "ngx-toastr";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [ScanQrCodeComponent],
  exports: [
    ScanQrCodeComponent
  ],
  imports: [
    CommonModule,
    ScanQrCodeRoutingModule,
    QRCodeModule,
    ToastrModule.forRoot(),
    RouterModule
  ]
})
export class ScanQrCodeModule {
}
