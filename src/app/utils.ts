

const API_URL = "http://localhost:9000/";
const COMPANY_URL = API_URL + "api/visionapp/company/";

const REGISTER_ACTION='register'
const ADMIN_LOGIN_ACTION='adminlogin'
const EMPLOYEE_LOGIN_ACTION='employeelogin'
const USERNAME_ACTION='username'
const GET_ACTION = "get";
const ADD_ACTION = "add";
const UPDATE_ACTION = "update";
const DELETE_ACTION ="delete";


export class Utils {
    /*Signupurl*/
    public static getSignupURL() {
        return COMPANY_URL + REGISTER_ACTION ;
    }
    public static addSignupURL() {
        return COMPANY_URL ;
    }
    public static updateSignupURL() {
        return COMPANY_URL + UPDATE_ACTION;
    }

    
    /*loginurl*/
    public static adminLoginURL() {
        return COMPANY_URL +  ADMIN_LOGIN_ACTION ;
    }
    public static employeeLoginURL() {
        return COMPANY_URL +  EMPLOYEE_LOGIN_ACTION ;
    }
    public static getUserNameURL() {
        return COMPANY_URL +  USERNAME_ACTION ;
    }
    
//guard
public static loggedIn(){
    return !!localStorage.getItem('token');
}
public static getToken(){
    return localStorage.getItem('token');
}   

}