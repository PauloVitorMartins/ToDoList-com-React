import React from "react";

import { useParams, useHistory } from "react-router-dom";
import Button from "./Button";

import './TaskDetails.css'
const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();

    const handleBackButtonClick = () => {
       history.goBack()
       setTimeout(()=>{
        window.location.reload(false);
    }, 200);
    }

    return (
        <>
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2 className="title-tasking">{params.taskTitle}</h2>
                <p className="title-tasking">
                 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
            </div>
        </>
    )
}

export default TaskDetails;