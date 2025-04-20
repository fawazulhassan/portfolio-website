import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>
          <span className="contact-text">Feel free to </span>
          <a href="fawazulhassan@gmail.com" className="contact-link">contact me</a>
        </p>
        <p>fawazulhassan@gmail.com</p>
        <p>https://github.com/fawazulhassan</p>
      </div>
      <div className="footer-right">
        <a href="#linkedin" className="footer-icon"><i className="fab fa-linkedin"></i></a>
        <a href="#facebook" className="footer-icon"><i className="fab fa-facebook"></i></a>
        <a href="#instagram" className="footer-icon"><i className="fab fa-instagram"></i></a>
      </div>
    </footer>
  );
};

export default Footer;



