import React, { useState } from 'react';
import Question from './Question';

function Quiz({ questions, onFinish }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      onFinish(score);
    }
  };

  return (
    <div>
      <Question
        question={questions[currentQuestion]}
        onAnswer={handleAnswer}
      />
    </div>
  );
}

export default Quiz;
