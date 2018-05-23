import Immutable from 'seamless-immutable';
import { pickBy, merge } from 'lodash';
import config from '../../../config/app';

import {
  FETCH_CURRENCIES_SUCCEEDED,
  FETCH_CURRENCY_RATES_SUCCEEDED,
  TOGGLE_CURRENCY
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

    case TOGGLE_CURRENCY:
      const currency = state.currencies[action.currency.code];
      const isFavourite = !currency.isFavourite;
      return state.merge({
        currencies: merge({}, state.currencies, { [currency.code]: { ...currency, isFavourite } })
      });

    default:
      return state;
  }
}

export function getFavouriteCurrencies(state) {
  return pickBy(state.currencies.currencies, currency => currency.isFavourite);
}

export function getCurrencies(state) {
  return state.currencies.currencies;
}

export function getBaseCurrency(state) {
  return state.currencies.baseCurrency;
}
