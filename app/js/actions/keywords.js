import request from "axios";

import {SET_KEYWORDS} from "../constants/ActionTypes";

export const queryKeywords = () => {
    return function (dispatch, getState) {

        return request.get('/ws/keywords')
            .then(response => response.data)
            .then(response => {
                dispatch({
                    type: SET_KEYWORDS,
                    keywords: response.data
                });
            });
    }
};
