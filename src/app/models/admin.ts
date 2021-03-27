import { CompanySignup } from "./companysignup";

export class Admin{
        constructor(public userName:string,public avatar:string,public Identifier:string,public companyName:string,public companyId:string,public company:CompanySignup,public Identifier_User:string){
    }
}