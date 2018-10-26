

const API_URL = "http://localhost:9000/";
const COMPANY_URL = API_URL + "api/visionapp/company/";
const EMPLOYEE_URL = API_URL + "api/visionapp/employee/";

const REGISTER_ACTION='register'
const ADMIN_LOGIN_ACTION='adminlogin'
const EMPLOYEE_LOGIN_ACTION='employeelogin'
const USERNAME_ACTION='username'
const GET_ACTION = "get";
const ADD_ACTION = "add";
const UPDATE_ACTION = "update";
const DELETE_ACTION ="delete";
const FORGET_PASSWORD_ACTION ="forgetpassword";


export class Utils {
    /*Signupurl*/
    public static APIURL=API_URL;
    public static getSignupURL() {
        return COMPANY_URL + REGISTER_ACTION ;
    }
    public static addSignupURL() {
        return COMPANY_URL ;
    }
    public static updateCompanyURL() {
        return COMPANY_URL + UPDATE_ACTION;
    }

    
    /*loginurl*/
    public static adminLoginURL() {
        return COMPANY_URL +  ADMIN_LOGIN_ACTION ;
    }
    public static employeeLoginURL() {
        return EMPLOYEE_URL +  EMPLOYEE_LOGIN_ACTION ;
    }
    public static getUserNameURL() {
        return COMPANY_URL +  USERNAME_ACTION ;
    }
    public static forgetPasswordURL() {
        return COMPANY_URL +  FORGET_PASSWORD_ACTION ;
    }
    public static getforgetPasswordURL() {
        return COMPANY_URL +  FORGET_PASSWORD_ACTION ;
    }
    public static UpdateforgetPasswordURL() {
        return COMPANY_URL +  FORGET_PASSWORD_ACTION;
    }
    
    
    
    
//guard
public static loggedIn(){
    return !!localStorage.getItem('token');
}
public static getToken(){
    return localStorage.getItem('token');
}   

//employee details
public static addemployeeURL() {
    return EMPLOYEE_URL + ADD_ACTION;
}
public static getemployeeURL() {
    return EMPLOYEE_URL +  GET_ACTION ;
}
public static updateemployeeURL() {
    return EMPLOYEE_URL + UPDATE_ACTION ;
}

public static getAllemployeeURL() {
    return EMPLOYEE_URL;
}

}