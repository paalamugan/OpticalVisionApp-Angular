import { Injectable } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Admin } from './admin';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Utils } from '../utils';

@Injectable({
    providedIn: 'root'
})
export class Data {

    public storage: any;

     constructor(private httpClient:HttpClient) { 
        this.httpClient.get(`${Utils.getUserNameURL()}`).subscribe((data:Admin)=>{
            console.log("data",data);
            this.storage = data;
           }) 
    }

}