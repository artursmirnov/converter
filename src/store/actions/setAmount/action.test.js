import { expect } from 'chai';
import actionCreator from './action';
import { SET_AMOUNT } from '../../actionTypes';

it('executes without errors', () => {
  actionCreator();
});

it('creates an action of correct type', () => {
  const action = actionCreator();
  expect(action.type).to.equal(SET_AMOUNT);
});
