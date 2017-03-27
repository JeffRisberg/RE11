import request from "axios";

import {types} from "../types";

export const queryKeywords = () => {
    return function (dispatch, getState) {

        return request.get('/ws/keywords')
            .then(response => response.data)
            .then(response => {
                dispatch({
                    type: types.SET_KEYWORD_COUNT,
                    keywords: response.count
                });
                dispatch({
                    type: types.SET_KEYWORDS,
                    keywords: response.data
                });
            });
    }
};
