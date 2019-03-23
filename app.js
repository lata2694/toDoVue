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
            console.log('submitted',this.todos)
        }
    }
})