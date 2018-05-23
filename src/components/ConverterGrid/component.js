import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import styles from './styles';

export class ConverterGrid extends Component {

  static propTypes = {
    spacing: PropTypes.number
  }

  static defaultProps = {
    spacing: 24
  }

  render() {
    const { classes, children, spacing } = this.props;

    return (
      <div className={ classes.root }>
        <Grid container spacing={ spacing } >
          <Grid item sm ></Grid>
          <Grid item xs={12} sm={9} lg={6} >
            { children }
          </Grid>
          <Grid item sm ></Grid>
        </Grid>
      </div>
    );
  }

}

export const ConverterGridStyled = withStyles(styles)(ConverterGrid);

export default ConverterGridStyled;
