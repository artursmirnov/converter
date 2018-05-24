import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';

import Avatar from '@material-ui/core/Avatar';
import { Help } from 'mdi-material-ui';

import styles from './styles';

export class CurrencyFlag extends Component {

  static propTypes = {
    countryCode: PropTypes.string
  }

  static defaultProps = {
    countryCode: ''
  }

  render() {
    const { classes, countryCode } = this.props;
    const hasFlag = !!countryCode;
    const avatarClassName = classnames(classes.avatar, {
      'flag-icon-background': hasFlag,
      'flag-icon-squared': hasFlag,
      [`flag-icon-${countryCode.toLowerCase()}`]: hasFlag,
    })

    return (
      <div className={ classes.root }>
        <Avatar className={ avatarClassName } >
          { !hasFlag &&
            <Help />
          }
        </Avatar>
      </div>
    );
  }

}

export const CurrencyFlagStyled = withStyles(styles)(CurrencyFlag);

export default CurrencyFlagStyled;
