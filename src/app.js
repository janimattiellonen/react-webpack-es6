require('./app.less');

import React from "react";
import { Router, Route, Redirect } from 'react-router';
import { history } from 'react-router/lib/HashHistory';
import TestApp from "./components/TestApp";
import Home from "./components/Home";
import GameView from "./components/GameView";
import flux from "./flux";

var routes = (
    <Router history={history}>
        <Redirect from="/" to="/home" />
        <Route c={TestApp} path="/">
            <Route name="home" path="home" component={Home}/>
            <Route name="game" path="game" component={GameView}/>
        </Route>
    </Router>
);

React.render(routes, document.getElementById('app'));