import React from "react";
import {Link} from "react-router";
import Griddle, {plugins, RowDefinition, ColumnDefinition} from "griddle-react";
import {connect} from "react-redux";
import {queryCampaigns} from "../actions/campaigns";

/**
 * GriddleExample - this is displaying campaign information
 *
 * @author Jeff Risberg
 * @since August 2016
 */
class GriddleExample extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            currentPage: 1,
            pageSize: 5,
            recordCount: 100
        };
    }

    componentDidMount() {
        this.props.queryCampaigns();
    }

    fakeLoadDataFromAPI(currentPage, pageSize, callback) {
        setTimeout(() => {
            callback({
                data: fakeData.slice((currentPage - 1) * pageSize, currentPage * pageSize),
                currentPage,
            });
        }, 500);
    }

    render() {
        const {currentPage, pageSize, recordCount} = this.state;
        const campaignItems = this.props.campaigns;

        var campaigns = campaignItems.idList.map(function (itemId, index) {
            const campaign = campaignItems.records[itemId];

            return campaign;
        });

        _onNext = () => {
            const {currentPage, pageSize} = this.state;
            console.log("next to " + currentPage);

            loadDataFromAPI(currentPage + 1, pageSize, this.updateTableState);
            this.updateTableState();
        }

        _onPrevious = () => {
            const {currentPage, pageSize} = this.state;
            console.log("prev to " + currentPage);

            ;
            oadDataFromAPI(currentPage - 1, pageSize, this.updateTableState);
            this.updateTableState();
        }

        _onGetPage = (pageNumber) => {
            const {pageSize} = this.state;
            console.log("go to " + currentPage);

            loadDataFromAPI(pageNumber, pageSize, this.updateTableState);
            this.updateTableState();
        }

        updateTableState = (currentPage) => {
            this.setState({currentPage});
        }

        return (
            <div>
                <Griddle data={campaigns}
                         styleConfig={{classNames: {Table: 'table'}}}
                         showFilter={true}
                         showSettings={true}
                         pageProperties={{
                             currentPage: currentPage,
                             pageSize: pageSize,
                             recordCount: recordCount,
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
