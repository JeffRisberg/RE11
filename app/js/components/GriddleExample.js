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
            pageSize: 6,
            sort: null,
            sortDir: 1
        };

        this.loadDataFromAPI = this.loadDataFromAPI.bind(this);
        this._onNext = this._onNext.bind(this);
        this._onPrevious = this._onPrevious.bind(this);
        this._onGetPage = this._onGetPage.bind(this);
        this._onSort = this._onSort.bind(this);
    }

    componentDidMount() {
        const {currentPage, pageSize, sort, sortDir} = this.state;
        const skip = (currentPage - 1) * pageSize;
        const limit = pageSize;

        this.props.queryCampaigns(skip, limit, sort, sortDir);
    }

    loadDataFromAPI(currentPage, pageSize, sort, sortDir) {
        const skip = (currentPage - 1) * pageSize;
        const limit = pageSize;

        this.props.queryCampaigns(skip, limit, sort, sortDir);

        this.setState({
            currentPage: currentPage,
            pageSize: pageSize,
            sort: sort,
            sortDir: sortDir
        });
    }

    _onNext() {
        const {currentPage, pageSize, sort, sortDir} = this.state;

        this.loadDataFromAPI(currentPage + 1, pageSize, sort, sortDir);
    }

    _onPrevious() {
        const {currentPage, pageSize, sort, sortDir} = this.state;

        this.loadDataFromAPI(currentPage - 1, pageSize, sort, sortDir);
    }

    _onGetPage(newPageNumber) {
        const {pageSize, sort, sortDir} = this.state;

        this.loadDataFromAPI(newPageNumber, pageSize, sort, sortDir);
    }

    _onSort(sortProperties) {
        const {currentPage, pageSize, sort, sortDir} = this.state;

        const newSort = sortProperties.id;

        const revDir = (sortDir == 1) ? -1 : 1;
        const newDir = (newSort === sort) ? revDir : sortDir;

        this.loadDataFromAPI(currentPage, pageSize, newSort, newDir);
    }

    render() {
        const {currentPage, pageSize} = this.state;

        const campaignData = this.props.campaigns;
        const campaignCount = this.props.campaigns.count;

        var campaigns = campaignData.idList.map(function (itemId, index) {
            const campaign = campaignData.records[itemId];

            return campaign;
        });

        const RightColumn = ({value}) => <div style={{textAlign: 'right'}}>{value}</div>;

        return (
            <div>
                <Griddle data={campaigns}
                         styleConfig={{classNames: {Table: 'table'}}}
                         useGriddleStyles={false}
                         showFilter={true}
                         showSettings={true}
                         pageProperties={{
                             currentPage: currentPage,
                             pageSize: pageSize,
                             recordCount: campaignCount
                         }}
                         events={{
                             onNext: this._onNext,
                             onPrevious: this._onPrevious,
                             onGetPage: this._onGetPage,
                             onSort: this._onSort
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
                        <ColumnDefinition order="3" id="impressions" title="Impressions"
                                          customHeaderComponent={RightColumn} customComponent={RightColumn}
                        />
                        <ColumnDefinition order="4" id="clicks" title="Clicks"
                                          customHeaderComponent={RightColumn} customComponent={RightColumn}
                        />
                        <ColumnDefinition order="5" id="ctr" title="CTR"
                                          customHeaderComponent={RightColumn} customComponent={RightColumn}
                        />
                        <ColumnDefinition order="6" id="cost" title="Cost"
                                          customHeaderComponent={RightColumn} customComponent={RightColumn}
                        />
                        <ColumnDefinition order="7" id="cpc" title="CPC"
                                          customHeaderComponent={RightColumn} customComponent={RightColumn}
                        />
                        <ColumnDefinition order="8" id="cpm" title="CPM"
                                          customHeaderComponent={RightColumn} customComponent={RightColumn}
                        />
                        <ColumnDefinition order="9" id="margin" title="Margin"
                                          customHeaderComponent={RightColumn} customComponent={RightColumn}
                        />
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
