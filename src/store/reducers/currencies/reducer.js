import Immutable from 'seamless-immutable';
import _ from 'lodash';
import config from '../../../config/app';

import {
  FETCH_CURRENCIES_SUCCEEDED,
  FETCH_CURRENCY_RATES_SUCCEEDED
} from '../../actionTypes';

const initialState = Immutable({
  currencies: {},
  baseCurrency: config.defaultBaseCurrency
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_CURRENCIES_SUCCEEDED:
      return state.merge({
        currencies: action.currencies
      });
    case FETCH_CURRENCY_RATES_SUCCEEDED:
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
