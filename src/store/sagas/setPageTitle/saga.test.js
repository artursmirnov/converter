import { expect } from 'chai';
import { setPageTitle } from './saga';

it('exists', () => {
  expect(setPageTitle).to.be.a('function');
  expect(setPageTitle).to.respondTo('next');
});
