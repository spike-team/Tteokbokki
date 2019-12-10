import axios from "axios";

import { baseUrl } from "./endpoint";

// 단일 학급 시간표 보내주기
export const sendTimetableFile = async ( schoolClass, accessToken = sessionStorage.getItem('accessToken') ) => {
    const response = await axios.put(`${baseUrl}/timetable/excel?schoolClass=${schoolClass}`,{
        params: { schoolClass },
        headers: {
            Authentication: `Bearer${accessToken}`,
            "Content-Type": "multipart/formdata"
        }
    });
    return response.data;
};

// 전체 학급 시간표 보내주기
export const sendAllTimetableFile = async ( accessToken = sessionStorage.getItem('accessToken') ) => {
    const response = await axios.put(`${baseUrl}/timetables/excel`,{
        headers: {
            Authentication: `Bearer${accessToken}`,
            "Content-Type": "multipart/formdata"
        }
    });
    return response.data;
};