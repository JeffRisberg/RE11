import React from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
import NavLink from "./NavLink";

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
                <div className="navbar navbar-inverse navbar-fixed-top" style={{marginBottom: '0px'}}>
                    <div className="container">
                        <div className="navbar-inner">
                            <NavLink to="/" className="navbar-brand" style={{padding: 0}}>
                                <img src="/images/logo.jpg"/>
                            </NavLink>

                            <div className="navbar-collapse collapse">
                                <ul className="nav navbar-nav">
                                    <li><NavLink to="/fixedDataTableExample">FixedDataTableExample</NavLink></li>
                                    <li><NavLink to="/griddleExample">GriddleExample</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
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

