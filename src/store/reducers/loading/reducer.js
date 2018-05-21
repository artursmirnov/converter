import Immutable from 'seamless-immutable';

import { ADD_LOADING, REMOVE_LOADING } from '../../actionTypes'

const initialState = Immutable({
  actions: []
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_LOADING:
      return state.merge({
        actions: state.actions.concat(action.loadingAction)
      });
    case REMOVE_LOADING:
      let removed = false;
      return state.merge({
        actions: state.actions.filter(item => {
          const isCandidate = item === action.loadingAction;
          if (!removed && isCandidate) {
            removed = true;
            return false;
          }
          return true;
        })
      });
    default:
      return state;
  }
}

export function isLoading(state, loadingAction) {
  return state.loading.actions.indexOf(loadingAction) > -1;
}
