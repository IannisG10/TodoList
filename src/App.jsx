import Notes from "./components/Routes/notes"
import TaskComplete from "./components/Routes/taskcomplete"
import TaskDelete from "./components/Routes/taskDelete"
import "./App.css"
import { Routes,Route } from "react-router-dom"
import { useState,useEffect } from "react";
import { ThemeProvider } from "./hook/useTheme"


function App() {
 
  const [task,setTask] = useState(()=>{
    const saveStorage = localStorage.getItem("tasks");

    return saveStorage ? JSON.parse(saveStorage) : [];
  });
  const [trash,setTrash] = useState([]);

  useEffect(()=>{
      localStorage.setItem("tasks",JSON.stringify(task));
  },[task])

  

  const taskFiltered = task.filter(item => item.isComplete);

  return (
    <>
          <ThemeProvider>
              <Routes>
                  <Route path="/" element={<Notes task={task} 
                          setTask={setTask}
                          trash={trash}
                          setTrash={setTrash}        
                  />}/>

                  <Route path="task-complete" element={<TaskComplete task={taskFiltered}/>}/>
                  <Route path="task-delete" element={<TaskDelete task={trash}/>}/>
              </Routes>
          </ThemeProvider>
         
    </>
  )
}

export default App
