import React, { useState } from 'react';
import TaskForm from './TaskForm';

const CreateTaskForm = ({ handleCreateTask }) => {
    const [task, setTask] = useState({
        id: null,
        name: "",
        description: "",
        dateInicio: "",
        dateCierre: "",
        color: "#FFD257",
        user: "",
        completed: false
    });

    const handleInputChange = ({ target }) => {
        setTask({
            ...task,
            [target.name]: target.value
        });
    };

    const handleSubmit = () => {
        handleCreateTask(task);
        setTask({
            id: null,
            name: "",
            description: "",
            dateInicio: "",
            dateCierre: "",
            color: "#FFD257",
            user: "",
            completed: false
        });
    };

    return (
        <TaskForm
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            btnTitle="Crear"
            task={task}
        />
    );
};

export default CreateTaskForm;
