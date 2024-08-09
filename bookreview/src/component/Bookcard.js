import React from 'react';
import { Link } from 'react-router-dom';
import img from './books.jpg'


const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <img src={img} alt={`${book.title} cover`} className="book-image" />
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p>{book.description}</p>

      <button className='btn btn-dark' ><Link to={`/book/${book.id}`}>More Details</Link></button>
    </div>
  );
};

export default BookCard;
