import { FETCH_CURRENCY_RATES_REQUESTED } from '../../actionTypes';

export default function fetchCurrencyRatesRequested() {
  return {
    type: FETCH_CURRENCY_RATES_REQUESTED
  }
}
