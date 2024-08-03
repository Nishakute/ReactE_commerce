import React, { useState, useRef } from 'react';

const ReviewForm = ({ addReview }) => {
  
  const textRef = useRef();
  const ratingRef = useRef();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
     
      text: textRef.current.value,
      rating: ratingRef.current.value
    };
    addReview(newReview);
    setSubmitted(true);
  };

  return (
    <div>
      {submitted ? <p>Review submitted!</p> : (
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
    </div>
  );
};

export default ReviewForm;
