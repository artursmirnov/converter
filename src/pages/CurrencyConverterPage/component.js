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
  clearFavourites
} from '../../store/actions';

import * as loadingSelectors from '../../store/reducers/loading';
import * as currenciesSelectors from '../../store/reducers/currencies';

import styles from './styles';

export class CurrencyConverterPage extends Component {

  static propTypes = {
    favouriteCurrencies: PropTypes.objectOf(currencyShape()),
    baseCurrency: currencyShape(),
    isLoading: PropTypes.bool,
    fetchCurrencies: PropTypes.func,
    fetchCurrencyRates: PropTypes.func,
    setPageTitle: PropTypes.func,
    clearFavourites: PropTypes.func
  }

  static defaultProps = {
    favouriteCurrencies: {},
    isLoading: false,
    fetchCurrencies: () => {},
    fetchCurrencyRates: () => {},
    setPageTitle: () => {},
    clearFavourites: () => {}
  }

  componentDidMount() {
    this.props.setPageTitle('ASCurr');
    this.props.fetchCurrencies();
    this.props.fetchCurrencyRates();
  }

  render() {
    const { classes, isLoading, favouriteCurrencies, baseCurrency } = this.props;
    const hasFavouriteCurrencies = !isEmpty(favouriteCurrencies);

    return (
      <div className={ classes.root }>
        { !isLoading &&
          <BaseCurrency
            currency={ baseCurrency }
            onSelectBaseCurrency={ this.handleSelectBaseCurrency }
          />
        }
        <ConverterGrid>
          { isLoading ? (
            <Loading visible={ true } showBackdrop={ false } />
          ) : hasFavouriteCurrencies ? (
            <CurrencyConverter
              currencies={ favouriteCurrencies }
              baseCurrency={ baseCurrency }
            />
          ) : (
            <Message text='No currencies selected.' />
          )}
        </ConverterGrid>
        <BottomPanel>
          <ConverterGrid>
            <ActionsGrid>
              <Button
                fullWidth
                variant='raised'
                color='primary'
                onClick={ this.handleSelectCurrenciesClick }
              >
                Select Currencies
              </Button>
              { hasFavouriteCurrencies &&
                <Button
                  fullWidth
                  color='primary'
                  onClick={ this.handleClearList }
                >
                  Clear List
                </Button>
              }
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

}

export const CurrencyConverterPageStyled = withStyles(styles)(CurrencyConverterPage);

function mapStateToProps(state) {
  const isLoading = action => loadingSelectors.isLoading(state, action);
  const { getFavouriteCurrencies, getBaseCurrency } = currenciesSelectors;
  return {
    isLoading: isLoading(FETCH_CURRENCIES_REQUESTED) || isLoading(FETCH_CURRENCY_RATES_REQUESTED),
    favouriteCurrencies: getFavouriteCurrencies(state),
    baseCurrency: getBaseCurrency(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCurrencies: () => dispatch(fetchCurrenciesRequested()),
    fetchCurrencyRates: () => dispatch(fetchCurrencyRatesRequested()),
    setPageTitle: (title) => dispatch(setPageTitle(title)),
    clearFavourites: () => dispatch(clearFavourites())
  };
}

export const CurrencyConverterPageConnected = connect(mapStateToProps, mapDispatchToProps)(CurrencyConverterPageStyled);

export default withRouter(CurrencyConverterPageConnected);
