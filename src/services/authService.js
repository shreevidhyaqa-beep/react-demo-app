import api from "./api"

export async function loginUser(loginData){
    const response= await api.post("/Auth/login",loginData)
    return response.data
}