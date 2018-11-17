export class Boxes {
    constructor(public uuid:string,
        public name:string,
        public box_model:string,
        public quantity:number,
        public retailerPrice:number,
        public wholesalerPrice:number,
        public fk_companyid:string){}
}
