import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

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
    setActiveDropdown(null);
  };

  const toggleDropdown = (name) => {
    if (window.innerWidth <= 1250) {
      setActiveDropdown(activeDropdown === name ? null : name);
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
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
          {/* <a href="/">
            <img
              src="/assets/Logo_College_black_updated.png"
              alt="CGC University"
              className="logo-updated"
            />
          </a> */}
          {/* <a href="/">
            <img
              src="/assets/cgc- University-logo-white.png"
              alt="CGC University"
              className="logo"
            />
          </a>
          <a href="/">
            <img
              src="/assets/cgc- University-naac-white.png"
              alt="NAAC Accredited"
              className="naac-logo"
            />
          </a> */}
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

            <li className={`dropdown ${activeDropdown === 'about' ? 'active' : ''}`}>
              <div className="dropdown-arrow-fix">
                <a href="#" onClick={(e) => { e.preventDefault(); toggleDropdown('about'); }}>
                  <span>About</span>
                </a>
              </div>
              <ul className="dropdown-menu">
                <li><a href="#about-detailed" onClick={closeMenu}>About Us</a></li>
                <li><a href="#about-detailed" onClick={closeMenu}>Mission & Vision</a></li>
                <li><a href="#contact-us" onClick={closeMenu}>Contact</a></li>
                <li><a href="#success-stories" onClick={closeMenu}>Success Stories</a></li>
              </ul>
            </li>

            <li className={`dropdown ${activeDropdown === 'council' ? 'active' : ''}`}>
              <a href="#" onClick={(e) => { e.preventDefault(); toggleDropdown('council'); }}>Council Members</a>
              <ul className="dropdown-menu">
                <li><a href="#council" onClick={closeMenu}>Advisory-Council</a></li>
                <li><a href="#council" onClick={closeMenu}>Investment & Funding Council</a></li>
                <li><a href="#council" onClick={closeMenu}>Legal and Compliance Council</a></li>
                <li><a href="#council" onClick={closeMenu}>Mentorship Council</a></li>
                <li><a href="#council" onClick={closeMenu}>Technology & Innovation Council</a></li>
              </ul>
            </li>

            <li className={`dropdown ${activeDropdown === 'partners' ? 'active' : ''}`}>
              <a href="#" onClick={(e) => { e.preventDefault(); toggleDropdown('partners'); }}>Partners</a>
              <ul className="dropdown-menu">
                <li><a href="#partners" onClick={closeMenu}>Government Catalyst Partners</a></li>
                <li><a href="#partners" onClick={closeMenu}>Investment Partners</a></li>
                <li><a href="#partners" onClick={closeMenu}>Ecosystem Partners</a></li>
                <li><a href="#partners" onClick={closeMenu}>Accelerator Partners</a></li>
              </ul>
            </li>

            <li><a href="#programs" onClick={closeMenu}>Programs</a></li>
            <li><a href="#portfolio" onClick={closeMenu}>Portfolio</a></li>

            <li className="dropdown">
              <a href="#events" onClick={(e) => { e.preventDefault(); toggleDropdown('events'); }}>Events</a>
              <ul className="dropdown-menu">
                <li><a href="#events" onClick={closeMenu}>All Events</a></li>
              </ul>
            </li>

            <li className={`dropdown ${activeDropdown === 'gallery' ? 'active' : ''}`}>
              <a href="#gallery" onClick={(e) => { e.preventDefault(); toggleDropdown('gallery'); }}>Gallery</a>
              <ul className="dropdown-menu">
                <li><a href="#gallery" onClick={closeMenu}>Photo</a></li>
                <li><a href="#gallery" onClick={closeMenu}>Videos</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
