
import React from 'react'

// Styles
import '../styles/LayoutModal.css'
import Modal from 'react-bootstrap/Modal'


const LayoutModal = ({ title, show, handleChangeStatusModal, children }) => {

    return(
        <Modal show={show} scrollable={true} centered={true} onHide={handleChangeStatusModal}>
            <Modal.Header closeButton>
                <Modal.Title>{ title }</Modal.Title>
            </Modal.Header>
            <Modal.Body>{ children }</Modal.Body>
        </Modal>
    )
}

export default LayoutModal