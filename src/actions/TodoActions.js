import dispatcher from '../dispatcher';

export function createTodo(text) {
    dispatcher.dispatch({
        type:"CREATE_TODO",
        text,
    })
}
export function deleteTodo(id) {
    dispatcher.dispatch({
        type:"DELETE_TODO",
        id,
    })
}
export function updateTodo(id,text) {
    dispatcher.dispatch({
        type:"UPDATE_TODO",
        id,
        text,
    })
}
export function reloadTodos() {
    /*axios.get("somurl.com").then((data)=>{
        console.log("some data received ",data);
    });*/

    dispatcher.dispatch({type:"FETCH_TODOS"});
    setTimeout(()=>{
        dispatcher.dispatch({
            type:"RECEIVE_TODOS",
            todos:[
                {id:1,text:"Pay Bills",complete:true},
                {id:2,text:"Second Todo",complete:false},
                {id:3,text:"Third Todo",complete:true},
                {id:4,text:"Fourth Todo",complete: false},
            ]
        });
    },1000)

}