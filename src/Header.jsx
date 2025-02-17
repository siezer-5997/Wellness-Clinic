// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Style/Header.css';

const Header = () => {
  return (
    <nav className="header">
      <div className="logo"><em>Wellness Clinic</em></div>
      <ul className="tabs">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login">Log in</Link></li>
      </ul>
    </nav>
  );
};

export default Header;
