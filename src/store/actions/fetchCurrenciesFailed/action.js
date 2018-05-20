import { FETCH_CURRENCIES_FAILED } from '../../actionTypes';

export default function fetchCurrenciesFailed(error = {}) {
  return {
    type: FETCH_CURRENCIES_FAILED,
    error
  }
}
