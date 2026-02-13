import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
          <Link to="/">
            <img
              src="/assets/CGCUNIVERSITYMOHALI_logo.png"
              alt="CGC University"
              className="cgc-university-logo-updated"
            />
          </Link>
          <Link to="/">
            <img
              src="/assets/venture-nest-logo-bg-remove.png"
              alt="Venture Nest"
              className="venture-nest-logo-bg-removed"
            />
          </Link>
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
                href="https://ecell-2pbz.vercel.app/"
                className="ecell-highlight-link"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  playSound(clickSound);
                  closeMenu();
                }}
                onMouseEnter={() => playSound(hoverSound)}
              >
                E-Cell
              </a>
            </li>
            <li className="ecell-nav-item">
              <Link
                to="/VenturePulse"
                className="ecell-highlight-link"
                onClick={(e) => {
                  playSound(clickSound);
                  closeMenu();
                }}
                onMouseEnter={() => playSound(hoverSound)}
              >
                Venture Pulse
              </Link>
            </li>

            <li className="join-us-btn-navbar-extra upper-navbar-menu-incubate-btn">
              <Link to="/IncubateWithUs" className="navbar-links-joinus-btn-text" onClick={closeMenu}>
                Incubate with us
              </Link>
            </li>
          </ul>
          <ul className={`nav-links ${isMenuOpen ? "nav-active" : ""}`}>
            <li>
              <Link to="/#home" onClick={closeMenu}>Home</Link>
            </li>

            <li>
              <Link to="/#about" onClick={closeMenu}>About</Link>
            </li>

            <li>
              <Link to="/#council" onClick={closeMenu}>Council Members</Link>
            </li>

            <li>
              <Link to="/#partners" onClick={closeMenu}>Partners</Link>
            </li>

            <li><Link to="/#programs" onClick={closeMenu}>Programs</Link></li>
            <li><Link to="/#portfolio" onClick={closeMenu}>Portfolio</Link></li>

            <li>
              <Link to="/#events" onClick={closeMenu}>Events</Link>
            </li>

            <li>
              <Link to="/#gallery" onClick={closeMenu}>Gallery</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
