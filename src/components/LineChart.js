import React, {useEffect, createRef, useContext, useState} from 'react'
import Chart from 'chart.js'
import Card from 'shared/Card'
import DataContext from 'helpers/DataContext'

const LineChart = () => {
  const {series} = useContext(DataContext)
  const chartRef = createRef();

  useEffect(() => {
    new Chart(chartRef.current.getContext("2d"), {
      type: 'line',
      data: {
        labels: series.map(covid => new Date(covid.date)),
        datasets: [{ 
            data: series.map(covid => covid.confirmed),
            label: "Confirmed",
            borderColor: "#8e5ea2",
            fill : true
          }, {
            data: series.map(covid => covid.deaths),
            label: "Deaths",
            borderColor: "#c45850",
            fill : true
          }
        ]
      },
      options: { 
        maintainAspectRatio : false,
        responsive: true,
        legend: {
          position: 'chartArea'
        },
        scales : {
          xAxes : [
            {
              type: 'time',
              time: {
                  displayFormats: {
                      quarter: 'MMM YYYY'
                  }
              },
              ticks: {
                maxRotation: 0,
                maxTicksLimit : 10,
              },
            }
          ]
        }
      }
    });
  }, [chartRef])

  return (
    <Card title="Case Trends">
      <canvas id="myChart" ref={chartRef} />
    </Card>
  )
}

export default LineChart