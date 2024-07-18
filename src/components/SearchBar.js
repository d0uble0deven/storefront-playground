// src/components/SearchBar.js
import React, { useState } from "react";
import "../index.css";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = (event) => {
    const searchQuery = event.target.value;
    setQuery(searchQuery);
    onSearch(searchQuery);
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search for models"
        value={query}
        onChange={handleSearch}
        className="search-input"
      />
    </div>
  );
}

export default SearchBar;
