import dispatcher from '../dispatcher';

export function createTodo(text) {
    dispatcher.dispatch({
        type: "CREATE_TODO",
        text
    })
}
export function deleteTodo(todoId) {
    dispatcher.dispatch({
        type: "DELETE_TODO",
        todoId
    })
}
export function updateTodo(id, title,message) {
    dispatcher.dispatch({
        type: "UPDATE_TODO",
        id,
        title,
        message
    })
}
export function getAllTodo() {
    dispatcher.dispatch({
        type: "GET_ALL_TODO"
    })
}
export function reloadTodos() {
    /*axios.get("somurl.com").then((data)=>{
     console.log("some data received ",data);
     });*/

    dispatcher.dispatch({type: "FETCH_TODOS"});
    setTimeout(()=> {
        dispatcher.dispatch({
            type: "RECEIVE_TODOS",
            todos: [
                {id: 1, header:'First Todo', text: "Pay Bills", complete: true},
                {id: 2, header:'Second Todo', text: "Pay Electricity Bills", complete: false},
                {id: 3, header:'Third Todo', text: "Pay Water Bills", complete: true},
                {id: 4, header:'Fourth Todo', text: "Pay Fees", complete: false},
                {id: 5, header:'Fifth Todo', text: "Pay Tax", complete: true},
                {id: 6, header:'Six Todo', text: "Buy some products", complete: false}
            ]
        });
    }, 1000)

}