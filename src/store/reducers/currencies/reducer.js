import Immutable from 'seamless-immutable';
import _ from 'lodash';

import {
  FETCH_CURRENCIES_SUCCEEDED
} from '../../actionTypes';

const initialState = Immutable({
  currencies: {},
  baseCurrency: 'USD'
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_CURRENCIES_SUCCEEDED:
      return state.merge({
        currencies: action.currencies
      });
    default:
      return state;
  }
}

export function getFavouriteCurrencies(state) {
  return _.pickBy(state.currencies, currency => currency.isFavourite);
}
