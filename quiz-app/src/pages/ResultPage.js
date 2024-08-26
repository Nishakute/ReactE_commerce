import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Score from '../component/Score';

function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, totalQuestions } = location.state;

  return (
    <div>
      <Score score={score} totalQuestions={totalQuestions} />
      <button onClick={() => navigate('/quiz')}>Retake Quiz</button>
    </div>
  );
}

export default ResultPage;
