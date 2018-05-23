import { FILTER_CURRENCIES_REQUESTED } from '../../actionTypes';

export default function filterCurrenciesRequested(term) {
  return {
    type: FILTER_CURRENCIES_REQUESTED,
    term
  }
}
