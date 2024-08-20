import React from "react";
import NavBar from "../NavBar";
import List from "../list";

function TaskComplete({task}){
    return(
        <>
            <NavBar/>
            {task.length === 0 ? <div className="noTask">Aucunes Taches Complétées</div> : 
                <div className="lisOfTask"><List task={task}/></div>}
        </>
    );
}

export default TaskComplete;