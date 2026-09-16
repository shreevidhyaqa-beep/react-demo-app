import Comp1 from "./components/comp1"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import NavBar from "./components/NavBar"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import Login from './pages/Login.jsx'
import ProtectedRoute from "./components/ProtectedRoute.jsx"
import AdminDashBoard from './pages/AdminDashBoard.jsx'
import RoleRoute from './components/RoleRoute.jsx'
function App() {
  return(
  // <Router></Router>
   <BrowserRouter>
      <NavBar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProtectedRoute><Products /></ProtectedRoute>} />
          <Route element={<RoleRoute allowedRole="Admin" />} >
            <Route path="/admin" element={<AdminDashBoard />} />
          </Route>
          <Route element={<RoleRoute allowedRole="User" />}>
            <Route path="/products" element={<Products />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>

      </div>
      
   </BrowserRouter>
     
      
  
    
  )
  
}
export default App