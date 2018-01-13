import React,{Component} from 'react';

export default class Layout extends Component{
    render(){
        return(
            <div className={'Container'}>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}