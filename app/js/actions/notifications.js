import request from 'axios';
import { types } from '../types';

export const queryNotifications = () => {
  return function (dispatch, getState) {

    return request.get('/ws/notifications')
      .then(response => response.data)
      .then(response => {
        dispatch({
          type: types.SET_NOTIFICATION_COUNT,
          notifications: response.count
        });
        dispatch({
          type: types.SET_NOTIFICATIONS,
          notifications: response.data
        });
      });
  }
};
