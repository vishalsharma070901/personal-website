import React from "react";
import "../App.css";
// import Counter from "./Counter";
// import Main from "./Main";

function Header() {
  
  return (
    <div > 
    

    <nav className="navbar fixed-top navbar-expand-lg ">
  <div className="container-fluid">

    <a className="navbar-brand" href="/">Vishal</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#main">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#education">Education</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#skills">Skills</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#projects">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    
    

      
    </div>
  );
}

export default Header;
