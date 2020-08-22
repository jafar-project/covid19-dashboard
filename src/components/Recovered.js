import React, { useContext } from "react";
import Card from "shared/Card";
import DataContext from "helpers/DataContext";
import Loading from "shared/Loading";
import "components/components.scss";

const Recovered = props => {
  const { covidCase, newCovidCase } = useContext(DataContext);
  return (
    <Card title="Recovered">
      <div className="number-case">
        {covidCase ? covidCase.recovered.toLocaleString("id") : <Loading />}
      </div>
      <div className="case-addition good">
        {newCovidCase ? `+${newCovidCase.recovered.toLocaleString("id")}` : <Loading />}
      </div>
    </Card>
  );
};

export default Recovered;
