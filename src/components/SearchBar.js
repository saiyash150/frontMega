import React from 'react';

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search notes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
