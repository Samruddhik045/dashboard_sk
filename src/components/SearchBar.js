import React, { useState } from 'react';
import "../styles.css"

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search widgets..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;