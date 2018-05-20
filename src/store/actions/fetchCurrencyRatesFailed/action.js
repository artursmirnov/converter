import { FETCH_CURRENCY_RATES_FAILED } from '../../actionTypes';

export default function fetchCurrencyRatesFailed() {
  return {
    type: FETCH_CURRENCY_RATES_FAILED
  }
}
