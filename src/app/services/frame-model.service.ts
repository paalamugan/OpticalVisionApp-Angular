import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { FrameModel } from '../models/frame-model';
import { Utils } from '../utils';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class FrameModelService {

  constructor(private httpClient: HttpClient) { }
  
  public addFrameModel(framemodel:FrameModel){
    return this.httpClient.post(`${Utils.addframemodelURL()}`,framemodel);
  }
  public getallFrameModel(){
    return this.httpClient.get(`${Utils.getallframemodelURL()}`);
  }
  
  public updateFrameModel(framemodel:FrameModel){
    return this.httpClient.put(`${Utils.updateframemodelURL()}`+`/${framemodel.uuid}`,framemodel);
  }
  // public findByModel(model: string,brand:Brand) {
  //   let httpHeaders = new HttpHeaders()
  //     .set('Accept', 'application/json');
  //   let httpParams = new HttpParams()
  //     .set('mobile', model);
  //   return this.httpClient.get(`${Utils.findByModelURL()}`, {
  //     headers: httpHeaders,
  //     params: httpParams,
  //     responseType: 'json'
  //   });
  // }
  public findByModel(model: string,brandUuid:string) {
   
    return this.httpClient.get(`${Utils.findByModelURL()}`+`?model=${model}&brand=${brandUuid}`,{
      responseType:'json'
    })
  }
}
