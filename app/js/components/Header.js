import React from 'react'
import { Link } from 'react-router'

import { connect } from 'react-redux';

import NavLink from './NavLink'

/**
 * Appears at top of screen
 *
 * @author Jeff Risberg, Brandon Risberg
 * @since April 30, 2016
 */
class Header extends React.Component {

    render() {
        return (
            <div>
                <div className="header row white">
                    <div className="top-border"></div>
                    <div className="container">
                        <div className="logo col-md-4 col-xs-4">
                            <img src="/images/logo.jpg" />
                        </div>
                    </div>
                </div>
                <NavLink to="/" style={{marginLeft: '10px'}}>
                    Home
                </NavLink>
                <NavLink to="/campaignList" style={{marginLeft: '10px'}}>
                    CampaignList
                </NavLink>
                <NavLink to="/resizeExample" style={{marginLeft: '10px'}}>
                    ResizeExample
                </NavLink>
                <NavLink to="/griddleExample" style={{marginLeft: '10px'}}>
                    GriddleExample
                </NavLink>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        donor: state.donor
    };
};
export default connect(
    mapStateToProps,
    {}
)(Header);

