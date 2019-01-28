import React, {Component} from 'react';
import Card from "../Component/Card";
import TodoStore from "../store/TodoStore";
import * as TodoActions from '../actions/TodoActions';

export default class Features extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: TodoStore.getAll(),
        };
        this.getTodos = this.getTodos.bind(this);
    }

    componentWillMount() {
        TodoStore.on("change", ()=> {
            this.setState({todos: TodoStore.getAll(),})
        })
    }

    componentWillUnmount() {
        TodoStore.removeListener("change", this.getTodos)
    }

    getTodos() {
        this.setState({todos: TodoStore.getAll(),})
    }

    createTodo() {
        //this.props.history.replace('/about')
        TodoActions.createTodo("To do created by JAY SINGH");
    }

    reloadTodos() {
        TodoActions.reloadTodos();
    }

    render() {
        const {todos}=this.state;
        const TodoComponent = todos.map((todo)=> {
            return (
                <Card
                    key={todo.id}
                    todoId={todo.id}
                    title={todo.header}
                    message={todo.text}
                />
            );
        });

        return (
            <div className={'row'}>
                <div className="col s12">
                    <div className="col s12 m2">
                    <a href="javascript:void(0)" className={"waves-effect waves-light btn"} onClick={this.createTodo.bind(this)}>Create Todo!</a>
                    </div>
                    <div className="col s12 m2">
                    <a href="javascript:void(0)" className={"waves-effect waves-light btn"} onClick={this.reloadTodos.bind(this)}>Refresh Todo!</a>
                    </div>
                </div>
                <div className='col s12'>
                    {TodoComponent}
                </div>

            </div>

        )
    }
}