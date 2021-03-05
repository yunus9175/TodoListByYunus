import React from 'react'
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import './Header.css';
import {toast} from 'react-toastify';  
import 'react-toastify/dist/ReactToastify.css';  
    
toast.configure() 

function Header() {

    return (
        <>
        <div className="container1">
            <div className="row1">
                <div className="spanDiv1">
                <span className="span1"> <Link to="/" className="link">MyRoutingApp</Link>
                 
             </span>
                </div>
             <div className="spanDiv">
             <span>  <Link to="/UserCards" className="link">User Cards</Link></span>

             <span>  <Link to="/Todolist" className="link">Todo List</Link></span>
             {/* <span>  <Link to="/Signin" className="link">SignIn</Link></span>
             <span><Link to="/SignUp" className="link">SignUp</Link></span>
             <span><Link to="/Forgetpassword" className="link">Forget Password</Link></span>
             <span><Link to="/Contactus" className="link">Contact Us</Link></span>
             <span><Link to="/Aboutus" className="link">About Us</Link></span> */}
             </div>
            
            </div>
        
        
        </div>
        </>
    )
}

export default Header
