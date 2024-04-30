

class TaskValidator {

    static validate(task){

        let isInvalid = false

        const errors = {
            name: [],
            description: [],
            date: [],
            color: [],
            user: [],
        }

        if (task.name.length <= 1 || task.name.length > 50) {
            errors.name.push("La longitud permitida es 1 - 50 caracteres")
            isInvalid = true
        }

        if (task.description.length <= 5 || task.description.length > 180) {
            errors.description.push("La longitud permitida es 5 - 180 caracteres")
            isInvalid = true
        }

        if (task.date === "") {
            errors.date.push("Se requiere una fecha")
            isInvalid = true
        }

        if (task.color === ""){
            errors.color.push("Se requiere un color valido")
            isInvalid = true
        }

        if (task.user.length <= 1 || task.user.length > 50) {
            errors.user.push("La longitud permitida es 1 - 50 caracteres")
            isInvalid = true
        }

        return [isInvalid, errors]
    }
}

export default TaskValidator