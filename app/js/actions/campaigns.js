import request from "axios";

import {types} from "../types";

export const queryCampaigns = (skip, limit) => {
    return function (dispatch) {

        return request.get('/ws/campaigns?skip='+skip + "&limit=" + limit)
            .then(response => response.data)
            .then(response => {
                dispatch({
                    type: types.SET_CAMPAIGN_COUNT,
                    count: response.count
                });
                dispatch({
                    type: types.SET_CAMPAIGNS,
                    campaigns: response.data
                });
            });
    }
};
