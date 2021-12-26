import { Language, NotificationsNone, Settings } from '@mui/icons-material';
import React from 'react';
import classes from "./Topbar.module.css";

const Topbar = () => {
    return (
        <div className={classes.topbar}>
            <div className={classes.topbarWrapper}>
 <div className={classes.topLeft}>       <span className={classes.logo}>Akadmin</span>        </div>
 <div className={classes.topRight}> 
 <div className={classes.topbarIconContainer}>
<NotificationsNone/>
<span className={classes.topIconBadge}>
    2
    </span>
 </div>
 <div className={classes.topbarIconContainer}>
<Language/>
<span className={classes.topIconBadge}>
    2
    </span>
 </div>
 <div className={classes.topbarIconContainer}>
<Settings/>

 </div>
 <img src="https://i.ibb.co/z27T48b/picture-of-AK.jpg" alt="admin piture" className={classes.topAvatar} />
 </div>
            </div>
        </div>
    );
};

export default Topbar;