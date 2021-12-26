import { Report, Timeline } from '@material-ui/icons';
import { ManageAccounts } from '@mui/icons-material';
import React from 'react';
import classes from './Sidebar.module.css';

const Staff = () => {
    return (
        <div className={classes.sidebarMenu}>
      <h3 className={classes.sidebarTitle}>Stuff</h3>
      <ul className={classes.sidebarList}>
          <li className={`${classes.sidebarListItem} `}>
              <ManageAccounts className={classes.sidebarIcon}/>
             Menage
               </li>
          <li className={classes.sidebarListItem}>
              <Timeline className={classes.sidebarIcon}/>
              Analytics
               </li>
          <li className={classes.sidebarListItem}>
              <Report className={classes.sidebarIcon}/>
             Reports
               </li>

      </ul>
  </div>
    );
};

export default Staff;