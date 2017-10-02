import { handleActions } from 'redux-actions';
import { ActionTypes as types } from '../constants';

export default handleActions({
  [types.FETCH_NOTIFICATIONS]: (state) => {
    return Object.assign({}, state, {
      data: [],
      isFetching: true,
    });
  },
  [types.FETCH_NOTIFICATIONS_SUCCESS]: (state, action) => {
    return Object.assign({}, { data: action.notifications }, {
      isFetching: false,
    });
  },
}, { data: [], isFetching: false });
