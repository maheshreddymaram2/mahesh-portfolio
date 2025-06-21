import React, { useState, useEffect } from 'react';
import './Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <>
      <header className="header">
        <div className="logo">Mahesh Portfolio</div>

        {/* Mobile View: Toggle first */}
        <div className="mobile-toggle" onClick={toggleDarkMode}>
          <div className={`slider ${darkMode ? 'dark' : ''}`}></div>
        </div>

        {/* Hamburger */}
        <div className={`nav-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation */}
        <nav className={`nav ${isOpen ? 'nav-open' : ''}`}>
          <ul>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#education" onClick={closeMenu}>Education</a></li>
            <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
            <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
            <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
            <li><a href="#coding" onClick={closeMenu}>Coding Stats</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>

            {/* Desktop View: Toggle after Contact */}
            <li className="desktop-toggle">
              <div className="mode-toggle" onClick={toggleDarkMode}>
                <div className={`slider ${darkMode ? 'dark' : ''}`}></div>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
