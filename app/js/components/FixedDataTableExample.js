"use strict";

import React from 'react'
import FixedDataTable from 'fixed-data-table'

import FakeObjectDataListStore from '../helpers/FakeObjectDataListStore'

const {Table, Column, Cell} = FixedDataTable;

const TextCell = ({rowIndex, data, columnKey, ...props}) => (
    <Cell {...props}>
        {data.getObjectAt(rowIndex)[columnKey]}
    </Cell>
);

class FixedDataTableExample extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dataList: new FakeObjectDataListStore(1000000),
            columnWidths: {
                firstName: 240,
                lastName: 150,
                street: 180,
                state: 120,
                zipCode: 120
            }
        };

        this._onColumnResizeEndCallback = this._onColumnResizeEndCallback.bind(this);
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
        var {dataList, columnWidths} = this.state;

        return (
            <Table
                rowHeight={28}
                headerHeight={50}
                rowsCount={dataList.getSize()}
                onColumnResizeEndCallback={this._onColumnResizeEndCallback}
                isColumnResizing={false}
                width={1000}
                height={200}
                {...this.props}>
                <Column
                    columnKey="firstName"
                    header={<Cell>First Name</Cell>}
                    cell={<TextCell data={dataList} />}
                    fixed={true}
                    width={columnWidths.firstName}
                    isResizable={true}
                    />
                <Column
                    columnKey="lastName"
                    header={<Cell>Last Name (constrained)</Cell>}
                    cell={<TextCell data={dataList} />}
                    width={columnWidths.lastName}
                    isResizable={true}
                    minWidth={70}
                    maxWidth={200}
                    />
                <Column
                    columnKey="street"
                    header={<Cell>Street</Cell>}
                    cell={<TextCell data={dataList} />}
                    width={columnWidths.street}
                    isResizable={true}
                    />
                <Column
                    columnKey="state"
                    header={<Cell>State</Cell>}
                    cell={<TextCell data={dataList} />}
                    width={columnWidths.state}
                    isResizable={true}
                    />
                <Column
                    columnKey="zipCode"
                    header={<Cell>Zip Code</Cell>}
                    cell={<TextCell data={dataList} />}
                    width={columnWidths.zipCode}
                    isResizable={true}
                />
            </Table>
        );
    }
}

export default FixedDataTableExample;