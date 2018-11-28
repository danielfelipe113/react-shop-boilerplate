//Botstrap init
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
//Font-awesome init
import 'font-awesome/css/font-awesome.min.css';
//React init
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Global CSS
import './index.css';
//Import Common

//Import Routes
import Home from './home/home';
import UsersDetail from './users/users.detail';
import AppContainer from './appContainer';
//ServiceWorker
import * as serviceWorker from './serviceWorker';

//Start App
ReactDOM.render(
    (
        <Router>
            <AppContainer>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/users/:id" exact component={UsersDetail} />
                </Switch>
            </AppContainer>
        </Router>
    ),
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
