import _ from 'lodash';

export default function(middleware, sagas) {
  _.values(sagas).forEach(saga => middleware.run(saga));
}
