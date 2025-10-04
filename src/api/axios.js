import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
    withCredentials: true // allow cookies
})

export default api;