import axios from "axios";

import { baseUrl } from "./endpoint";

export const getMeal = async (date, school_id) => {
    const response = await axios.get(`${baseUrl}/meal?school_id=${school_id}&date=${date}`,{
        params: { date, school_id },
        headers: {
                "content-type": "application/json"
        }
    });
    return response.data;
};

export const slk = ( ) => {

}