
import React, { useState } from 'react'

// Components
import TaskForm from './TaskForm';


const UpdateTaskForm = ({ handleUpdateTask, defaultData }) => {

    const [task, setTask] = useState(defaultData)

    const handleInputChange = ({ target }) => {
        setTask({
            ...task,
            [target.name]: target.value
        })
    }

    const handleSubmit = () => {
        handleUpdateTask(task)
    }

    return(
        <TaskForm 
            handleInputChange={handleInputChange} 
            handleSubmit={handleSubmit}  
            btnTitle="Actualizar"
            task={task}
        />
    )
}

export default UpdateTaskForm