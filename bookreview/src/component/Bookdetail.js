import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../customhook/Usefetch';
import ReviewForm from './Reviewform';
import img from './books.jpg'


const BookDetails = () => {
  const { id } = useParams();
  const { data: book, loading, error } = useFetch(`https://freetestapi.com/api/v1/books/${id}`);
  const [reviews, setReviews] = useState([]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading book details</p>;

  const addReview = (review) => {
    setReviews([...reviews, review]);
  };

  return (
    <div className="book-details">
      <div className='image'>
       <img src={img} alt={`${book.title} cover`} className="book-image" />
       </div>
      <h1>{book.title}</h1>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Genre:</strong> {book.genre}</p>

      <h2>Reviews</h2>
      {reviews.map((review, index) => (
        <div key={index}>
          <p><strong>Title:</strong> {review.title}</p>
          <p><strong>Review:</strong> {review.text}</p>
          <p><strong>Rating:</strong> {review.rating}</p>
        </div>
      ))}
      <ReviewForm addReview={addReview} />
    </div>
  );
};

export default BookDetails;
