import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Boxes } from '../models/boxes';
import { Utils } from '../utils';

@Injectable({
  providedIn: 'root'
})
export class BoxesService {

  constructor(private httpClient: HttpClient) { }
  
  public addBoxes(boxes:Boxes){
    return this.httpClient.post(`${Utils.addBoxesURL()}`,boxes);
  }
  public getallBoxes(){
    return this.httpClient.get(`${Utils.getallBoxesURL()}`);
  }
  public updateBoxes(boxes:Boxes){
    return this.httpClient.put(`${Utils.updateBoxesURL()}`+`/${boxes.uuid}`,boxes);
  }
  // public findByName(powerlenstype: string,name:string) {
  //  return this.httpClient.get(`${Utils.findByNameURL()}`+`?powerlenstype=${powerlenstype}&name=${name}`,{
  //     responseType:'json'
  //   })
  // }
}
