import React from "react";

function SearchBar({ search, setSearch, maxPrice, setMaxPrice }) {
  return (
    <div className="filter-bar">
      
      {/* Search Box */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search by city..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Price Box */}
      <div className="price-box">
        <label>Max Price: ₹{maxPrice}</label>
        <input
          type="range"
          min="3000"
          max="20000"
          step="500"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />
      </div>

      {/* Reset Button */}
      <div className="reset-box">
        <button
          type="button"
          onClick={() => {
            setSearch("");
            setMaxPrice(20000);
          }}
        >
          Reset
        </button>
      </div>

    </div>
  );
}

export default SearchBar;