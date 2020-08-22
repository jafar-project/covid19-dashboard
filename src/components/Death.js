import React, { useContext } from "react";
import Card from "shared/Card";
import DataContext from "helpers/DataContext";
import Loading from "shared/Loading";
import "components/components.scss";

const Death = props => {
  const { covidCase, newCovidCase } = useContext(DataContext);
  return (
    <Card title="Deaths">
      <div className="number-case">
        {covidCase ? covidCase.deaths.toLocaleString("id") : <Loading/>}
      </div>
      <div className="case-addition bad">
        {newCovidCase ? `+${newCovidCase.deaths.toLocaleString("id")}` : <Loading/>}
      </div>
    </Card>
  );
};

export default Death;
