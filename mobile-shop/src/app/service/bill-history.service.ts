import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BillHistoryInfo} from "../entity/bill-history-info";

@Injectable({
  providedIn: 'root'
})
export class BillHistoryService {

  URL_BILLHISTORY = 'localhost:8080/bill-history/list';

  constructor(private http: HttpClient) {
  }

  findById(id: number): Observable<any> {
    return this.http.get<any>('http://localhost:8080/bill-history/' + id);
  }

  getAllBillHistory(id: number): Observable<any> {
    return this.http.get<any>(`${this.URL_BILLHISTORY}/${id}`);
  }
}
