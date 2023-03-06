import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SalesReport} from "../entity/sales-report";

@Injectable({
  providedIn: 'root'
})
export class SalesReportService {
  API_SALES_ALL = 'http://localhost:8080/api/salesReport/sales/'

  API_GET_ALL = 'http://localhost:8080/api/salesReport/getAll/'


  API_SALES_BY_ID = 'http://localhost:8080/api/salesReport/salesById/'

  API_GET_ALL_BY_ID = 'http://localhost:8080/api/salesReport/getAllById/'
  constructor(private httpClient: HttpClient) { }


  /**
   * Create by: DuongLTH
   * Date created: 02/03/2023
   * Function: Report total orders and total sales of all products
   * @param startDay: string
   * @param endDay: string
   * @return Observable SalesReport
   */
  salesReport(startDay: string, endDay: string): Observable<SalesReport>{
    return this.httpClient.get<SalesReport>(this.API_SALES_ALL + startDay +'&'+ endDay);
  }


  /**
   * Create by: DuongLTH
   * Date created: 02/03/2023
   * Function: Report total orders and total sales and draw charts of all products
   * @param startDay: string
   * @param endDay: string
   * @return Observable SalesReport[]
   */

  getAll(startDay: string, endDay: string): Observable<SalesReport[]>{
    return this.httpClient.get<SalesReport[]>(this.API_GET_ALL + startDay +'&'+ endDay);
  }



  /**
   * Create by: DuongLTH
   * Date created: 02/03/2023
   * Function: Report total order and total revenue by product code
   * @param startDay: string
   * @param endDay: string
   * @return Observable SalesReport
   */

  salesReportById(startDay: string, endDay: string, commodityId: any): Observable<SalesReport>{
    return this.httpClient.get<SalesReport>(this.API_SALES_BY_ID + startDay +'&'+ endDay + '&' + commodityId);
  }

  /**
   * Create by: DuongLTH
   * Date created: 02/03/2023
   * Function: Report total order and total revenue by product code
   * @param startDay: string
   * @param endDay: string
   * @return Observable SalesReport
   */

  getAllById(startDay: string, endDay: string, commodityId: any): Observable<SalesReport[]>{
    return this.httpClient.get<SalesReport[]>(this.API_GET_ALL_BY_ID + startDay +'&'+ endDay + '&' + commodityId);
  }


}
