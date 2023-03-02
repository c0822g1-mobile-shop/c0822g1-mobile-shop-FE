import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Supplier} from "../entity/supplier";


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

  createSupplier(supplier: Supplier){
    return this.httpClient.post("http://localhost:8080/supplier/add", supplier);
  }

  findSupplier(id: number){
    return this.httpClient.get<Supplier>("http://localhost:8080/supplier/supplier?id=" + id);
  }

  updateSupplier(supplier: Supplier){
    return this.httpClient.put("http://localhost:8080/supplier/update", supplier);
  }
}
