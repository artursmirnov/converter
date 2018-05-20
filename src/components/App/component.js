import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import _ from 'lodash';

import CssBaseline from '@material-ui/core/CssBaseline';
import { Route } from 'react-router-dom';
import Layout from '../Layout';

import * as routes from '../../config/routes';
import * as pageSelectors from '../../store/reducers/page';

import styles from './styles';

export class App extends Component {

  render() {
    const { classes, currentPageTitle } = this.props;

    return (
      <Fragment>
        <CssBaseline />
        <div className={ classes.root }>
          <Layout pageTitle={ currentPageTitle }>
            { _.values(routes).map((route, index) => (
              <Route path={ route.path } exact={ route.exact } component={ route.component } key={ index } />
            ))}
          </Layout>
        </div>
      </Fragment>
    );
  }

}

export const AppStyled = withStyles(styles)(App);

function mapStateToProps(state) {
  return {
    currentPageTitle: pageSelectors.getTitle(state)
  };
}

export const AppConnected = connect(mapStateToProps)(AppStyled);

export default AppConnected;
