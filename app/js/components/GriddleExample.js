import React from "react";
import {Link} from "react-router";
import Griddle, {plugins, RowDefinition, ColumnDefinition} from "griddle-react";
import {connect} from "react-redux";
import {queryCampaigns} from "../actions/campaigns";

/**
 * GriddleExample - shows a paginated list of campaigns.
 *
 * @author Jeff Risberg
 * @since August 2016
 */
class GriddleExample extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            currentPage: 1,
            pageSize: 6
        };

        this.loadDataFromAPI = this.loadDataFromAPI.bind(this);
        this._onNext = this._onNext.bind(this);
        this._onPrevious = this._onPrevious.bind(this);
        this._onGetPage = this._onGetPage.bind(this);
    }

    componentDidMount() {
        const {currentPage, pageSize} = this.state;
        const skip = (currentPage - 1) * pageSize;
        const limit = pageSize;

        this.props.queryCampaigns(skip, limit);
    }

    loadDataFromAPI(currentPage, pageSize, callback) {
        const skip = (currentPage - 1) * pageSize;
        const limit = pageSize;

        this.props.queryCampaigns(skip, limit);

        this.setState({
            currentPage: currentPage,
            pageSize: pageSize
        });
    }

    _onNext() {
        const {currentPage, pageSize} = this.state;

        this.loadDataFromAPI(currentPage + 1, pageSize, null);
    }

    _onPrevious() {
        const {currentPage, pageSize} = this.state;

        this.loadDataFromAPI(currentPage - 1, pageSize, null);
    }

    _onGetPage(newPageNumber) {
        const {pageSize} = this.state;

        this.loadDataFromAPI(newPageNumber, pageSize, null);
    }

    render() {
        const {currentPage, pageSize} = this.state;

        const campaignData = this.props.campaigns;
        const campaignCount = this.props.campaigns.count;

        var campaigns = campaignData.idList.map(function (itemId, index) {
            const campaign = campaignData.records[itemId];

            return campaign;
        });

        return (
            <div>
                <Griddle data={campaigns}
                         styleConfig={{classNames: {Table: 'table'}}}
                         showFilter={true}
                         showSettings={true}
                         pageProperties={{
                             currentPage: currentPage,
                             pageSize: pageSize,
                             recordCount: campaignCount,
                         }}
                         events={{
                             onNext: this._onNext,
                             onPrevious: this._onPrevious,
                             onGetPage: this._onGetPage,
                         }}
                         components={{
                             Filter: () => <span />,
                             SettingsToggle: () => <span />
                         }}
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
