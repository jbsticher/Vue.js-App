const app = new Vue({
    el: '#app',
    data: {
        title: 'VUE.JS IS AWESOME!',
        newTodo:'', //initialize to an empty string
        todos:[] // assign "todos" to an arry
    },
    //Object: methods
    methods: { 
        addTodo() { //function: addTodo()
            this.todos.push({ // push in properties of object...
                title: this.newTodo,
                done: false
            });
            this.newTodo = ''; //clear out  the input box...
        },
        removeTodo(todo) {
            const todoIndex = this.todos.indexOf(todo);
            this.todos.splice(todoIndex, 1);
        },
        allDone() {
            this.todos.forEach(todo => {
                todo.done = true;
            });
        }
    }
});