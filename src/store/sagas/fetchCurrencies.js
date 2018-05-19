import { call, put, takeLatest } from 'redux-saga/effects';
import _ from 'lodash';
import Api from '../../services/Api';

import { FETCH_CURRENCIES_REQUESTED } from '../actionTypes';

import {
  fetchCurrenciesSucceeded,
  fetchCurrenciesFailed
} from '../actions';

function* fetchCurrencies() {
  try {
    const currencies = yield call(Api.fetchCurrencies);
    const currenciesByCode = _.keyBy(currencies, currency => currency.code);
    yield put(fetchCurrenciesSucceeded(currenciesByCode));
  } catch (error) {
    yield put(fetchCurrenciesFailed(error));
  }
}

function* saga() {
  yield takeLatest(FETCH_CURRENCIES_REQUESTED, fetchCurrencies);
}

export default saga;
