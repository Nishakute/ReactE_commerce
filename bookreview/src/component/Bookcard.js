import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <Link to={`/book/${book.id}`}>More Details</Link>
    </div>
  );
};

export default BookCard;
