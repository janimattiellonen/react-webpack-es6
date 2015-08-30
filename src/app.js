require('./app.less');
require('react-select/less/default.less');

import React from "react";
import { Router, Route, Redirect } from 'react-router';
import { history } from 'react-router/lib/HashHistory';
import TestApp from "./components/TestApp";
import Intro from "./components/IntroView";
import GameView from "./components/GameView";
import PlayerSelectionView from "./components/Game/PlayerSelectionView";
import ConfirmSelectionsView from "./components/Game/ConfirmSelectionsView";
import GamePlayView from "./components/Game/GamePlayView";

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import * as reducers from './reducers';
import promiseMiddleware from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

React.render(
	<Provider store = {store}>
		{	() =>
			<Router history={history}>
		        <Redirect from="/" to="/intro" />
		        <Route component={TestApp} path="/">
		            <Route name="intro" path="intro" component={Intro}/>
		            <Route name="game" path="new-game" component={GameView}/>
		            <Route name="select-players" path="select-players" component={PlayerSelectionView}/>
		            <Route name="confirm-selections" path="confirm-selections" component={ConfirmSelectionsView}/>
		            <Route name="game-play" path="game" component={GamePlayView}/>
		        </Route>
		    </Router>	
		}
	</Provider>,
	document.getElementById('app')
);
