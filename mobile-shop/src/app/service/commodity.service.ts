import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommodityService {

  constructor(private httpClient: HttpClient) {
  }

  getAllCommodity(): Observable<any> {
    return this.httpClient.get<any>("http://localhost:8080/api/commodity")
  }

  addCommodity(commodity): Observable<any> {
    return this.httpClient.post("http://localhost:8080/api/commodity/create", commodity);
  }

  findCommodityById(id): Observable<any> {
    return this.httpClient.get<any>("http://localhost:8080/api/commodity/find/" + id);
  }

  editCommodity(id, commodity): Observable<any> {
    return this.httpClient.put<any>("http://localhost:8080/api/commodity/edit/" + id, commodity);
  }
}
