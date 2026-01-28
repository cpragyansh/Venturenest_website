import React, { useEffect, useState } from "react";
import { Box, Typography, CircularProgress, Button, Grid, Link as MuiLink, Fade, Container } from "@mui/material";
import { useParams, Link as RouterLink } from "react-router-dom";
import axios from "axios";

const StoryDetails = () => {
    const { id } = useParams();
    const [story, setStory] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchStory();
        window.scrollTo(0, 0);
    }, [id]);

    const fetchStory = async () => {
        try {
            const res = await axios.get(
                `https://venturenest.onrender.com/starred-stories/${id}`
            );
            setStory(res.data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
                <CircularProgress sx={{ color: '#c8102e' }} />
            </Box>
        );
    }

    if (!story) {
        return (
            <Container sx={{ py: 20, textAlign: 'center' }}>
                <Typography variant="h4" sx={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}>
                    Story not found
                </Typography>
                <Button 
                    component={RouterLink} 
                    to="/successstories"
                    sx={{ mt: 4, color: '#c8102e', fontWeight: 700 }}
                >
                    Back to Success Stories
                </Button>
            </Container>
        );
    }

    return (
        <Box sx={{ 
            maxWidth: "1200px", 
            mx: "auto", 
            px: { xs: 3, md: 6 }, 
            pt: 8, 
            pb: 12,
            fontFamily: "'Plus Jakarta Sans', sans-serif" 
        }}>
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap');
                    
                    body {
                        font-family: 'Plus Jakarta Sans', sans-serif !important;
                    }

                    ::selection {
                        background-color: #c8102e;
                        color: #ffffff;
                    }

                    @keyframes fadeInUp {
                        from { opacity: 0; transform: translateY(30px); }
                        to { opacity: 1; transform: translateY(0); }
                    }

                    .fade-in-up {
                        animation: fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
                    }
                `}
            </style>

            {/* Back Button */}
            <Button
                component={RouterLink}
                to="/successstories"
                sx={{
                    mb: 4,
                    color: "#666",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    fontSize: "0.8rem",
                    "&:hover": { color: "#c8102e", backgroundColor: "transparent" }
                }}
            >
                &larr; Back to Hall of Fame
            </Button>

            <Typography
                variant="overline"
                className="fade-in-up"
                sx={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    letterSpacing: "0.3em",
                    color: "#c8102e",
                    fontWeight: 800,
                    display: "block",
                    textAlign: "center",
                    mb: 2,
                    fontSize: "0.9rem"
                }}
            >
                Success Story
            </Typography>

            <Typography
                variant="h1"
                className="fade-in-up"
                sx={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 900,
                    color: "#1a1a1a",
                    fontSize: { xs: "2.5rem", md: "4.5rem" },
                    lineHeight: 1,
                    maxWidth: "900px",
                    textAlign: "center",
                    mx: "auto",
                    mb: 6,
                    textTransform: "uppercase",
                    letterSpacing: "-0.03em"
                }}
            >
                {story.StartupName}
            </Typography>

            <Box
                className="fade-in-up"
                component="img"
                src={story.FounderImg || "/assets/default.jpg"}
                alt={story.StartupName}
                sx={{
                    width: "100%",
                    height: { xs: "50vh", md: "80vh" },
                    objectFit: "cover",
                    borderRadius: "2px",
                    boxShadow: "0 30px 60px rgba(0,0,0,0.12)",
                    mb: 10,
                    animationDelay: "0.2s",
                    opacity: 0
                }}
            />

            <Grid container spacing={8} className="fade-in-up" sx={{ opacity: 0, animationDelay: "0.4s" }}>
                <Grid item xs={12} md={4}>
                    <Box sx={{ 
                        position: { md: "sticky" }, 
                        top: 40,
                        borderLeft: "8px solid #c8102e",
                        pl: 4,
                        py: 2
                    }}>
                        <Box
                            component="img"
                            src={story.FounderLogoImg}
                            alt={`${story.StartupName} Logo`}
                            sx={{
                                width: "auto",
                                maxHeight: "80px",
                                objectFit: "contain",
                                mb: 4,
                                filter: "grayscale(100%) brightness(0)",
                                opacity: 0.8
                            }}
                        />
                        
                        <Typography sx={{ 
                            fontFamily: "'Plus Jakarta Sans', sans-serif", 
                            fontWeight: 800, 
                            fontSize: "0.8rem", 
                            color: "#c8102e",
                            textTransform: "uppercase",
                            letterSpacing: "0.2em",
                            mb: 1
                        }}>
                            Founded By
                        </Typography>
                        <Typography sx={{ 
                            fontFamily: "'Plus Jakarta Sans', sans-serif", 
                            fontWeight: 700, 
                            fontSize: "1.2rem", 
                            color: "#1a1a1a",
                            mb: 4
                        }}>
                            {story.FounderName || "Visionary Entrepreneur"}
                        </Typography>

                        <Typography sx={{ 
                            fontFamily: "'Plus Jakarta Sans', sans-serif", 
                            fontWeight: 800, 
                            fontSize: "0.8rem", 
                            color: "#c8102e",
                            textTransform: "uppercase",
                            letterSpacing: "0.2em",
                            mb: 1
                        }}>
                            Venture Status
                        </Typography>
                        <Typography sx={{ 
                            fontFamily: "'Plus Jakarta Sans', sans-serif", 
                            fontWeight: 700, 
                            fontSize: "1.2rem", 
                            color: "#1a1a1a"
                        }}>
                            Incubated Startup
                        </Typography>
                    </Box>
                </Grid>

                <Grid item xs={12} md={8}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontWeight: 700,
                            color: "#1a1a1a",
                            mb: 6,
                            fontSize: { xs: "1.6rem", md: "2.2rem" },
                            lineHeight: 1.3,
                            position: "relative",
                            "&::before": {
                                content: '"""',
                                position: "absolute",
                                left: -40,
                                top: -20,
                                fontSize: "5rem",
                                color: "#eee",
                                zIndex: -1
                            }
                        }}
                    >
                        {story.StartupAbout}
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontSize: "1.15rem",
                            lineHeight: 1.9,
                            color: "#4a4a4a",
                            fontWeight: 400,
                            mb: 6
                        }}
                    >
                        {story.StartupDescription}
                    </Typography>

                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3, mb: 12 }}>
                        {story.StartupWebsite && (
                            <MuiLink
                                href={story.StartupWebsite.startsWith('http') ? story.StartupWebsite : `https://${story.StartupWebsite}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{ 
                                    textDecoration: "none",
                                    backgroundColor: "#c8102e",
                                    color: "white",
                                    px: 5,
                                    py: 2,
                                    borderRadius: "0",
                                    fontWeight: 800,
                                    fontSize: "0.85rem",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.2em",
                                    transition: "0.4s cubic-bezier(0.2, 0.8, 0.2, 1)",
                                    boxShadow: "0 10px 20px rgba(200, 16, 46, 0.2)",
                                    "&:hover": {
                                        backgroundColor: "#000",
                                        transform: "translateY(-4px)",
                                        boxShadow: "0 15px 30px rgba(0,0,0,0.15)"
                                    }
                                }}
                            >
                                Visit Website
                            </MuiLink>
                        )}
                        {story.StartupLinkdin && (
                            <MuiLink
                                href={story.StartupLinkdin.startsWith('http') ? story.StartupLinkdin : `https://${story.StartupLinkdin}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{ 
                                    textDecoration: "none",
                                    backgroundColor: "transparent",
                                    color: "#1a1a1a",
                                    px: 5,
                                    py: 2,
                                    borderRadius: "0",
                                    border: "2px solid #1a1a1a",
                                    fontWeight: 800,
                                    fontSize: "0.85rem",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.2em",
                                    transition: "0.4s cubic-bezier(0.2, 0.8, 0.2, 1)",
                                    "&:hover": {
                                        backgroundColor: "#0077b5",
                                        borderColor: "#0077b5",
                                        color: "white",
                                        transform: "translateY(-4px)",
                                        boxShadow: "0 15px 30px rgba(0,119,181,0.2)"
                                    }
                                }}
                            >
                                LinkedIn Profile
                            </MuiLink>
                        )}
                    </Box>

                    {/* Uniform Media Section */}
                    {story.SuccessImages && story.SuccessImages.length > 0 ? (
                        <Box sx={{ pt: 8, borderTop: "1px solid #eee" }}>
                            <Typography
                                variant="h3"
                                sx={{
                                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                                    fontWeight: 900,
                                    mb: 6,
                                    textTransform: "uppercase",
                                    letterSpacing: "-0.02em",
                                    fontSize: "1.8rem",
                                    color: "#1a1a1a"
                                }}
                            >
                                Journey Highlights
                            </Typography>
                            <Grid container spacing={2}>
                                {story.SuccessImages.map((img, index) => (
                                    <Grid item xs={12} sm={6} key={index}>
                                        <Box
                                            component="img"
                                            src={img}
                                            alt={`${story.StartupName} Highlight ${index + 1}`}
                                            sx={{
                                                width: "100%",
                                                height: "350px",
                                                objectFit: "cover",
                                                borderRadius: "2px",
                                                filter: "grayscale(20%)",
                                                transition: "0.6s cubic-bezier(0.2, 0.8, 0.2, 1)",
                                                "&:hover": {
                                                    filter: "grayscale(0%)",
                                                    transform: "scale(1.02)",
                                                },
                                            }}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    ) : (
                        /* No images available, omit the Heading as per requirement */
                        null
                    )}
                </Grid>
            </Grid>
        </Box >
    );
};

export default StoryDetails;
