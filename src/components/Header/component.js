import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import styles from './styles';

export class Header extends Component {

  static propTypes = {
    pageTitle: PropTypes.string.isRequired,
    showElevation: PropTypes.bool.isRequired
  }

  static defaultProps = {
    showElevation: false
  }

  render() {
    const { classes, pageTitle, showElevation } = this.props;

    return (
      <div className={ classes.root }>
        <AppBar color="primary" elevation={ showElevation ? 1 : 0 } >
          <Toolbar>
            <Typography variant="title" className={ classes.header } >
              { pageTitle }
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

}

export const HeaderStyled = withStyles(styles)(Header);

export default HeaderStyled;
