import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Commodity} from "../entity/commodity";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class WarehousingService {
  constructor(private httpClient: HttpClient) { }

  wareHousing(id: number, quantity: number){
   // @ts-ignore
    return this.httpClient.put("http://localhost:8080/api/wareHousing/" + id + "&" + quantity);
  }

}
