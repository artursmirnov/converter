import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import styles from './styles';

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <CssBaseline />
        <div className={ classes.root }>
          App
        </div>
      </Fragment>
    );
  }
}

export default withStyles(styles)(App);
