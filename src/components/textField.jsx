import React from "react";
import { useState } from "react";
import { useEffect,useRef } from "react";
import TaskList from "./taskList";

const TextField = ({task,setTask,trash,setTrash})=>{
    const [textValue,setTextValue] = useState("");
    const [titlleValue,setTittleValue] = useState("");
    const [saveId,setSaveId] = useState(0);

   
    useEffect(()=>{
        localStorage.setItem("tasks",JSON.stringify(task))
    },[task])

    //Fonction qui controle le chagngement de valeur dans le champ texte
    const handleText = (e)=>{
        setTextValue(e.target.value);
    }
    //Fonction qui controle le chagngement de valeur dans le champ titre
    const handleTittle = (e)=>{
        setTittleValue(e.target.value);
    }

    //Fonction qui ajoute les taches et tous ses attributs
    const addTask = ()=>{
        if(!textValue || !titlleValue){
            alert("Completer le cahmp texte et le titre !");
            return;
        }

        //Attributs d'une taches
        let taskItem = {
            id : saveId,
            text : textValue,
            tittle : titlleValue,
            date : new Date().toLocaleDateString(),
            hours : new Date().getHours(),
            minutes :new Date().getMinutes(),
            seconds : new Date().getSeconds(),
            completed : false
        }
        
        setSaveId((prevId) => prevId + 1);
        setTask([...task,taskItem]);

        setTextValue("");
        setTittleValue("");
    }

    //Fonction qui manipule la suppression d'une tache
    const deleteTask = (id)=>{
        const copyTask = [...task];
        const taskToTrashed = copyTask.find(item=> item.id === id);
        setTrash([...trash,taskToTrashed]);

        setTask((prevTask)=> {
           const taskCopy = [...prevTask];
           const taskToDelete = taskCopy.filter(item=>item.id !== id);

           return taskToDelete;
        })
             
    }
    
    //Fonction qui marque une tache comme faite 
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