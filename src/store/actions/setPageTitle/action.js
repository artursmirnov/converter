import { SET_PAGE_TITLE } from '../../actionTypes';

export default function setPageTitle(title) {
  return {
    type: SET_PAGE_TITLE,
    title
  }
}
