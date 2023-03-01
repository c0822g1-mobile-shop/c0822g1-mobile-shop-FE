import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ManageListService {

  constructor(private http: HttpClient) {
  }

  getAllManageList(ageSearch: string, genderSearch: string, page: number): Observable<any> {
    return this.http.get<any>('http://localhost:8080/manage/list?ageSearch=' + ageSearch + '?genderSearch=' + genderSearch + '&page' + page)
  }
}
