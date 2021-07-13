import React, { useState } from 'react';
import Input from "./components/Input";
import Task from "./components/Task";
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
      <Input tasks = {tasks} setTasks ={setTasks}/>
      {tasks.map((task, i) =>(
        <Task task = {task} setTasks= {setTasks} index = {i} tasks = {tasks} />
      ))}
    </div>
  );
}

export default App;
