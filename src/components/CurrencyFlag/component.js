import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Avatar from '@material-ui/core/Avatar';
import { Help } from 'mdi-material-ui';

import styles from './styles';

export class CurrencyFlag extends Component {

  static propTypes = {
    countryCode: PropTypes.string
  }

  static defaultProps = {
  }

  render() {
    const { classes, countryCode } = this.props;

    return (
      <div className={ classes.root }>
        <Avatar>
          { countryCode ? (
            <span>
              { countryCode }
            </span>
          ) : (
            <Help />
          )}
        </Avatar>
      </div>
    );
  }

}

export const CurrencyFlagStyled = withStyles(styles)(CurrencyFlag);

export default CurrencyFlagStyled;
