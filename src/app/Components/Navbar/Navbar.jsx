import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Sound effects logic
  const playSound = (url) => {
    const audio = new Audio(url);
    audio.volume = 0.3;
    audio.play().catch(err => console.log("Sound play error:", err));
  };

  const hoverSound = "https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3"; // Subtle hover
  const clickSound = "https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3"; // Clean click

  useEffect(() => {
    // Optional scroll logic
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="navbar-main-experimental-setup">
      <nav className={`navbar`}>
        <div className="navbar-logo">
          <a href="/">
            <img
              src="/assets/CGCUNIVERSITYMOHALI_logo.png"
              alt="CGC University"
              className="cgc-university-logo-updated"
            />
          </a>
          <a href="/">
            <img
              src="/assets/venture-nest-logo-bg-remove.png"
              alt="Venture Nest"
              className="venture-nest-logo-bg-removed"
            />
          </a>
        </div>

        <button
          className={`hamburger ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <div className="bothnavbar-wrapper">
          <ul className={`nav-links ${isMenuOpen ? "nav-active" : ""}`}>
            <li className="ecell-nav-item">
              <a
                href="#"
                className="ecell-highlight-link"
                onClick={(e) => {
                  e.preventDefault();
                  playSound(clickSound);
                  closeMenu();
                }}
                onMouseEnter={() => playSound(hoverSound)}
              >
                E-Cell
              </a>
            </li>
            <li className="ecell-nav-item">
              <a
                href="/VenturePulse"
                className="ecell-highlight-link"
                onClick={(e) => {
                  playSound(clickSound);
                  closeMenu();
                }}
                onMouseEnter={() => playSound(hoverSound)}
              >
                Venture Pulse
              </a>
            </li>

            <li className="join-us-btn-navbar-extra upper-navbar-menu-incubate-btn">
              <a href="/IncubateWithUs" className="navbar-links-joinus-btn-text" onClick={closeMenu}>
                Incubate with us
              </a>
            </li>
          </ul>
          <ul className={`nav-links ${isMenuOpen ? "nav-active" : ""}`}>
            <li>
              <a href="#home" onClick={closeMenu}>Home</a>
            </li>

            <li>
              <a href="#about-detailed" onClick={closeMenu}>About</a>
            </li>

            <li>
              <a href="#council" onClick={closeMenu}>Council Members</a>
            </li>

            <li>
              <a href="#partners" onClick={closeMenu}>Partners</a>
            </li>

            <li><a href="#programs" onClick={closeMenu}>Programs</a></li>
            <li><a href="#portfolio" onClick={closeMenu}>Portfolio</a></li>

            <li>
              <a href="#events" onClick={closeMenu}>Events</a>
            </li>

            <li>
              <a href="#gallery" onClick={closeMenu}>Gallery</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
