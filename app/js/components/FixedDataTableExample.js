import React from "react";
import FixedDataTable from "fixed-data-table";
import {connect} from "react-redux";
import {queryCampaigns} from "../actions/campaigns";

const {Table, Column, Cell} = FixedDataTable;

/**
 * FixedDataTableExample - this is displaying campaign information
 *
 * @author Jeff Risberg
 * @since August 2016
 */
var initialColumnWidths = {
    name: 240,
    status: 120,
    startDate: 120,
    impressions: 150,
    clicks: 150,
    ctr: 80,
    cost: 80,
    cpc: 80,
    cpm: 80,
    margin: 110
}

const TextCell = ({rowIndex, data, columnKey, ...props}) => (
    <Cell {...props}>
        {data[rowIndex][columnKey]}
    </Cell>
);

const TextRightCell = ({rowIndex, data, columnKey, ...props}) => (
    <Cell {...props} style={{textAlign: 'right'}}>
        {data[rowIndex][columnKey]}
    </Cell>
);

class FixedDataTableExample extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            currentPage: 1,
            pageSize: 6,
            sort: null,
            sortDir: 1,
            columnWidths: initialColumnWidths
        };

        this.loadDataFromAPI = this.loadDataFromAPI.bind(this);
        this._onNext = this._onNext.bind(this);
        this._onPrevious = this._onPrevious.bind(this);
        this._onGetPage = this._onGetPage.bind(this);
        this._onSort = this._onSort.bind(this);
        this._onColumnResizeEndCallback = this._onColumnResizeEndCallback.bind(this);
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

    _onGetPage(event) {
        const {pageSize, sort, sortDir} = this.state;
        const newPageNumber = parseInt(event.target.value);

        this.loadDataFromAPI(newPageNumber, pageSize, sort, sortDir);
    }

    _onSort(sortProperties) {
        const {currentPage, pageSize, sort, sortDir} = this.state;

        const newSort = sortProperties.id;

        const revDir = (sortDir == 1) ? -1 : 1;
        const newDir = (newSort === sort) ? revDir : sortDir;

        this.loadDataFromAPI(currentPage, pageSize, newSort, newDir);
    }

    _onColumnResizeEndCallback(newColumnWidth, columnKey) {
        this.setState(({columnWidths}) => ({
            columnWidths: {
                ...columnWidths,
                [columnKey]: newColumnWidth,
            }
        }));
    }

    render() {
        const {currentPage, pageSize, columnWidths} = this.state;

        const campaignData = this.props.campaigns;
        const campaignCount = this.props.campaigns.count;
        const pageCount = Math.floor((campaignCount + pageSize - 1) / pageSize);

        const campaigns = campaignData.idList.map(function (itemId, index) {
            const campaign = campaignData.records[itemId];

            return campaign;
        });

        const pageOptions = [];
        for (var i = 1; i < pageCount; i++) {
            pageOptions.push(<option key={i}>{i}</option>)
        }

        return (
            <div>
                <Table
                    rowHeight={32}
                    headerHeight={40}
                    rowsCount={campaigns.length}
                    onColumnResizeEndCallback={this._onColumnResizeEndCallback}
                    isColumnResizing={false}
                    width={1100}
                    height={235}
                    {...this.props}>
                    <Column
                        columnKey="name"
                        header={<Cell className='campaigns__header'>Name</Cell>}
                        cell={<TextCell data={campaigns}/>}
                        fixed={true}
                        width={columnWidths.name}
                    />
                    <Column
                        columnKey="status"
                        header={<Cell className='campaigns__header'>Status</Cell>}
                        cell={<TextCell data={campaigns}/>}
                        width={columnWidths.status}
                        isResizable={true}
                        minWidth={70}
                        maxWidth={200}
                    />
                    <Column
                        columnKey="startDate"
                        header={<Cell className='campaigns__header'>Start Date</Cell>}
                        cell={<TextCell data={campaigns}/>}
                        width={columnWidths.startDate}
                        isResizable={true}
                    />
                    <Column
                        columnKey="impressions"
                        header={<Cell className='campaigns__header' style={{textAlign: 'right'}}>Impressions</Cell>}
                        cell={<TextRightCell data={campaigns}/>}
                        width={columnWidths.impressions}
                        isResizable={true}
                    />
                    <Column
                        columnKey="ctr"
                        header={<Cell className='campaigns__header' style={{textAlign: 'right'}}>CTR</Cell>}
                        cell={<TextRightCell data={campaigns}/>}
                        width={columnWidths.ctr}
                        isResizable={true}
                    />
                    <Column
                        columnKey="cost"
                        header={<Cell className='campaigns__header' style={{textAlign: 'right'}}>Cost</Cell>}
                        cell={<TextRightCell data={campaigns}/>}
                        width={columnWidths.cost}
                        isResizable={true}
                    />
                    <Column
                        columnKey="cpc"
                        header={<Cell className='campaigns__header' style={{textAlign: 'right'}}>CPC</Cell>}
                        cell={<TextRightCell data={campaigns}/>}
                        width={columnWidths.cpc}
                        isResizable={true}
                    />
                    <Column
                        columnKey="cpm"
                        header={<Cell className='campaigns__header' style={{textAlign: 'right'}}>CPM</Cell>}
                        cell={<TextRightCell data={campaigns}/>}
                        width={columnWidths.cpm}
                        isResizable={true}
                    />
                    <Column
                        columnKey="margin"
                        header={<Cell className='campaigns__header' style={{textAlign: 'right'}}>Margin</Cell>}
                        cell={<TextRightCell data={campaigns}/>}
                        width={columnWidths.margin}
                        isResizable={true}
                    />
                </Table>
                {(currentPage > 1) && <a onClick={(e) => this._onPrevious()} className="btn btn-default">
                    Previous
                </a>}
                {' '}
                <select value={currentPage} onChange={(e) => this._onGetPage(e)}>
                    {pageOptions}
                </select>
                {' '}
                {(currentPage <= pageCount) && <a onClick={(e) => this._onNext()} className="btn btn-default">
                    Next
                </a>}
            </div>
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
)(FixedDataTableExample);
