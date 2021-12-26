import { LineStyle, Timeline, TrendingUp } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Sidebar.module.css';

const DashBoard = () => {
    return (
        <div className={classes.sidebarMenu}>
      <h3 className={classes.sidebarTitle}>Dashboard </h3>
      <ul className={classes.sidebarList}>
          
          <li className={`${classes.sidebarListItem} ${classes.active}`}>
              <Link to="./">
              <LineStyle className={classes.sidebarIcon}/>
              Home
              </Link>
               </li>
          
          <li className={classes.sidebarListItem}>
              <Timeline className={classes.sidebarIcon}/>
              Analytics
               </li>
          <li className={classes.sidebarListItem}>
              <TrendingUp className={classes.sidebarIcon}/>
              Sales
               </li>

      </ul>
  </div>
    );
};

export default DashBoard;