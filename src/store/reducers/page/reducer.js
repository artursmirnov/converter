import Immutable from 'seamless-immutable';
import config from '../../../config/app';

import { SET_PAGE_TITLE } from '../../actionTypes'

const initialState = Immutable({
  title: config.defaultPageTitle
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case SET_PAGE_TITLE:
      return state.merge({
        title: action.title
      });
    default:
      return state;
  }
}

export function getTitle(state) {
  return state.page.title;
}
