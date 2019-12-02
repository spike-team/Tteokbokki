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
export const getMeal = async (schoolClass, schoolCode) => {
    const response = await axios.get(`${baseUrl}/timetable/excel?schoolClass=${schoolClass}&schoolCode=${schoolCode}`,{
        params: { schoolClass, schoolCode },
        headers: {
                "content-type": "application/json"
        }
    });
    return response.data;
};

// 단일 학급 시간표 다운로드
export const getTimetable = async (schoolClass, schoolCode) => {
    const response = await axios.get(`${baseUrl}/timetable?schoolCode=${schoolCode}`,{
        params: { schoolCode },
        headers: {
                "content-type": "application/json"
        }
    });
    return response.data;
};

