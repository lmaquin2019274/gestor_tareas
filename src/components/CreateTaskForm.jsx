
import React, { useState } from 'react'

// Components
import TaskForm from './TaskForm';
import '../styles/CreateTaskForm.css'


const CreateTaskForm = ({ handleCreateTask }) => {

    const [task, setTask] = useState({
        id: null,
        name: "",
        description: "",
        date: "",
        color: "#FFD257",
        user: ""
    })

    const handleInputChange = ({ target }) => {
        setTask({
            ...task,
            [target.name]: target.value
        })
    }

    const handleSubmit = () => {
        handleCreateTask(task)
        setTask({ id: null, name: "", description: "", date: "", color: "#FFD257", user: "", completed: false })
    }

    return (

        <TaskForm
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            btnTitle="Crear"
            task={task}
        />
    )
}

export default CreateTaskForm