import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: true
        }
    }

    navBar() {
        this.setState({collapsed: (this.state.collapsed) ? false : true});
    }

    render() {

        return (
            <div className="row">
            <nav>
                <div className="nav-wrapper">
                    <Link to={'/'} className="brand-logo">React JS</Link>
                    <ul className="right hide-on-med-and-down">
                        <li>
                            <Link to={'/home'} onClick={this.navBar.bind(this)}>Home</Link>
                        </li>
                        <li>
                            <Link to={'/features'} onClick={this.navBar.bind(this)}>Features</Link>
                        </li>
                        <li>
                            <Link to={'/pricing'} onClick={this.navBar.bind(this)}>Pricing</Link>
                        </li>
                        <li>
                            <Link to={'/about'} onClick={this.navBar.bind(this)}>About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
                </div>
        )
    }
}
export default withRouter(Nav);