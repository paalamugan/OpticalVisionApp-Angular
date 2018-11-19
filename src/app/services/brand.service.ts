import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Brand } from '../models/brand';
import { Utils } from '../utils';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private httpClient: HttpClient) { }
  
  public addBrand(brand:Brand){
    return this.httpClient.post(`${Utils.addBrandURL()}`,brand);
  }
  public getallBrand(){
    return this.httpClient.get(`${Utils.getallBrandURL()}`);
  }
  
  public updateBrand(brand:Brand){
    return this.httpClient.put(`${Utils.updateBrandURL()}`+`/${brand.uuid}`,brand);
  }
  public deleteBrand(uuid:string){
    return this.httpClient.delete(`${Utils.deleteBrandURL()}`+`/${uuid}`);
  }
  
}
