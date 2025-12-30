"use client";
import React from "react";
import { motion } from "framer-motion";
import "../ecell/ecell.css";

const VenturePulseFullPage = () => {
  return (
    <div className="ecell-full-container" style={{ backgroundColor: '#000080' }}>
      <div className="neo-ticker" style={{ backgroundColor: '#A30D33' }}>
        <div className="ticker-content">
          VENTURE PULSE • MONITORING INNOVATION • DATA DRIVEN • GROWTH TRACKER • VENTURE PULSE • MONITORING INNOVATION • DATA DRIVEN • GROWTH TRACKER
        </div>
      </div>

      <div className="neo-hero-section">
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="neo-full-block"
        >
          <div className="neo-dashed-grid"></div>
          
          <div className="block-header" style={{ backgroundColor: '#000000' }}>
            <span style={{ fontWeight: 800 }}>LIVE SYSTEM PENDING</span>
            <div style={{ display: 'flex', gap: '10px' }}>
              <div style={{ width: '15px', height: '15px', background: 'white', border: '2px solid black' }}></div>
              <div style={{ width: '15px', height: '15px', background: '#000080', border: '2px solid black' }}></div>
            </div>
          </div>

          <div className="block-content">
            <div className="neo-status-text" style={{ borderColor: '#A30D33', color: '#A30D33' }}>SIGNAL OFFLINE</div>
            
            <h1 className="neo-big-title">
              VENTURE<br/>
              <span className="neo-highlight-span" style={{ backgroundColor: '#000080' }}>PULSE</span>
            </h1>

            <p className="neo-description-full">
              Real-time analytics for the CGC innovation ecosystem. 
              The pulse of progress is currently calibrating.
            </p>
          </div>

          <div className="neo-cta-row">
            <a href="/" className="neo-btn-full">BACK</a>
            <div className="neo-btn-full active">UNDER DEVELOPMENT</div>
          </div>
        </motion.div>
      </div>

      <div className="neo-ticker" style={{ borderTop: '4px solid black', borderBottom: 'none', backgroundColor: '#000000' }}>
        <div className="ticker-content" style={{ animationDirection: 'reverse' }}>
          DATA STREAM UNSTABLE • CALIBRATING METRICS • LOADING ANALYTICS • DATA STREAM UNSTABLE • CALIBRATING METRICS • LOADING ANALYTICS
        </div>
      </div>
    </div>
  );
};

export default VenturePulseFullPage;
