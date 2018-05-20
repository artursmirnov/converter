import { expect } from 'chai';
import reducer from './reducer';

it('executes without errors', () => {
  reducer();
});

it('returns unmodified state without action', () => {
  const state = { test: true };
  const result = reducer(state);
  expect(result).to.deep.equal(state);
});
