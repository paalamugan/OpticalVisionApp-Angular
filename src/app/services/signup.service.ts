import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Utils } from '../utils';
import { CompanySignup } from '../models/companysignup';
@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private httpClient: HttpClient) { }

  public getAll() {
    return this.httpClient.get(`${Utils.getSignupURL()}`);
  }
  public submitRegister(body:any) {
    return this.httpClient.post(`${Utils.getSignupURL()}`,body);
  }
  public UpdateFormDataCompany(formData:any,uuid:string) {
    return this.httpClient.put(`${Utils.updateCompanyURL()}`+`/${uuid}`,formData);
  }
  public UpdateCompany(company:CompanySignup) {
    return this.httpClient.put(`${Utils.updateCompanyURL()}`+`/${company.uuid}`,company);
  }
}
