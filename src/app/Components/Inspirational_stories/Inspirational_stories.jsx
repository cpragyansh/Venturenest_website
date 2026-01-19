import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { Close, ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import axios from "axios";
import "./InspirationalStories.css";

const StartupStories = () => {
    const [starredStories, setStarredStories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedStory, setSelectedStory] = useState(null);

    useEffect(() => {
        fetchStarredStories();
    }, []);

    const fetchStarredStories = async () => {
        try {
            const response = await axios.get("https://venturenest.onrender.com/starred-stories");
            setStarredStories(response.data);
        } catch (err) {
            console.error("Error fetching starred stories:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (starredStories.length > 0 && !selectedStory) {
            const interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % starredStories.length);
            }, 6000);
            return () => clearInterval(interval);
        }
    }, [starredStories, selectedStory]);

    const nextStory = () => setCurrentIndex((prev) => (prev + 1) % starredStories.length);
    const prevStory = () => setCurrentIndex((prev) => (prev - 1 + starredStories.length) % starredStories.length);

    if (loading) return null;

    const story = starredStories[currentIndex];

    return (
        <Box className="stories-outer-section">
            <Typography
                className="stories-global-heading"
                sx={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: { xs: "2rem", lg: "3.5rem" },
                    mb: 4,
                    textAlign: "center",
                    color: "#A30D33",
                    textTransform: "uppercase",
                    fontWeight: 800
                }}
            >
                Inspirational Stories
            </Typography>

            <div className="stories-viewport">
                {/* Floating Navigation */}
                <button className="nav-btn prev" onClick={(e) => { e.stopPropagation(); prevStory(); }}>
                    <ArrowBackIos />
                </button>

                <AnimatePresence mode="wait">
                    {story && (
                        <motion.div
                            key={story._id}
                            className="story-main-hero"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            onClick={() => setSelectedStory(story)}
                        >
                            <div className="story-image-side">
                                <img src={story.FounderImg || "assets/default.jpg"} alt={story.StartupName} />
                                <div className="story-floating-badge">Success Story</div>
                            </div>

                            <div className="story-content-side">
                                <div className="startup-brand-row">
                                    <div className="startup-logo-container">
                                        <img src={story.StartupLogo || story.FounderLogoImg || "assets/logo-placeholder.png"} alt="Logo" />
                                    </div>
                                    <div className="startup-tag-pill">Incubated</div>
                                </div>
                                <h2 className="startup-name">{story.StartupName}</h2>
                                <p className="startup-tagline">Innovation & Growth</p>
                                <p className="startup-excerpt">
                                    {story.StartupAbout ? (story.StartupAbout.substring(0, 140) + "...") : "Read about this incredible journey of entrepreneurship and innovation."}
                                </p>
                                <div className="story-action-row">
                                    <button className="story-read-btn">Read Journey</button>
                                    <div className="story-dots">
                                        {starredStories.map((_, idx) => (
                                            <div key={idx} className={`dot ${idx === currentIndex ? 'active' : ''}`} onClick={() => setCurrentIndex(idx)} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <button className="nav-btn next" onClick={(e) => { e.stopPropagation(); nextStory(); }}>
                    <ArrowForwardIos />
                </button>
            </div>

            {starredStories.length > 4 && (
                <Box sx={{ mt: 6, textAlign: "center" }}>
                    <button className="more-news-btn" onClick={() => window.location.href = '/success'}>
                        Explore More Stories
                    </button>
                </Box>
            )}

            {/* Premium Full-Screen Modal */}
            <AnimatePresence>
                {selectedStory && (
                    <motion.div
                        className="story-modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedStory(null)}
                    >
                        <motion.div
                            className="story-modal-content"
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="story-modal-close" onClick={() => setSelectedStory(null)}>
                                <Close />
                            </button>

                            <div className="modal-inner-scroll-flexible">
                                <div className="modal-hero-column">
                                    <img src={selectedStory.FounderImg || "assets/default.jpg"} alt={selectedStory.StartupName} className="flexible-img" />
                                    <div className="hero-overlay-flexible">
                                        <div className="hero-content">
                                            <img src={selectedStory.StartupLogo || selectedStory.FounderLogoImg} alt="" className="modal-logo" />
                                            <h1>{selectedStory.StartupName}</h1>
                                        </div>
                                    </div>
                                </div>

                                <div className="modal-body-content-flexible">
                                    <div className="story-meta-row">
                                        <div className="meta-item">
                                            <span>Industry</span>
                                            <strong>Technology</strong>
                                        </div>
                                        <div className="meta-item">
                                            <span>Focus</span>
                                            <strong>Innovation</strong>
                                        </div>
                                        <div className="meta-item">
                                            <span>Status</span>
                                            <strong>Incubated</strong>
                                        </div>
                                    </div>

                                    <div className="story-detailed-text">
                                        <h3>The Journey</h3>
                                        <p>{selectedStory.StartupAbout}</p>

                                        <h3>About the Founder</h3>
                                        <p>A visionary leader driving change in the entrepreneurial ecosystem, bringing years of expertise to solve real-world problems.</p>
                                    </div>

                                    <div className="modal-footer-actions">
                                        <button className="back-btn" onClick={() => setSelectedStory(null)}>Back to Stories</button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Box>
    );
};

export default StartupStories;
