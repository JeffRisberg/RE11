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
        var location = this.props.currentLocation.substring(1);
        var breadCrumb = null;

        if (location.startsWith("search")) breadCrumb = "Find a Charity";
        if (location.startsWith("basket")) breadCrumb = "Giving Basket";
        if (location.startsWith("donate")) breadCrumb = "Make a Donation";
        if (location.startsWith("checkout")) breadCrumb = "Checkout";
        if (location.startsWith("confirmation")) breadCrumb = "Confirmation";
        if (location.startsWith("givingHistory")) breadCrumb = "Giving History";

        var headerText = "Not logged in";
        let loginLogout = <Link to="/login" style={{marginLeft: '10px'}}>Login</Link>;
        if (this.props.donor != null) {
            var firstName = this.props.donor.firstName;
            var points = this.props.donor.points;

            headerText = firstName + " " + points + " points";
            loginLogout = <a onClick={this.props.logout} style={{marginLeft: '10px'}}>Logout</a>;
        }

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

