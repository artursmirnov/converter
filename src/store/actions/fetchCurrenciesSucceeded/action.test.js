import { expect } from 'chai';
import actionCreator from './action';
import { FETCH_CURRENCIES_SUCCEEDED } from '../../actionTypes';

it('executes without errors', () => {
  actionCreator();
});

it('creates an action of correct type', () => {
  const action = actionCreator();
  expect(action.type).to.equal(FETCH_CURRENCIES_SUCCEEDED);
});
