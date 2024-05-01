
import React from 'react'

// Styles
import '../styles/FloatingButton.css'


const FloatingButton = ({ handleChangeStatusModal }) => {
    return (
        <div className="floating_button" onClick={handleChangeStatusModal}>
            <i className="fas fa-plus fa-lg"></i>
        </div>
    )
}

export default FloatingButton