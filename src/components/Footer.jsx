import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="/UBC-PIN-Web/images/pin-logo.png" alt="UBC PIN Logo" className="footer-logo-img" />
        </div>
        <nav className="footer-nav">
          <Link to="/" className="footer-link">Home</Link>
          <Link to="/team" className="footer-link">Our Team</Link>
          <Link to="/events" className="footer-link">Events</Link>
          <Link to="/join" className="footer-link">Join Us</Link>
          <Link to="/contact" className="footer-link">Contact</Link>
        </nav>
        <div className="footer-info">
          <p>&copy; 2024 UBC Pharmaceutical Innovators Network</p>
          <p>University of British Columbia</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;