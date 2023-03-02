import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SalesReport} from "../entity/sales-report";

@Injectable({
  providedIn: 'root'
})
export class SalesReportService {
  API_URL = 'http://localhost:8080/api/salesReport/'

  API_GETALL = 'http://localhost:8080/api/salesReport/getAll/'
  constructor(private httpClient: HttpClient) { }


  /**
   * Create by: DuongLTH
   * Date created: 02/03/2023
   * Function: Report total number of orders and total revenue
   * @param startDay: string
   * @param endDay: string
   * @return Observable SalesReport
   */
  salesReport(startDay: string, endDay: string): Observable<SalesReport>{
    return this.httpClient.get<SalesReport>(this.API_URL + startDay +'&'+ endDay);
  }


  /**
   * Create by: DuongLTH
   * Date created: 02/03/2023
   * Function: Report total orders and total sales and draw charts
   * @param startDay: string
   * @param endDay: string
   * @return Observable SalesReport[]
   */
  listReport(startDay: string, endDay: string): Observable<SalesReport[]>{
    return this.httpClient.get<SalesReport[]>(this.API_GETALL + startDay +'&'+ endDay);
  }

}
