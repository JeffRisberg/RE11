import React from "react";
import FixedDataTable from "fixed-data-table";
import {connect} from "react-redux";
import {queryKeywords} from "../actions/keywords";

const {Table, Column, Cell} = FixedDataTable;

/**
 * FixedDataTableExample - this is displaying keyword information
 *
 * @author Jeff Risberg
 * @since August 2016
 */
var columnWidths = {
    id: 240,
    text: 120
}

const TextCell = ({rowIndex, data, columnKey, ...props}) => (
    <Cell {...props}>
        {data.getObjectAt(rowIndex)[columnKey]}
    </Cell>
);

class FixedDataTableExample extends React.Component {
    constructor(props) {
        super(props);

        this._onColumnResizeEndCallback = this._onColumnResizeEndCallback.bind(this);
    }

    componentDidMount() {
        this.props.queryKeywords();
    }

    _onColumnResizeEndCallback(newColumnWidth, columnKey) {
        //this.setState(({columnWidths}) => ({
        //    columnWidths: {
        //        ...columnWidths,
        //        [columnKey]: newColumnWidth,
        //    }
        //}));
    }

    render() {
            var keywordStore = this.props.keywords;

            return (
                <Table
                    rowHeight={28}
                    headerHeight={50}
                    rowsCount={keywordStore.getSize()}
                    onColumnResizeEndCallback={this._onColumnResizeEndCallback}
                    isColumnResizing={false}
                    width={1000}
                    height={200}
                    {...this.props}>
                    <Column
                        columnKey="id"
                        header={<Cell>Id</Cell>}
                        cell={<TextCell data={keywordStore}/>}
                        fixed={true}
                        width={columnWidths.id}
                        isResizable={true}
                    />
                    <Column
                        columnKey="text"
                        header={<Cell>Text (constrained)</Cell>}
                        cell={<TextCell data={keywordStore}/>}
                        width={columnWidths.text}
                        isResizable={true}
                        minWidth={70}
                        maxWidth={200}
                    />
                </Table>
            );
    }
}

const mapStateToProps = (state) => {
    return {
        keywords: state.keywords
    };
};

export default connect(
    mapStateToProps,
    {queryKeywords}
)(FixedDataTableExample);
