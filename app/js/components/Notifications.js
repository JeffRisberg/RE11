import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown';
import NotificationItem from './NotificationItem';
import { queryNotifications } from '../actions/notifications';
import './Notifications.css';

/**
 * @author Jeff Risberg
 * @since September 2017
 */
class Notifications extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      currentPage: 1,
      pageSize: 6,
      sort: null,
      sortDir: 1
    };
  }

  componentDidMount() {
    const { currentPage, pageSize, sort, sortDir } = this.state;
    const skip = (currentPage - 1) * pageSize;
    const limit = pageSize;

    this.props.queryNotifications(skip, limit, sort, sortDir);
  }

  loadDataFromAPI(currentPage, pageSize, sort, sortDir) {
    const skip = (currentPage - 1) * pageSize;
    const limit = pageSize;

    this.props.queryNotifications(skip, limit, sort, sortDir);

    this.setState({
      currentPage: currentPage,
      pageSize: pageSize,
      sort: sort,
      sortDir: sortDir
    });
  }

  render() {
    const notificationItemList = this.props.notifications.idList.map((itemId, index) => {
      const notification = this.props.notifications.records[itemId];

      return <NotificationItem
        id={index}
        description={notification.description}/>
    })

    return (
      <Dropdown className="account-dropdown" ref="dropdown" style={{ height: '50px' }}>
        <DropdownTrigger style={{ float: 'right', height: '50px', textDecoration: 'none', color: '#9D9D9D' }}>
          <br />
          Notifications
        </DropdownTrigger>
        <DropdownContent style={{ width: '440px', top: '45px', position: 'relative' }}>
          {notificationItemList}
        </DropdownContent>
      </Dropdown>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notifications: state.notifications
  };
};

export default connect(
  mapStateToProps,
  { queryNotifications }
)(Notifications);
