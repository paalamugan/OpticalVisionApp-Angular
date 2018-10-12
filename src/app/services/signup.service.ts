import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Utils } from '../utils';
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
}
