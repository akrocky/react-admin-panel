import React from 'react';
import DashBoardMenu from './DashBoard';
import NotificationsMenu from './Notifications';
import QuickMenu from './Quick';
import classes from './Sidebar.module.css';
import Staff from './Staff';

const Sidebar = () => {
    return (
        <div className={classes.Sidebar}>
          <div className={classes.sidebarWrapper}>
  <DashBoardMenu/>
  <QuickMenu/>
  <NotificationsMenu/>
  <Staff/>
          </div>
        </div>
    );
};

export default Sidebar;