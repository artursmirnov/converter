import React, { Component, Fragment } from 'react';
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

import { CurrencySelectRoute } from '../../config/routes';

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
    favouriteCurrencies: PropTypes.objectOf(currencyShape()).isRequired,
    baseCurrency: currencyShape(),
    isLoading: PropTypes.bool.isRequired,
    fetchCurrencies: PropTypes.func.isRequired,
    fetchCurrencyRates: PropTypes.func.isRequired,
    setPageTitle: PropTypes.func.isRequired
  }

  static defaultProps = {
    favouriteCurrencies: {},
    isLoading: false,
    fetchCurrencies: () => {},
    fetchCurrencyRates: () => {},
    setPageTitle: () => {}
  }

  componentDidMount() {
    this.props.setPageTitle('ASCurr');
    this.props.fetchCurrencies();
    this.props.fetchCurrencyRates();
  }

  render() {
    const { classes, isLoading, favouriteCurrencies, baseCurrency } = this.props;

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
          ) : !isEmpty(favouriteCurrencies) ? (
            <Fragment>
              <CurrencyConverter
                currencies={ favouriteCurrencies }
                baseCurrency={ baseCurrency }
              />
              <div className={ classes.selectCurrenciesButton } >
                <Button
                  color='primary'
                  onClick={ this.handleSelectCurrenciesClick }
                >
                  Select currencies
                </Button>
              </div>
            </Fragment>
          ) : (
            <Message text='No currencies selected.' >
              <Button
                variant='raised'
                color='primary'
                onClick={ this.handleSelectCurrenciesClick }
              >
                Select currencies
              </Button>
            </Message>
          )}
        </ConverterGrid>
      </div>
    );
  }

  handleSelectCurrenciesClick = () => {
    this.props.history.push(CurrencySelectRoute.path);
  }

  handleSelectBaseCurrency = () => {
    this.props.history.push(`${CurrencySelectRoute.path}?base`)
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
    setPageTitle: (title) => { dispatch(setPageTitle(title)) }
  };
}

export const CurrencyConverterPageConnected = connect(mapStateToProps, mapDispatchToProps)(CurrencyConverterPageStyled);

export default withRouter(CurrencyConverterPageConnected);
