import React, { useContext } from "react";
import Card from "shared/Card";
import DataContext from "helpers/DataContext";
import "components/Summary.scss";

const Confirmed = props => {
  const { covidCase, newCovidCase } = useContext(DataContext);
  return (
    <Card title="Confirmed">
      <div className="number-case">
        {covidCase.confirmed.toLocaleString("id")}
      </div>
      <div className="case-addition bad">
        {newCovidCase.confirmed.toLocaleString("id")} new case confirmed
      </div>
    </Card>
  );
};

export default Confirmed;
