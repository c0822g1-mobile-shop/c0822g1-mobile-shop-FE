import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Commodity} from "../entity/commodity";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class WarehousingService {
 /* API_URL = 'http://localhost:8080/api/wareHousing/'*/
  constructor(private httpClient: HttpClient) { }


  wareHousing(id: number, commodity: Commodity){
   return this.httpClient.put("http://localhost:8080/api/wareHousing/" + id,commodity);
  }

  findByIdCommodity(id): Observable<any>{
   return this.httpClient.get<any>("http://localhost:8080/api/commodity/find/"+ id)
  }
}
/*this.API_URL + id + '&'+ quantityNew*/
