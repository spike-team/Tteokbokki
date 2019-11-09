import axios from "axios";

import { baseUrl } from "./endpoint";

// 회원가입
export const signUp = async (email, password, school) => {
    const response = await axios.post(
    `${baseUrl}/manager/signup`,{   
        email: email, 
        password: password,
        schoolCode: school
    },{
        headers: {
            "content-type": "application/json"
        }
    });
    return response; 
};

// 로그인
export const signIn = async (email, password) => {
    const response = await axios.post(
    `${baseUrl}/manager/auth`,{   
        email: email, 
        password: password
    },{
        headers: {
            "content-type": "application/json"
        }
    });
    return response; 
};