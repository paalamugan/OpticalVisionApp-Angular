import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee';
import { Utils } from '../utils';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private httpClient: HttpClient) { }
  addEmployee(employee:any){
    return this.httpClient.post(`${Utils.addemployeeURL()}`,employee);
  }
  getAllemployee(){
    return this.httpClient.get(`${Utils.getAllemployeeURL()}`);
  }
  getemployee(id:any){
    return this.httpClient.get(`${Utils.getemployeeURL()}`+`/${id}`);
  }
  updateemployee(employee:Employee){
    return this.httpClient.put(`${Utils.updateemployeeURL()}`+`/${employee.uuid}`,employee);
  }
  updateformdataEmployee(formData:any,uuid:string){
    return this.httpClient.put(`${Utils.updateemployeeURL()}`+`/${uuid}`,formData);
  }
}
