import React, {useEffect, createRef, useState, useContext} from 'react'
import Chart from 'chart.js'
import Card from 'shared/Card'
import DataContext from 'helpers/DataContext'

const PieCharts = (props) => {
  const chartRef = createRef(null);
  const {covidCase} = useContext(DataContext)
  const [data, setData] = useState([
    covidCase.confirmed,
    covidCase.deaths,
    covidCase.recovered
  ])

  useEffect(() => {
    new Chart(chartRef.current.getContext("2d"), {
      type: "pie",
      data: {
        labels: ["Active", "Death", "Recovered"],
        datasets: [
          {
            label: "Corona Case",
            data: data,
            backgroundColor: ["#8e5ea2", "#c45850","#3cba9f"],
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        legend: {
          position: 'bottom'
        }
      }
    });
  })

  return (
    <Card title="Case Proportion">
      <canvas id="myChart" ref={chartRef} />
    </Card>
  )
}

export default PieCharts