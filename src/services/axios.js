import axios from "axios";
import authService from "./authServices";

const BASE_URL_LOCAL = import.meta.env.VITE_LOCAL_API_URL
const BASE_URL_PROD = import.meta.env.VITE_PROD_API_URL

const axiosInstance = axios.create({
    baseURL: BASE_URL_PROD,
})
    axiosInstance.interceptors.request.use((config) => {
        config.headers = {Authorization : "Bearer " + authService.getCurrentUser()}
        return config;
    });

    axiosInstance.interceptors.response.use((response) => {
        return response;
    })
export default axiosInstance;