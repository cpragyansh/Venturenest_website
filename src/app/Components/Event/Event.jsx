import React, { useState } from "react";
import './Event.css';
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

// Shared Utility for SEO-friendly URLs
const createSlug = (name) => {
  if (!name) return "";
  return name
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

export default function Event({ events }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  if (!events || events.length === 0) return null;

  // Sorting events by date (newest first) to show latest highlights
  const sortedEvents = [...events].sort((a, b) => {
    const dateA = new Date(a.eventDate || a.date);
    const dateB = new Date(b.eventDate || b.date);
    return dateB - dateA;
  });

  const nextEvent = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % sortedEvents.length);
  };

  const prevEvent = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + sortedEvents.length) % sortedEvents.length);
  };

  const currentEvent = sortedEvents[currentIndex];

  // Robust field mapping based on backend data
  const eventName = currentEvent.eventName || currentEvent.eventTitle || "Unnamed Event";
  const eventDesc = currentEvent.eventDescription || "A successful event hosted by VentureNest focusing on innovation and startup growth.";
  const eventDateStr = currentEvent.eventDate || currentEvent.date;
  const eventDate = eventDateStr ? new Date(eventDateStr).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }) : "Date TBA";
  const eventVenue = currentEvent.venue || "CGC University, Mohali";
  const eventImage = currentEvent.imageUrl || currentEvent.image;

  const variants = {
    enter: (direction) => ({
      opacity: 0,
      y: direction > 0 ? 30 : -30,
    }),
    center: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: (direction) => ({
      opacity: 0,
      y: direction < 0 ? 30 : -30,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    })
  };

  return (
    <div className="editorial-showcase">
      {/* Background Index Number */}
      <div className="showcase-bg-text">
        {String(currentIndex + 1).padStart(2, '0')}
      </div>

      <div className="showcase-container">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div 
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="showcase-slide"
          >
            {/* Left: Info Section */}
            <div className="showcase-info">
              <div className="info-tag">PAST EVENT HIGHLIGHT</div>
              <h2 className="showcase-title">
                {eventName}
              </h2>
              <p className="showcase-desc">
                {eventDesc}
              </p>
              
              <div className="showcase-meta">
                <div className="meta-item">
                  <span className="meta-label">Concluded on</span>
                  <span className="meta-value">{eventDate}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Venue</span>
                  <span className="meta-value">{eventVenue}</span>
                </div>
              </div>

              <div className="showcase-cta-block">
                <Link to={`/Events/${createSlug(eventName)}`} className="result-link">
                  VIEW EVENT LEGACY →
                </Link>
              </div>
            </div>

            {/* Right: Image Section */}
            <div className="showcase-image-wrapper">
              <div className="image-frame">
                <Link to={`/Events/${createSlug(eventName)}`}>
                  <img 
                    src={eventImage} 
                    alt={eventName} 
                    className="showcase-img"
                  />
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Traditional Navigation Section */}
        <div className="showcase-navigation">
          <div className="classic-nav-btns">
            <button className="nav-btn-classic" onClick={prevEvent} aria-label="Previous Highlight">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button className="nav-btn-classic" onClick={nextEvent} aria-label="Next Highlight">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
          
          <div className="nav-counter">
            <span className="active">{String(currentIndex + 1).padStart(2, '0')}</span>
            <span className="divider">/</span>
            <span className="total">{String(sortedEvents.length).padStart(2, '0')}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
