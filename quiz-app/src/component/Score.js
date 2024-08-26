import React from 'react';

function Score({ score, totalQuestions }) {
  return (
    <div>
      <h1>Your Score: {score} / {totalQuestions}</h1>
    </div>
  );
}

export default Score;
