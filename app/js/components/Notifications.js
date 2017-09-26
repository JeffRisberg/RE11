import React, { Component } from 'react';
import Dropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown';
import NotificationItem from './NotificationItem';

import './Notifications.css';

/**
 * @author Jeff Risberg
 * @since September 2017
 */
class Notifications extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Dropdown className="account-dropdown" ref="dropdown" style={{ height: '50px' }}>
        <DropdownTrigger style={{ float: 'right', height: '50px', textDecoration: 'none', color: '#9D9D9D' }}>
          <br />
          Notifications
        </DropdownTrigger>
        <DropdownContent style={{ width: '440px', top: '45px', position: 'relative' }}>
          <NotificationItem description="Cash minimum will not be met on 09/22/17" />
          <NotificationItem description="Major uptick in late deliverables" />
          <NotificationItem description="Predicted DSO exceeds target starting on 10/04/17" />
          <NotificationItem description="NetSuite data sync completed" />
        </DropdownContent>
      </Dropdown>
    );
  }
}

export default Notifications;
