import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ManageListService {

  constructor(private http: HttpClient) {
  }

  getAllManageList(request: any): Observable<any> {
    const params = request;
    return this.http.get<any>('http://localhost:8080/api/customer/search', {params})
  }

  getAllManager(): Observable<any> {
    return this.http.get("http://localhost:8080/bill-history/list");
  }

  search(ageSearch: string, genderSearch: string, request: any): Observable<any> {
    const params = request;
    const url = 'http://localhost:8080/api/customer/search' +
      '?ageSearch=' + ageSearch +
      '&genderSearch=' + genderSearch;
    return this.http.get<any>(url, {params});
  }
}
