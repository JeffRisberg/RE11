import {handleActions} from "redux-actions";
import {types} from "../types";

export default handleActions({
    [types.SET_CAMPAIGNS]: (state, action) => {
        const idList = [];
        const records = {};

        action.campaigns.forEach(record => {
            if (idList.length < 10) {
                records[record.id] = record;
                idList.push(record.id);
            }
        });

        return {idList, records};
    }
}, {idList: [], records: {}});