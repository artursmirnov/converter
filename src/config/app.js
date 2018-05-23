import Immutable from 'seamless-immutable';

const env = process.env.NODE_ENV;
const isProduction = env === 'production';
const isDevelopment = env === 'development';
const isTest = env === 'test';

const config = {

  env,
  isProduction,
  isDevelopment,
  isTest,

  ratesSource: {
    baseUrl: 'https://v3.exchangerate-api.com/bulk',
    apiKey: '051490d4d12871847e1e3da9',
    base: 'USD'
  },
  isRatesMockEnabled: isTest,

  defaultBaseCurrency: '',

  defaultPageTitle: 'Converter'

}

if (isProduction) {
  Object.assign(config, {

  });
}

if (isDevelopment) {
  Object.assign(config, {
    isRatesMockEnabled: true
  });
}

if (isTest) {
  Object.assign(config, {

  });
}

export default Immutable(config);
