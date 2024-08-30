import React from 'react';
import './navbar.css';


const Navbar = ({ onSearch, onAddMember, onFilter }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Team Members</h1>
      </div>
      <div className="navbar-actions">
        <input
          type="text"
          placeholder="Search..."
          className="search-bar"
          onChange={(e) => onSearch(e.target.value)}
        />
        <i className="fas fa-search search-icon"></i>
        <button className="filter-icon" onClick={onFilter}>
          <i className="fas fa-filter"></i> 
        </button>
        <button className="add-member-btn" onClick={onAddMember}>
          + Add Member
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
