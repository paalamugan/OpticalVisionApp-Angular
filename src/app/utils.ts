

const API_URL = "http://localhost:9000/";
const COMPANY_URL = API_URL + "api/visionapp/company/";

const REGISTER_ACTION='register'
const GET_ACTION = "get";
const ADD_ACTION = "add";
const UPDATE_ACTION = "update";
const DELETE_ACTION ="delete";


export class Utils {

    public static getSignupURL() {
        return COMPANY_URL + REGISTER_ACTION ;
    }
    public static addSignupURL() {
        return COMPANY_URL ;
    }
    public static updateSignupURL() {
        return COMPANY_URL + UPDATE_ACTION;
    }
}