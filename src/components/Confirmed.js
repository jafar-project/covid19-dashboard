import React, { useContext } from "react";
import Card from "shared/Card";
import DataContext from "helpers/DataContext";
import Loading from "shared/Loading";
import "components/components.scss";

const Confirmed = props => {
  const { covidCase, newCovidCase } = useContext(DataContext);
  return (
    <Card title="Confirmed">
      <div className="number-case">
        {covidCase ? covidCase.confirmed.toLocaleString("id") : <Loading />}
      </div>
      <div className="case-addition bad">
        {newCovidCase ? `${newCovidCase.confirmed.toLocaleString("id")} new case confirmed` : <Loading/>}
      </div>
    </Card>
  );
};

export default Confirmed;
