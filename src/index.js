import App from './Routes/CommonComponents/app.js';

import ReactDom from 'react-dom';
import React from 'react';
import '../HtmlCss/css/bootCss/bootstrap.css';
import '../HtmlCss/css/style.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from "redux";
import { homeReducer } from "./reducers/homeReducer.js";
import { errorHandleReducer } from "./reducers/errorHandleReducer.js";
import { loaderReducer } from "./reducers/loaderReducer.js";
import { searchReducer } from "./reducers/searchReducer.js";

import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/sagaFetchHospitals";

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
    state: homeReducer,
    error:errorHandleReducer,
    loader:loaderReducer,
    search:searchReducer

});

const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
ReactDom.render(
    <Provider store={store}>
        <Router>
           <App />  
        </Router>
    </Provider>

    , document.getElementById('container')
);
