import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Commodity} from "../entity/commodity";

@Injectable({
  providedIn: 'root'
})
export class CommodityService {

  constructor(private httpClient:HttpClient) { }

  getAll(): Observable<Commodity[]> {
    return this.httpClient.get<Commodity[]>("http://localhost:8080/api/commodity/list")
  }
  delete(id: number) {
    return this.httpClient.delete<any>("http://localhost:8080/api/commodity/delete/"+ id)
  }
  changePage(page: number): Observable<Commodity[]> {
    return this.httpClient.get<Commodity[]>("http://localhost:8080/api/commodity/list?page=" + page)
  }

}
