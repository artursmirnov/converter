import { TOGGLE_CURRENCY } from '../../actionTypes';

export default function toggleCurrency(currency) {
  return {
    type: TOGGLE_CURRENCY,
    currency
  }
}
