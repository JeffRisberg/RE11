import {handleActions} from "redux-actions";
import {types} from "../types";

export default handleActions({
    [types.SET_NOTIFICATION_COUNT]: (state, action) => {
        const count = action.count;

        return {idList: state.idList, records: state.records, count};
    },
    [types.SET_NOTIFICATIONS]: (state, action) => {
        const idList = [];
        const records = {};

        action.notifications.forEach(record => {
            if (idList.length < 10) {
                records[record.id] = record;
                idList.push(record.id);
            }
        });

        return {idList, records, count: state.count};
    }
}, {idList: [], records: {}});