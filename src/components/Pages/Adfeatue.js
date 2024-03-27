import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Import Chart class from 'chart.js/auto'

const Adfeatue = () => {
  const parameterData = [];
  const numberOfParameters = 4; // Water flow, chlorine level, calcium level, turbidity level
  const numberOfPoints = 100;

  for (let i = 0; i < numberOfParameters; i++) {
    const data = [];
    for (let j = 0; j < numberOfPoints; j++) {
      data.push(Math.random() * 100); // Random value between 0 and 100
    }
    parameterData.push(data);
  }

  const waterFlowChartRef = useRef(null);
  const chlorineLevelChartRef = useRef(null);
  const calciumLevelChartRef = useRef(null);
  const turbidityLevelChartRef = useRef(null);

  useEffect(() => {
    const updateChart = (ctx, data, label) => {
      if (ctx.chart) {
        ctx.chart.destroy(); // Destroy the existing chart instance if it exists
      }
      ctx.chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: Array.from({ length: numberOfPoints }, (_, i) => i + 1),
          datasets: [{
            label: label,
            data: data,
            borderColor: `hsl(${Math.random() * 360}, 50%, 50%)`,
            fill: false
          }]
        },
        options: {
          scales: {
            x: {
              display: true,
              title: {
                display: true,
                text: 'Time'
              }
            },
            y: {
              display: true,
              title: {
                display: true,
                text: 'Value'
              }
            }
          }
        }
      });
    };

    if (waterFlowChartRef.current) {
      updateChart(waterFlowChartRef.current.getContext('2d'), parameterData[0], 'Water Flow');
    }
    if (chlorineLevelChartRef.current) {
      updateChart(chlorineLevelChartRef.current.getContext('2d'), parameterData[1], 'Chlorine Level');
    }
    if (calciumLevelChartRef.current) {
      updateChart(calciumLevelChartRef.current.getContext('2d'), parameterData[2], 'Calcium Level');
    }
    if (turbidityLevelChartRef.current) {
      updateChart(turbidityLevelChartRef.current.getContext('2d'), parameterData[3], 'Turbidity Level');
    }

    return () => {
      [waterFlowChartRef, chlorineLevelChartRef, calciumLevelChartRef, turbidityLevelChartRef].forEach(ref => {
        if (ref.current && ref.current.chart) {
          ref.current.chart.destroy();
        }
      });
    };
  }, [parameterData]); // Include parameterData in dependency array for re-rendering when data changes

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <canvas width="400" height="200" ref={waterFlowChartRef}></canvas>
        <canvas width="400" height="200" ref={chlorineLevelChartRef}></canvas>
      </div>
      <div style={{ flex: 1 }}>
        <canvas width="400" height="200" ref={calciumLevelChartRef}></canvas>
        <canvas width="400" height="200" ref={turbidityLevelChartRef}></canvas>
      </div>
    </div>
  );
};

export default Adfeatue;
