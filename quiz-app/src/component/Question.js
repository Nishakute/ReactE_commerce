import React from 'react';
import './Question.css'

function Question({ question, onAnswer }) {
  return (
    <div className="question-box">
    <h2 className="question-text">Question: {question.text}</h2>
    <div className="options-container">
      {question.options.map((option, index) => (
        <button
          key={index}
          className="option-button"
          onClick={() => onAnswer(option.isCorrect)}
        >
          {option.text}
        </button>
      ))}
    </div>
  </div>
  );
}

export default Question;
