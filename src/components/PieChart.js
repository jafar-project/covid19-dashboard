import React, { useEffect, createRef, useState, useContext } from "react";
import Chart from "chart.js";
import Card from "shared/Card";
import DataContext from "helpers/DataContext";

const PieCharts = props => {
  const { covidCase } = useContext(DataContext);
  const [chartInstance, setChartInstance] = useState(null);
  const chartRef = createRef();

  useEffect(() => {
    if (covidCase) {
      chartInstance && chartInstance.destroy()
      setChartInstance(new Chart(chartRef.current.getContext("2d"), {
        type: "pie",
        data: {
          labels: ["Active", "Death", "Recovered"],
          datasets: [
            {
              label: "Corona Case",
              data: [
                covidCase.confirmed - covidCase.deaths - covidCase.recovered,
                covidCase.deaths,
                covidCase.recovered
              ],
              backgroundColor: ["#F7B32B", "#E83F6F", "#9BC53D"]
            }
          ]
        },
        options: {
          maintainAspectRatio: false,
          responsive: true,
          legend: {
            position: "bottom"
          }
        }
      }))
    }
  }, [covidCase]);

  return (
    <Card title="Case Proportion">
      <canvas id="myChart" ref={chartRef} />
    </Card>
  );
};

export default PieCharts;
