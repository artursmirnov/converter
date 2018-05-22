import { call, put, takeLatest, take, select } from 'redux-saga/effects';
import Api from '../../../services/Api';
import { forOwn } from 'lodash';

import {
  FETCH_CURRENCY_RATES_REQUESTED,
  FETCH_CURRENCIES_SUCCEEDED
} from '../../actionTypes';

import {
  fetchCurrencyRatesSucceeded,
  fetchCurrencyRatesFailed,
  addLoading,
  removeLoading
} from '../../actions';

export function* fetchCurrencyRates() {
  yield put(addLoading(FETCH_CURRENCY_RATES_REQUESTED));
  try {
    const currenciesWithRates = {};
    const baseCurrency = yield select(state => state.currencies.baseCurrency);
    const action = yield take(FETCH_CURRENCIES_SUCCEEDED);
    const currencies = action.currencies;
    const ratesResponse = yield call(Api.fetchCurrencyRates, baseCurrency);
    forOwn(currencies, (currency, code) => {
      const rate = ratesResponse.rates[code];
      currenciesWithRates[code] = { ...currency, rate };
    });
    yield put(fetchCurrencyRatesSucceeded(currenciesWithRates));
  } catch (error) {
    yield put(fetchCurrencyRatesFailed(error));
  }
  yield put(removeLoading(FETCH_CURRENCY_RATES_REQUESTED));
}

export function* saga() {
  yield takeLatest(FETCH_CURRENCY_RATES_REQUESTED, fetchCurrencyRates);
}

export default saga;
