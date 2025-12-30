"use client";
import React from "react";
import { motion } from "framer-motion";
import "./ecell.css";

const ECellComingSoon = () => {
  return (
    <div className="ecell-coming-soon-container">
      {/* Architectural Grid */}
      <div className="ecell-grid-overlay">
        <div className="grid-line line-v-1"></div>
        <div className="grid-line line-v-2"></div>
        <div className="grid-line line-v-3"></div>
        <div className="grid-line line-h-1"></div>
        <div className="grid-line line-h-2"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="ecell-content"
      >
        <img 
          src="/assets/ecell-logo-with-bg.jpg" 
          alt="E-Cell" 
          className="ecell-logo-minimal"
        />
        
        <h1 className="ecell-title-minimal">E-CELL</h1>
        
        <p className="ecell-statement">
          Building the foundation for high-performance entrepreneurship.
        </p>

        <div className="ecell-status-bar">
          <div className="status-dot"></div>
          <span className="status-text">In Development</span>
        </div>

        <a href="/">
          <button className="minimal-btn">Index</button>
        </a>
      </motion.div>
    </div>
  );
};

export default ECellComingSoon;
