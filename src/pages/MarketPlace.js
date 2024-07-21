// src/pages/MarketPlace.js
import React, { useState } from "react";

import Card from "../components/Card";
import SearchBar from "../components/SearchBar";

function MarketPlace({ data }) {
  const [query, setQuery] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });

  console.log(" MarketPlace - data: ", data);

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery.toLowerCase());
  };

  const filteredData = data.filter(
    (item) =>
      item.title.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query)
  );

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    console.log("key: ", key, "direction: ", direction);
    setSortConfig({ key, direction });
  };

  const sortedData = React.useMemo(() => {
    let sortableData = [...data];
    if (sortConfig.key) {
      console.log(
        "sortConfig.key: ",
        sortConfig.key,
        "sortableData: ",
        sortableData
      );
      sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
    );
  }, [data, sortConfig, query]);

  return (
    <div>
      <h1>
        {query === "" ? `All Models (${data.length})` : `Search for ${query}`}
      </h1>
      <SearchBar onSearch={handleSearch} />
      <div className="sorting-buttons">
        <button onClick={() => handleSort("title")}>Sort by Title</button>
        <button onClick={() => handleSort("size")}>Sort by Size</button>
      </div>
      <div className="card-list">
        {sortedData.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default MarketPlace;
