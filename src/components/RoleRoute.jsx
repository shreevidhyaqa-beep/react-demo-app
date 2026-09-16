import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function RoleRoute({allowedRole}){
    const {user,isLoggedIn} = useAuth()

    //not Logged in
    if(!isLoggedIn){
        return(
            <Navigate to ="/login" replace />
        )
    }

    //Logged in but role is wrong
    if(user?.role !== allowedRole){
        return (
            <Navigate to="/unauthorized" replace />
        )
    }
    return <Outlet />
}

export default RoleRoute