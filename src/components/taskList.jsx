import React from "react";
import '../css/taskList.css'
import { useState } from "react";
import { DeleteForever, Flag } from "@mui/icons-material";
import { CheckCircleOutline } from "@mui/icons-material";
import { CheckCircle } from "@mui/icons-material";

function TaskList({task,deleteTask}){

    const [checked,setCkecked] = useState(false);

    const handleChecked = ()=>{
        setCkecked(!checked);
    }
   
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
                            <div className="delete" onClick={deleteTask}>
                                <DeleteForever style={{fontSize:20,color:'white'}}/>
                            </div>
                            <div className="checked" onClick={handleChecked}>
                                {checked ? <CheckCircle style={{fontSize:20,color:'green'}}/> : 
                                <CheckCircleOutline style={{fontSize:20,color:'white'}}/>}
                            </div>
                        </div>
                    </div>
                ))}
                
        </>
    );
}

export default TaskList;