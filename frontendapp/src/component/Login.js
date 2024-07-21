import React from "react";
import React,{useState,useEffect} from 'react';
import Fetchproduct from "./Fetchproduct";

function Login({setLoggedInData}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  
    const handleClick = () =>{
      const userData = JSON.parse(localStorage.getItem('user'));
      }
    
  
    return (
      <>
        <div className="containerDiv">
        <div className="login-container">
          <h2>Login</h2>
          <form >
            <div className="input-group">
              <label htmlfor="email">Email</label>
              <input 
                type="text" 
                id="email" 
                name="email" 
                onChange={(e) => setEmail(e.target.value)}
                required />
            </div>
            <div className="input-group">
              <label htmlfor="password">Password</label>
              <input 
              type="password" 
              id="password" 
              name="password" 
              onChange={(e) => setPassword(e.target.value)}
              required />
            </div>
  
            <button onClick={handleClick} >Login</button>
          </form>
          <p>{message}</p>
        </div>
       
        </div>
      </>
    );
  }
  
  
       
export default Login;
