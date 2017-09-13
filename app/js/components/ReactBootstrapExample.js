import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { queryCampaigns } from '../actions/campaigns';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import ReactPaginate from 'react-paginate';
import './ReactBootstrapExample.scss';

/**
 * ReactBootstrapExample - shows a paginated list of campaigns.
 *
 * @author Jeff Risberg
 * @since May 2017
 */
class ReactBootstrapExample extends React.Component {

    render() {
        var products = [{
            id: 1,
            name: "Product1",
            price: 120
        }, {
            id: 2,
            name: "Product2",
            price: 80
        }];

        return (
            <div className="react-paginate">
                <BootstrapTable data={products} striped hover>
                    <TableHeaderColumn isKey dataField='id'>Product ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
                </BootstrapTable>

                <ReactPaginate
                    pageCount={10}
                    pageRangeDisplayed={5}
                    marginPagesDisplayed={5}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}
                />
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
    { queryCampaigns }
)(ReactBootstrapExample);
