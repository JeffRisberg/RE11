import React from 'react'
import { Link } from 'react-router'

import Campaign from './Campaign'

/**
 * Renders a list of campaign objects
 *
 * @author Jeff Risberg
 * @since March 2016
 */
class CampaignList extends React.Component {
    constructor() {
        super();
    }

    render() {
        var campaignNodes = this.props.campaigns.map(function (campaign, index) {
            return (
                <Campaign campaign={campaign} key={index}></Campaign>
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

export default CampaignList;