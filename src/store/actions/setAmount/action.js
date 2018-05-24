import { SET_AMOUNT } from '../../actionTypes';

export default function setAmount(amount) {
  return {
    type: SET_AMOUNT,
    amount
  }
}
