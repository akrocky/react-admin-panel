import { Visibility } from '@material-ui/icons';
import React from 'react';
import Classes from './WidgetSm.module.css';

const WidgetSm = () => {
    return (
        <div className={Classes.widgetSm}>
           <span className={Classes.widgetSmTitle}>
        New Join Members
           </span>
           <ul className={Classes.widgetSmList}> 
        <li className={Classes.widgetSmListItem}>
       <img src="https://free-images.com/sm/6ac4/computer_monitor_users_edit.jpg" alt="" />
<div className={Classes.widgetSmUser}>
<span className={Classes.widgetSmUsername}>
Anna Keller
</span>
<span className={Classes.widgetSmUserTitle}> 
    Software Engineer
</span>
</div>
<button className={Classes.widgetSmButton}>
    <Visibility className={Classes.widgetSmIcon}/>
    Display
</button>
        </li>
        <li className={Classes.widgetSmListItem}>
       <img src="https://free-images.com/sm/6ac4/computer_monitor_users_edit.jpg" alt="" />
<div className={Classes.widgetSmUser}>
<span className={Classes.widgetSmUsername}>
Anna Keller
</span>
<span className={Classes.widgetSmUserTitle}> 
    Software Engineer
</span>
</div>
<button className={Classes.widgetSmButton}>
    <Visibility className={Classes.widgetSmIcon}/>
    Display
</button>
        </li>
        <li className={Classes.widgetSmListItem}>
       <img src="https://free-images.com/sm/6ac4/computer_monitor_users_edit.jpg" alt="" />
<div className={Classes.widgetSmUser}>
<span className={Classes.widgetSmUsername}>
Anna Keller
</span>
<span className={Classes.widgetSmUserTitle}> 
    Software Engineer
</span>
</div>
<button className={Classes.widgetSmButton}>
    <Visibility className={Classes.widgetSmIcon}/>
    Display
</button>
        </li>
        <li className={Classes.widgetSmListItem}>
       <img src="https://free-images.com/sm/6ac4/computer_monitor_users_edit.jpg" alt="" />
<div className={Classes.widgetSmUser}>
<span className={Classes.widgetSmUsername}>
Anna Keller
</span>
<span className={Classes.widgetSmUserTitle}> 
    Software Engineer
</span>
</div>
<button className={Classes.widgetSmButton}>
    <Visibility className="widgetSmIcon"/>
    Display
</button>
        </li>
        <li className={Classes.widgetSmListItem}>
       <img src="https://free-images.com/sm/6ac4/computer_monitor_users_edit.jpg" alt="" />
<div className={Classes.widgetSmUser}>
<span className={Classes.widgetSmUsername}>
Anna Keller
</span>
<span className={Classes.widgetSmUserTitle}> 
    Software Engineer
</span>
</div>
<button className={Classes.widgetSmButton}>
    <Visibility className={Classes.widgetSmIcon}/>
    Display
</button>
        </li>
           </ul>
        </div>
    );
};

export default WidgetSm;