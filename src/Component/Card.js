import React,{Component} from 'react';

export default class Card extends Component{
    constructor(props){
        super(props)
        this.state={
         header:'Header',
         title:'Title',
         message:'Message',
        }
    }
    render(){

        return(
            <div className="col-md-4">
                <div className="card border-primary mb-3" >
                    <div className="card-header">{this.props.header}</div>
                    <div className="card-body text-primary">
                        <h4 className="card-title">{this.props.title}</h4>
                        <p className="card-text">{this.props.message}</p>
                    </div>
                </div>
            </div>
        )
    }
}