import React from "react";
import "./Search.css";

const Search = ({ handleSearchNote }) => {
  return (
    <div className="search">
      <input
        onChange={(event) => handleSearchNote(event.target.value)}
        type="text"
        className="inputSearch"
        placeholder="Search here ... "
      />
    </div>
  );
};

export default Search;
