import { FILTER_CURRENCIES } from '../../actionTypes';

export default function filterCurrencies(term) {
  return {
    type: FILTER_CURRENCIES,
    term
  }
}
