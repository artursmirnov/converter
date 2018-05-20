import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

export class Content extends Component {

  static propTypes = {
  }

  static defaultProps = {
  }

  render() {
    const { classes, children } = this.props;

    return (
      <div className={ classes.root }>
        { children }
      </div>
    );
  }

}

export const ContentStyled = withStyles(styles)(Content);

export default ContentStyled;
