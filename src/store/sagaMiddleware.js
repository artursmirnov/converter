import createSagaMiddleware from 'redux-saga';
import { values } from 'lodash';

const sagaMiddleware = createSagaMiddleware();

export function run(sagas = {}) {
  values(sagas).forEach(saga => sagaMiddleware.run(saga));
}

export default sagaMiddleware;
