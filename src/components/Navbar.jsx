import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <a href="#home">Portfolio</a>
        </div>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li><a href="#home" className="nav-link" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" className="nav-link" onClick={closeMenu}>About</a></li>
          <li><a href="#skills" className="nav-link" onClick={closeMenu}>Skills</a></li>
          <li><a href="#projects" className="nav-link" onClick={closeMenu}>Projects</a></li>
          <li><a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a></li>
        </ul>
        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
