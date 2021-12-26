import React from 'react';
import Chart from '../../components/Chart/Chart';
import FeauturedInfo from '../../components/FeaturedInfo/FeaturedInfo';
import WidgetLg from '../../components/WidgetLg/WidgetLg';
import WidgetSm from '../../components/WidgetSm/WidgetSm';
import { Userdata } from '../dummyData';
import Classes from './Home.module.css';
const Home = () => {
    return (
        <div className={Classes.home}>
          <FeauturedInfo/>
          <Chart data={Userdata} title="User Analytics" grid dataKey="Active User"/>
          <div className={Classes.homeWidgets}>
           <WidgetSm/>
           <WidgetLg/>

          </div>
        </div>
    );
};

export default Home;