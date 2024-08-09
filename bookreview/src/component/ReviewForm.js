import React, { useState, useEffect,useRef } from 'react';
import './Review.css'

const ReviewForm = ({ addReview }) => {
  
  const textRef = useRef();
  const ratingRef = useRef();
  const [reviews, setReviews] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    setReviews(storedReviews);
  }, []);

  // Save reviews to local storage whenever the reviews state changes
  useEffect(() => {
    localStorage.setItem('reviews', JSON.stringify(reviews));
  }, [reviews]);


  const handleSubmit = (e) => {
    e.preventDefault();

    const newReview = {
      text: textRef.current.value,
      rating: ratingRef.current.value
    };

    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);
    setSubmitted(true);

    textRef.current.value = ''; 
    ratingRef.current.value = '';
  };

  return (
    <div className="review-form-container">
      {submitted ? (
        <p>Review submitted! Thank you for your feedback.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Review:</label>
            <textarea ref={textRef} required></textarea>
          </div>
          <div>
            <label>Rating:</label>
            <input type="number" ref={ratingRef} min="1" max="5" required />
          </div>
          <button type="submit">Submit Review</button>
        </form>
      )}

      

      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <strong>Review:</strong> {review.text}<br />
            <strong>Rating:</strong> {review.rating} 
          </li>
        ))}
      </ul>

      
    </div>
  );
};


export default ReviewForm;
