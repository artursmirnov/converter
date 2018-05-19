import Immutable from 'seamless-immutable';
import _ from 'lodash';

const initialState = Immutable({
  currencies: {},
  baseCurrency: 'USD'
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

export function getFavouriteCurrencies(state) {
  return _.pickBy(state.currencies, currency => currency.isFavourite);
}
