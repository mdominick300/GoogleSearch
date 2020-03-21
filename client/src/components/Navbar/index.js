import React from 'react';
import {Link} from 'react-router-dom'
import './style.css';


function Navbar (){
    return(
        <nav className="navbar " role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <div className="navbar-item header">Google Books
    {/* <Link to="/">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="logo"/>
    </Link> */}
    </div>

    <div role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </div>
  </div>
  <div id="navbarBasicExample" className="navbar-menu">
  <div className="navbar-start">
  <div className="navbar-item">
      <Link to="/">Home</Link>
        
  </div>
  <div className="navbar-item">
       <Link to="/search"> Search</Link>
  </div>
  <div className="navbar-item">
       <Link to="/saved"> Saved</Link>
  </div>
  </div>

  </div>
  
</nav>
    )
};


export default Navbar;