import axios from "axios";

import { baseUrl } from "./endpoint";

// 회원가입
export const signUp = async (email, password,schoolCode) => {
    const response = await axios.post(
    `${baseUrl}/manager/signup`,{   
        "email": email, 
        "password": password,
        "schoolCode": schoolCode
    },{
        headers: {
            "content-type": "application/json"
        }
    })  
    console.log("회원가입 성공");
    return response.data; 
};

// 로그인
export const signIn = async (email, password) => {
    const response = await axios.post(
    `${baseUrl}/manager/auth`,{   
        "email": email, 
        "password": password
    },{
        headers: {
            "content-type": "application/json"
        }
    })
    console.log("로그인 성공");
    return response.data; 
};