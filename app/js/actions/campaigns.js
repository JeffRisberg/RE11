import request from "axios";

import {types} from "../types";

export const queryCampaigns = () => {
    return function (dispatch, getState) {

        return request.get('/ws/campaigns')
            .then(response => response.data)
            .then(response => {
                dispatch({
                    type: types.SET_CAMPAIGNS,
                    campaigns: response.data
                });
            });
    }
};
