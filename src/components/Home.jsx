import React from "react";
import NavBar from "./navBar";
import TextField from "./textField";

function Home({task,setTask,trash,setTrash}){

    return(
        <>
            <NavBar/>
            <TextField task={task} 
                    setTask={setTask}
                    trash={trash}
                    setTrash={setTrash}
                    />
        </>
    );
}

export default Home;