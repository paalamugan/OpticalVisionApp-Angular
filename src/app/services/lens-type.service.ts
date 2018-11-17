import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LensType } from '../models/lens-type';
import { Utils } from '../utils';

@Injectable({
  providedIn: 'root'
})
export class LensTypeService {

  constructor(private httpClient: HttpClient) { }
  
  public addLensType(lenstype:LensType){
    return this.httpClient.post(`${Utils.addLensTypeURL()}`,lenstype);
  }
  public getallLensType(){
    return this.httpClient.get(`${Utils.getallLensTypeURL()}`);
  }
  public updateLensType(lenstype:LensType){
    return this.httpClient.put(`${Utils.updateLensTypeURL()}`+`/${lenstype.uuid}`,lenstype);
  }
  public findByName(powerlenstype: string,name:string) {
   return this.httpClient.get(`${Utils.findByNameURL()}`+`?powerlenstype=${powerlenstype}&name=${name}`,{
      responseType:'json'
    })
  }
}
