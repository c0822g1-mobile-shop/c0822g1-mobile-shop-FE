import { Component, OnInit } from '@angular/core';
import {ScanQrCodeService} from "../../service/scan-qr-code.service";
import {Commodity} from "../../entity/commodity";

@Component({
  selector: 'app-scan-qr-code',
  templateUrl: './scan-qr-code.component.html',
  styleUrls: ['./scan-qr-code.component.css']
})
export class ScanQrCodeComponent implements OnInit {
  qrInfo: '123';
  with = 300;
  commodities: Commodity;
  constructor(private scanQrService: ScanQrCodeService) { }

  ngOnInit(): void {
  }



  /**
   * Create by: DuongLTH
   * Date created: 02/03/2023
   * Function: Take out the product when you know the QR code
   * @param qrCode: string
   * @return Observable Commodity
   */
  findByQRCode() {
    this.scanQrService.findByQRCode(this.qrInfo).subscribe(data=>{
      this.commodities = data;
    })
  }
}
