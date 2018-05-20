import currencies from './currencies';

const rates = {};
const minRate = 1;
const maxRate = 150;

currencies.forEach(currency => rates[currency.code] = Math.random() * (maxRate - minRate) + minRate);

export default {
  result: 'success',
  from: 'USD',
  timestamp: Date.now(),
  rates
};
