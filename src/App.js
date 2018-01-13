import React from 'react';
import ReactDOM from 'react-dom';
import './assets/bootstrap.min.css';
import {Router,Route,IndexRoute,withRouter as hashHistory} from 'react-router-dom';
import Layout from "./pages/Layout";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import {Switch} from "react-router-dom";
import Nav from "./Component/Nav";

const app=document.getElementById('root');
ReactDOM.render(
    <Router history={hashHistory}>
        <Switch>
        <Nav/>
        <IndexRoute path="/" component={Layout}>
            <Route path="/features" component={Features}></Route>
            <Route path="/pricing" component={Pricing}></Route>
            <Route path="/about" component={About}></Route>
        </IndexRoute>
        </Switch>
    </Router>
    ,app);
