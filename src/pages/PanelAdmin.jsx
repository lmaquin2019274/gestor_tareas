
import React, { useState } from 'react'
import CreateTaskForm from '../components/CreateTaskForm'
import DetailTask from '../components/DetailTask'
import FloatingButton from '../components/FloatingButton'
import Header from '../components/Header'
import LayoutModal from '../components/LayoutModal'
import ListItemTask from '../components/ListItemTask'
import UpdateTaskForm from '../components/UpdateTaskForm'
import { TaskRepository } from '../data/TaskRepository'

// Styles
import '../styles/PanelAdmin.css'



const PanelAdmin = () => {

    const [tasks, setTasks] = useState([])

    const [modalUpdateTask, setModalUpdate] = useState({ task: null, isOpen: false })
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [detailTask, setDetailTask] = useState(null)

    useState(() => {
        setTasks(TaskRepository.getTasks())
    }, [])

    const handleChangeStatusModal = () => {
        setIsOpenModal(!isOpenModal)
    }

    const handleCreateTask = (task) => {
        const tasks = TaskRepository.createTask(task)
        setIsOpenModal(false)
        setTasks(tasks)
    }

    const handleDeleteTask = (id) => {
        const [status, tasks] = TaskRepository.deleteTask(id)
        if (status === 200){
            setTasks(tasks)
        }
    }

    const handleShowUpdateModal = (id) => {
        const [status, task] = TaskRepository.getTask(id)
        if (status === 200){
            setModalUpdate({ task, isOpen: true })
        }
    }

    const handleUpdateTask = (task) => {
        const tasks = TaskRepository.updateTask(task)
        setModalUpdate({ isOpen: false, task: null })
        setTasks(tasks)
    }

    const handleDetailTask = (task) => {
        setDetailTask(task)
    }

    return(
        <div className="h-100 p-absolute">
            <Header />

            <div className="container">
                <div className="container_form_desktop">
                    <CreateTaskForm handleCreateTask={handleCreateTask} />
                </div>

                <ListItemTask 
                    tasks={tasks} 
                    handleDelete={handleDeleteTask} 
                    handleUpdate={handleShowUpdateModal}
                    handleDetail={handleDetailTask} 
                />
            </div>

            <LayoutModal 
                title="NUEVA TAREA"
                show={isOpenModal}
                handleChangeStatusModal={handleChangeStatusModal}>

                <CreateTaskForm handleCreateTask={handleCreateTask} />

            </LayoutModal>


            { modalUpdateTask.isOpen ?
                <LayoutModal
                    title="Actualizar tarea"
                    show={true}
                    handleChangeStatusModal={() => setModalUpdate({ isOpen: false, task: null })}>
                
                    <UpdateTaskForm handleUpdateTask={handleUpdateTask} defaultData={modalUpdateTask.task} />

                </LayoutModal>
            :
                null
            }


            {detailTask !== null ?
                <LayoutModal
                    title="Detalles de la tarea"
                    show={true}
                    handleChangeStatusModal={() => setDetailTask(null)}>
                    
                    <DetailTask data={detailTask} />

                </LayoutModal>
            :
                null
            }

            <FloatingButton handleChangeStatusModal={handleChangeStatusModal} />
        </div>
    )
}

export default PanelAdmin