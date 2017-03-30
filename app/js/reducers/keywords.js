import {handleActions} from "redux-actions";
import {types} from "../types";

export default handleActions({
    [types.SET_KEYWORD_COUNT]: (state, action) => {
        const count = action.count;

        return {idList: state.idList, records: state.records, count};
    },
    [types.SET_KEYWORDS]: (state, action) => {
        const idList = [];
        const records = {};

        action.keywords.forEach(record => {
            if (idList.length < 10) {
                records[record.id] = record;
                idList.push(record.id);
            }
        });

        return {idList, records, count: state.count};
    }
}, {idList: [], records: {}});