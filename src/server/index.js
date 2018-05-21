import Pretender from 'fetch-pretender';

import config from '../config/app';

import currencies from './fixtures/currencies';
import rates from './fixtures/rates';

const REQUEST_DELAY = 1000;

const CODE = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404
}

let server = null

function registerRoutes(server) {

  server.get('/api/currencies', function() {
    return response(currencies);
  }, REQUEST_DELAY);

  server.get(`${config.ratesSource.baseUrl}/**`, server.passthrough)

  if (config.isRatesMockEnabled) {

    server.get(`${config.ratesSource.baseUrl}/**`, function() {
      return response(rates);
    }, REQUEST_DELAY);

  }

}

export function createServer() {
  if (!server) {
    server = new Pretender()
    registerRoutes(server)

    server.handledRequest = function(verb, path, request) {
      console.log(`${verb} ${path}`, request)
    }
  }
}

export function getServer() {
  createServer()
  return server
}

export function shutdownServer() {
  server.shutdown()
  server = null
}

function response(payload, statusCode = CODE.OK) {
  return [ statusCode, { "Content-Type": "application/json" }, JSON.stringify(payload) ]
}

