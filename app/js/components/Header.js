import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import NavLink from './NavLink';
import Dropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown';

/**
 * Appears at top of screen
 *
 * @author Jeff Risberg, Brandon Risberg
 * @since April 30, 2016
 */
class Header extends React.Component {

  constructor(props) {
    super(props);

    this.handleLinkClick = this.handleLinkClick.bind(this);
  }

  handleLinkClick() {
    this.refs.dropdown.hide();
  }

  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top" style={{ marginBottom: '0px' }}>
        <div className="container">
          <div className="navbar-inner">
            <NavLink to="/" className="navbar-brand" style={{ padding: 0 }}>
              <img src="/images/logo.jpg"/>
            </NavLink>

            <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li><NavLink to="/fixedDataTableExample">FixedDataTableExample</NavLink></li>
                <li><NavLink to="/griddleExample">GriddleExample</NavLink></li>
                <li><NavLink to="/reactBootstrapExample">React Bootstrap Example</NavLink></li>
              </ul>
              <ul style={{ height: '50px' }} className="nav navbar-nav navbar-right">
                <li style={{ height: '50px' }}>
                  <Dropdown className="account-dropdown" ref="dropdown" style={{ height: '50px' }}>
                    <DropdownTrigger
                      style={{ float: 'right', height: '50px', textDecoration: 'none', color: '#9D9D9D' }}>
                      <br/>
                      Notifications
                    </DropdownTrigger>
                    <DropdownContent style={{ width: '440px', top: '45px', position: 'relative' }}>
                      <div>
                        <div className="notification">
                          <a href="#" onClick={this.handleLinkClick}>
                            Cash minimum will not be met on 09/22/17
                          </a>
                        </div>
                          <div className="notificationFooter">
                            <a href="#" className="notificationAction">Show Details</a>
                            <a href="#" className="notificationAction">Dismiss</a>
                          </div>
                        <div className="notification">
                          <a href="#" onClick={this.handleLinkClick}>
                            Major uptick in late deliverables
                          </a>
                        </div>
                        <div className="notificationFooter">
                          <a href="#" className="notificationAction">Show Details</a>
                          <a href="#" className="notificationAction">Dismiss</a>
                        </div>
                        <div className="notification">
                          <a href="#" onClick={this.handleLinkClick}>
                            Predicted DSO exceeds target starting on 10/04/17
                          </a>
                        </div>
                        <div className="notificationFooter">
                          <a href="#" className="notificationAction">Show Details</a>
                          <a href="#" className="notificationAction">Dismiss</a>
                        </div>
                        <div className="notification">
                          <a href="#" onClick={this.handleLinkClick}>
                            NetSuite data sync completed
                          </a>
                        </div>
                        <div className="notificationFooter">
                          <a href="#" className="notificationAction">Show Details</a>
                          <a href="#" className="notificationAction">Dismiss</a>
                        </div>
                      </div>
                    </DropdownContent>
                  </Dropdown>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
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

