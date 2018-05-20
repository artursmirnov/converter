import { expect } from 'chai';
import { fetchCurrencyRates, saga } from './saga';

it('exists', () => {
  expect(fetchCurrencyRates).to.be.a('function');
  expect(fetchCurrencyRates).to.respondTo('next');
  expect(saga).to.be.a('function');
  expect(saga).to.respondTo('next');
});
