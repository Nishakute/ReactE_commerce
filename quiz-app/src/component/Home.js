import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#"  onClick={() => navigate('/quiz')}>Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#">Quiz</a>
      </li>
      
      <li class="nav-item">
        <a class="nav-link active " href="#">Score</a>
      </li>
    </ul>
   
  </div>
  </nav>
        
    
      <h1>Welcome to the Quiz!</h1>
      <button onClick={() => navigate('/quiz')}>Start Quiz</button>
    </div>
  );
}

export default Home;
