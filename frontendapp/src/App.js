// import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Login from './component/Login';
import Register from './component/Register';
import Fetchproduct from './component/Fetchproduct';
import {useState,useEffect,useContext} from 'react';
import {Routes,Route} from 'react-router-dom';
import {Themecontext} from './context/Themecontext'


function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [showLoginPage, setShowLoginPage] = useState(false)
  const {theme} = useContext(Themecontext)

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

  <div className={`app ${theme == 'light' ? 'bg-dark text-light' :'bg-light text-dark'}`}>


  <Navbar></Navbar>
    <Routes>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/login' element={<Login setLoggedInData={setLoggedInD}/>}></Route>
      <Route path='/fetch-product' element={<Fetchproduct data={data}/>}></Route>
      <Route path='/fetch-product/:id' element={<productDetail data={data}/>}></Route>
    </Routes>
    </div>
    </>
   
  );
}

export default App;
