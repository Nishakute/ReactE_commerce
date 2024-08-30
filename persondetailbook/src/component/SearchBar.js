// src/components/SearchBar.js
import React from 'react';

const SearchBar = ({ onSearch, onFilter }) => {
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search by name..."
                onChange={(e) => onSearch(e.target.value)}
            />
            <select onChange={(e) => onFilter(e.target.value)}>
                <option value="">Filter by team</option>
                <option value="Team A">Team A</option>
                <option value="Team B">Team B</option>
                <option value="Team C">Team C</option>
            </select>
        </div>
    );
};

export default SearchBar;
