import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { AdminLogin, EmployeeLogin } from '../models/login';
import { Utils } from '../utils';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient ) { }

  adminLogin(adminlogin:AdminLogin){
    return this.httpClient.post(`${Utils.adminLoginURL()}`,adminlogin);
  }
  employeeLogin(employeelogin:EmployeeLogin){
    return this.httpClient.post(`${Utils.employeeLoginURL()}`,employeelogin);
  }
  getUserName() {
    return this.httpClient.get(`${Utils.getUserNameURL()}`, {
     // observe: 'body',
     // params: new HttpParams().append('token', localStorage.getItem('token'))
    });
  }
}
