import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { Close } from "@mui/icons-material";
import MagicBento from "./MagicBento";
import "./StarredEvents.css";

const StarredEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const hoverAudio = React.useRef(new Audio("https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3"));

  const playSound = (url) => {
    // For general sounds
    const audio = new Audio(url);
    audio.volume = 0.4;
    audio.play().catch(err => {});
  };

  const playHoverSound = () => {
    const audio = hoverAudio.current;
    audio.volume = 0.5;
    audio.currentTime = 0;
    audio.play().catch(err => {});
  };

  useEffect(() => {
    const fetchStarredEvents = async () => {
      try {
        const response = await axios.get("https://venturenest.onrender.com/starred-events");
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching starred events:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchStarredEvents();
  }, []);

  const handleOpenEvent = (event) => {
    playSound("https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3");
    setSelectedEvent(event);
  };
  const handleCloseEvent = () => setSelectedEvent(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <Box className="events-outer-container">
      <Typography 
        sx={{
          fontFamily: "var(--font-display)", 
          fontSize: { xs: "2rem", lg: "3.5rem" },
          mb: 6,
          textAlign: "center",
          color: "#A30D33", 
          letterSpacing: "-0.01em",
          textTransform: "uppercase"
        }}
      >
        Latest News & Events
      </Typography>

      {loading ? (
        <Box sx={{ py: 10, textAlign: "center", opacity: 0.5 }}>Loading events...</Box>
      ) : (
        <MagicBento 
          items={events.slice(0, 4)}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          glowColor="163, 13, 51"
          renderCardContent={(event) => (
            <>
              <img 
                src={event.imageUrl} 
                alt={event.eventName} 
                className="bento-card-bg-img" 
              />
              <div className="magic-bento-card__header">
                <div className="bento-date">
                  {new Date(event.eventDate).toLocaleDateString(undefined, { day: '2-digit', month: 'short' })}
                </div>
                <div className="magic-bento-card__label">News & Events</div>
              </div>
              <div className="magic-bento-card__content">
                <h2 className="magic-bento-card__title">{event.eventName}</h2>
                <p className="magic-bento-card__description">{event.eventTitle}</p>
              </div>
            </>
          )}
          itemsProps={(event) => ({
            onClick: () => handleOpenEvent(event),
            onMouseEnter: playHoverSound
          })}
        />
      )}

      {events.length > 5 && (
        <Box sx={{ mt: 6, textAlign: "center" }}>
          <button className="more-news-btn" onClick={() => window.location.href='/Events'}>
            View More News
          </button>
        </Box>
      )}

      {/* Modern Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div 
            className="modern-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseEvent}
          >
            <motion.div 
              className="minimalist-modal-container"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="minimal-close-top" onClick={handleCloseEvent}>
                <Close />
              </button>
              
              <div className="minimalist-modal-image-wrapper">
                <img src={selectedEvent.imageUrl} alt={selectedEvent.eventName} />
                <div className="minimalist-title-overlay">
                  <span className="modal-tag-minimal">News & Events</span>
                  <h2 className="minimal-news-name">{selectedEvent.eventName}</h2>
                  {selectedEvent.eventTitle && <p className="minimal-news-subtitle">{selectedEvent.eventTitle}</p>}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default StarredEvents;
