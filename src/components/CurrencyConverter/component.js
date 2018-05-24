import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { values } from 'lodash';
import currencyShape from '../../helpers/currencyShape';

import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import { ChevronDown } from 'mdi-material-ui';

import styles from './styles';

export class CurrencyConverter extends Component {

  static propTypes = {
    currencies: PropTypes.objectOf(currencyShape()).isRequired,
    baseCurrency: currencyShape()
  }

  static defaultProps = {
  }

  render() {
    const { classes, currencies } = this.props;

    return (
      <div className={ classes.root }>
        { values(currencies).map(currency => (
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
      </div>
    );
  }

}

export const CurrencyConverterStyled = withStyles(styles)(CurrencyConverter);

export default CurrencyConverterStyled;
