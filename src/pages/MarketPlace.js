import React, { useState } from "react";

import Card from "../components/Card";
import SearchBar from "../components/SearchBar";

function MarketPlace({ data }) {
  const [query, setQuery] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });

  const SortingOptions = {
    TITLE: "title",
    SIZE: "size",
  };

  const ascendingArrow = "/images/ascending.png";
  const descendingArrow = "/images/descending.png";

  console.log(" MarketPlace - data: ", data);

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery.toLowerCase());
  };

  const handleSort = (key) => {
    let direction = sortConfig.direction;
    if (sortConfig.key === key) {
      direction =
        sortConfig.direction === "ascending" ? "descending" : "ascending";
    } else {
      direction = "ascending";
    }
    setSortConfig({ key, direction });
  };

  const handleToggleSortDirection = () => {
    setSortConfig((prevSortConfig) => ({
      ...prevSortConfig,
      direction:
        prevSortConfig.direction === "ascending" ? "descending" : "ascending",
    }));
  };

  const handleSortChange = (event) => {
    handleSort(event.target.value);
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
      <div className="search-and-sort">
        <SearchBar onSearch={handleSearch} />
        <div className="sorting-buttons">
          <select
            className="orderByButton"
            onChange={handleSortChange}
            value={sortConfig.key || ""}
          >
            <option value="">Select Sorting Option</option>
            <option value={SortingOptions.TITLE}>Sort by Title</option>
            <option value={SortingOptions.SIZE}>Sort by Size</option>
          </select>
          <button className="sortButton" onClick={handleToggleSortDirection}>
            <img
              className="sortButton"
              src={
                sortConfig.direction === "ascending"
                  ? ascendingArrow
                  : descendingArrow
              }
              alt={sortConfig.direction}
            ></img>
          </button>
        </div>
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
