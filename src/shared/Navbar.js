import React from "react";

const NavBar = () => (
  <nav className="navbar fixed-top navbar-dark bg-dark navbar">
    <div className="container">
      <span className="navbar-brand">REACT IO</span>
      <a href="https://twitter.com/nirkaufman"
         rel="noopener noreferrer"
         target="_blank"
         className="navbar-text">@Nir Kaufman</a>
    </div>
  </nav>
);

export default NavBar;