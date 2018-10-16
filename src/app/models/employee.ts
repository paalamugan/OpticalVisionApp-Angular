import { CompanySignup } from "./companysignup";

export class Employee{
    constructor( public employeeId:string,
        public employeeName:string,
        public mobileNumber:string,
        public employeeEmail:string,
        public employeePassword:string,
        public address:string,
        public DOB:Date,
        public DOJ:Date,
        public adminAccess:string,
        public companySignUp:CompanySignup
          ){}
}