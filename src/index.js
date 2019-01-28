import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Layout from "./pages/Layout";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Nav from "./Component/Nav";
import Home from "./pages/Home";


const app = document.getElementById('root');
ReactDOM.render(
    <Router>
        <div className="container-fluid">
            <Nav/>
            <Switch>
                <Route exact path="/" component={Layout}></Route>
                <Route path="/pricing" component={Pricing}></Route>
                <Route path="/home" component={Home}></Route>
                <Route path="/features" component={Features}></Route>
                <Route path="/about" component={About}></Route>
            </Switch>
        </div>
    </Router>
    , app);