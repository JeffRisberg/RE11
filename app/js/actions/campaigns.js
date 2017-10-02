import request from 'axios';
import { types } from '../types';

export const queryCampaigns = (skip, limit, sort, sortDir) => {
  return function (dispatch) {

    let url = '/ws/campaigns?skip=' + skip + '&limit=' + limit;

    if (sort) url = url + '&sort=' + sort;
    if (sortDir) url = url + '&sortDir=' + sortDir;

    dispatch({
      type: types.FETCH_CAMPAIGNS,
    });

    return request.get(url)
      .then(response => response.data)
      .then(response => {
        dispatch({
          type: types.FETCH_CAMPAIGNS_SUCCESS,
          campaigns: response.data,
          count: response.count
        });
      });
  }
};

