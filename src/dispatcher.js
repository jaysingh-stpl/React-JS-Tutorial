import {Dispatcher} from 'flux';
import TodoStore from './store/TodoStore'
var AppDispatcher = new Dispatcher();

AppDispatcher.register(function (action) {
        switch (action.type) {
            case "CREATE_TODO" :
            {
                TodoStore.createTodo(action.text);
                TodoStore.emitChange();
                break;
            }
            case "UPDATE_TODO" :
            {
                TodoStore.updateTodo(action);
                TodoStore.emitChange();
                break;
            }
            case "DELETE_TODO" :
            {
                TodoStore.deleteTodo(action.todoId);
                TodoStore.emitChange();
                break;
            }
            case "RECEIVE_TODOS" :
            {
                TodoStore.todos = this.todos;
                TodoStore.emitChange();
                break;
            }
            case "GET_ALL_TODO" :
            {
                TodoStore.getAll();
                TodoStore.emitChange();
                break;
            }
            default:{
                console.log("No Action found....")
            }
        }
        console.log("Todo Store received an action", action.type);
});

export default AppDispatcher