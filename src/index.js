import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import JoinedReducers from './reducers'

const logger = createLogger();

const enhancers = compose(
	applyMiddleware(thunkMiddleware, logger)
);


const store = createStore(JoinedReducers, composeWithDevTools(enhancers));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
