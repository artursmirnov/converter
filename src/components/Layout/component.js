import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Header from '../Header';
import Content from '../Content';

import styles from './styles';

export class Layout extends Component {

  static propTypes = {
    pageTitle: PropTypes.string.isRequired,
    showHeadingElevation: PropTypes.bool
  }

  static defaultProps = {
    showHeadingElevation: false
  }

  render() {
    const { classes, pageTitle, showHeadingElevation, children } = this.props;

    return (
      <div className={ classes.root }>
        <Header pageTitle={ pageTitle } showElevation={ showHeadingElevation } />
        <Content>
          { children }
        </Content>
      </div>
    );
  }

}

export const LayoutStyled = withStyles(styles)(Layout);

export default LayoutStyled;
