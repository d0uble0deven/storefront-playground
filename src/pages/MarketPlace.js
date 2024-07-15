// src/pages/MarketPlace.js
import React, { useState } from "react";

import Card from "../components/Card";
import SearchBar from "../components/SearchBar";

function MarketPlace({ data }) {
  const [query, setQuery] = useState("");

  console.log(" MarketPlace - data: ", data);

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery.toLowerCase());
  };

  const filteredData = data.filter(
    (item) =>
      item.title.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query)
  );

  return (
    <div>
      <h1>
        {query === "" ? `All Models (${data.length})` : `Search for ${query}`}
      </h1>
      <SearchBar onSearch={handleSearch} />
      <div className="card-list">
        {filteredData.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
    </div>
  );
}

export default MarketPlace;
