import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BillHistoryService {

  URL_BILLHISTORY = 'localhost:8080/bill-history/list';

  constructor(private http: HttpClient) {
  }

  getAllBillHistory(id: number): Observable<any> {
    return this.http.get<any>(`${this.URL_BILLHISTORY}/${id}`);
  }
}
