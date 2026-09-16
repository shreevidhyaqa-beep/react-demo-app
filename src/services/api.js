import axios from "axios"
const api = axios.create({
    //baseURL : "https://localhost:7120/api",
    baseURL:"import.meta.env.VITE_API_URL",
    headers :{
        "Content-Type": "application/json"
    }
})

//jwt token on every request
api.interceptors.request.use((config)=>{
    const token = localStorage.getItem("accessToken");
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
},
(error)=>{
    return Promise.reject(error)
});

export default api