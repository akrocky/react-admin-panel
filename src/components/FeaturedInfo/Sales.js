import { ArrowDownward } from '@material-ui/icons';
import React from 'react';
import Classes from './FeaturedInfo.module.css';

const Sales = () => {
    return (
        <div className={Classes.featuredItem}>
<span className={Classes.featuereTitle}>Sales  </span>
<div className={Classes.featureMoneyContainer}>
<span className={Classes.featuredMoney}>$4,415</span>
<span className={Classes.featuredMoneyRate}> -1.4 <ArrowDownward className={`${Classes.featuredIcon} 
 ${Classes.negative}`}/> </span>
</div>
<span className={Classes.featuredSub}>Compared to last month   </span>
            </div>
    );
};

export default Sales;