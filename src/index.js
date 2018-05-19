import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import 'typeface-roboto';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import * as reducers from './store/reducers';
import sagaMiddleware from './store/sagaMiddleware';

import theme from './themes/main';

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
