import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Commodity} from "../entity/commodity";

@Injectable({
  providedIn: 'root'
})
export class ScanQrCodeService {
  API_SCAN_QR = 'http://localhost:8080/api/scanQR/'
  constructor(private httpClient: HttpClient) { }


  /**
   * Create by: DuongLTH
   * Date created: 02/03/2023
   * Function: Take out the product when you know the QR code
   * @param qrCode: string
   * @return Observable Commodity
   */
  findByQRCode(qrCode: string): Observable<Commodity>{
    return this.httpClient.get<Commodity>(this.API_SCAN_QR+ qrCode);
  }
}
