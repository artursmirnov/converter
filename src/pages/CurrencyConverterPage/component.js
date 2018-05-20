import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import {
  fetchCurrenciesRequested,
  fetchCurrencyRatesRequested,
  setPageTitle
} from '../../store/actions';

import styles from './styles';

export class CurrencyConverterPage extends Component {

  static propTypes = {
    fetchCurrencies: PropTypes.func.isRequired,
    fetchCurrencyRates: PropTypes.func.isRequired,
    setPageTitle: PropTypes.func.isRequired
  }

  static defaultProps = {
    fetchCurrencies: () => {},
    fetchCurrencyRates: () => {},
    setPageTitle: () => {}
  }

  componentDidMount() {
    this.props.fetchCurrencies();
    this.props.fetchCurrencyRates();
    this.props.setPageTitle('Currency Converter');
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={ classes.root }>
        CurrencyConverterPage
      </div>
    );
  }

}

export const CurrencyConverterPageStyled = withStyles(styles)(CurrencyConverterPage);

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCurrencies: () => dispatch(fetchCurrenciesRequested()),
    fetchCurrencyRates: () => dispatch(fetchCurrencyRatesRequested()),
    setPageTitle: (title) => { dispatch(setPageTitle(title)) }
  };
}

export const CurrencyConverterPageConnected = connect(mapStateToProps, mapDispatchToProps)(CurrencyConverterPageStyled);

export default CurrencyConverterPageConnected;
