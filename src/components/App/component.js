import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import _ from 'lodash';

import CssBaseline from '@material-ui/core/CssBaseline';
import { Route } from 'react-router-dom';

import * as routes from '../../config/routes';

import styles from './styles';

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <CssBaseline />
        <div className={ classes.root }>
          { _.values(routes).map((route, index) => (
            <Route path={ route.path } exact={ route.exact } component={ route.component } key={ index } />
          ))}
        </div>
      </Fragment>
    );
  }
}

export default withStyles(styles)(App);
