import React, {useState} from "react";

import { useHistory } from "react-router-dom";
import './Task.css'
const Task = ({task, handleTaskClick, handleTaskDeletion }) => {
    const history = useHistory();

    const handleTaskDetailsClick = () => {
        setTimeout(()=>{
            window.location.reload(false);
        }, 200);
        history.push(`/${task.title}`)
    }

 return (
    <div className="task-container" style={task.completed ? {borderLeft: '6px solid chartreuse'} : {}}>
        <div className="task-title" onClick={() => handleTaskClick(task.id)}>
            {task.title}
        </div>
        <div className="buttons-container">
            <button onClick={handleTaskDetailsClick} className="info-task-button">i</button> 
            <button className="remove-task-button" onClick={() => handleTaskDeletion(task.id)}>X</button>
        </div> 
    </div>
 )
}

export default Task;