import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TokenService} from "./token.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  username = ''
  constructor(private http: HttpClient,private tokenService:TokenService) { }

  login(obj): Observable<any> {
    return this.http.post('http://localhost:8080/api/auth/login',{username: obj.username,password: obj.password})
  }
  updateUser(obj):Observable<any> {
    return this.http.post('http://localhost:8080/api/auth/update',{username: this.tokenService.getUsername(),
      name: obj.name,phoneNumber: obj.phoneNumber,email: obj.email,age: obj.age,gender: obj.gender,
      dateOfBirth: obj.dateOfBirth,avatar: obj.avatar,address: obj.address})
  }
  register(obj):Observable<any> {
    return this.http.post('http://localhost:8080/api/auth/signup',{username: obj.username,name: obj.name,email:obj.email,password:obj.password,roles: [obj.roles]});
  }
}
