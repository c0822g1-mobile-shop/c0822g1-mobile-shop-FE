import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Supplier} from "../entity/supplier";
import {Commodity} from "../entity/commodity";

@Injectable({
  providedIn: 'root'
})
export class FindSupplierService {

  constructor(private httpClient: HttpClient) {}

  getAllSupplier(name: string, page: number):Observable<Supplier[]>{
    return this.httpClient.get<Supplier[]>("http://localhost:8080/supplier/findSupplier?name=" +name + '&page=' +page)
  }

  findSupplier2(id: number){
    return this.httpClient.get<Supplier[]>("http://localhost:8080/supplier/supplier?id=" + id);
  }
  changePage(page: number): Observable<Commodity[]> {
    return this.httpClient.get<Commodity[]>("http://localhost:8080/supplier/findSupplier/?page=" + page)
  }

}

