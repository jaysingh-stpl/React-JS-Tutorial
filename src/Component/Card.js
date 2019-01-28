import React, {Component} from 'react';
import * as TodoActions from '../actions/TodoActions';
import './Card.css';
export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoId:this.props.todoId,
            header: this.props.header,
            title: this.props.title,
            message: this.props.message,
            edit:false
        };
    }
    handleChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    deleteTodo(){
        TodoActions.deleteTodo(this.state.todoId);
    }

    updateTodo(){
        this.setState({edit:true})
    }

    saveTodo(){
        const formData ={...this.state};
        TodoActions.updateTodo(formData.todoId,formData.title,formData.message);
        this.setState({edit:false})
    }

    render() {

        let data = this.state;

        if(data.edit){
         return(
             <div className="col s12 m4">
                 <div className="card">
                     <div className="card-content">
                         <span className="card-title">
                             <input type="text" name="title" onChange={this.handleChange.bind(this)} value={data.title} />
                         </span>
                         <p>
                             <input type="hidden" name="todoId" onChange={this.handleChange.bind(this)} value={data.todoId}/>
                             <input type="text" name="message" onChange={this.handleChange.bind(this)} value={data.message}/>
                         </p>
                     </div>
                     <div className="card-action">
                         <a href="javascript:void(0)" onClick={this.saveTodo.bind(this)}>Save</a>
                     </div>
                 </div>
             </div>
         )
        }
        return (
            <div className="col s12 m4">
                <div className="card blue-grey">
                    <div className="card-content">
                        <span className="card-title">{data.title}</span>
                        <p className="truncate">{data.message}</p>
                    </div>
                    <div className="card-action">
                        <a href="javascript:void(0)" onClick={this.updateTodo.bind(this)}>Update</a>
                        <a href="javascript:void(0)" onClick={this.deleteTodo.bind(this)}>Delete</a>
                    </div>
                </div>
            </div>
        )
    }
}