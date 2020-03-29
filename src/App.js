import React, { Fragment, useContext } from "react";
import Confirmed from "components/Confirmed";
import Death from "components/Death";
import Recovered from "components/Recovered";
import PieChart from "components/PieChart";
import LineChart from "components/LineChart";
import SearchBar from "components/Searchbar";
import Rate from "components/Rate";
import { DataProvider } from "helpers/DataContext";
import './App.scss'

const App = () => {
  return (
    <DataProvider>
      <SearchBar />
      <div className="wrapper">
        <div className="grid-view">
          <div id="rate">
            <Rate />
          </div>
          <div id="confirmed">
            <Confirmed />
          </div>
          <div id="recovered">
            <Recovered />
          </div>
          <div id="death">
            <Death />
          </div>
          <div id="pie-chart">
            <PieChart />
          </div>
          <div id="line-chart">
            <LineChart />
          </div>
        </div>
      </div>
    </DataProvider>
  );
};

export default App;
