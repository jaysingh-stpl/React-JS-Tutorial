import React,{Component} from 'react';
import {Link ,withRouter} from 'react-router-dom';
class Nav extends Component{
    constructor(props){
        super(props);
        this.state={
            collapsed:true
        }

    }
    navBar(){
        this.setState({collapsed:(this.state.collapsed) ? false : true});
    }
    render(){
        const {pathname}=this.props.location;
        const homeClass=pathname.match(/^\/home/) ? "active" : "";
        const featuresClass=pathname.match(/^\/features/) ? "active" : "";
        const aboutClass=pathname.match(/^\/about/) ? "active" : "";
        const pricingClass=pathname.match(/^\/pricing/) ? "active" : "";
        const collapsed=this.state.collapsed ? "" :"show";

        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <Link to={'/'} className="navbar-brand" >React JS</Link>
                <button className="navbar-toggler" onClick={this.navBar.bind(this)} type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={'collapse navbar-collapse '+collapsed} id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        <li className={"nav-item "+homeClass}>
                            <Link to={'/home'} className="nav-link" onClick={this.navBar.bind(this)} >Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className={"nav-item "+featuresClass}>
                            <Link to={'/features'} className="nav-link" onClick={this.navBar.bind(this)} >Features</Link>
                        </li>
                        <li className={"nav-item "+pricingClass}>
                            <Link to={'/pricing'} className="nav-link" onClick={this.navBar.bind(this)} >Pricing</Link>
                        </li>
                        <li className={"nav-item "+aboutClass}>
                            <Link to={'/about'} className="nav-link" onClick={this.navBar.bind(this)} >About</Link>
                        </li>
                    </ul>
                    
                </div>
            </nav>
        )
    }
}
export default withRouter(Nav);