import { expect } from 'chai';
import { filterCurrencies, saga } from './saga';

it('exists', () => {
  expect(filterCurrencies).to.be.a('function');
  expect(filterCurrencies).to.respondTo('next');
  expect(saga).to.be.a('function');
  expect(saga).to.respondTo('next');
});
