import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Bill} from "../../entity/bill";
import {Observable} from "rxjs";
import {Commodity} from "../../entity/commodity";
import {User} from "../../entity/user";

@Injectable({
  providedIn: 'root'
})
export class BillService {
  URL_BILL = 'http://localhost:8080/api/bill';

  constructor(private httpClient: HttpClient) { }

  saveBill(commodityId: number, userId: number):Observable<void>{
    return this.httpClient.get<void>(this.URL_BILL + '/add-bill/' + commodityId + '&' + userId);
  }

  // findById(id: number ): Observable<Bill> {
  //   return this.httpClient.get<Bill>(`${(this.URL_BILL)}/${id}`);
  // }
  findById(userId: number):Observable<User> {
    return this.httpClient.get<User>(this.URL_BILL)
  }
}
