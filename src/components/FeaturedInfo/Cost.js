import { ArrowUpward } from '@material-ui/icons';
import React from 'react';
import Classes from './FeaturedInfo.module.css';

const Cost = () => {
    return (
        <div className={Classes.featuredItem}>
        <span className={Classes.featuereTitle}> Cost  </span>
        <div className={Classes.featureMoneyContainer}>
        <span className={Classes.featuredMoney}>$2,415</span>
        <span className={Classes.featuredMoneyRate}> +2.4 <ArrowUpward className={`${Classes.featuredIcon} 
 `}/> </span>
        </div>
        <span className={Classes.featuredSub}>Compared to last month   </span>
                    </div>
    );
};

export default Cost;