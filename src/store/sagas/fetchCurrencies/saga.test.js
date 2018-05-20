import { expect } from 'chai';
import { fetchCurrencies, saga } from './saga';

it('exists', () => {
  expect(fetchCurrencies).to.be.a('function');
  expect(fetchCurrencies).to.respondTo('next');
  expect(saga).to.be.a('function');
  expect(saga).to.respondTo('next');
});
