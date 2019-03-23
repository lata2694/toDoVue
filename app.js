const app = new Vue({
    el: '#app',
    data: {
        title: 'Hi, I am Vue !',
        newTodo: '',
        todos: []
    },
    methods: {
        addToDo () {
            this.todos.push({
                title: this.newTodo,
                done: false
            })
            this.newTodo = ''
        },
        removeToDo(todo) {
            const todoIndex = this.todos.indexOf(todo)
            this.todos.splice(todoIndex,1)
        },
        allDone () {
            this.todos.forEach((todo)=>{
                todo.done = true
            })
        }
    }
})