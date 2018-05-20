import { expect } from 'chai';
import actionCreator from './action';
import { FETCH_CURRENCY_RATES_SUCCEEDED } from '../../actionTypes';

it('executes without errors', () => {
  actionCreator();
});

it('creates an action of correct type', () => {
  const action = actionCreator();
  expect(action.type).to.equal(FETCH_CURRENCY_RATES_SUCCEEDED);
});
