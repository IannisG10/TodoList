import React from "react";
import { CheckCircle,CheckCircleOutline } from "@mui/icons-material";
import { DeleteForever } from "@mui/icons-material";0
import NavBar from "./navBar";
import '../css/taskCheck.css'


function TaskCheck({task,setTask}){

    const completeTask =(id)=>{
        setTask((prevTask)=>prevTask.map((item)=>
            item.id === id ? {...item, completed : item.completed}:item
        ))
    }
    return(
        <div>
           <NavBar/>
            <div className="completeWrapper">
                {task.length === 0 ?
                    <div className="taskNone">Aucune Tache Completés</div> :
                        task.map((item)=>(
                        <div className="taskWrapper" key={item.id}>
                            <div className="contentWrapper">
                                <div className="tittle-container">
                                    {item.tittle}
                                </div>
                                <div className="text-container">
                                    {item.text}
                                </div>
                            </div>
                            <div className="iconWrapper">
                                <div className="delete">
                                    <DeleteForever style={{fontSize:20,color:'white'}}/>      
                                </div>
                                <div className="checked" onClick={()=>{completeTask(item.id)}}>
                                    {item.completed ? <CheckCircle style={{fontSize:20,color:'white'}}/>:
                                    <CheckCircleOutline style={{fontSize:20,color:'white'}}/>}
                                </div>
                            </div>
                        </div>
                    ))   
                }
            </div>
        </div>
    );

}

export default TaskCheck;