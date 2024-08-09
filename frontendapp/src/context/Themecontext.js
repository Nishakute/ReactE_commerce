import React, {createContext, useState } from 'react';

const Themecontext=createContext();

const ThemeProvider = ({children}) => {
    const[theme,settheme]=useState('light')


    const themetoggle=()=>{
    settheme(prevtheme=>prevtheme==='light' ? 'dark':'light')
    }


    
  return (
<Themecontext.Provider value={{theme,themetoggle}}>
    {children}

</Themecontext.Provider>
  )
}

export {Themecontext,ThemeProvider};