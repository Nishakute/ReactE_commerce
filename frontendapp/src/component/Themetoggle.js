import { useState } from "react";
import { FaToggleOff,FaToggleOn } from "react-icons/fa6";

const Themetoggle=()=>{
    const [draktheme,setdarktheme]=useState(false);

    const toggletheme=()=>{
        setdarktheme(!draktheme);
        document.body.classList.toggle('dark-theme',!draktheme);
    };
    return(
        <span className="theme-toggle">
        <button onClick={toggletheme} className="toggle-button">
          {/* <IoToggle size={34} className="toggle-icon" /> */}
          {draktheme ? <FaToggleOff  size={25}/> : < aToggleOn size={25} />}
        </button>
      </span>

    )




};

export default Themetoggle