import React, { useContext } from "react";
import Card from "shared/Card";
import DataContext from "helpers/DataContext";
import "components/Summary.scss";

const Death = props => {
  const { covidCase, newCovidCase } = useContext(DataContext);
  return (
    <Card title="Deaths">
      <div className="number-case">
        {covidCase.deaths.toLocaleString("id")}
      </div>
      <div className="case-addition bad">
        {newCovidCase.deaths.toLocaleString("id")} new case confirmed
      </div>
    </Card>
  );
};

export default Death;
