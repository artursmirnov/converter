import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import styles from './styles';

export class BottomPanel extends Component {

  static propTypes = {
    elevation: PropTypes.number
  }

  static defaultProps = {
    elevation: 1
  }

  render() {
    const { classes, elevation, children } = this.props;

    return (
      <div className={ classes.root }>
        <AppBar color='default' elevation={ elevation } className={ classes.appbar } >
          <Toolbar>
            { children }
          </Toolbar>
        </AppBar>
      </div>
    );
  }

}

export const BottomPanelStyled = withStyles(styles)(BottomPanel);

export default BottomPanelStyled;
