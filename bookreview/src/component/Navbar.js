import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'


function Navbar(){

    return (
      <nav>
        <ul>
          <li><Link to="/books">Books</Link></li>
          
        </ul>
      </nav>
    );
  };
  

export default Navbar;