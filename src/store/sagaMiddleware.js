import createSagaMiddleware from 'redux-saga';
import _ from 'lodash';

const sagaMiddleware = createSagaMiddleware();

export function run(sagas = {}) {
  _.values(sagas).forEach(saga => sagaMiddleware.run(saga));
}

export default sagaMiddleware;
