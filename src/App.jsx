import Home from './components/routes/Home'
import TaskCheck from './components/routes/taskCheck'
import TaskDelete from './components/routes/taskDelete'
import './App.css'
import SignUp from './components/routes/signUp'
import SignIn from './components/routes/signIn'
import React from 'react'
import { useState,useEffect } from 'react'
import { Route,Routes } from 'react-router-dom'

function App() {
 
  const [task,setTask] = useState([]);
  const [trash,setTrash] = useState([]);

  useEffect(()=>{
    document.title = "TodoList"
  })
  
  const filteredTask = task.filter(item=>item.completed);
  

  return (
    <>
      <Routes>
        <Route path='/' element={<SignUp/>}/>
        <Route path='/sign-in' element={<SignIn/>}/>
        
        <Route path='/Home' element={<Home task={task}
                                        setTask={setTask}
                                        trash={trash}
                                        setTrash={setTrash}
        />}/>
        <Route path='/taskcheck' element={<TaskCheck task={filteredTask}/>}/>
        <Route path='/deletetask' element={<TaskDelete task={trash}/>}/>
      </Routes>
       
       
       
    </>
  )
}

export default App
