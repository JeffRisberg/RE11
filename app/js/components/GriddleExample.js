import React from 'react'
import { Link } from 'react-router'
import Griddle from 'griddle-react'

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
                "country": "United States",
                "company": "Ovolo",
                "favoriteNumber": 4
            },
            {
                "id": 1,
                "name": "Big James",
                "city": "Kapowsin",
                "state": "Hawaii",
                "country": "United States",
                "company": "Ovolo",
                "favoriteNumber": 9
            },
            {
                "id": 2,
                "name": "Tom Hill",
                "city": "Kapowsin",
                "state": "Hawaii",
                "country": "United States",
                "company": "Ovolo",
                "favoriteNumber": 13
            },
            {
                "id": 3,
                "name": "Aplya Blocks",
                "city": "Kapowsin",
                "state": "Hawaii",
                "country": "United States",
                "company": "Ovolo",
                "favoriteNumber": 27
            },
            {
                "id": 4,
                "name": "Frodo Baggins",
                "city": "Kapowsin",
                "state": "Hawaii",
                "country": "United States",
                "company": "Ovolo",
                "favoriteNumber": 29
            },
            {
                "id": 5,
                "name": "Gandalf the Gray",
                "city": "Kapowsin",
                "state": "Hawaii",
                "country": "United States",
                "company": "Ovolo",
                "favoriteNumber": 31
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