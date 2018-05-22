import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import styles from './styles';

export class Message extends Component {

  static propTypes = {
    text: PropTypes.string
  }

  static defaultProps = {
    text: ''
  }

  render() {
    const { classes, text, children } = this.props;

    return (
      <div className={ classes.root }>
        <Typography variant='subheading' paragraph >
          { text }
        </Typography>
        <div className={ classes.childrenContainer } >
          { children }
        </div>
      </div>
    );
  }

}

export const MessageStyled = withStyles(styles)(Message);

export default MessageStyled;
