import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Sidebar for Desktop */}
      <nav className="desktop-nav">
      
            <a href="#home" class="nav-link">
                <i class="fas fa-home"></i>
            </a>


  
            <a href="#about" class="nav-link">
                <i class="fas fa-user"></i>
                
            </a>


          
            <a href="#skills" class="nav-link">
                <i class="fas fa-laptop-code"></i> 
               
            </a>


            <a href="#projects" class="nav-link">
                <i class="fas fa-folder"></i>
                
            </a>


            <a href="#contact" class="nav-link">
                <i class="fas fa-phone"></i> 
                
            </a>
      </nav>

      {/* Top Navbar with Hamburger for Mobile */}
      <header className="navbar">
        <div className="nav-container">
          <div className="logo">&nbsp;</div>
          <div
            className={`hamburger ${isOpen ? 'open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <nav className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
        <a href="#about" onClick={() => setIsOpen(false)}>About</a>
        <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
        <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
      </nav>
    </>
  );
}

export default Navbar;
