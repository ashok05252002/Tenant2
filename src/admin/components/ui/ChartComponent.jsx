import React from 'react';
import ReactECharts from 'echarts-for-react';

const ChartComponent = ({ option, style }) => {
  return (
    <ReactECharts
      option={option}
      style={style || { height: '100%', width: '100%' }}
      notMerge={true}
      lazyUpdate={true}
      theme={"light"}
    />
  );
};

export default ChartComponent;
