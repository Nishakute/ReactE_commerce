import React from 'react';
import './App.css';
import Userdetils from './component/Userdetail';
import {Routes,Route} from 'react-router-dom';
import UserProfile from './component/Userprofile';
function App() {
  return (
    <Routes>
      
      <Route path='/user' Component={Userdetils}/>
      <Route path='/user/:id' Component={UserProfile} />
    </Routes>

  
  );
}

export default App;
