import React from "react";
import { Link } from "react-router-dom";
import '../../css/signUP.css'

function SignUp(){

    return(
        <div className="Login-box">
            <h2>Sign Up</h2>
           <form action="">
                <div className="info_area">
                    <input type="text" />
                    <label>Nom</label>
                </div>
                <div className="info_area">
                    <input type="text" />
                    <label >Prenom</label>
                </div>
                <div className="info_area">
                    <input type="password" />
                    <label >Password</label>
                </div>
                <div className="info_area">
                    <input type="email" />
                    <label>Email</label>
                </div>
                <button><Link to="/Home" 
                    style={{textDecoration:"none",color:"white",fontWeight:"bold"}}>Sign Up</Link></button>

                <div className="acountExisting">
                    <p ><Link to="/sign-in" style={{color:"white"}}>Avez-vous un compte?</Link></p>
                    
                </div>
           </form>
           
          
        </div>
    );
}

export default SignUp;