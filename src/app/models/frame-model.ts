import { Brand } from "./brand";

export class FrameModel{
    constructor( public uuid:string,public brand:Brand,public model:string,public frametype:string,public size:number,public quantity:number,public retailerPrice:number,public wholesalerPrice:number, public fk_companyid:string){}
}