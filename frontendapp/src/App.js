// import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Login from './component/Login';
import Register from './component/Register';
import Fetchproduct from './component/Fetchproduct';
import {useState } from 'react';



function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [showLoginPage, setShowLoginPage] = useState(false)

  const setLoggedInD =(d)=>{
    setLoggedIn(d)

  }
  return (
    <>
  <Navbar setShowLoginpage={setShowLoginPage}/>
  {/* {showLoginPage ? <Login setLoggedInData={setLoggedInD}/> : <Register/>} */}

  {loggedIn ? <Fetchproduct /> : <p></p>}
    
</>
  );
}

export default App;
