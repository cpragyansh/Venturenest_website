import React, { useEffect, useState } from "react";
import { Box, Typography, CircularProgress, Button, Grid, Link as MuiLink, Container, Divider, Stack, Tab, Tabs } from "@mui/material";
import { useParams, Link as RouterLink } from "react-router-dom";
import axios from "axios";

const StoryDetails = () => {
    const { id } = useParams();
    const [story, setStory] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState(0);

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
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#000' }}>
                <CircularProgress sx={{ color: '#9E0203' }} />
            </Box>
        );
    }

    if (!story) {
        return (
            <Container sx={{ py: 20, textAlign: 'center' }}>
                <Typography variant="h4" sx={{ fontWeight: 800 }}>DOSSIER_NOT_FOUND</Typography>
                <Button component={RouterLink} to="/successstories" sx={{ mt: 4, color: '#9E0203', fontWeight: 700 }}>
                    RECALL_TO_HUB
                </Button>
            </Container>
        );
    }

    return (
        <Box sx={{ backgroundColor: "#020202", minHeight: "100vh", color: "#fff", pt: { xs: 10, md: 15 } }}>
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800;900&display=swap');
                    * {
                        font-family: 'Plus Jakarta Sans', sans-serif !important;
                    }
                    .dossier-tab-root {
                        border-bottom: 1px solid rgba(255,255,255,0.1);
                        margin-bottom: 40px;
                    }
                    .dossier-tab {
                        font-weight: 900 !important;
                        font-size: 0.7rem !important;
                        letter-spacing: 0.2em !important;
                        color: rgba(255,255,255,0.4) !important;
                    }
                    .dossier-tab.Mui-selected {
                        color: #9E0203 !important;
                    }
                    .folder-glow {
                        background: linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 100%);
                        border: 1px solid rgba(255,255,255,0.05);
                        padding: 60px;
                        position: relative;
                    }
                    .folder-glow::after {
                        content: '';
                        position: absolute;
                        top: 0; right: 0;
                        width: 40px; height: 40px;
                        background: linear-gradient(225deg, #020202 50%, rgba(255,255,255,0.1) 50%);
                    }
                `}
            </style>

            <Container maxWidth="xl">
                {/* Dossier Header */}
                <Box sx={{ mb: 6 }}>
                    <Typography sx={{ color: "#9E0203", fontWeight: 900, fontSize: "0.7rem", letterSpacing: "0.5em", mb: 2 }}>[ CLASSIFIED_SUCCESS_STORY ]</Typography>
                    <Typography variant="h1" sx={{ fontWeight: 900, fontSize: { xs: "3rem", md: "7rem" }, lineHeight: 0.9 }}>{story.StartupName}</Typography>
                </Box>

                {/* Dossier Navigation */}
                <Box className="dossier-tab-root">
                    <Tabs value={activeTab} onChange={(e, val) => setActiveTab(val)} TabIndicatorProps={{ sx: { bgcolor: "#9E0203" } }}>
                        <Tab className="dossier-tab" label="01_CORE_ENTITY" />
                        <Tab className="dossier-tab" label="02_FULL_REPORT" />
                        <Tab className="dossier-tab" label="03_VISUAL_INDEX" />
                        <Tab className="dossier-tab" label="04_NETWORK_NODES" />
                    </Tabs>
                </Box>

                {/* Tab Content */}
                <Box className="folder-glow">
                    {activeTab === 0 && (
                        <Grid container spacing={8} alignItems="center">
                            <Grid item xs={12} md={5}>
                                <Box component="img" src={story.FounderImg || "/assets/default.jpg"} sx={{ width: "100%", height: "500px", objectFit: "cover" }} />
                            </Grid>
                            <Grid item xs={12} md={7}>
                                <Typography sx={{ fontSize: "0.6rem", fontWeight: 900, color: "rgba(255,255,255,0.3)", mb: 4 }}>PRIMARY_STAKEHOLDER</Typography>
                                <Typography variant="h3" sx={{ fontWeight: 800, mb: 1 }}>{story.FounderName || "Alumni Researcher"}</Typography>
                                <Typography variant="h6" sx={{ fontStyle: "italic", opacity: 0.6, mb: 6 }}>"{story.StartupAbout}"</Typography>
                                <Stack direction="row" spacing={3}>
                                    {story.FounderLogoImg && <Box component="img" src={story.FounderLogoImg} sx={{ height: "40px", filter: "brightness(2)" }} />}
                                </Stack>
                            </Grid>
                        </Grid>
                    )}

                    {activeTab === 1 && (
                        <Box sx={{ maxWidth: "1000px" }}>
                            <Typography variant="h5" sx={{ fontWeight: 300, lineHeight: 1.8, color: "rgba(255,255,255,0.8)" }}>
                                {story.StartupDescription}
                            </Typography>
                        </Box>
                    )}

                    {activeTab === 2 && (
                        <Grid container spacing={2}>
                            {story.SuccessImages && story.SuccessImages.map((img, i) => (
                                <Grid item xs={12} md={4} key={i}>
                                    <Box component="img" src={img} sx={{ width: "100%", height: "300px", objectFit: "cover", opacity: 0.7 }} />
                                </Grid>
                            ))}
                        </Grid>
                    )}

                    {activeTab === 3 && (
                        <Stack spacing={4}>
                            {story.StartupWebsite && <MuiLink href={story.StartupWebsite} sx={{ color: "#fff", fontWeight: 900, textDecoration: "none", fontSize: "1.5rem", borderLeft: "4px solid #9E0203", pl: 3 }}>Official Portal &rarr;</MuiLink>}
                            {story.StartupLinkdin && <MuiLink href={story.StartupLinkdin} sx={{ color: "#fff", fontWeight: 900, textDecoration: "none", fontSize: "1.5rem", borderLeft: "4px solid #9E0203", pl: 3 }}>LinkedIn Profile &rarr;</MuiLink>}
                        </Stack>
                    )}
                </Box>

                {/* Final Control */}
                <Box sx={{ mt: 10, textAlign: "right" }}>
                    <Button 
                        component={RouterLink} 
                        to="/successstories"
                        sx={{ color: "#fff", fontWeight: 900, fontSize: "0.7rem", letterSpacing: "0.2em", border: "1px solid rgba(255,255,255,0.2)", p: "15px 40px", "&:hover": { borderColor: "#9E0203", color: "#9E0203" } }}
                    >
                        CLOSE_DOSSIER // ESC
                    </Button>
                </Box>
            </Container>
        </Box >
    );
};

export default StoryDetails;
