import React, { useContext } from 'react'
import Card from 'shared/Card'
import DataContext from 'helpers/DataContext';
import "components/Summary.scss";

const Recovered = props => {
  const { covidCase, newCovidCase } = useContext(DataContext)
  return (
    <Card title="Recovered">
      <div className="number-case">
        {covidCase.recovered.toLocaleString("id")}
      </div>
      <div className="case-addition good">
        {newCovidCase.recovered.toLocaleString("id")} new case confirmed
      </div>
    </Card>
  )
}

export default Recovered;
