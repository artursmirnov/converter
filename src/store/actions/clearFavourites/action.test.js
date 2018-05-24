import { expect } from 'chai';
import actionCreator from './action';
import { CLEAR_FAVOURITES } from '../../actionTypes';

it('executes without errors', () => {
  actionCreator();
});

it('creates an action of correct type', () => {
  const action = actionCreator();
  expect(action.type).to.equal(CLEAR_FAVOURITES);
});
