"use client";
import React from "react";
import { motion } from "framer-motion";
import "./ecell.css";

const ECellFullPage = () => {
  return (
    <div className="ecell-full-container">
      {/* Top Ticker */}
      <div className="neo-ticker">
        <div className="ticker-content">
          WORK IN PROGRESS • COMING SOON • ENTREPRENEURSHIP CELL • CGC UNIVERSITY • INNOVATION HUB • WORK IN PROGRESS • COMING SOON • ENTREPRENEURSHIP CELL • CGC UNIVERSITY • INNOVATION HUB
        </div>
      </div>

      <div className="neo-hero-section">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="neo-full-block"
        >
          <div className="neo-dashed-grid"></div>
          
          <div className="block-header">
            <span style={{ fontWeight: 800 }}>EST. 2024</span>
            <div style={{ display: 'flex', gap: '10px' }}>
              <div style={{ width: '15px', height: '15px', background: 'white', border: '2px solid black' }}></div>
              <div style={{ width: '15px', height: '15px', background: '#A30D33', border: '2px solid black' }}></div>
            </div>
          </div>

          <div className="block-content">
            <div className="neo-status-text">COMMING SOON</div>
            
            <h1 className="neo-big-title">
              E-CELL<br/>
              <span className="neo-highlight-span">CGC</span>
            </h1>

            <p className="neo-description-full">
              We are building the most advanced student-led entrepreneurship cell in the region. 
              Architecting the future of campus startups.
            </p>
          </div>

          <div className="neo-cta-row">
            <a href="/" className="neo-btn-full active">INDEX</a>
            <div className="neo-btn-full">WORK IN PROGRESS</div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Ticker */}
      <div className="neo-ticker" style={{ borderTop: '4px solid black', borderBottom: 'none' }}>
        <div className="ticker-content" style={{ animationDirection: 'reverse' }}>
          ARCHITECTING THE FUTURE • BUILDING THE HUB • GROUND ZERO • STARTUP CULTURE • ARCHITECTING THE FUTURE • BUILDING THE HUB • GROUND ZERO • STARTUP CULTURE
        </div>
      </div>
    </div>
  );
};

export default ECellFullPage;
