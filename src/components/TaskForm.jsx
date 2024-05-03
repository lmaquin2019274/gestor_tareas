import React, { useState } from 'react'

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/TaskForm.css'
import TaskValidator from '../data/TaskValidator';

const TaskForm = ({ handleInputChange, handleSubmit, btnTitle, task }) => {

    const { name, description, dateInicio, dateCierre, color, user, completed } = task

    const [errors, setErrors] = useState({
        name: [],
        description: [],
        dateInicio: [],
        dateCierre: [],
        color: [],
        user: [],
    })

    const handleSubmitValidate = (e) => {
        e.preventDefault()

        const [isInvalidForm, validationErrors] = TaskValidator.validate(task)

        if (isInvalidForm) {
            setErrors(validationErrors)

        } else {
            setErrors({ name: [], description: [], dateInicio: [], dateCierre: [], color: [], user: [] })
            handleSubmit()
        }
    }

    const handleChange = (e) => {
        setErrors({
            ...errors,
            [e.target.name]: []
        })

        handleInputChange(e)
    }

    return (
        <form onSubmit={handleSubmitValidate}>

            <div className="form-group has-validation">
                <label className="form-label">Nombre de la tarea</label>
                <span className="counter_letters">{name.length}/50</span>
                <input value={name} maxLength="50" name="name" onChange={handleChange} type="text" className={`form-control ${errors.name.length > 0 ? "is-invalid" : null}`} />
                <div className="invalid-feedback">
                    {errors.name.map(error => (
                        error
                    ))}
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">Descripción</label>
                <span className="counter_letters">{description.length}/180</span>
                <textarea value={description} maxLength="180" name="description" onChange={handleChange} className={`form-control ${errors.description.length > 0 ? "is-invalid" : null}`} />
                <div className="invalid-feedback">
                    {errors.description.map(error => (
                        error
                    ))}
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">Color de la tarea</label>
                <input type="color" className={`form-control form-control-color ${errors.color.length > 0 ? "is-invalid" : null}`} value={color} name="color" onChange={handleChange} title="Choose your color"></input>
                <div className="invalid-feedback">
                    {errors.color.map(error => (
                        error
                    ))}
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">¿Fecha de inicio?</label>
                <input type="date" className={`form-control ${errors.dateInicio.length > 0 ? "is-invalid" : null}`} value={dateInicio} name="dateInicio" onChange={handleChange}></input>
                <div className="invalid-feedback">
                    {errors.dateInicio.map(error => (
                        error
                    ))}
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">¿Fecha de cierre?</label>
                <input type="date" className={`form-control ${errors.dateCierre.length > 0 ? "is-invalid" : null}`} value={dateCierre} name="dateCierre" onChange={handleChange}></input>
                <div className="invalid-feedback">
                    {errors.dateCierre.map(error => (
                        error
                    ))}
                </div>
            </div>

            <div className="form-group has-validation">
                <label className="form-label">¿Quién va a realizar la tarea?</label>
                <span className="counter_letters">{user.length}/50</span>
                <input value={user} maxLength="50" name="user" onChange={handleChange} type="text" className={`form-control ${errors.user.length > 0 ? "is-invalid" : null}`} />
                <div className="invalid-feedback">
                    {errors.user.map(error => (
                        error
                    ))}
                </div>
            </div>

            <div className="form-group completed-checkbox">
                <label className="form-check-label">
                    <input
                        type="checkbox"
                        checked={completed}
                        onChange={(e) => handleInputChange({ target: { name: 'completed', value: e.target.checked } })}
                        className="form-check-input"
                    />
                    Estado de la tarea
                </label>
            </div>

            <button type="submit" className="btn btn-primary btn_create">{btnTitle}</button>
        </form>
    )
}

export default TaskForm
