import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          </a>
          <a href="/">
            <img
              src="/assets/ecell-logo-with-bg.jpg"
              alt=""
              className="venture-nest-logo-bg-removed"
            />
          </a> */}
          <a href="/">
            <img
              src="/assets/ecell-logo-with-bg.jpg"
              alt=""
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

        <ul className={`nav-links ${isMenuOpen ? "nav-active" : ""}`}>
          <li>
            <a href="/" onClick={closeMenu}>Home</a>
          </li>

          <li className="dropdown">
            <div className="dropdown-arrow-fix">
              <a href="#" onClick={(e) => e.preventDefault()}>
                <span>About</span>
              </a>
            </div>
            <ul className="dropdown-menu">
              <li><a href="/aboutUs" onClick={closeMenu}>About Us</a></li>
              <li><a href="/vision" onClick={closeMenu}>Mission & Vision</a></li>
              <li><a href="/contact" onClick={closeMenu}>Contact</a></li>
              <li><a href="/success" onClick={closeMenu}>Success Stories</a></li>
            </ul>
          </li>

          {/* <li className="dropdown">
            <a href="#" onClick={(e) => e.preventDefault()}>Impact</a>
            <ul className="dropdown-menu">
              <li><a href="/patentsfiled" onClick={closeMenu}>Patents Filed</a></li>
              <li><a href="/successstories" onClick={closeMenu}>Success Stories</a></li>
            </ul>
          </li> */}

          <li className="dropdown">
            <a href="#" onClick={(e) => e.preventDefault()}>Council Members</a>
            <ul className="dropdown-menu">
              <li><a href="/Advisory" onClick={closeMenu}>Advisory-council</a></li>
              <li><a href="/Investment-and-Funding" onClick={closeMenu}>Investment & Funding council</a></li>
              <li><a href="/LegalCompliance" onClick={closeMenu}>Legal and Compliance council</a></li>
              <li><a href="/Mentorship" onClick={closeMenu}>Mentorship council</a></li>
              <li><a href="/Technology-and-inovation" onClick={closeMenu}>Technology & Innovation council</a></li>
            </ul>
          </li>

          <li className="dropdown">
            <a href="#" onClick={(e) => e.preventDefault()}>Partners</a>
            <ul className="dropdown-menu">
              <li><a href="/Government-Catalyst" onClick={closeMenu}>Government Catalyst Partners</a></li>
              <li><a href="/Invest" onClick={closeMenu}>Investment Partners</a></li>
              <li><a href="/Eco-System-Partners" onClick={closeMenu}>Ecosystem Partners</a></li>
              <li><a href="/Accelerator-collabrators" onClick={closeMenu}>Accelerator Partners</a></li>
            </ul>
          </li>

          <li><a href="/Programs" onClick={closeMenu}>Programs</a></li>
          <li><a href="/Startups" onClick={closeMenu}>Portfolio</a></li>

          <li><a href="/Events" onClick={closeMenu}>Events</a></li>

          <li className="dropdown">
            <a href="#" onClick={(e) => e.preventDefault()}>Gallery</a>
            <ul className="dropdown-menu">
              <li><a href="/Gallery/Photos" onClick={closeMenu}>Photo</a></li>
              {/* <li><a href="/Gallery/Videos" onClick={closeMenu}>Videos</a></li> */}
            </ul>
          </li>

          {/* <li><a href="https://e-cell-blush-nine.vercel.app/" onClick={closeMenu}>E-cell</a></li> */}
          <li className="join-us-btn-navbar-extra">
            <a href="/IncubateWithUs" className="navbar-links-joinus-btn-text" onClick={closeMenu}>
              Join Us
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
