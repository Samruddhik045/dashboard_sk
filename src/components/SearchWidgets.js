import React from 'react';

const SearchWidgets = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search-widgets">
      <input
        type="text"
        placeholder="Search widgets..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchWidgets;