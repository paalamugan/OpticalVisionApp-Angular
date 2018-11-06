import { FrameMaterialModel } from "./enums/frame-material-model";

export class FrameMaterial {
    constructor(public  uuid:string,
        public name:string,
        public size:number,
        public model:string,
        public quantity:number, 
        public retailerPrice:number,
        public wholesalerPrice:number,
        public companyId:string
         ){}
}
