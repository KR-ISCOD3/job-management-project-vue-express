import axios from "axios";

const api = axios.create({
    baseURL: 'https://job-express-backend.onrender.com/api',
    withCredentials: true // allow cookies
})

export default api;