import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup'
import {useAuth} from '../context/AuthContext';
import { loginUser } from "../services/authService";
import {loginModel} from "../models/login"
function Login() {

    const navigate = useNavigate();
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const {login} = useAuth();

    const formik = useFormik({
        initialValues:{
            username:'',
            password:''
        },
        validationSchema:Yup.object({
            username:Yup.string().required("userName is required"),
            password:Yup.string()
                        .min(6,"password must be atleast 6 characters")
                        // .matches(/^[a-zA-Z0-9]+$/,'password must...')
                        .required("password is required")
        }),
       onSubmit:async (values,{resetForm})=>{
        setMessage('')
        setError('')
        //credential validation
        // if(values.username === "vanishree" && values.password==="vani123")
        //     {
        //         login({username:values.username})
            
        //     setMessage("Login validation success")
        //                 console.log("UserName:", formik.values.username);
        //                 console.log("Password:", formik.values.password);
        //                 resetForm();
        //                 navigate("/products")
        //      }
        //      else{
        //         setError("invalid credentials")
        //      }

         try{
            //map the entered values in the form to login model
             const loginData = loginModel();
             //assign formik values to logindata
             loginData.userName = values.username
             loginData.password = values.password

             //call API Method
             const data =  await loginUser(loginData)
             console.log("Log in response",data);

             //store the token in local storage
             //localStorage.setItem("accessToken", data.accessToken)
             //login({username:values.username})
            //  setMessage("Login Success")
            //  resetForm();
            //  navigate("/products")
            const loggedInUser=login(data)
            setMessage("Login Success")
            resetForm()
            if(loggedInUser.role === "Admin"){
                navigate("/admin")
            }
            else{
                navigate("/products")
            }
             
         }
         catch(error){
            console.error("Login Errors",error);
            if(error.response){
                setError(error.response.data?.message || "Invalid Credentials")
            }
            else{
                setError("unable to connect to the server")
            }
            
            
         }
        },

       
    });
   return(
       <div className="row justify-content-center mt-5" >
            <div className="col-md-5">
                <div className="card shadow">
                    <div className="card-body">
                       <h3 className="text-center mb-4">Login</h3>
                        {message && (<div className="alert alert-success">{message}</div>)}
                        {error && (<div className="alert alert-danger">{error}</div>)}
                       <form onSubmit={formik.handleSubmit}>
                           <div className="mb-3">
                               <label className="form-label">UserName </label>
                               <input type="text" className="form-control" name="username" aria-describedby="emailHelp" value={formik.values.username} onChange={formik.handleChange} />
                               {formik.touched.username && formik.errors.username?(
                                <div className="text-danger small mt-1">{formik.errors.username}</div>):null}
                               
                               <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                           </div>
                           <div className="mb-3">
                               <label className="form-label">Password</label>
                               <input type="password" className="form-control" name="password" value={formik.values.password} onChange={formik.handleChange} />
                               {formik.touched.password && formik.errors.password?(
                               <div className="text-danger small mt-1">{formik.errors.password}</div>):null}
                           </div>

                           <button type="submit" className="btn btn-primary w-100">Submit</button>
                       </form>
                    </div>
                    



                </div>

            </div>

        </div>
        

        
    )
    
}
export default Login






// import { useState } from "react"
// import { useNavigate } from "react-router-dom";

// function Login(){

//     //initialize navigation
//     const navigate = useNavigate();
//     //state
//     const[userName,setUserName]=useState("");
//     const [password, setPassword] = useState("");
//     const [message, setMessage] = useState("");
//     const [error, setError] = useState("");

//     //username change event
//     const handleUserNameChange = (event) => { setUserName(event.target.value)}
//     const handlePasswordChange = (event) => { setPassword(event.target.value) }
//     const handleSubmit = (event)=>
//     {
//         //prevent refreshing
//         event.preventDefault()
//         //clear previous messages
//         setMessage("");
//         setError("");
//         //validation
//         if(userName===""){setError("userName is required"); return}
//         if (password === "") { setError("password is required"); return }
//         if(userName === "vanishree" && password ==="vani123"){
//             setMessage("Login validation success")
//             console.log("UserName:", userName);
//             console.log("Password:", password);
//             setUserName("")
//             setPassword("")
//             navigate("/products")
//         }
//         else{
//             setError("userName or password incorrect")
//         }
        
        
        

//     }
//     return(
//         <div className="row justify-content-center" >
//             <div className="col-md-5">
//                 <div className="card shadow">
//                     <div className="card-body">
//                         <h3 className="card-title">Login</h3>
//                         {message && (<div className="alert alert-success">{message}</div>)}
//                         {error && (<div className="alert alert-danger">{error}</div>)}
//                     </div>
//                     <form onSubmit={formik.handleSubmit}>
//                         <div classNameName="mb-3">
//                             <label classNameName="form-label">UserName </label>
//                             <input type="text" className="form-control" aria-describedby="emailHelp" value={userName} onChange={handleUserNameChange} />
//                             <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//                         </div>
//                         <div className="mb-3">
//                             <label className="form-label">Password</label>
//                             <input type="password" className="form-control" value={password} onChange={handlePasswordChange} />
//                         </div>

//                         <button type="submit" className="btn btn-primary">Submit</button>
//                     </form>



//                 </div>

//             </div>

//         </div>
        

        
//     )
// }
// export default Login