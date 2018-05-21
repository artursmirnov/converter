import { ADD_LOADING } from '../../actionTypes';

export default function addLoading(loadingAction) {
  return {
    type: ADD_LOADING,
    loadingAction
  }
}
