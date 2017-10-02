import { handleActions } from 'redux-actions';
import { ActionTypes as types } from '../constants';

export default handleActions({
  [types.FETCH_KEYWORDS]: (state) => {
    return Object.assign({}, state, {
      data: [],
      isFetching: true,
    });
  },
  [types.FETCH_KEYWORDS_SUCCESS]: (state, action) => {
    return Object.assign({}, { data: action.keywords }, {
      isFetching: false,
    });
  },
}, { data: [], isFetching: false });
