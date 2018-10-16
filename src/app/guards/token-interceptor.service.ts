import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { Utils } from '../utils';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req,next){
    let tokenizedReq=req.clone({
      setHeaders:{
        Authorization:`Bearer ${Utils.getToken()}`
      }
    })
    return next.handle(tokenizedReq)
  }
}
