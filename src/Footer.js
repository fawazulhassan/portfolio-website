import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>
          <span className="contact-text">Feel free to </span>
          <a href="mailto:moislav@gmail.com" className="contact-link">contact me</a>
        </p>
        <p>moislav@gmail.com</p>
        <p>Telegram @moislav</p>
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



