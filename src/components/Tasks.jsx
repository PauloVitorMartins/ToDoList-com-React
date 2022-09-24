import React, {useState} from "react";

import Task from './Task'
const tasks = ({tasks, handleTaskClick, handleTaskDeletion}) => {
    return ( 
    <>
   {tasks.map(task => <Task task={task} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion}/>)}
  </>)
}


export default tasks