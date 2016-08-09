import { SET_CAMPAIGNS } from '../constants/ActionTypes'

const campaigns = (state = [], action = {}) => {
    switch (action.type) {
        case SET_CAMPAIGNS: // clear prior campaigns
        {
            const idList = [];
            const records = {};

            action.campaigns.forEach(record => {
                records[record.id] = record;
                idList.push(record.id);
            });

            return {idList, records};
        }
        default:
            return state;
    }
};

export default campaigns;