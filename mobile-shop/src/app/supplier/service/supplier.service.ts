import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Supplier} from "../../entity/supplier";

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(search: string, page: number) {
    return this.httpClient.get<Supplier[]>('http://localhost:8080/list?search=' + search + '&page=' + page);
  }


  delete(supplier: Supplier) {
    // @ts-ignore
    return this.httpClient.patch('http://localhost:8080/list', supplier);
  }
}
