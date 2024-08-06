import React from "react";
import '../css/taskList.css'
import { DeleteForever } from "@mui/icons-material";
import { CheckCircleOutline } from "@mui/icons-material";
import { CheckCircle } from "@mui/icons-material";

function TaskList({task,deleteTask,completeTask}){

    return(
        <>
                {task.map((item)=>(
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
                            <div className="delete" onClick={()=> deleteTask(item.id)}>
                                <DeleteForever style={{fontSize:20,color:'white'}}/>
                            </div>
                            <div className="checked" onClick={()=>completeTask(item.id)}> 
                                {item.completed ? <CheckCircle style={{fontSize:20,color:'green'}}/> : 
                                <CheckCircleOutline style={{fontSize:20,color:'white'}}/>}
                            </div>       
                        </div>
                    </div>
                ))}
                
        </>
    );
}

export default TaskList;