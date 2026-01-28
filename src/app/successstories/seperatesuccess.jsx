import React, { useEffect, useState } from "react";
import { Box, Typography, CircularProgress, Button, Grid, Link as MuiLink, Container } from "@mui/material";
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
                `https://venture-nest-backend.onrender.com/starred-stories/${id}`
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
                <CircularProgress sx={{ color: '#9E0203' }} />
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
                    sx={{ mt: 4, color: '#9E0203', fontWeight: 700, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                    Back to Success Stories
                </Button>
            </Container>
        );
    }

    return (
        <Box sx={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap');
                    * {
                        font-family: 'Plus Jakarta Sans', sans-serif !important;
                    }
                    ::selection {
                        background-color: #9E0203;
                        color: #ffffff;
                    }
                `}
            </style>

            {/* Header / Hero */}
            <Box sx={{ 
                borderBottom: "1px solid #eee",
                pt: { xs: 8, md: 12 },
                pb: 6,
                px: { xs: 3, md: 6 }
            }}>
                <Container maxWidth="lg">
                    <Button
                        component={RouterLink}
                        to="/successstories"
                        sx={{
                            mb: 4,
                            color: "#999",
                            fontWeight: 800,
                            fontSize: "0.7rem",
                            letterSpacing: "0.2em",
                            "&:hover": { color: "#9E0203", backgroundColor: "transparent" }
                        }}
                    >
                        &larr; ALL STORIES
                    </Button>
                    <Typography
                        variant="h1"
                        sx={{
                            fontWeight: 900,
                            color: "#000",
                            fontSize: { xs: "2.5rem", md: "4.5rem" },
                            lineHeight: 0.9,
                            textTransform: "uppercase",
                            letterSpacing: "-0.04em",
                            mb: 2
                        }}
                    >
                        {story.StartupName}
                    </Typography>
                    <Typography sx={{ 
                        color: "#9E0203", 
                        fontWeight: 800, 
                        letterSpacing: "0.3em", 
                        fontSize: "0.8rem",
                        mb: 6
                    }}>
                        {story.FounderName || "BY VENTURENEST ALUMNI"}
                    </Typography>
                </Container>
            </Box>

            {/* Featured Image */}
            <Box sx={{ px: { xs: 0, md: 6 }, mb: 8 }}>
                <Container maxWidth="lg" sx={{ px: { xs: 0 } }}>
                    <Box
                        component="img"
                        src={story.FounderImg || "/assets/default.jpg"}
                        alt={story.StartupName}
                        sx={{
                            width: "100%",
                            height: { xs: "40vh", md: "70vh" },
                            objectFit: "cover",
                            borderRadius: { xs: 0, md: "4px" },
                            boxShadow: "0 40px 80px rgba(0,0,0,0.1)"
                        }}
                    />
                </Container>
            </Box>

            {/* Content Grid */}
            <Container maxWidth="lg" sx={{ pb: 12 }}>
                <Grid container spacing={10}>
                    {/* Meta Info */}
                    <Grid item xs={12} md={4}>
                        <Box sx={{ position: { md: "sticky" }, top: 40 }}>
                            {story.FounderLogoImg && (
                                <Box
                                    component="img"
                                    src={story.FounderLogoImg}
                                    alt="Logo"
                                    sx={{ maxHeight: "60px", mb: 6, opacity: 0.8 }}
                                />
                            )}
                            
                            <Box sx={{ mb: 4 }}>
                                <Typography sx={{ fontSize: "0.7rem", fontWeight: 600, color: "#9E0203", letterSpacing: "0.2em", mb: 1 }}>STATUS</Typography>
                                <Typography sx={{ fontSize: "1.2rem", fontWeight: 700, color: "#000" }}>Incubated Startup</Typography>
                            </Box>

                            <Box sx={{ mb: 6 }}>
                                <Typography sx={{ fontSize: "0.7rem", fontWeight: 600, color: "#9E0203", letterSpacing: "0.2em", mb: 1 }}>CONNECT</Typography>
                                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                                    {story.StartupWebsite && (
                                        <MuiLink href={story.StartupWebsite.startsWith('http') ? story.StartupWebsite : `https://${story.StartupWebsite}`} target="_blank" sx={{ color: "#000", fontWeight: 600, fontSize: "0.9rem", textDecorationColor: "#9E0203" }}>
                                            Visit Website &rarr;
                                        </MuiLink>
                                    )}
                                    {story.StartupLinkdin && (
                                        <MuiLink href={story.StartupLinkdin.startsWith('http') ? story.StartupLinkdin : `https://${story.StartupLinkdin}`} target="_blank" sx={{ color: "#000", fontWeight: 600, fontSize: "0.9rem", textDecorationColor: "#9E0203" }}>
                                            LinkedIn Profile &rarr;
                                        </MuiLink>
                                    )}
                                </Box>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Main Story */}
                    <Grid item xs={12} md={8}>
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: 800,
                                color: "#000",
                                mb: 6,
                                fontSize: { xs: "1.5rem", md: "2rem" },
                                lineHeight: 1.2,
                                borderLeft: "4px solid #9E0203",
                                pl: 4
                            }}
                        >
                            "{story.StartupAbout}"
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: "1.1rem",
                                lineHeight: 1.8,
                                color: "#444",
                                fontWeight: 500,
                                mb: 8
                            }}
                        >
                            {story.StartupDescription}
                        </Typography>

                        {/* Additional Media */}
                        {story.SuccessImages && story.SuccessImages.length > 0 && (
                            <Box sx={{ pt: 8, borderTop: "1px solid #eee" }}>
                                <Typography sx={{ fontWeight: 900, mb: 4, letterSpacing: "-0.02em", fontSize: "1.5rem", color: "#000" }}>
                                    HIGHLIGHTS
                                </Typography>
                                <Grid container spacing={3}>
                                    {story.SuccessImages.map((img, index) => (
                                        <Grid item xs={12} sm={6} key={index}>
                                            <Box
                                                component="img"
                                                src={img}
                                                alt="Highlight"
                                                sx={{
                                                    width: "100%",
                                                    height: "250px",
                                                    objectFit: "cover",
                                                    borderRadius: "2px",
                                                    transition: "0.4s",
                                                    "&:hover": { transform: "translateY(-5px)" }
                                                }}
                                            />
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                        )}
                    </Grid>
                </Grid>
            </Container>
        </Box >
    );
};

export default StoryDetails;
