import axios from "axios";

import { baseUrl } from "./endpoint";

export const getMeal = async (date, schoolCode) => {
    const response = await axios.get(`${baseUrl}/meal?schoolCode=${schoolCode}&date=${date}`,{
        params: { date, schoolCode },
        headers: {
                "content-type": "application/json"
        }
    });
    return response.data;
};

export const getTimetable = async (schoolCode) => {
    const response = await axios.get(`${baseUrl}/timetable?schoolCode=${schoolCode}`,{
        params: { schoolCode },
        headers: {
                "content-type": "application/json"
        }
    });
    return response.data;
};