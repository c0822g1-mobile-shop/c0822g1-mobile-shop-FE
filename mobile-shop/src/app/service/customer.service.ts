import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../entity/user";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
    URL_CUSTOMER = 'http://localhost:8080/api/customer';
  constructor(private httpClient: HttpClient) { }

  /**
   * Create by: LongPT
   * Date created: 01/03/2023
   * Function: get list customer from BE
   * @param request: any
   * @return Observable Customer[]
   */
  getAllCustomer(request: any): Observable<any> {
    const params = request;
    return this.httpClient.get<any>(this.URL_CUSTOMER, {params});
  }

  /**
   * Create by: LongPT
   * Date created: 01/03/2023
   * Function: get customer by id from BE
   * @param id: number
   * @return Observable Customer[]
   */
  findById(id: number): Observable<User> {
    return this.httpClient.get<User>(`${(this.URL_CUSTOMER)}/${id}`);
  }

  /**
   * Create by: LongPT
   * Date created: 01/03/2023
   * Function: search in list customer
   * @param name: any
   * @param address: any
   * @param request: any
   * @return Observable Customer[]
   */
  searchCustomer(name: any,
                  address: any,
                  request: any): Observable<any> {
    const params = request;
    const url = this.URL_CUSTOMER +
      '?name=' + name +
    '&address=' + address;
    return this.httpClient.get<any>(url, {params});
  }

  findAllCustomer():Observable<any>{
    return this.httpClient.get<any>(this.URL_CUSTOMER + "/getList")
  }
}
