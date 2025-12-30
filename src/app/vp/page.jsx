"use client";
import React from "react";
import { motion } from "framer-motion";
import "../ecell/ecell.css"; // Reuse the minimalist styles

const VenturePulseComingSoon = () => {
  return (
    <div className="ecell-coming-soon-container">
      <div className="ecell-grid-overlay">
        <div className="grid-line line-v-1"></div>
        <div className="grid-line line-v-3"></div>
        <div className="grid-line line-h-1"></div>
        <div className="grid-line line-h-2"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="ecell-content"
      >
        <h1 className="ecell-title-minimal" style={{ letterSpacing: '0.2em' }}>VENTURE PULSE</h1>
        
        <p className="ecell-statement" style={{ maxWidth: '400px', margin: '0 auto 4rem auto' }}>
          Monitoring the heartbeat of innovation.
        </p>

        <div className="ecell-status-bar">
          <div className="status-dot"></div>
          <span className="status-text">Signal Pending</span>
        </div>

        <a href="/">
          <button className="minimal-btn">Return</button>
        </a>
      </motion.div>
    </div>
  );
};

export default VenturePulseComingSoon;
