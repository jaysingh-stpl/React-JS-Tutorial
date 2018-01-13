import {EventEmitter} from 'events';
import dispatcher from "../dispatcher";
class TodoStore extends EventEmitter{
    constructor(){
        super();
        this.todos=[
            {id:1,text:"Pay Bills",complete:true},
            {id:2,text:"Second Todo",complete:false},
            {id:3,text:"Third Todo",complete:true},
            {id:4,text:"Fourth Todo",complete: false},
            {id:5,text:"Fifth Todo",complete:true},
            {id:6,text:"Six Todo",complete: false}
        ];

    }
    createTodo(text){
        const id=Date.now();
        this.todos.push({
            id,
            text,
            complete:false
        });
        this.emit("change");
    }
    getAll(){
        return this.todos;
    }
    handleActions(action){
        switch(action.type){
            case "CREATE_TODO" : {
                this.createTodo(action.text);
                break;
            }
            case "RECEIVE_TODOS" : {
                this.todos=action.todos;
                this.emit("change");
                break;
            }
        }
        console.log("Todo Store received an action",action);
    }
}
const todoStore=new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));
 window.todoStore=todoStore;
window.dispatcher=dispatcher;
export default todoStore;