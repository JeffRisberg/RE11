import request from 'axios';
import { types } from '../types';

export const queryKeywords = (skip, limit, sort, sortDir) => {
  return function (dispatch) {

    let url = '/ws/keywords?skip=' + skip + '&limit=' + limit;

    if (sort) url = url + '&sort=' + sort;
    if (sortDir) url = url + '&sortDir=' + sortDir;

    dispatch({
      type: types.FETCH_KEYWORDS,
    });

    return request.get(url)
      .then(response => response.data)
      .then(response => {
        dispatch({
          type: types.FETCH_KEYWORDS_SUCCESS,
          keywords: response.data,
          count: response.count
        });
      });
  }
};

