import fetch from 'isomorphic-fetch';

import { SET_CAMPAIGNS } from '../constants/ActionTypes'

export const queryCategories = () => {
    return function (dispatch, getState) {

        return fetch('/ws/campaigns', {})
            .then(response => response.json())
            .then((json) => {
                const campaigns = json.data;

                dispatch({
                    type: SET_CAMPAIGNS,
                    categories: json.data
                });

            });
    }
};
