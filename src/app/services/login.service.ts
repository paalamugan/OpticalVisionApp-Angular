import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { AdminLogin, EmployeeLogin } from '../models/login';
import { Utils } from '../utils';
import { ForgetPassword } from '../models/forgetpassword';

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
  forgetPassword(adminlogin:any){
    return this.httpClient.post(`${Utils.forgetPasswordURL()}`,adminlogin);
  }
  getforgetPassword(id:string){
    return this.httpClient.get(`${Utils.getforgetPasswordURL()}`+`/${id}`);
  }
  updateforgetPassword(forgetpassword:ForgetPassword){
    return this.httpClient.put(`${Utils.UpdateforgetPasswordURL()}`+`/${forgetpassword.fk_companyid}`,forgetpassword);
  }
}
