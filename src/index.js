import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import 'typeface-roboto';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import runSagas from './helpers/runSagas';

import * as reducers from './store/reducers';
import * as sagas from './store/sagas';

import theme from './themes/main';

const sagaMiddleware = createSagaMiddleware();
runSagas(sagaMiddleware, sagas);

const store = createStore(combineReducers(reducers), applyMiddleware(sagaMiddleware));

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={ store }>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
registerServiceWorker();
