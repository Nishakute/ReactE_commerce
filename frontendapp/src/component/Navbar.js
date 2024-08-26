import Logo from "../assests/Logo.png";
import {Link} from 'react-router-dom';
import { Themecontext } from "../context/Themecontext";
import { useContext } from "react";



function Navbar({setShowLoginpage}) 
{
  const {theme, themetoggle} = useContext(Themecontext);
  
  return (
    <nav className={`navbar navbar-expand-lg ${theme == 'light' ? 'navbar-dark bg-dark' :'navbar-light bg-light'}`}>
      <a class="navbar-brand" href="#">
        <img
          src={Logo}
          width="30"
          height="30"
          class="d-inline-block align-top"
          alt=""
        />
        NK-store
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link active" href="#">
            Home <span className="sr-only">(current)</span>
          </a>
          <a className="nav-link" href="#">
            Features
          </a>
          <a className="nav-link" href="#">
            Pricing
          </a>
          <a className="nav-link disabled">Disabled</a>
        </div>
      </div>
      <div>
       {/* <button onClick={()=>setShowLoginpage(true)}>Login</button> */}
       <Link to='/login'><button className="btn btn-primary">LOGIN</button></Link>
      </div>
      <div>
      <Link to='/register'><button className="btn btn-primary">Register</button></Link> 
      </div>
      <div>
      <button onClick={themetoggle}>Change theme</button>
      </div>
     
    </nav>
  );
}
export default Navbar;
