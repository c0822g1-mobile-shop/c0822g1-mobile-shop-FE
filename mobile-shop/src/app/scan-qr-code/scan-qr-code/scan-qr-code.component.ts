import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ScanQrCodeService} from "../../service/scan-qr-code.service";
import {Commodity} from "../../entity/commodity";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {error} from "@angular/compiler/src/util";

@Component({
  selector: 'app-scan-qr-code',
  templateUrl: './scan-qr-code.component.html',
  styleUrls: ['./scan-qr-code.component.css']
})
export class ScanQrCodeComponent implements OnInit {
  qrInfo = [
    '123',
    '456',
    '789'
  ];
  selectedQR = null;
  private selectedQRCode: string = null;

  selectQR(index: number) {
    this.selectedQR = index;
    this.selectedQRCode = this.qrInfo[index];
  }

  @Output() commodities = new EventEmitter<Commodity>();

  constructor(private scanQrService: ScanQrCodeService,
              private router: Router,
              private toast: ToastrService) { }

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
    this.scanQrService.findByQRCode(this.selectedQRCode).subscribe(data=>{
      console.log(this.selectedQRCode)
      this.commodities.emit(data);
    },error => {

      this.toast.error("Không có sản phẩm có mã QR này","Thông báo")
      this.router.navigateByUrl("warehouse")
    });
  }

}