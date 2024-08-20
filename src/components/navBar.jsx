import React from "react";
import "../css/NavBar.css";
import { Switch } from "@mui/material";
import { Assignment,Grading,RestoreFromTrash } from "@mui/icons-material";
import { useState,useContext } from "react";
import { ThemeContexte } from "../hook/useTheme";
import { NavLink } from "react-router-dom";

function NavBar(){
    const [isOpen,setOpen] = useState(false);
   const {theme,handleTheme} = useContext(ThemeContexte);

    return(
        <>
            <div className={`${theme ?"dark":"light"}`}>
                <div className={`${!isOpen ?"close":"open"}`} onClick={()=>{setOpen(!isOpen)}}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <div>
                <Switch checked={theme}
                        onChange={handleTheme}
                        sx={{
                            '& .MuiSwitch-switchBase': {
                                color : '#a6a2a2'
                            },
                            '& .MuiSwitch-switchBase.Mui-checked': {
                                color : '#2a2c29'
                            },
                            '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track':{
                                backgroundColor :'#2a2c2c'
                            }
                        }}
                        color="primary"
                />
                
                </div>
            </div>
            <div className={`side-bar ${!isOpen ? "hide":"show"} ${theme ?"darkSide":""}`}>
                <div className={`navItem`}>
                    <NavLink to="/"
                            style={{textDecoration:"none",color:"black"}}
                            className={({isActive}) =>(isActive ? 'active' : '')}
                    ><Assignment style={{fontSize:18}}/><div className="libelle">Notes</div></NavLink>
                </div>

                <div className={`navItem `}>
                    <NavLink to="/task-complete"
                            style={{textDecoration:"none",color:"black"}}
                            className={({isActive}) => ( isActive ? 'active' : '')}
                    ><Grading style={{fontSize:18}}/><div className="libelle">Complétées</div></NavLink>
                </div>

                <div className={`navItem `}>
                    <NavLink to="/task-delete"
                            className={({isActive}) => (isActive ? 'active' :'')}
                            style={{textDecoration:"none",color:"black"}}
                    ><RestoreFromTrash style={{fontSize:18}}/><div className="libelle">Corbeilles</div></NavLink>
                </div>
            </div>
        </>
    );
}

export default NavBar;