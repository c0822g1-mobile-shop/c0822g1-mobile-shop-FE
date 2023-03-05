import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Supplier} from "../entity/supplier";

@Injectable({
  providedIn: 'root'
})
export class FindSupplierService {

  constructor(private httpClient: HttpClient) {}

  getAllSupplier(name: string):Observable<Supplier[]>{
    return this.httpClient.get<Supplier[]>("http://localhost:8080/supplier/findSupplier?name=" +name)
  }

  findSupplier2(id: number){
    return this.httpClient.get<Supplier[]>("http://localhost:8080/supplier/supplier?id=" + id);
  }
}

