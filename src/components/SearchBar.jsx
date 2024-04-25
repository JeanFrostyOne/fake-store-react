import React from "react";

export default function SearchBar({ search, setSearch }) {
  return (
    <div className="search-container">
      <h2 className="search-header">Search:</h2>
      <input
        className="search-inp"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        type="text"
        placeholder="John Hardy..."
      />
    </div>
  );
}
