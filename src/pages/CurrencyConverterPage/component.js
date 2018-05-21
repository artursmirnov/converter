import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import Loading from '../../components/Loading';
import CurrencyConverter from '../../components/CurrencyConverter';

import config from '../../config/app';

import { FETCH_CURRENCY_RATES_REQUESTED, FETCH_CURRENCIES_REQUESTED } from '../../store/actionTypes';

import {
  fetchCurrenciesRequested,
  fetchCurrencyRatesRequested,
  setPageTitle
} from '../../store/actions';

import * as loadingSelectors from '../../store/reducers/loading';
import * as currenciesSelectors from '../../store/reducers/currencies';

import styles from './styles';

export class CurrencyConverterPage extends Component {

  static propTypes = {
    currencies: PropTypes.objectOf(PropTypes.object).isRequired,
    baseCurrency: PropTypes.string,
    isLoading: PropTypes.bool.isRequired,
    fetchCurrencies: PropTypes.func.isRequired,
    fetchCurrencyRates: PropTypes.func.isRequired,
    setPageTitle: PropTypes.func.isRequired
  }

  static defaultProps = {
    currencies: {},
    baseCurrency: config.baseCurrency,
    isLoading: false,
    fetchCurrencies: () => {},
    fetchCurrencyRates: () => {},
    setPageTitle: () => {}
  }

  componentDidMount() {
    this.props.setPageTitle('Currency Converter');
    this.props.fetchCurrencies();
    this.props.fetchCurrencyRates();
  }

  render() {
    const { classes, isLoading, currencies, baseCurrency } = this.props;

    return (
      <div className={ classes.root }>
        { isLoading ? (
          <Loading visible={ true } />
        ) : (
          <CurrencyConverter currencies={ currencies } baseCurrency={ baseCurrency } />
        )}
      </div>
    );
  }

}

export const CurrencyConverterPageStyled = withStyles(styles)(CurrencyConverterPage);

function mapStateToProps(state) {
  const isLoading = action => loadingSelectors.isLoading(state, action);
  return {
    isLoading: isLoading(FETCH_CURRENCIES_REQUESTED) || isLoading(FETCH_CURRENCY_RATES_REQUESTED),
    currencies: currenciesSelectors.getCurrencies(state),
    baseCurrency: currenciesSelectors.getBaseCurrency(state)
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
