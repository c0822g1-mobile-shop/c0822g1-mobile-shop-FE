import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CommodityService {
  nameSearch: string = '';

  constructor(private httpClient: HttpClient) {
  }

  /**
   * PhucNT create on 1/3/2023
   *
   * @param name
   * @param page
   */

  searchCommodityByName(name: string, page: number): Observable<any> {
    return this.httpClient.get<any>("http://localhost:8080/home/search?" + name + "&page=" + page);
  }

  /**
   * PhucNT create on 1/3/2023
   *
   * @param page
   */

  getAllByQuantity(page: number): Observable<any> {
    return this.httpClient.get<any>("http://localhost:8080/home/quantity?page=" + page);
  }

}
