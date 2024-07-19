import React,{useState} from 'react'

function Login(){

    const [email,setemail]=useState()
    const [pass,setpass] = useState();

    const handleClick=()=>{
        const userData=JSON.parse(localStroage.getItem('user'))
    }
    return(
    
        <form>  
        <div class="container">   
            <label>Email : </label>   
            <input type="text"  value={email}placeholder="Enter email" id="email" name="email" onChange={(e) => setemail(e.target.value)} required/>  
            <label>Password : </label>   
            <input type="password" value={pass} placeholder="Enter Password" id="password" name="password" onChange={(e) => setpass(e.target.value)} required/>  
            <button type="submit" onClick={handleClick}>Login</button>   
              
        </div>   
    </form>    
    

    )
}
export default Login