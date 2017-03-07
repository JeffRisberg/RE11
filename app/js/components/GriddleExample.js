import React from "react";
import {Link} from "react-router";
import Griddle, {plugins, RowDefinition, ColumnDefinition} from "griddle-react";
import {connect} from "react-redux";
import {queryCampaigns} from "../actions/campaigns";

/**
 * GriddleExample
 *
 * @author Jeff Risberg
 * @since August 2016
 */
class GriddleExample extends React.Component {

    componentDidMount() {
        this.props.queryCampaigns();
    }

    render() {
        const campaignItems = this.props.campaigns;

        var campaigns = campaignItems.idList.map(function (itemId, index) {
            const campaign = campaignItems.records[itemId];

            return campaign;
        });

        return (
            <div>
                <Griddle data={campaigns}
                         styleConfig={{classNames: {Table: 'table'}}}
                         showFilter={true}
                         showSettings={true}
                         plugins={[plugins.LocalPlugin]}
                >
                    <RowDefinition>
                        <ColumnDefinition order="0" id="name" title="Name"/>
                        <ColumnDefinition order="1" id="status" title="Status"/>
                        <ColumnDefinition order="2" id="startDate" title="Start Date"/>
                        <ColumnDefinition order="3" id="impressions" title="Impressions"/>
                        <ColumnDefinition order="4" id="clicks" title="Clicks"/>
                        <ColumnDefinition order="5" id="ctr" title="CTR"/>
                        <ColumnDefinition order="6" id="cost" title="Cost"/>
                        <ColumnDefinition order="7" id="cpc" title="CPC"/>
                        <ColumnDefinition order="8" id="cpm" title="CPM"/>
                        <ColumnDefinition order="9" id="margin" title="Margin"/>
                    </RowDefinition>
                </Griddle>
            </div>
        )
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
)(GriddleExample);
