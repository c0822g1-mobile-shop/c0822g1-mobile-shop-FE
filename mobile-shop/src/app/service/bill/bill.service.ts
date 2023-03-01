import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Bill} from "../../entity/bill";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BillService {
  URL_BILL = 'http://localhost:8080/api/bill';
  URL_BILL_CREATE = 'http://localhost:8080/api/bill/save';

  constructor(private httpClient: HttpClient) { }

  // saveBill(bill: Bill):Observable<Bill>{
  //   return this.httpClient.post<Bill>(this.URL_BILL_CREATE, bill)
  // }
  //
  // findById(id: number ): Observable<Bill> {
  //   return this.httpClient.get<Bill>(`${(this.URL_BILL)}/${id}`);
  // }

}
