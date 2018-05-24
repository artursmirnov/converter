import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { isEmpty } from 'lodash';
import { withRouter } from 'react-router-dom';
import currencyShape from '../../helpers/currencyShape';

import Loading from '../../components/Loading';
import CurrencyConverter from '../../components/CurrencyConverter';
import Message from '../../components/Message';
import Button from '@material-ui/core/Button';
import ConverterGrid from '../../components/ConverterGrid';
import BaseCurrency from '../../components/BaseCurrency';
import BottomPanel from '../../components/BottomPanel';
import ActionsGrid from '../../components/ActionsGrid';

import { CurrencySelectRoute } from '../../config/routes';

import { FETCH_CURRENCY_RATES_REQUESTED, FETCH_CURRENCIES_REQUESTED } from '../../store/actionTypes';

import {
  fetchCurrenciesRequested,
  fetchCurrencyRatesRequested,
  setPageTitle,
  clearFavourites,
  setBaseCurrency,
  toggleCurrency,
  setAmount
} from '../../store/actions';

import * as loadingSelectors from '../../store/reducers/loading';
import * as currenciesSelectors from '../../store/reducers/currencies';

import config from '../../config/app';

import styles from './styles';

export class CurrencyConverterPage extends Component {

  static propTypes = {
    favouriteCurrencies: PropTypes.objectOf(currencyShape()),
    baseCurrency: currencyShape(),
    amount: PropTypes.string,
    isLoading: PropTypes.bool,
    fetchCurrencies: PropTypes.func,
    fetchCurrencyRates: PropTypes.func,
    setPageTitle: PropTypes.func,
    clearFavourites: PropTypes.func,
    setBaseCurrency: PropTypes.func,
    removeFromList: PropTypes.func,
    setAmount: PropTypes.func
  }

  static defaultProps = {
    favouriteCurrencies: {},
    isLoading: false,
    amount: config.defaultAmount,
    fetchCurrencies: () => {},
    fetchCurrencyRates: () => {},
    setPageTitle: () => {},
    clearFavourites: () => {},
    setBaseCurrency: () => {},
    removeFromList: () => {},
    setAmount: () => {}
  }

  componentDidMount() {
    this.props.setPageTitle('ASCurr');
    this.props.fetchCurrencies();
    this.props.fetchCurrencyRates();
  }

  render() {
    const { classes, isLoading, favouriteCurrencies, baseCurrency, amount } = this.props;
    const hasFavouriteCurrencies = !isEmpty(favouriteCurrencies);

    return (
      <div className={ classes.root }>
        { !isLoading &&
          <BaseCurrency
            currency={ baseCurrency }
            amount={ amount }
            onSelectBaseCurrency={ this.handleSelectBaseCurrency }
            onAmountChange={ this.handleAmountChange }
          />
        }
        <ConverterGrid>
          { isLoading ? (
            <Loading visible={ true } showBackdrop={ false } />
          ) : hasFavouriteCurrencies ? (
            <CurrencyConverter
              currencies={ favouriteCurrencies }
              amount={ amount }
              baseCurrency={ baseCurrency }
              onSetBaseCurrency={ this.handleSetBaseCurrency }
              onRemoveFromList={ this.handleRemoveFromList }
            />
          ) : (
            <Message text='No currencies selected.' />
          )}
        </ConverterGrid>
        <BottomPanel>
          <ConverterGrid>
            <ActionsGrid>
              { hasFavouriteCurrencies &&
                <Button
                  fullWidth
                  color='primary'
                  onClick={ this.handleClearList }
                >
                  Clear List
                </Button>
              }
              <Button
                fullWidth
                variant='raised'
                color='primary'
                onClick={ this.handleSelectCurrenciesClick }
              >
                Select Currencies
              </Button>
            </ActionsGrid>
          </ConverterGrid>
        </BottomPanel>
      </div>
    );
  }

  handleSelectCurrenciesClick = () => {
    this.props.history.push(CurrencySelectRoute.path);
  }

  handleSelectBaseCurrency = () => {
    this.props.history.push(`${CurrencySelectRoute.path}?base`)
  }

  handleClearList = () => {
    this.props.clearFavourites();
  }

  handleSetBaseCurrency = currency => {
    this.props.setBaseCurrency(currency.code);
  }

  handleRemoveFromList = currency => {
    this.props.removeFromList(currency);
  }

  handleAmountChange = (amount) => {
    this.props.setAmount(amount);
  }

}

export const CurrencyConverterPageStyled = withStyles(styles)(CurrencyConverterPage);

function mapStateToProps(state) {
  const isLoading = action => loadingSelectors.isLoading(state, action);
  const { getFavouriteCurrencies, getBaseCurrency, getAmount } = currenciesSelectors;
  return {
    isLoading: isLoading(FETCH_CURRENCIES_REQUESTED) || isLoading(FETCH_CURRENCY_RATES_REQUESTED),
    favouriteCurrencies: getFavouriteCurrencies(state),
    baseCurrency: getBaseCurrency(state),
    amount: getAmount(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCurrencies: () => dispatch(fetchCurrenciesRequested()),
    fetchCurrencyRates: () => dispatch(fetchCurrencyRatesRequested()),
    setPageTitle: (title) => dispatch(setPageTitle(title)),
    clearFavourites: () => dispatch(clearFavourites()),
    setBaseCurrency: code => dispatch(setBaseCurrency(code)),
    removeFromList: currency => dispatch(toggleCurrency(currency)),
    setAmount: amount => dispatch(setAmount(amount))
  };
}

export const CurrencyConverterPageConnected = connect(mapStateToProps, mapDispatchToProps)(CurrencyConverterPageStyled);

export default withRouter(CurrencyConverterPageConnected);
