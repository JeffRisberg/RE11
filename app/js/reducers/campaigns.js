import { handleActions } from 'redux-actions';
import { ActionTypes as types } from '../constants';

export default handleActions({
  [types.FETCH_CAMPAIGNS]: (state) => {
    return Object.assign({}, state, {
      data: [],
      isFetching: true,
    });
  },
  [types.FETCH_CAMPAIGNS_SUCCESS]: (state, action) => {
    return Object.assign({}, { data: action.campaigns }, {
      isFetching: false,
    });
  },
}, { data: [], isFetching: false });
