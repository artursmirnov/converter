import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';

import styles from './styles';

export class Loading extends Component {

  static propTypes = {
    visible: PropTypes.bool.isRequired
  }

  static defaultProps = {
    visible: false
  }

  render() {
    const { classes, visible } = this.props;

    return visible && (
      <div className={ classes.root }>
        <Backdrop open={ visible } className={ classes.backdrop } />
        <CircularProgress size={100} thickness={1} />
      </div>
    );
  }

}

export const LoadingStyled = withStyles(styles)(Loading);

export default LoadingStyled;
