import { ArrowDownward } from '@material-ui/icons';
import Cost from './Cost';
import Classes from './FeaturedInfo.module.css';
import Sales from './Sales';

const FeauturedInfo = () => {
    return (
        <div className={Classes.featured}>

            <div className={Classes.featuredItem}>
<span className={Classes.featuereTitle}> Revanue  </span>
<div className={Classes.featureMoneyContainer}>
<span className={Classes.featuredMoney}>$2,415</span>
<span className={Classes.featuredMoneyRate}> -11.4 <ArrowDownward className={`${Classes.featuredIcon} 
 ${Classes.negative}`}/> </span>
</div>
<span className={Classes.featuredSub}>Compared to last month   </span>
            </div>
            <Sales/>
            <Cost/>

        
        </div>
    );
};

export default FeauturedInfo;