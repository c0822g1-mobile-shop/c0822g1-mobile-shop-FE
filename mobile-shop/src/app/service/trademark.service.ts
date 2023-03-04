import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TrademarkService {

  constructor(private httpClient: HttpClient) {
  }

  getAllTrademark(): Observable<any> {
    return this.httpClient.get<any>("http://localhost:8080/api/trademark");
  }
}
