import React, { useContext, useState } from "react";
import DataContext from "helpers/DataContext";
import Search from "icons/Search";
import "components/searchbar.scss";

const SearchBar = () => {
  const { country, getData } = useContext(DataContext);
  const [search, setSeach] = useState("");
  const [onSearch, setOnSeacrh] = useState(false);
  const selectSearchResult = (event,search) => {
    event.stopPropagation()
    setSeach(search)
    getData(search)
    setOnSeacrh(false)
  }
  return (
    <div className="search-bar-wrapper">
      <div className="search-bar">
        <div className="container">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={event => setSeach(event.target.value)}
            onFocus={() => setOnSeacrh(true)}
          />
          <button onClick={() => selectSearchResult(search)}><Search /></button>
          {onSearch && country && search && (
            <div className="search-result">
              <ul>
                {
                  country.filter((country) => country.toLowerCase().includes(search.toLowerCase()))
                    .slice(0, 10)
                    .map((country, index) => <li key={index} onClick={(event) => selectSearchResult(event,country)}>{country}</li>)
                }
              </ul>
            </div>
          )
          }
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
