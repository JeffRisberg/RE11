import request from 'axios';
import { ActionTypes as types, forms } from '../constants';

export const queryNotifications = (skip, limit, sort, sortDir) => {
  return function (dispatch) {

    let url = '/ws/notifications?skip=' + skip + '&limit=' + limit;

    if (sort) url = url + '&sort=' + sort;
    if (sortDir) url = url + '&sortDir=' + sortDir;

    dispatch({
      type: types.FETCH_NOTIFICATIONS,
    });

    return request.get(url)
      .then(response => response.data)
      .then(response => {
        dispatch({
          type: types.FETCH_NOTIFICATIONS_SUCCESS,
          notifications: response.data,
          count: response.count
        });
      });
  }
};

