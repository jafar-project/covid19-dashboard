import React, { createContext, useState, useEffect } from "react";

const DataContext = createContext();
const URL = "https://pomber.github.io/covid19/timeseries.json";

const DataProvider = props => {
  const [series, setSeries] = useState(null);
  const [covidCase, setCovidCase] = useState(null);
  const [newCase, setNewCase] = useState(null);
  const [country, setNewCountry] = useState(null);

  const setGlobal = data =>
    data.reduce((sum, current) => {
      current.forEach((data, index) => {
        sum[index] = sum[index] || {};
        sum[index] = {
          date: data.date,
          confirmed: (sum[index].confirmed || 0) + data.confirmed,
          deaths: (sum[index].deaths || 0) + data.deaths,
          recovered: (sum[index].recovered || 0) + data.recovered
        };
      });
      return sum;
    }, []);

  const getData = region => {
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        region !== "Global"
          ? setSeries(data[region])
          : setSeries(setGlobal(Object.values(data))); setNewCountry(Object.keys(data));
      });
  };

  const update = data => {
    setCovidCase(data[1]);
    setNewCase({
      confirmed: data[1].confirmed - data[0].confirmed,
      deaths: data[1].deaths - data[0].deaths,
      recovered: data[1].recovered - data[0].recovered
    });
  };

  useEffect(() => {
    getData("Indonesia");
  }, []);

  useEffect(() => {
    series && update(series.slice(-2));
  }, [series]);

  return  (
    <DataContext.Provider
      value={{
        series: series,
        covidCase: covidCase,
        newCovidCase: newCase,
        country : country,
        getData : getData
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export { DataProvider };
export default DataContext;
