import { SET_BASE_CURRENCY } from '../../actionTypes';

export default function setBaseCurrency(code) {
  return {
    type: SET_BASE_CURRENCY,
    code
  }
}
