import React from "react";
import "../css/InputField.css"
import { useState,useRef } from "react";
import { useContext } from "react";
import { ThemeContexte } from "../hook/useTheme";



function InputField({task,setTask}){
    const [textValue,setTextValue] = useState("");
    const [tittleValue,setTittleValue] = useState("");

    const idRef = useRef(0);

    const {theme,handleTheme} = useContext(ThemeContexte);
    
    
    const handlerText = (e)=>{
        setTextValue(e.target.value);
    }
    const handlerTittle = (e)=>{
        setTittleValue(e.target.value);
    }
    const addTask = ()=>{
        if(textValue === ""){
            alert("Completer tous les champs")
            return;
        }
        const taskItem = {
            id : idRef.current++,
            text : textValue,
            tittle : tittleValue,
            isCompete : false
        }
        setTask([...task,taskItem]);
        setTextValue("");
        setTittleValue("");
    }
    
     return(
        <div className={`${theme ? "darkInput" :""}`}>
            <div className="inputContent">
                <input type="text" 
                    placeholder="Entrer un titre..." 
                    onChange={handlerTittle}
                    value={tittleValue}
                />
                <input type="text" 
                    placeholder="Entrer le texte..."
                    onChange={handlerText}
                    value={textValue}    
                />
                <button onClick={addTask}>Ajouter</button>

            </div>
        </div>
    );
}

export default InputField;