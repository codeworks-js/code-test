import React, { FC, useRef, useState, useEffect } from "react";
import {Chart as ChartJs} from "chart.js";

export type Props = {
  data: Object
}

const Chart: FC<Props> = ({data}) => {
  const config = {
    type: 'radar',
    data: data,
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Chart.js Radar Chart'
        }
      }
    },
  };
  const chartContainer = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    if(chartContainer && chartContainer.current) {
      setChartInstance(new ChartJs(chartContainer.current, config))
    }
  }, [chartContainer])

  return (
    <canvas ref={chartContainer} width="400" height="400"></canvas>
  );
}

export default Chart;