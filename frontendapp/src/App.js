// import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Login from './component/Login';
import Register from './component/Register';
import Fetchproduct from './component/Fetchproduct';
import { useState } from 'react';



function App() {

  const [loggedIn,setLoggedIn] = useState(false)
  const [registeredInData,setRegisteredInData] = useState(false)
  const [showLoginpage,setShowLoginpage] = useState(false)

  const setLoggedInD=(d)=>{setLoggedIn(d)}
  return (
    <>
  <Navbar setShowLoginpage={setShowLoginpage}/>
    {/* <Header /> */}
    <br />

    {showLoginpage ? <Login setLoggedInData={setLoggedInD}/> : <Register setRegisteredInData={setRegisteredInData}/>}

    {loggedIn ? <Fetchproduct /> : <p></p>}
    
</>
  );
}

export default App;
