import React from "react";
import '../css/navBar.css'
import { useState } from "react";


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

                </div>
            </nav>
        </>
    );
}

export default NavBar;