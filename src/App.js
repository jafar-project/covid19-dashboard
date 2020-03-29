import React, { Fragment, useContext } from 'react'
import Confirmed from 'components/Confirmed'
import Death from 'components/Death'
import Recovered from 'components/Recovered'
import PieChart from 'components/PieChart'
import LineChart from 'components/LineChart'
import {DataProvider} from 'helpers/DataContext'

const App = () => {
  return (
    <DataProvider>
      <Confirmed/>
      <Recovered/>
      <Death/>
      <div style={{height: '400px', position: 'relative'}}>
        <PieChart/>
      </div>
      <div style={{height: '700px'}}>
        <LineChart/>
      </div>
    </DataProvider>
  )
}

export default App