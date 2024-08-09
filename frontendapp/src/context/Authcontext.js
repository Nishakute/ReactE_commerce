import React,{createContext,useState} from 'react'


const Authcontext=createContext();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const[isAututhenticated,setisAututhenticated]=useState(false);

const  login =(userdata)=>{
  setisAututhenticated(true);
  setUser(userdata);
}

const logout=()=>{
  setUser(null);
}


  return (
    <Authcontext.Provider value={{isAututhenticated,user,login,logout}}>
      {children}
    </Authcontext.Provider>
   
  )
}

export{AuthProvider,Authcontext}