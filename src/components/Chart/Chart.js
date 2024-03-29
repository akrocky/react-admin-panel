import React from "react";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import Classes from "./Chart.module.css";


const Chart = ({title,data,dataKey,grid}) => {
  return (
    <div className={Classes.chart}>
      <h3 className={Classes.chartTitle}>{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
      
           <XAxis dataKey="name" stroke="#5550bd" />
          
         
           <Line type="monotone" dataKey={dataKey}  stroke="#5550bd" />
         
          <Tooltip/>
        {grid&&  <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>}
         



        </LineChart>
        
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
