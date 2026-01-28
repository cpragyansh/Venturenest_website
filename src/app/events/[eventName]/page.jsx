"use client";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Box, Typography, CircularProgress, Button, Grid } from "@mui/material";

export default function EventDetails() {
    const { eventName } = useParams();
    const [event, setEvent] = useState(null);
    const [prevEvent, setPrevEvent] = useState(null);
    const [nextEvent, setNextEvent] = useState(null);
    const [loading, setLoading] = useState(true);

    // function to create slug (must match the one in event/page.jsx) 
    const createSlug = (name) => {
        return name
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, "")
            .replace(/[\s_-]+/g, "-")
            .replace(/^-+|-+$/g, "");
    };

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const response = await axios.get("https://venture-nest-backend.onrender.com/events");
                const events = response.data;
                const index = events.findIndex(
                    (e) => createSlug(e.eventName) === eventName
                );

                if (index !== -1) {
                    setEvent(events[index]);
                    setPrevEvent(events[index - 1] || null);
                    setNextEvent(events[index + 1] || null);
                }
            } catch (error) {
                console.error("Error fetching event details:", error);
            } finally {
                setLoading(false);
            }
        };

        if (eventName) {
            fetchEvent();
        }
    }, [eventName]);

    if (loading) {
        return (
            <Box sx={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <CircularProgress />
            </Box>
        );
    }

    if (!event) {
        return (
            <Box sx={{ minHeight: "100vh", p: 4 }}>
                <Typography variant="h5">Event not found.</Typography>
            </Box>
        );
    }

    const dateObj = new Date(event.eventDate);
    const day = dateObj.getDate();
    const month = dateObj.toLocaleString("default", { month: "short" }).toUpperCase();
    const year = dateObj.getFullYear();

    const isUrl = (string) => {
        try {
            return Boolean(new URL(string));
        } catch (e) {
            return false;
        }
    };

    const isDescriptionUrl = event.eventDescription && (event.eventDescription.startsWith('http') || isUrl(event.eventDescription));


    return (
        <Box sx={{ minHeight: "100vh", bgcolor: "#fdfdfd", pb: 12 }}>
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap');
                    
                    ::selection {
                        background-color: #c8102e;
                        color: #ffffff;
                    }

                    @keyframes fadeInUp {
                        from { opacity: 0; transform: translateY(20px); }
                        to { opacity: 1; transform: translateY(0); }
                    }

                    .fade-in-up {
                        animation: fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
                    }
                `}
            </style>

            <Box sx={{ maxWidth: "1200px", mx: "auto", px: { xs: 3, md: 6 }, pt: 8 }}>

                <Box className="fade-in-up" sx={{ textAlign: "center", mb: 8, opacity: 0 }}>
                    <Typography
                        variant="overline"
                        sx={{
                            fontFamily: "'Inter', sans-serif",
                            letterSpacing: "0.2em",
                            color: "#c8102e",
                            fontWeight: 600,
                            display: "block",
                            mb: 2
                        }}
                    >
                        Event Details
                    </Typography>
                    <Typography
                        variant="h1"
                        sx={{
                            fontFamily: "'Playfair Display', serif",
                            fontWeight: 700,
                            color: "#1a1a1a",
                            fontSize: { xs: "2.5rem", md: "3rem" },
                            lineHeight: 1.1,
                            maxWidth: "900px",
                            mx: "auto"
                        }}
                    >
                        {event.eventName}
                    </Typography>
                </Box>

                <Box
                    className="fade-in-up"
                    sx={{
                        opacity: 0,
                        animationDelay: "0.2s",
                        position: "relative",
                        mb: 10
                    }}
                >
                    <Box
                        component="img"
                        src={event.imageUrl}
                        alt={event.eventName}
                        sx={{
                            width: "100%",
                            height: { xs: "50vh", md: "70vh" },
                            objectFit: "cover",
                            borderRadius: "4px",
                            boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                        }}
                    />
                </Box>

                <Grid container spacing={6} className="fade-in-up" sx={{ opacity: 0, animationDelay: "0.4s", alignItems: "flex-start" }}>

                    <Grid item xs={12} md={3}>
                        <Box sx={{
                            borderTop: "2px solid #c8102e",
                            pt: 3,
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 2
                        }}>
                            <Typography
                                sx={{
                                    fontFamily: "'Playfair Display', serif",
                                    fontSize: "4.5rem",
                                    lineHeight: 0.8,
                                    color: "#1a1a1a"
                                }}
                            >
                                {day}
                            </Typography>
                            <Box sx={{ display: "flex", flexDirection: "column", pt: 1 }}>
                                <Typography sx={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", fontWeight: 600, letterSpacing: "0.05em", color: "#c8102e" }}>
                                    {month}
                                </Typography>
                                <Typography sx={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", color: "#666" }}>
                                    {year}
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={9} sx={{ minWidth: 0 }}>
                        <Typography
                            variant="h4"
                            sx={{
                                fontFamily: "'Playfair Display', serif",
                                fontWeight: 400,
                                color: "#1a1a1a",
                                mb: 4,
                                fontSize: { xs: "1.2rem", md: "2rem" },
                                fontStyle: "italic",
                                wordBreak: "break-word",
                                overflowWrap: "break-word"
                            }}
                        >
                            "{event.eventTitle}"
                        </Typography>

                        {isDescriptionUrl ? (
                            <Button
                                variant="outlined"
                                href={event.eventDescription}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    fontFamily: "'Inter', sans-serif",
                                    color: "#c8102e",
                                    borderColor: "#c8102e",
                                    mt: 2,
                                    textTransform: "none"
                                }}
                            >
                                View Event Resources/Description
                            </Button>
                        ) : (
                            <Typography
                                variant="body1"
                                sx={{
                                    fontFamily: "'Inter', sans-serif",
                                    fontSize: "1.15rem",
                                    lineHeight: 1.8,
                                    color: "#444",
                                    maxWidth: "800px"
                                }}
                            >
                                {event.eventDescription}
                            </Typography>
                        )}


                        {event.EventImages && event.EventImages.length > 0 && (
                            <Box sx={{ mt: 10 }}>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontFamily: "'Inter', sans-serif",
                                        fontWeight: 600,
                                        mb: 4,
                                        borderBottom: "1px solid #eee",
                                        pb: 2
                                    }}
                                >
                                    A Glimpse Of {event.eventName.split(":")[0]}
                                </Typography>
                                <Grid container spacing={3}>
                                    {event.EventImages.map((imageUrl, index) => (
                                        <Grid item xs={12} sm={6} md={4} key={index}>
                                            <Box
                                                component="img"
                                                src={imageUrl}
                                                alt={`${event.eventName} - Image ${index + 1}`}
                                                sx={{
                                                    width: "100%",
                                                    height: 250,
                                                    objectFit: "cover",
                                                    borderRadius: "4px",
                                                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                                                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                                    cursor: "pointer",
                                                    "&:hover": {
                                                        transform: "scale(1.05)",
                                                        boxShadow: "0 8px 24px rgba(0,0,0,0.15)"
                                                    }
                                                }}
                                            />
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                        )}

                        <Box sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            mt: 12,
                            pt: 4,
                            borderTop: "1px solid #eee"
                        }}>
                            {prevEvent ? (
                                <Button
                                    component={Link}
                                    to={`/Events/${createSlug(prevEvent.eventName)}`}
                                    sx={{
                                        textTransform: "none",
                                        color: "#444",
                                        fontFamily: "'Inter', sans-serif",
                                        "&:hover": { color: "#c8102e", bgcolor: "transparent" }
                                    }}
                                    startIcon={<span style={{ fontSize: "1.2rem" }}>←</span>}
                                >
                                    Previous Event
                                </Button>
                            ) : <Box />}

                            {nextEvent && (
                                <Button
                                    component={Link}
                                    to={`/Events/${createSlug(nextEvent.eventName)}`}
                                    sx={{
                                        textTransform: "none",
                                        color: "#444",
                                        fontFamily: "'Inter', sans-serif",
                                        "&:hover": { color: "#c8102e", bgcolor: "transparent" }
                                    }}
                                    endIcon={<span style={{ fontSize: "1.2rem" }}>→</span>}
                                >
                                    Next Event
                                </Button>
                            )}
                        </Box>

                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}
