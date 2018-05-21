import { expect } from 'chai';
import actionCreator from './action';
import { REMOVE_LOADING } from '../../actionTypes';

it('executes without errors', () => {
  actionCreator();
});

it('creates an action of correct type', () => {
  const action = actionCreator();
  expect(action.type).to.equal(REMOVE_LOADING);
});
