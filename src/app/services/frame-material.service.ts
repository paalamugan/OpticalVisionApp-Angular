import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Utils } from '../utils';
import { FrameMaterial } from '../models/frame-material';

@Injectable({
  providedIn: 'root'
})
export class FrameMaterialService {

  constructor(private httpClient: HttpClient) { }
  
  public addFrameMaterial(framematerial:FrameMaterial){
    return this.httpClient.post(`${Utils.addframematerialURL()}`,framematerial);
  }
  public getallFrameMaterial(){
    return this.httpClient.get(`${Utils.getallframematerialURL()}`);
  }
  
  public updateFrameMaterial(framematerial:FrameMaterial){
    return this.httpClient.put(`${Utils.updateframematerialURL()}`+`/${framematerial.uuid}`,framematerial);
  }
}
