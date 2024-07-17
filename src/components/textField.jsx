import React from "react";
import { useState } from "react";
import TaskList from "./taskList";


const TextField = ()=>{

    const [textValue,setTextValue] = useState("");
    const [titlleValue,setTittleValue] = useState("");
    const [task,setTask] = useState([]);

    const handleText = (e)=>{
        setTextValue(e.target.value);
    }
    const handleTittle = (e)=>{
        setTittleValue(e.target.value);
    }
    const addTask = ()=>{
        if(!textValue || !titlleValue){
            alert("Completer le cahmp texte et le titre !");
            return;
        }
        let taskItem = {
            id : new Date(),
            text : textValue,
            tittle : titlleValue
        }
        setTask([...task,taskItem]);
        setTextValue("");
        setTittleValue("");
    }
    const deleteTask = (id)=>{
        let taskdelete = [...task];
        taskdelete.splice(id,1);

        setTask(taskdelete); 
    }
    return (
        <>
            <div className="inputContainer">
                <div className="inputTittle">
                    <input 
                        type="text"
                        placeholder="Entrer un titre..."
                        className="TittleField"
                        onChange={handleTittle}
                    />
                </div>
                <div className="textfield">
                    <input 
                        type="text"
                        placeholder="Entrer un texte..."
                        className="TextField"
                        onChange={handleText}
                     />
                </div>
                <div className="butonAdd">
                    <button className="addButton"
                            onClick={addTask}
                    >Ajouter</button>
                </div>
                

            </div>

            <div className="taskBox">
                <TaskList task={task}
                          deleteTask={deleteTask}
                />
            </div>
        </>
    );


}

export default TextField;