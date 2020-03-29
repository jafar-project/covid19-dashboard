import React, { useEffect, createRef, useContext, useState } from "react";
import Chart from "chart.js";
import Card from "shared/Card";
import DataContext from "helpers/DataContext";

const LineChart = () => {
  const { series } = useContext(DataContext);
  const [chartInstance, setChartInstance] = useState(null);
  const chartRef = createRef();

  useEffect(() => {
    if (series) {
      chartInstance && chartInstance.destroy();
      const goodData = series.filter(data => data.confirmed>0)
      setChartInstance(
        new Chart(chartRef.current.getContext("2d"), {
          type: "line",
          data: {
            labels: goodData.map(covid => new Date(covid.date).toLocaleDateString("en-US", {day: "numeric",month: "short",year: "numeric"})),
            datasets: [
              {
                data: goodData.map(covid => covid.confirmed),
                lineTension: 0,
                label: "Confirmed",
                borderColor: "#F7B32B",
              },
              {
                data: goodData.map(covid => covid.deaths),
                lineTension: 0,
                label: "Deaths",
                borderColor: "#E83F6F",
              }
            ]
          },
          options: {
            maintainAspectRatio: false,
            responsive: true,
            legend: {
              position: "chartArea"
            },
            scales: {
              xAxes: [
                {
                  type: "time",
                  time: {
                    displayFormats: {
                      quarter: "MMM YYYY"
                    }
                  },
                  ticks: {
                    maxRotation: 0,
                    maxTicksLimit: 10
                  }
                }
              ]
            }
          }
        })
      );
    }
  }, [series]);

  return (
    <Card title="Case Trends">
      <canvas id="myChart" ref={chartRef} />
    </Card>
  );
};

export default LineChart;
