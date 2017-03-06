import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { routerReducer, routerMiddleware } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'

import AppRoot from './components/AppRoot.js';
import Home from './components/Home.js';
import CampaignList from './components/CampaignList.js';
import FixedDataTableExample from './components/FixedDataTableExample.js';
import GriddleExample from './components/GriddleExample.js';

import campaigns from './reducers/campaigns';

var initialContent = {
    campaigns: {idList: [], records: {}}
};

const reducers = combineReducers({
    campaigns
});

const store = createStore(
    reducers,
    initialContent,
    applyMiddleware(routerMiddleware(hashHistory), thunkMiddleware)
);

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={AppRoot}>
                <IndexRoute component={Home}/>
                <Route path="campaignList" component={CampaignList}/>
                <Route path="resizeExample" component={FixedDataTableExample}/>
                <Route path="griddleExample" component={GriddleExample}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app-root')
);
