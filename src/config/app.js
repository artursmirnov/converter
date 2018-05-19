import Immutable from 'seamless-immutable';

const env = process.env.NODE_ENV;
const isProduction = env === 'production';
const isDevelopment = env === 'development';
const isTest = env === 'test';

const config = {

  env,
  isProduction,
  isDevelopment,
  isTest

}

if (isProduction) {
  Object.assign(config, {

  });
}

if (isDevelopment) {
  Object.assign(config, {

  });
}

if (isTest) {
  Object.assign(config, {

  });
}

export default Immutable(config);
