import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { routerReducer, routerMiddleware } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'

import AppRoot from './components/AppRoot.js';


var initialContent = {

};

const reducers = combineReducers({
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
                <Route path="login" component={Login}/>
                <Route path="search" component={Search}/>
                <Route path="givingHistory" component={GivingHistory}/>
                <Route path="basket" component={Basket}/>
                <Route path="donate/:ein" component={Donate}/>
                <Route path="checkout" component={Checkout}/>
                <Route path="confirmation/:orderId" component={Confirmation}/>
                <Route path="updateDonation/:donationId" component={UpdateDonation}/>
                <Route path="giftMessage/:donationId" component={GiftMessage}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app-root')
);
