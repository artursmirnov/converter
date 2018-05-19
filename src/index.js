import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { HashRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import 'typeface-roboto';

import sagaMiddleware, { run } from './store/sagaMiddleware';
import * as sagas from './store/sagas';
import * as reducers from './store/reducers';

import { createServer } from './server';

import App from './components/App';

import theme from './themes/main';

const store = createStore(combineReducers(reducers), composeWithDevTools(
  applyMiddleware(sagaMiddleware)
));

run(sagas);

createServer();

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Router>
      <Provider store={ store }>
        <App />
      </Provider>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);
registerServiceWorker();
