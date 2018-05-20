import { call, put, takeLatest } from 'redux-saga/effects';
import Api from '../../services/Api';

import { FETCH_CURRENCIES_REQUESTED } from '../actionTypes';

import {
  fetchCurrenciesSucceeded,
  fetchCurrenciesFailed
} from '../actions';

function* fetchCurrencies() {
  try {
    const currencies = yield call(Api.fetchCurrencies);
    const currenciesByCode = {};
    currencies.forEach(currency => {
      if (currenciesByCode[currency.code]) {
        currenciesByCode[currency.code].countries.push(currency.country);
      } else {
        currency.countries = [ currency.country ];
        delete currency.country;
        currenciesByCode[currency.code] = currency;
      }
    });
    yield put(fetchCurrenciesSucceeded(currenciesByCode));
  } catch (error) {
    yield put(fetchCurrenciesFailed(error));
  }
}

function* saga() {
  yield takeLatest(FETCH_CURRENCIES_REQUESTED, fetchCurrencies);
}

export default saga;
