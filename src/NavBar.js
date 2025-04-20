import React from 'react';
import './NavBar.css'; // Import the CSS file for styling

function NavBar(){
  return (
    <nav className="navbar">
      <div className="navbar-logo">I.M. Fawaz</div>
      <ul className="navbar-menu">
        <li><a href="#projects">Projects</a></li>
        <li><a href="#tecnologies">Technologies</a></li>
        <li><a href="#aboutme">About me</a></li>
      </ul>
      <div className="navbar-icons">
        <a href="#linkedin"><i className="fab fa-linkedin"></i></a>
        <a href="#facebook"><i className="fab fa-facebook"></i></a>
        <a href="#instagram"><i className="fab fa-instagram"></i></a>
      </div>
    </nav>
  );
};

export default NavBar;
