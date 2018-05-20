import { expect } from 'chai';
import { setPageTitle, saga } from './saga';

it('exists', () => {
  expect(setPageTitle).to.be.a('function');
  expect(setPageTitle).to.respondTo('next');
  expect(saga).to.be.a('function');
  expect(saga).to.respondTo('next');
});
