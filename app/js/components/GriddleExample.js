import React from 'react'
import { Link } from 'react-router'

var Griddle = require('griddle-react');

/**
 * GriddleExample
 *
 * @author Jeff Risberg
 * @since August 2016
 */
class GriddleExample extends React.Component {

    render() {
        var fakeData =  [
            {
                "id": 0,
                "name": "Mayer Leonard",
                "city": "Kapowsin",
                "state": "Hawaii",
                "country": "United Kingdom",
                "company": "Ovolo",
                "favoriteNumber": 7
            },
            {
                "id": 1,
                "name": "Big James",
                "city": "Kapowsin",
                "state": "Hawaii",
                "country": "United Kingdom",
                "company": "Ovolo",
                "favoriteNumber": 7
            },
            {
                "id": 2,
                "name": "Tom Hill",
                "city": "Kapowsin",
                "state": "Hawaii",
                "country": "United Kingdom",
                "company": "Ovolo",
                "favoriteNumber": 7
            },
            {
                "id": 3,
                "name": "Aplya Blocks",
                "city": "Kapowsin",
                "state": "Hawaii",
                "country": "United Kingdom",
                "company": "Ovolo",
                "favoriteNumber": 7
            },
            {
                "id": 4,
                "name": "Frodo Baggins",
                "city": "Kapowsin",
                "state": "Hawaii",
                "country": "United Kingdom",
                "company": "Ovolo",
                "favoriteNumber": 7
            }
        ];

        return (
            <p>
                <Griddle results={fakeData} tableClassName="table" showFilter={true}
                         showSettings={true} columns={["name", "city", "state", "country"]}/>
            </p>
        )
    }
}

export default GriddleExample;