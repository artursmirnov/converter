import { REMOVE_LOADING } from '../../actionTypes';

export default function removeLoading(loadingAction) {
  return {
    type: REMOVE_LOADING,
    loadingAction
  }
}
