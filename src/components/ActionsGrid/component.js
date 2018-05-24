import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { isEmpty } from 'lodash';

import Grid from '@material-ui/core/Grid';

import styles from './styles';

export class ActionsGrid extends Component {

  static propTypes = {
    spacing: PropTypes.number
  }

  static defaultProps = {
    spacing: 24
  }

  render() {
    const { classes, spacing, children } = this.props;

    return (
      <div className={ classes.root }>
        <Grid container spacing={ spacing } >
          { children.map(( child, index ) => (
            !isEmpty(child) &&
            <Grid item xs key={ index } >
              { child }
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }

}

export const ActionsGridStyled = withStyles(styles)(ActionsGrid);

export default ActionsGridStyled;
