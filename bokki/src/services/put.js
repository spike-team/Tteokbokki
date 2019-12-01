import axios from "axios";

import { baseUrl } from "./endpoint";

export const getTimetableFile = async ( accessToken = sessionStorage.getItem('accessToken') ) => {
    const response = await axios.get(`${baseUrl}/manager/me`,{
        params: { schoolClass },
        headers: {
            Authentication: `Bearer${accessToken}`,
            "Content-Type": "multipart/formdata"
        }
    });
    return response.data;
};