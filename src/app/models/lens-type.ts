export class LensType {
    constructor(public uuid:string,
        public powerlenstype:string,
        public name:string,
        public lensmaterial:string,
        public quantity:number,
        public retailerPrice:number,
        public wholesalerPrice:number, 
        public fk_companyid:string ){}
}
