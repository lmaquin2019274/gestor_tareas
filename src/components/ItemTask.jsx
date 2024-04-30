

import React  from 'react'

// Styles
import '../styles/ItemTask.css'


const ItemTask = ({ data, handleDelete, handleUpdate, handleDetail }) => {

    const { id, name, color } = data

    const style = {
        borderLeft: `7px ${color} solid`
    }

    return (
        <div className="task_item" style={style}>
            <p>{ name }</p>
            
            <button title="Ver" onClick={ () => handleDetail(data) }><i className="fas fa-eye fa-lg"></i></button>
            <button title="Editar" onClick={ () => handleUpdate(id) }><i className="fas fa-edit fa-lg"></i></button>
            <button title="Borrar" onClick={ () => handleDelete(id) }><i className="fas fa-trash-alt fa-lg"></i></button>
        </div>
    )
}

export default ItemTask