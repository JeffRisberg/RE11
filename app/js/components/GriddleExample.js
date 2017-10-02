import React from 'react';
import { Link } from 'react-router';
import { Loading } from 'components';
import Griddle, { plugins, RowDefinition, ColumnDefinition } from 'griddle-react';
import { connect } from 'react-redux';
import { queryCampaigns } from '../actions/campaigns';
import './GriddleExample.scss';

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
    const { currentPage, pageSize, sort, sortDir } = this.state;
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
    const { currentPage, pageSize, sort, sortDir } = this.state;

    this.loadDataFromAPI(currentPage + 1, pageSize, sort, sortDir);
  }

  _onPrevious() {
    const { currentPage, pageSize, sort, sortDir } = this.state;

    this.loadDataFromAPI(currentPage - 1, pageSize, sort, sortDir);
  }

  _onGetPage(newPageNumber) {
    const { pageSize, sort, sortDir } = this.state;

    this.loadDataFromAPI(newPageNumber, pageSize, sort, sortDir);
  }

  _onSort(sortProperties) {
    const { currentPage, pageSize, sort, sortDir } = this.state;

    const newSort = sortProperties.id;

    const revDir = (sortDir == 1) ? -1 : 1;
    const newDir = (newSort === sort) ? revDir : sortDir;

    this.loadDataFromAPI(currentPage, pageSize, newSort, newDir);
  }

  render() {
    const { records, status } = this.props;
    const { currentPage, pageSize } = this.state;

    if (status.isFetching) {
      return (
        <div className="items__list">
          <Loading size="large" colour="purple"/>
        </div>
      );
    }

    const campaigns = records.map((item, key) => {
    });
    const campaignData = this.props.campaigns;
    const campaignCount = this.props.campaigns.count;

    const RightHeading = ({ title }) => <div style={{ textAlign: 'right' }}>{title}</div>;
    const RightCell = ({ value }) => <div style={{ textAlign: 'right' }}>{value}</div>;

    return (
      <div>
        <Griddle data={campaigns}
          styleConfig={{ classNames: { Table: 'table', TableHeadingCell: 'campaigns__header' } }}
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
              customHeadingComponent={RightHeading} customComponent={RightCell}
            />
            <ColumnDefinition order="4" id="clicks" title="Clicks"
              customHeadingComponent={RightHeading} customComponent={RightCell}
            />
            <ColumnDefinition order="5" id="ctr" title="CTR"
              customHeadingComponent={RightHeading} customComponent={RightCell}
            />
            <ColumnDefinition order="6" id="cost" title="Cost"
              customHeadingComponent={RightHeading} customComponent={RightCell}
            />
            <ColumnDefinition order="7" id="cpc" title="CPC"
              customHeadingComponent={RightHeading} customComponent={RightCell}
            />
            <ColumnDefinition order="8" id="cpm" title="CPM"
              customHeadingComponent={RightHeading} customComponent={RightCell}
            />
            <ColumnDefinition order="9" id="margin" title="Margin"
              customHeadingComponent={RightHeading} customComponent={RightCell}
            />
          </RowDefinition>
        </Griddle>
      </div>
    )
  }
}

const
  mapStateToProps = (state) => {
    return {
      campaigns: state.campaigns
    };
  };

export default connect(mapStateToProps, { queryCampaigns })(GriddleExample);
