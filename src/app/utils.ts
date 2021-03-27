

const API_END_POINT = "/api/visionapp";
const COMPANY_URL = API_END_POINT + "/company/";
const DUMMY_URL=API_END_POINT+"/dummy/";
const EMPLOYEE_URL = API_END_POINT + "/employee/";
const FRAME_MATERIAL_URL = API_END_POINT + "/framematerial/";
const BRAND_URL = API_END_POINT + "/brand/";
const FRAME_MODEL_URL = API_END_POINT + "/framemodel/";
const LENS_TYPE_URL = API_END_POINT + "/lenstype/";
const BOXES_URL = API_END_POINT + "/boxes/";


const REGISTER_ACTION='register'
const ADMIN_LOGIN_ACTION='adminlogin'
const EMPLOYEE_LOGIN_ACTION='employeelogin'
const USERNAME_ACTION='username'
const GET_ACTION = "get";
const GET_ACTION_ONE = "getone";
const ADD_ACTION = "add";
const UPDATE_ACTION = "update";
const DELETE_ACTION ="delete";
const FIND_ACTION="find";
const FIND_ACTION_ONE="/findone";
const FORGET_PASSWORD_ACTION ="forgetpassword";


export class Utils {
    /*Signupurl*/
    public static APIURL=API_END_POINT;
    public static getSignupURL() {
        return COMPANY_URL + REGISTER_ACTION ;
    }
    public static getOneSignupURL() {
        return COMPANY_URL + GET_ACTION_ONE;
    }
    
    public static addSignupURL() {
        return COMPANY_URL ;
    }
    public static updateCompanyURL() {
        return COMPANY_URL + UPDATE_ACTION;
    }
    public static deleteSignupURL() {
        return COMPANY_URL + DELETE_ACTION;
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
// public static getIdentifier(){
//     return localStorage.getItem('Identifier');
// }    

//employee details Api method
public static addemployeeURL() {
    return EMPLOYEE_URL + ADD_ACTION;
}
public static getemployeeURL() {
    return EMPLOYEE_URL +  GET_ACTION_ONE ;
}
public static updateemployeeURL() {
    return EMPLOYEE_URL + UPDATE_ACTION ;
}

public static getAllemployeeURL() {
    return EMPLOYEE_URL +  GET_ACTION;
}

//frame material Api Method
public static addframematerialURL() {
    return FRAME_MATERIAL_URL + ADD_ACTION;
}
public static getallframematerialURL() {
    return FRAME_MATERIAL_URL + GET_ACTION;
}
public static getframematerialURL() {
    return FRAME_MATERIAL_URL + GET_ACTION_ONE;
}
public static updateframematerialURL() {
    return FRAME_MATERIAL_URL + UPDATE_ACTION;
}

//Brand Api methods
public static addBrandURL() {
    return BRAND_URL + ADD_ACTION;
}
public static getallBrandURL() {
    return BRAND_URL + GET_ACTION;
}
public static getBrandURL() {
    return BRAND_URL + GET_ACTION_ONE;
}
public static updateBrandURL() {
    return BRAND_URL + UPDATE_ACTION;
}
public static deleteBrandURL() {
    return BRAND_URL + DELETE_ACTION;
}

//framemodel Api methods
public static addframemodelURL() {
    return FRAME_MODEL_URL + ADD_ACTION;
}
public static getallframemodelURL() {
    return FRAME_MODEL_URL + GET_ACTION;
}
public static getframemodelURL() {
    return FRAME_MODEL_URL + GET_ACTION_ONE;
}
public static updateframemodelURL() {
    return FRAME_MODEL_URL + UPDATE_ACTION;
}
public static findByModelURL() {
    return FRAME_MODEL_URL + FIND_ACTION + FIND_ACTION_ONE;
}
//LensTYpe Api Method
public static addLensTypeURL() {
    return LENS_TYPE_URL + ADD_ACTION;
}
public static getallLensTypeURL() {
    return LENS_TYPE_URL + GET_ACTION;
}
public static getLensTypeURL() {
    return LENS_TYPE_URL + GET_ACTION_ONE;
}
public static updateLensTypeURL() {
    return LENS_TYPE_URL + UPDATE_ACTION;
}
public static findByNameURL() {
    return LENS_TYPE_URL + FIND_ACTION + FIND_ACTION_ONE;
}

//Boxes Api Methods
public static addBoxesURL() {
    return BOXES_URL + ADD_ACTION;
}
public static getallBoxesURL() {
    return BOXES_URL + GET_ACTION;
}
public static getBoxesURL() {
    return BOXES_URL + GET_ACTION_ONE;
}
public static updateBoxesURL() {
    return BOXES_URL + UPDATE_ACTION;
}
//dummy Api
public static getDummyURL() {
    return DUMMY_URL;
}

}