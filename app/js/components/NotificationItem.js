import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * @author Jeff Risberg
 * @since September 2017
 */
class NotificationItem extends Component {

  constructor(props) {
    super(props);

    this.handleLinkClick = this.handleLinkClick.bind(this);
  }

  handleLinkClick() {
    this.refs.dropdown.hide();
  }

  render() {
    return (
      <div key={this.props.id}>
        <div className="notification">
          <span onClick={this.handleLinkClick}>
            {this.props.description}
          </span>
        </div>
        <div className="notificationFooter">
          <a href="#" className="notificationAction">Show Details</a>
          <a href="#" className="notificationAction">Dismiss</a>
        </div>
      </div>
    )
  }
}

NotificationItem.propTypes = {
  id: PropTypes.number,
  description: PropTypes.string,
};

NotificationItem.defaultProps = {
  description: '',
};

export default NotificationItem;
