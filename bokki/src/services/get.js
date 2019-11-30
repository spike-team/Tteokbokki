import axios from "axios";

import { baseUrl } from "./endpoint";

// 회원가입 시 학교 검색
export const searchSchool = async (search) => {
    const response = await axios.get(`${baseUrl}/school?key=${search}`,{
        params: { search },
        headers: {
                "content-type": "application/json"
        }
    });
    return response.data;
};

// 관리자 정보 가져오기
export const getManagerInfo = async ( accessToken = sessionStorage.getItem('accessToken') ) => {
    const response = await axios.get(`${baseUrl}/manager/me`,{
        headers: {
            Authentication: `Bearer${accessToken}`
        }
    });
    return response.data;
};

// 급식 불러오기
export const getMeal = async (date, schoolCode) => {
    const response = await axios.get(`${baseUrl}/meal?schoolCode=${schoolCode}&date=${date}`,{
        params: { date, schoolCode },
        headers: {
                "content-type": "application/json"
        }
    });
    return response.data;
};

//시간표 불러오기
export const getTimetable = async (schoolCode) => {
    const response = await axios.get(`${baseUrl}/timetable?schoolCode=${schoolCode}`,{
        params: { schoolCode },
        headers: {
                "content-type": "application/json"
        }
    });
    return response.data;
};

