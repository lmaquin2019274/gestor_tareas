
import React from 'react'
import ItemTask from './ItemTask'

// Styles
import '../styles/ListItemTask.css'

// Images
import ImgNoTasks from '../images/no2.png'


const ListItemTask = ({ tasks, handleDelete, handleUpdate, handleDetail }) => {

    return (
        <div className="container_tasks">
            { tasks.length !== 0 ?
                tasks.map((task, counter)=> (
                    <ItemTask 
                        data={task} 
                        key={counter} 
                        handleDelete={handleDelete} 
                        handleUpdate={handleUpdate} 
                        handleDetail={handleDetail}
                    />
                ))
            :
                <div className="container_no_tasks">
                    <img src={ImgNoTasks} alt="There are no tasks" height="80" width="80" />
                    <h4 className="title_no_tasks">NO HAY TAREAS CREADAS</h4>
                </div>
            }

        </div>
    )
}

export default ListItemTask