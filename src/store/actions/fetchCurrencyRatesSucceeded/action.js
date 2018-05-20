import { FETCH_CURRENCY_RATES_SUCCEEDED } from '../../actionTypes';

export default function fetchCurrencyRatesSucceeded(currencies) {
  return {
    type: FETCH_CURRENCY_RATES_SUCCEEDED,
    currencies
  }
}
