import request from "axios";

import {SET_CAMPAIGNS} from "../constants/ActionTypes";

export const queryCampaigns = () => {
    return function (dispatch, getState) {

        return request.get('/ws/campaigns')
            .then(response => response.data)
            .then(response => {
                dispatch({
                    type: SET_CAMPAIGNS,
                    campaigns: response.data
                });
            });
    }
};
