// Navbar.js
import React from 'react';
import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left"><b>finsweet</b></div>
      <div className="right">
        <span>Home</span>
        <span>About</span>
        <span>Services</span>
        <span>Portfolio</span>
        <span>Contact</span>

      </div>
    </div>
  

  );
};

export default Navbar;

