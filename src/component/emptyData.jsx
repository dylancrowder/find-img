import React from "react";

export function EmptyData({ query, setQuery, handleSearch, isLoading }) {
  return (
    <div className="no-results">
      <h1>Search for something that interests you.</h1>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="search-input"
      />
      <button
        onClick={handleSearch}
        disabled={isLoading}
        className="search-button"
      >
        {isLoading ? "Searching..." : "Search"}
      </button>
    </div>
  );
}
