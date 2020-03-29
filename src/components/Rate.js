import React, { useContext } from "react";
import Card from "shared/Card";
import Loading from "shared/Loading";
import DataContext from "helpers/DataContext";
import "components/components.scss";

const Rate = () => {
  const { covidCase } = useContext(DataContext);
  return (
    <Card title="Rate">
      <div className="rate-title bad">Death Rate</div>
      <div className="rate-data">
        {covidCase ? `${((covidCase.deaths / covidCase.confirmed) * 100).toFixed(2)} %` : <Loading/>}
      </div>
      <div className="rate-title good">Recovery Rate</div>
      <div className="rate-data">
        {covidCase ? `${((covidCase.recovered / covidCase.confirmed) * 100).toFixed(2)} %` : <Loading/>}
      </div>
      <div className="update-at">
        {covidCase ? `last update at ${new Date(covidCase.date).toLocaleDateString("en-US", {day: "numeric",month: "short",year: "numeric"})}` : <Loading/>}
      </div>
    </Card>
  );
};

export default Rate;
