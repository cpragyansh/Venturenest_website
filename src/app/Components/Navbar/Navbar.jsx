import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await fetch('https://venturenestbackend.cgcuniversity.in/programs');
        const data = await response.json();
        setPrograms(data);
      } catch (error) {
        console.error("Error fetching programs for navbar:", error);
      }
    };
    fetchPrograms();
  }, []);

  const createSlug = (name) => {
    return name
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsProgramsOpen(false);
  };

  const dropdownVariants = {
    hidden: { 
      opacity: 0, 
      y: 10,
      scale: 0.95,
      transition: { duration: 0.2, ease: "easeOut" }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { duration: 0.3, ease: "backOut" }
    }
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

        <div className="bothnavbar-wrapper">
          <ul className={`nav-links ${isMenuOpen ? "nav-active" : ""}`}>
            <li className="ecell-nav-item">
              <a
                href="https://ecell-2pbz.vercel.app/"
                className="ecell-highlight-link"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                E-Cell
              </a>
            </li>
            <li className="ecell-nav-item">
              <Link
                to="/VenturePulse"
                className="ecell-highlight-link"
                onClick={closeMenu}
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

            <li 
              className={`dropdown ${isProgramsOpen ? 'active' : ''}`}
              onMouseEnter={() => !isMenuOpen && setIsProgramsOpen(true)}
              onMouseLeave={() => !isMenuOpen && setIsProgramsOpen(false)}
            >
              <Link 
                to="/#programs" 
                onClick={(e) => {
                  if (isMenuOpen) {
                    setIsProgramsOpen(!isProgramsOpen);
                  } else {
                    closeMenu();
                  }
                }}
              >
                Programs <span className="dropdown-arrow">▼</span>
              </Link>
              
              <AnimatePresence>
                {isProgramsOpen && (
                  <motion.ul 
                    className="dropdown-menu"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={dropdownVariants}
                    style={{ position: isMenuOpen ? 'static' : 'absolute' }}
                  >
                    <li>
                      <Link to="/#programs" onClick={closeMenu}>All Programs</Link>
                    </li>
                    <li>
                      <Link to="/AfricaGlobalFounderProgram" onClick={closeMenu} style={{ color: '#A30D33', fontWeight: '800' }}>
                        Africa Global Founder Program
                      </Link>
                    </li>
                    {programs.map((prog) => (
                      <li key={prog._id}>
                        <Link 
                          to={`/Programs/${createSlug(prog.programName)}`} 
                          onClick={closeMenu}
                        >
                          {prog.programName}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
            <li><Link to="/#portfolio" onClick={closeMenu}>Portfolio</Link></li>
            <li>
              <Link to="/#events" onClick={closeMenu}>Events</Link>
            </li>
            <li>
              <Link to="/#gallery" onClick={closeMenu}>Gallery</Link>
            </li>
          </ul>
        </div>

        <button
          className={`hamburger ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;

