
import React from 'react'
import '../styles/Header.css'

const Header = () => {
    return (
        <header>
            <div className="header_top">
                <label className="hyperHref" to="/"><i className="fas fa-tasks"></i>  Gestor de tareas</label>
            </div>
        </header>
    )
}

export default Header