import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Commodity} from "../entity/commodity";

@Injectable({
  providedIn: 'root'
})
export class CommodityService {


  constructor(private httpClient:HttpClient) { }
  /**
   * Create by: CongBD
   * Date created: 01/03/2023
   * Function: get list commodity from BE
   * @return Observable Commodity[]
   */
  getAll(): Observable<Commodity[]> {
    return this.httpClient.get<Commodity[]>("http://localhost:8080/api/commodity/list")
  }
  /**
   * Create by: CongBD
   * Date created: 01/03/2023
   * Function: delete commodity by id
   * @param id: number
   */
  delete(id: number) {
    return this.httpClient.delete<any>("http://localhost:8080/api/commodity/delete/"+ id)
  }
  /**
   * Create by: CongBD
   * Date created: 01/03/2023
   * Function: pagination for list commodity
   * @param page: number
   * @return Observable Commodity[]
   */
  changePage(page: number): Observable<Commodity[]> {
    return this.httpClient.get<Commodity[]>("http://localhost:8080/api/commodity/list?page=" + page)
  }

  URL_COMMODITY = 'http://localhost:8080/api/commodity';


  /**
   * Create by: LongPT
   * Date created: 01/03/2023
   * Function: get list commodity from BE
   * @param request: any
   * @return Observable Customer[]
   */
  getAllCommodity(request: any): Observable<any> {
    const params = request;
    return this.httpClient.get<any>(this.URL_COMMODITY, {params});
  }

  /**
   * Create by: LongPT
   * Date created: 01/03/2023
   * Function: get commodity by id from BE
   * @param id: number
   * @return Observable Customer[]
   */
  findById(id: number): Observable<Commodity> {
    return this.httpClient.get<Commodity>(`${(this.URL_COMMODITY)}/${id}`);
  }

  /**
   * Create by: LongPT
   * Date created: 01/03/2023
   * Function: search in list commodity
   * @param name: any
   * @param request: any
   * @return Observable Customer[]
   */
  searchCommodity(name: any,
                 request: any): Observable<any> {
    const params = request;
    const url = this.URL_COMMODITY +
      '?name=' + name ;
    return this.httpClient.get<any>(url, {params});
  }
}
