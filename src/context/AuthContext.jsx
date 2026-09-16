import { jwtDecode } from "jwt-decode";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
export function AuthProvider({children}){
    //const[user,setUser] = useState(null)
    const [user, setUser] = useState(()=>{
        const token = localStorage.getItem("accessToken");
        if(!token){
            return null
        }
        try{
            //decode the jwt
            const decodedToken = jwtDecode(token)
            return {
                id: decodedToken.sub,
                username: decodedToken.username,
                role: decodedToken.role,
                accessToken: token
            };
        }
        catch(error){
            console.error(" Inavlid stored token:" , error)
        
        //remove invalid token
        localStorage.removeItem("accessToken");
        localStorage.removeItem("username");
        localStorage.removeItem("role")
        }
    })


    //login function
    const login = (userData)=>{
        //setUser(userData)
        const token = userData.accessToken;
        //safety check
        if(!token || typeof token !== "string"){
            console.error("Invalid Access TOken:",token)
            throw new Error("Invalid Access Token")
        }

        const decodedToken= jwtDecode(token)
        //read claims
        const userId= decodedToken.sub;
        const username = decodedToken.username;
        const role = decodedToken.role;

        console.log("userId:",userId)
        console.log("username:", username)
        console.log("role:", role)

        const loggedInUser = {
            id:userId,
            username:username,
            role:role,
            accessToken:token

            }
            //local storage
            localStorage.setItem("accessToken",token)
            localStorage.setItem("username", username)
            localStorage.setItem ("role",role)

            setUser(loggedInUser)
            return loggedInUser;
        

    }

    //logout
    const logout = () =>{
        localStorage.removeItem("accessToken")
        localStorage.removeItem("username")
        localStorage.removeItem("role")
        setUser(null);
    }

    const value ={
        user,login,logout,
        isLoggedIn:user!==null,
        isAdmin: user?.role === "Admin",
        isUser: user?.role === "User"
    };
    return(
        <AuthContext.Provider value = {value}>
            {children}
        </AuthContext.Provider>
    )


}

//custom hooks
export function useAuth(){
    return useContext(AuthContext)
}