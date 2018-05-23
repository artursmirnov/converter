import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { isEmpty } from 'lodash';
import { withRouter } from 'react-router-dom';

import Loading from '../../components/Loading';
import CurrencyConverter from '../../components/CurrencyConverter';
import Message from '../../components/Message';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import config from '../../config/app';
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
    favouriteCurrencies: PropTypes.objectOf(PropTypes.object).isRequired,
    baseCurrency: PropTypes.string,
    isLoading: PropTypes.bool.isRequired,
    fetchCurrencies: PropTypes.func.isRequired,
    fetchCurrencyRates: PropTypes.func.isRequired,
    setPageTitle: PropTypes.func.isRequired
  }

  static defaultProps = {
    favouriteCurrencies: {},
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
    const { classes, isLoading, favouriteCurrencies, baseCurrency } = this.props;

    return (
      <div className={ classes.root }>
        <Grid container spacing={24} >
          <Grid item sm ></Grid>
          <Grid item xs={12} sm={9} lg={6} >
            { isLoading ? (
              <Loading visible={ true } />
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
          </Grid>
          <Grid item sm ></Grid>
        </Grid>
      </div>
    );
  }

  handleSelectCurrenciesClick = () => {
    this.props.history.push(CurrencySelectRoute.path);
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
