import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Header from '../Header';

import styles from './styles';

export class Layout extends Component {

  static propTypes = {
    pageTitle: PropTypes.string.isRequired
  }

  static defaultProps = {
  }

  render() {
    const { classes, pageTitle, children } = this.props;

    return (
      <div className={ classes.root }>
        <Header pageTitle={ pageTitle } />
        { children }
      </div>
    );
  }

}

export const LayoutStyled = withStyles(styles)(Layout);

export default LayoutStyled;
