import Immutable from 'seamless-immutable';
import { pickBy, merge, includes } from 'lodash';
import config from '../../../config/app';

import {
  FETCH_CURRENCIES_SUCCEEDED,
  FETCH_CURRENCY_RATES_SUCCEEDED,
  TOGGLE_CURRENCY,
  FILTER_CURRENCIES
} from '../../actionTypes';

const initialState = Immutable({
  currencies: {},
  baseCurrency: config.defaultBaseCurrency,
  filter: ''
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

    case FILTER_CURRENCIES:
      return state.merge({
        filter: action.term
      })

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

export function getFilteredCurrencies(state) {
  const { filter, currencies } = state.currencies;
  const term = filter.toLowerCase();
  return pickBy(currencies, ({ code, title, countries }) => {
    const isCodeFit = includes(code.toLowerCase(), term);
    const isTitleFit = includes(title.toLowerCase(), term);
    const isCountriesFit = countries.filter(country => includes(country.toLowerCase(), term)).length > 0;
    return isCodeFit || isTitleFit || isCountriesFit;
  });
}

export function getBaseCurrency(state) {
  return state.currencies.baseCurrency;
}

export function getFilter(state) {
  return state.currencies.filter;
}
