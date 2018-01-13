import React,{Component} from 'react';
import Card from "../Component/Card";
import TodoStore from "../store/TodoStore";
import * as TodoActions from '../actions/TodoActions';

export default class Features extends Component{
    constructor(props){
        super(props);
        this.state={
            todos:TodoStore.getAll(),
        };
        this.getTodos=this.getTodos.bind(this);
    }
    componentWillMount(){
        TodoStore.on("change",()=> {this.setState({todos:TodoStore.getAll(),})})
    }
    componentWillUnmount(){
        TodoStore.removeListener("change",this.getTodos)
    }
    getTodos(){
        this.setState({todos:TodoStore.getAll(),})
    }
    createTodo(){
        //this.props.history.replace('/about')
        TodoActions.createTodo("JAY SINGH");
    }
    reloadTodos(){
        let data=Date.now();
        TodoActions.reloadTodos();
    }
    render(){
        const {todos}=this.state;
        console.log(todos);
        const TodoComponent=todos.map((todo)=>{
            return (
                <Card
                    key={todo.id}
                    header={todo.id}
                    title={todo.id}
                    message={todo.text}
                />
            );
        });

        return(
            <div className={'container'}>
                <div className={'row'}>
                    {TodoComponent}
                </div>
                <button className={"btn btn-success"} onClick={this.createTodo.bind(this)}>Create Todo!</button>
                <button className={"btn btn-danger"} onClick={this.reloadTodos.bind(this)}>Refresh Todo!</button>

            </div>

        )
    }
}