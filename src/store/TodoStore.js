import {EventEmitter} from 'events';
// import dispatcher from "../dispatcher";
class TodoStore extends EventEmitter {
    constructor() {
        super();
        this.todos = [
            {id: 1, header: 'First Todo', text: "Pay Bills", complete: true},
            {id: 2, header: 'Second Todo', text: "Pay Electricity Bills", complete: false},
            {id: 3, header: 'Third Todo', text: "Pay Water Bills", complete: true},
            {id: 4, header: 'Fourth Todo', text: "Pay Fees", complete: false},
            {id: 5, header: 'Fifth Todo', text: "Pay Tax", complete: true},
            {id: 6, header: 'Six Todo', text: "Buy some products", complete: false}
        ];

    }

    createTodo(text) {
        const id = Date.now();
        let header = "New Todo";
        this.todos.push({
            id,
            header,
            text,
            complete: false
        });
    }

    deleteTodo(todoId) {
        var index = this.todos.map(x => {
            return x.id;
        }).indexOf(todoId);

        this.todos.splice(index, 1);
    }

    updateTodo(action) {

        var index = this.todos.findIndex(x => x.id == action.id);

        this.todos[index].title = action.title;
        this.todos[index].text = action.message;
        console.log('index', index);
        console.log('this.todos', this.todos);
    }

    getAll() {
        return this.todos;
    }

    emitChange() {
        this.emit("change");
    }

    addChangeListener(callback) {
        this.on('change', callback);
    }

    removeChangeListener(callback) {
        this.removeListener('change', callback);
    }

    /*handleActions(action) {
     switch (action.type) {
     case "CREATE_TODO" :
     {
     this.createTodo(action.text);
     break;
     }
     case "UPDATE_TODO" :
     {
     this.updateTodo(action);
     break;
     }
     case "DELETE_TODO" :
     {
     this.deleteTodo(action.todoId);
     break;
     }
     case "RECEIVE_TODOS" :
     {
     this.todos = this.todos;
     this.emit("change");
     break;
     }
     default:{
     console.log("No Action found....")
     }
     }
     console.log("Todo Store received an action", action.type);
     }*/
}
const todoStore = new TodoStore();
// dispatcher.register(todoStore.handleActions.bind(todoStore));
//window.todoStore = todoStore;
//window.dispatcher = dispatcher;
export default todoStore;