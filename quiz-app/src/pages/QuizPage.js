import React from 'react';
import { useNavigate } from 'react-router-dom';
import Quiz from '../component/Quiz';
import { questions } from '../data';

function QuizPage() {
  const navigate = useNavigate();

  const handleFinish = (score) => {
    navigate('/result', { state: { score, totalQuestions: questions.length } });
  };

  return (
    <div>
      <Quiz questions={questions} onFinish={handleFinish} />
    </div>
  );
}

export default QuizPage;
