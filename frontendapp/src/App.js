// import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Login from './component/Login';
import Register from './component/Register';
import Fetchproduct from './component/Fetchproduct';
import {useState,useEffect } from 'react';
import {Routes,Route} from 'react-router-dom';


function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [showLoginPage, setShowLoginPage] = useState(false)

  const setLoggedInD =(d)=>{
    setLoggedIn(d)
  
  }
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products?limit=5`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <>
  
  {/* <Navbar setShowLoginpage={setShowLoginPage}/> */}
  {/* {showLoginPage ? <Login setLoggedInData={setLoggedInD}/> : <Register/>} */}

  {/* {loggedIn ? <Fetchproduct /> : <p></p>} */}

  


  <Navbar></Navbar>
    <Routes>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/login' element={<Login setLoggedInData={setLoggedInD}/>}></Route>
      <Route path='/fetch-product' element={<Fetchproduct/>}></Route>
    </Routes>
    </>
  );
}

export default App;
