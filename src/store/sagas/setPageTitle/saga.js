import { take } from 'redux-saga/effects';

import { SET_PAGE_TITLE } from '../../actionTypes';

export function* setPageTitle() {
  while (true) {
    const action = yield take(SET_PAGE_TITLE);
    document.title = action.title;
  }
}

export default setPageTitle;
