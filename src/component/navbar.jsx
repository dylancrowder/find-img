export function Nav({ query, setQuery, handleSearch, isLoading }) {
  return (
    <nav>
      <div className="title-container">
        <h3>findPhoto</h3>
      </div>
      <div className="search-container">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
        />
        <button onClick={handleSearch} disabled={isLoading}>
          {isLoading ? "Searching..." : "Search"}
        </button>
      </div>
    </nav>
  );
}
