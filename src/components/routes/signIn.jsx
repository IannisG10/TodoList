import React from "react";
import { Link,Outlet } from "react-router-dom";
import "../../css/signUP.css"

function SignIn(){

    return(
        <div className="Login-box">
             <h2>Sign In</h2>
             <form action="">
                    
                    <div className="info_area">
                        <input type="email" />
                        <label>Email</label>
                    </div>
                    <div className="info_area">
                        <input type="password" />
                        <label >Password</label>
                    </div>
                    <button><Link to="/Home" 
                        style={{textDecoration:"none",color:"white",fontWeight:"bold"}}>Sign In</Link></button>

                    <div className="noAcount">
                        <p><Link to="/" style={{color:"white"}}>Nouvel utilisateur</Link></p>
                    </div>
            </form>
            <Outlet/>

        </div>
    );
}

export default SignIn;