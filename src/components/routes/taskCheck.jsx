import React from "react";
import { CheckCircle,CheckCircleOutline } from "@mui/icons-material";
import NavBar from "../navBar";
import '../../css/taskCheck.css'


function TaskCheck({task}){
    return(
        <div>
           <NavBar/>
            <div className="completeWrapper">
                {task.length === 0 ?
                    (<div className="taskNone">Aucune Tache Completés</div>) :
                        (task.map((item)=>(
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
                                    <div className="checked" >
                                        {item.completed ? <CheckCircle style={{fontSize:20,color:'white'}}/>:
                                        <CheckCircleOutline style={{fontSize:20,color:'white'}}/>}
                                    </div>
                                </div>
                            </div>)
                    ))   
                }
            </div>
        </div>
    );

}

export default TaskCheck;