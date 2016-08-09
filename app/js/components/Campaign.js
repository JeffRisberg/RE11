import React from 'react'
import { Link } from 'react-router'

/**
 * Renders one campaign
 *
 * @author Jeff Risberg
 * @since March 2016
 */
class Campaign extends React.Component {

    render() {
        return (
            <tr>
                <td>
                    <p>
                        <strong>{this.props.campaign.name}</strong>
                    </p>
                </td>
            </tr>
        )
    }
}

export default Campaign;