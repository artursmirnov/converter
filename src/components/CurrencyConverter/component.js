import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import _ from 'lodash';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import { ChevronDown } from 'mdi-material-ui';

import config from '../../config/app';

import styles from './styles';

export class CurrencyConverter extends Component {

  static propTypes = {
    currencies: PropTypes.objectOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      code: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      isFavourite: PropTypes.bool.isRequired,
      countries: PropTypes.arrayOf(PropTypes.string).isRequired,
      rate: PropTypes.number
    })).isRequired,
    baseCurrency: PropTypes.string
  }

  static defaultProps = {
    baseCurrency: config.baseCurrency
  }

  render() {
    const { classes, currencies, baseCurrency } = this.props;

    return (
      <div className={ classes.root }>
        <Grid container spacing={24} >
          <Grid item sm ></Grid>
          <Grid item xs={12} sm={9} lg={6} >
            <Typography paragraph variant='subheading' >
              Base currency: { baseCurrency }
            </Typography>
            { _.values(currencies).map(currency => (
              <ExpansionPanel key={ currency.id } >
                <ExpansionPanelSummary expandIcon={<ChevronDown />} className={ classes.panelSummary }>
                  <Typography className={ classes.code }>
                    { currency.code }
                  </Typography>
                  <Typography className={ classes.title } >
                    { currency.title }
                  </Typography>
                  <Typography className={ classes.rate } variant='title' >
                    { currency.rate ? currency.rate.toFixed(2) : '--.--' }
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Countries: { currency.countries.join(', ') }
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            ))}
          </Grid>
          <Grid item sm ></Grid>
        </Grid>
      </div>
    );
  }

}

export const CurrencyConverterStyled = withStyles(styles)(CurrencyConverter);

export default CurrencyConverterStyled;
