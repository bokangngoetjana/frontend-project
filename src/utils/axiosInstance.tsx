import axios from "axios";

const API = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    headers: {
        'Content-Type':'application/json',
    },
});

//adding authorization header if access token exists
API.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
        if (!config.headers) { //??
            config.headers = {};
        }
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
});

export default API;