import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    closeMobileMenu();
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <a href="/" className="logo" onClick={handleLogoClick}>
          <img src="/UBC-PIN-Web/images/pin-logo.png" alt="UBC PIN Logo" className="logo-image" />
        </a>
        
        <button 
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <nav className={`nav ${mobileMenuOpen ? 'nav-mobile-open' : ''}`}>
          <Link to="/" className="nav-link" onClick={closeMobileMenu}>Home</Link>
          <Link to="/team" className="nav-link" onClick={closeMobileMenu}>Our Team</Link>
          <Link to="/events" className="nav-link" onClick={closeMobileMenu}>Events</Link>
          <Link to="/join" className="nav-link" onClick={closeMobileMenu}>Join Us</Link>
          <Link to="/contact" className="nav-link" onClick={closeMobileMenu}>Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;