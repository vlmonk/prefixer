import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import  { Provider } from 'react-redux';

import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import App from './components/App.jsx';
import appReducer from './reducers';

const loggerMiddleware = createLogger();


const store = createStore(appReducer, applyMiddleware(thunkMiddleware, loggerMiddleware));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('content'));
