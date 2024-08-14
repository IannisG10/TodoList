import React from "react";
import '../css/navBar.css'
import { useState } from "react";
import { Link } from "react-router-dom";

function MainTask(){

    return(
        <>
            <div className="menu-field">
                Notes
            </div>
        </>
    );
}
function CompleteTask(){

    return(
        <>
            <div className="menu-field">
                Completés
            </div>
        </>
    );
}

function DeleteTask(){

    return(
        <>
            <div className="menu-field"> 
                Supprimées
            </div>
        </>
    );
}


function NavBar(){
    const[isOpen,setIsOpen] = useState(false);
    const openMenu = ()=>{
            setIsOpen(!isOpen);
    }
    return(
        <>
            <nav className={`${isOpen ?'navOpen' : ''}`}>
                <div className={`menu ${isOpen ? 'open':''}`} onClick={openMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <div className={`banner ${isOpen ? 'slide-out':'slide-in'}`}>
                    <ul>
                        <li><Link to="/Home" style={{color:'white',textDecoration:'none'}}><MainTask/></Link></li>
                        <li><Link to="/taskcheck" style={{color:'white',textDecoration:'none'}}><CompleteTask/></Link></li>
                        <li><Link to="/deletetask" style={{color:'white',textDecoration:'none'}}><DeleteTask/></Link></li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default NavBar;