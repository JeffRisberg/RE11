import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { routerReducer, routerMiddleware } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'

import AppRoot from './components/AppRoot.js';
import Home from './components/Home.js';
import FixedDataTableExample from './components/FixedDataTableExample.js';
import GriddleExample from './components/GriddleExample.js';
import ReactBootstrapExample from './components/ReactBootstrapExample.js';

import campaigns from './reducers/campaigns';
import keywords from './reducers/keywords';

const reducers = combineReducers({
    campaigns,
    keywords
});

const store = createStore(
    reducers,
    {},
    applyMiddleware(routerMiddleware(hashHistory), thunkMiddleware)
);

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={AppRoot}>
                <IndexRoute component={Home}/>
                <Route path="fixedDataTableExample" component={FixedDataTableExample}/>
                <Route path="griddleExample" component={GriddleExample}/>
                <Route path="reactBootstrapExample" component={ReactBootstrapExample}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app-root')
);
