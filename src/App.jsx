import Home from './components/Home'
import TaskCheck from './components/taskCheck'
import TaskDelete from './components/taskDelete'
import './App.css'
import React from 'react'
import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'

function App() {
 
  const [task,setTask] = useState([]);
  const [trash,setTrash] = useState([]);
  
  const filteredTask = task.filter(item=>item.completed);
  return (
    <>
       <Routes>
          <Route path="/" element={<Home task={task} 
                        setTask={setTask}
                        trash={trash}
                        setTrash={setTrash}
                  />}
          />
          <Route path="/taskcheck" element={<TaskCheck task={filteredTask}
                          setTask={setTask}               
                />}
          />
          <Route path="/deletetask" element={<TaskDelete taskDeleted={trash}/>}/>
       </Routes>
    </>
  )
}

export default App
