import {SET_KEYWORDS} from "../constants/ActionTypes";
import Store from "../helpers/Store";

const keywords = (state = [], action = {}) => {
    switch (action.type) {
        case SET_KEYWORDS: // clear prior keywords
        {
            return new Store(action.keywords);
        }
        default:
            return state;
    }
};

export default keywords;