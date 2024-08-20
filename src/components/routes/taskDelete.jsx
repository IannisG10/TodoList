import React from "react";
import NavBar from "../NavBar";
import List from "../list";
function TaskDelete({task}){
    return(
        <>
            <NavBar/>
            {task.length === 0 ? <div className="noTask">Aucunes Taches Supprimées</div> : 
                <div className="lisOfTask"><List task={task}/></div>
            }
        </>
    );
}

export default TaskDelete;