import React from 'react';

const Input = (props) =>{
    const {tasks, setTasks} = props;
    let task = {
        name: "",
        isComplete: false
    }
    const onChangeHandler = (e) => {
        task.name = e.target.value;
    }

    const onClickHandler = (e) =>{
        setTasks([...tasks, task]);
        e.target.value = "";
        task = "";
    }

    return(
        <div>
            <input onChange ={onChangeHandler} type="text" name = "task"/>
            <input onClick ={onClickHandler} type="submit" value = "Submit"/>
        </div>
    )
}

export default Input;