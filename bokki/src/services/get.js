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

export const slk = ( ) => {
}