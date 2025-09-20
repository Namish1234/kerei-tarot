import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/Logo.png';
import avatarPlaceholder from '../assets/avatar-placeholder.jpeg';

const Navbar = ({ user, onLoginClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const UserAuth = () => (
    <>
      {user ? (
        <div className="nav-user-info">
          <Link to="/readings" className="readings-button" onClick={closeMenu}>Readings</Link>
          <Link to="/readings" onClick={closeMenu}>
            <img 
              src={user.photoURL || avatarPlaceholder} 
              alt="User Profile" 
              className="nav-avatar" 
            />
          </Link>
        </div>
      ) : (
        <button className="login-button" onClick={() => { onLoginClick(); closeMenu(); }}>Login</button>
      )}
    </>
  );

  return (
    <header className="navbar-container">
      <div className="nav-left">
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="Site Logo" className="navbar-logo" />
        </Link>
      </div>

      <nav className={`nav-links-wrapper ${menuOpen ? 'active' : ''}`}>
        <ul className="nav-links">
          <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink to="/cards" onClick={closeMenu}>Cards</NavLink></li>
          <li><NavLink to="/about" onClick={closeMenu}>About</NavLink></li>
          <li><NavLink to="/process" onClick={closeMenu}>Process</NavLink></li>
          {/* This is the auth section for the mobile menu */}
          <li className="mobile-auth"><UserAuth /></li>
        </ul>
      </nav>

      <div className="nav-right">
        {/* This is the auth section for the desktop view */}
        <div className="desktop-auth"><UserAuth /></div>
        
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;