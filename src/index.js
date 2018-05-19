import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import 'typeface-roboto';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import * as reducers from './store/reducers';
import sagaMiddleware from './store/sagaMiddleware';

const store = createStore(combineReducers(reducers), applyMiddleware(sagaMiddleware));

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
