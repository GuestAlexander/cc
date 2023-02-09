import React from "react";

function SearchBar(props) {
  const {onSearch} = props;
  return (
    <div className="search">
      <input type="text" className="searchTerm" onChange={(e) => onSearch(e.target.value)} />
      {/* For the advanced deliverables: add a checkbox to allow sorting the planeteer */}
    </div>
  );
}

export default SearchBar;