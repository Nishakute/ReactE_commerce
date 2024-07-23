import React,{useState} from 'react'



function Register({setRegisteredInData}) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
  
   console.log(username);
    const handleClick = () =>{
      const payLoad = {username,email,password};
      const userData = localStorage.setItem('user',JSON.stringify(payLoad))
      
      setRegisteredInData(true);
      }
      return (
      <>
        <div className="containerDiv">
        <div className="login-container">
          <h2>Register </h2>
          <form >
            <div className="input-group">
              <label htmlfor="username">Username</label>
              <input type="text"id="username" name="username"onChange={(e) => setUsername(e.target.value)} required />
            </div>
            <div className="input-group">
              <label htmlfor="email">Email</label>
              <input type="text"id="email"name="email"onChange={(e) => setEmail(e.target.value)}required />
            </div>
            <div className="input-group">
              <label htmlfor="password">Password</label>
              <input type="password"id="password"name="password" onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button onClick={handleClick} >Register</button>
          </form>
        </div>
  
        </div>
      </>
    );
  }
  
  export default Register;