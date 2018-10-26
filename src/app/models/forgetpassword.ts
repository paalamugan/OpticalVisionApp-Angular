export class ForgetPassword{
    constructor(public uuid:string,public tempPassword:string,public newPassword:string,public fk_companyid:string){}
}