import React, { useContext, useState, useEffect, useRef } from "react";
import DataContext from "helpers/DataContext";
import Search from "icons/Search";
import "components/searchbar.scss";

const SearchBar = () => {
  const { country, getData } = useContext(DataContext);
  const [search, setSeach] = useState("");
  const [onSearch, setOnSeacrh] = useState(false);
  const searchRef = useRef();
  const selectSearchResult = search => {
    setSeach(search);
    getData(search);
    setOnSeacrh(false);
  };
  const handleClick = event => {
    if (searchRef.current.contains(event.target)) return;
    setOnSeacrh(false);
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  });
  return (
    <div className="search-bar-wrapper">
      <div className="search-bar">
        <div className="container" ref={searchRef}>
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={event => setSeach(event.target.value)}
            onFocus={() => setOnSeacrh(true)}
          />
          <button onClick={() => selectSearchResult(search)}>
            <Search />
          </button>
          {onSearch && country && search && (
            <div className="search-result">
              <ul>
                {country
                  .filter(country =>
                    country.toLowerCase().includes(search.toLowerCase())
                  )
                  .slice(0, 10)
                  .map((country, index) => (
                    <li key={index} onClick={() => selectSearchResult(country)}>
                      {country}
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
