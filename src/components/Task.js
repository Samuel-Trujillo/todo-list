import React from 'react';

const Task = (props) => {
    const {task, index, tasks, setTasks} = props;
    const deleteTask = () => {
        setTasks(() => {
            return tasks.filter(task => tasks.indexOf(task) !== index)
        });
    }

    const markComplete = () =>{
        tasks[index].isComplete = !tasks[index].isComplete;
        setTasks([...tasks]);
    }

    return (
        <div>
            <h2>{task.name}</h2>
            <label htmlFor="checkbox">Completed?</label>
            <input onChange = {markComplete} type="checkbox" name="" checked = {task.isComplete} />
            <button onClick = {deleteTask}>Delete</button>
        </div>
    )
}

export default Task;