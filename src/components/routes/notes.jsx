import React from "react";
import InputField from "../InputField";
import List from "../list";
import NavBar from "../NavBar";

function Notes({task,setTask,trash,setTrash}){
    //Fichier CSS : App.css
    
    const deleteTask = (id)=>{
        const copyTask = [...task];
        //Les taches supprimées qui vont etre envoyé dans la corbeille
        const taskToTrashed = copyTask.find((item) => item.id === id);
        setTrash([...trash,taskToTrashed]);

        setTask(prevTask => {
            const copyTask = [...prevTask];
            //Les taches restante apres avoir filtré celle à supprimer
            const taskToDelete = copyTask.filter((item)=> item.id !== id);

            return taskToDelete;
            } 
        )
    }
    const completeTask = (id)=>{
        setTask(prevTask=>
            prevTask.map((tasks)=> tasks.id === id ? {...tasks,isComplete : !tasks.isComplete} : tasks)    
        )
    }
    return(
        <div>
            <NavBar/>
            <div className="mainPage">
                <InputField task={task} setTask={setTask}/>
                <div className="lisOfTask">
                    <List task={task}
                            deleteTask={deleteTask}
                            completeTask={completeTask}
                    />
                </div>
            </div>
        </div>
    );
}

export default Notes;