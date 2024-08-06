import React from "react";
import { useState } from "react";
import TaskList from "./taskList";


const TextField = ({task,setTask,trash,setTrash})=>{
    const [textValue,setTextValue] = useState("");
    const [titlleValue,setTittleValue] = useState("");
    const [saveId,setSaveId] = useState(0);


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
            id : saveId,
            text : textValue,
            tittle : titlleValue,
            completed : false
        }
        setSaveId((prevId)=>prevId+1);
        setTask([...task,taskItem]);
        setTextValue("");
        setTittleValue("");
    }

    const deleteTask = (id)=>{
        
        setTask((prevTask)=> {
           const taskCopy = [...prevTask];
           const taskToDelete = taskCopy.filter(item=>item.id !== id);
           
           return taskToDelete;
        })
             
    }
    
    const completeTask = (id)=>{
        setTask((prevTask)=>prevTask.map((task)=>
            task.id === id ? {...task,completed :!task.completed}:task
        ));
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
                          completeTask={completeTask}
                />
            </div>
        </>
    );


}

export default TextField;