import {Link, useNavigate} from "react-router-dom";
import { useAuth } from "../context/AuthContext";
function NavBar() {
const {user,isLoggedIn,logout,isAdmin,isUser} = useAuth();
const navigate = useNavigate();
const handleLogout = ()=>{
    logout();
    navigate("/login")
}


   return(
       <nav className="navbar navbar-expand-lg bg-body-tertiary">
           <div className="container-fluid">
               <a className="navbar-brand" href="#">Navbar</a>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarNav">
                   <ul className="navbar-nav">
                       <li className="nav-item">
                          <Link className="nav-link"  to="/">
                          Home
                          </Link>
                       </li>
                       <li className="nav-item">
                           <Link className="nav-link" to="/products" >
                        
                           Products
                           </Link>
                       </li>
                       {isLoggedIn && isAdmin && (
                           <li className="nav-item">
                               <Link className="nav-link" to="/admin" >

                                   AdminDashboard
                               </Link>
                           </li>
                       )}
                     {isLoggedIn && isUser && (
                           <li className="nav-item">
                               <Link className="nav-link" to="/products" >

                                   UserDashboard
                               </Link>
                           </li>
                       )}  
                    
                   </ul>
                   <div className="navbar navbar ms-auto align-items-center">
                       {!isLoggedIn && (<Link to="/login" className="btn btn-primary">Login</Link>)}
                       {isLoggedIn && (<><span>Welcome {user.username}</span>
                       <button className="btn btn-warning" onClick={handleLogout}>Logout</button>
                       </>
                       )}
                    
                   </div>
               </div>
           </div>
       </nav>
   )
}
export default NavBar