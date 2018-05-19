import { FETCH_CURRENCIES_SUCCEEDED } from '../actionTypes';

export default function fetchCurrenciesSucceeded(currencies = {}) {
  return {
    type: FETCH_CURRENCIES_SUCCEEDED,
    currencies
  }
}
