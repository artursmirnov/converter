import { put, throttle } from 'redux-saga/effects';

import { FILTER_CURRENCIES_REQUESTED } from '../../actionTypes';

import { filterCurrencies as filterCurrenciesAction } from '../../actions';

export const THROTTLE_TIMEOUT = 1000;

export function* filterCurrencies({ term }) {
  yield put(filterCurrenciesAction(term));
}

export function* saga() {
  yield throttle(THROTTLE_TIMEOUT, FILTER_CURRENCIES_REQUESTED, filterCurrencies);
}

export default saga;
