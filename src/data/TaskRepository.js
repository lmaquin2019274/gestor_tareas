

export class TaskRepository {

    static getTasks() {
        const tasks = localStorage.getItem('tasks') || "[]"
        return JSON.parse(tasks)
    }

    static createTask(task) {
        const tasks = this.getTasks()
        task.id = this.generateId(tasks)
        tasks.push(task)
        localStorage.setItem('tasks', JSON.stringify(tasks))

        return this.getTasks()
    }

    static getTask(id){
        let response = [Number, Object]
        const tasks = this.getTasks()
        const indexTask = tasks.findIndex(task => task.id === id)

        if (indexTask !== -1){
            response = [200, tasks[indexTask]]
        } else {
            response = [404, null]
        }

        return response
    }

    static deleteTask(id) {
        let response = [Number, Array]
        const tasks = this.getTasks()
        const indexTask = tasks.findIndex(task => task.id === id)
        
        if (indexTask !== -1){
            tasks.splice(indexTask, 1)
            localStorage.setItem('tasks', JSON.stringify(tasks))
            response = [200, tasks]

        } else {
            response = [404, tasks]
        }

        return response
    }

    static updateTask(task) {
        const tasks = this.getTasks()
        const indexTask = tasks.findIndex(item => item.id === task.id)

        if (indexTask !== -1){
            tasks[indexTask] = task
            localStorage.setItem('tasks', JSON.stringify(tasks))
        }

        return tasks
    }

    static generateId(tasks){
        do {
            var id = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
        } while (tasks.findIndex(task => task.id === id) !== -1)

        return id
    }
}
