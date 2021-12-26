import { Assessment, Person } from '@material-ui/icons';
import { Inventory2, Paid } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Sidebar.module.css';

const QuickMenu = () => {
    return (
        
  <div className={classes.sidebarMenu}>
      <h3 className={classes.sidebarTitle}>QuickMenu </h3>
      <ul className={classes.sidebarList}>
          <Link to="/users">
          <li className={`${classes.sidebarListItem} `}>
              <Person className={classes.sidebarIcon}/>
            Users
               </li>
          </Link>
          <Link to="/products">
          <li className={classes.sidebarListItem}>
              <Inventory2 className={classes.sidebarIcon}/>
              Products
               </li>
          </Link>
          <li className={classes.sidebarListItem}>
              <Paid className={classes.sidebarIcon}/>
              Transaction
               </li>
          <li className={classes.sidebarListItem}>
              <Assessment className={classes.sidebarIcon}/>
             Reports
               </li>

      </ul>
  </div>
          
    );
};

export default QuickMenu;