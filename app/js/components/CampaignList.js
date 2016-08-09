import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux';

import { queryCampaigns } from '../actions/campaigns';

import Campaign from './Campaign'

/**
 * Renders a list of campaign objects
 *
 * @author Jeff Risberg
 * @since July 2016
 */
class CampaignList extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.queryCampaigns();
    }

    render() {
        const campaignItems = this.props.campaigns;

        var campaignNodes = campaignItems.idList.map(function (itemId, index) {
            const campaignItem = campaignItems.records[itemId];

            return (
                <Campaign campaign={campaignItem} key={index}></Campaign>
            );
        });

        return (
            <table className="table">
                <tbody>
                {campaignNodes}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        campaigns: state.campaigns
    };
};

export default connect(
    mapStateToProps,
    {queryCampaigns}
)(CampaignList);
