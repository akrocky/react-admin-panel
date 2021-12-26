import { Mail, Message } from '@material-ui/icons';
import { Feed } from '@mui/icons-material';
import React from 'react';
import classes from './Sidebar.module.css';
const Notifications = () => {
    return (
        <div className={classes.sidebarMenu}>
      <h3 className={classes.sidebarTitle}>Notifications</h3>
      <ul className={classes.sidebarList}>
          <li className={`${classes.sidebarListItem} `}>
              <Mail className={classes.sidebarIcon}/>
              Mail
               </li>
          <li className={classes.sidebarListItem}>
              <Feed className={classes.sidebarIcon}/>
             Feedback
               </li>
          <li className={classes.sidebarListItem}>
              <Message className={classes.sidebarIcon}/>
              Message
               </li>

      </ul>
  </div>
    );
};

export default Notifications;