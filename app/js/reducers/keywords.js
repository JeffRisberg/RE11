import {handleActions} from "redux-actions";
import {types} from "../types";

import Store from "../helpers/Store";

export default handleActions({
    [types.SET_KEYWORDS]: (state, action) => {
        return new Store(action.keywords);
    }
}, new Store([]));