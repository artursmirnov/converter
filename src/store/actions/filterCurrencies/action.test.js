import { expect } from 'chai';
import actionCreator from './action';
import { FILTER_CURRENCIES } from '../../actionTypes';

it('executes without errors', () => {
  actionCreator();
});

it('creates an action of correct type', () => {
  const action = actionCreator();
  expect(action.type).to.equal(FILTER_CURRENCIES);
});
