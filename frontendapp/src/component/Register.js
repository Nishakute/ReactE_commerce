import { useState } from "react";

function Register(){
    const[emailid,setemailid]=useState();
    const[pass,setpass]=useState();
    const handleClick= () =>{
        const payLoad = {emailid,pass};
        const userData = localStorage.setItem('user',JSON.stringify(payLoad))}



    return(
        <div class="container">
        
        <form action="#" method="POST">
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" onChange={(e) => setemailid(e.target.value)} required/>
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password"onChange={(e) => setpass(e.target.value)} required/>
            </div>
            <button type="submit" onClick={handleClick}>Register</button>
        </form>
    </div>
        
    )
}
export default Register;