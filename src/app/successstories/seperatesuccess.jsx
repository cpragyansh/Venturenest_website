import React, { useEffect, useState } from "react";
import { Box, Typography, CircularProgress, Button, Grid, Skeleton, Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";
import Link from "@mui/material/Link";
const StoryDetails = () => {
    const { id } = useParams();   // 👈 get ID from URL
    const [story, setStory] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchStory();
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
        return <CircularProgress />;
    }

    if (!story) {
        return <Typography>No story found</Typography>;
    }

    return (
        <Box sx={{ maxWidth: "1200px", mx: "auto", px: { xs: 3, md: 6 }, pt: 8 }}>
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
            <Typography
                variant="overline"
                sx={{
                    fontFamily: "'Inter', sans-serif",
                    letterSpacing: "0.2em",
                    color: "#c8102e",
                    fontWeight: 600,
                    display: "block",
                    textAlign: "center",
                    mb: 2
                }}
            >
                Success Story Details
            </Typography>
            <Typography
                variant="h1"
                sx={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    color: "#1a1a1a",
                    fontSize: { xs: "2.5rem", md: "4.5rem" },
                    lineHeight: 1.1,
                    maxWidth: "900px",
                    textAlign: "center",
                    mx: "auto"
                }}
            >
                {story.StartupName}
            </Typography>


            <Box
                component="img"
                src={story.FounderImg}
                alt={story.StartupName}
                sx={{
                    width: "100%",
                    height: { xs: "50vh", md: "80vh" },
                    objectFit: "cover",
                    borderRadius: "4px",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                }}
            />





            <Grid container spacing={6} className="fade-in-up" sx={{ opacity: 0, animationDelay: "0.4s", alignItems: "flex-start" }}>

                <Grid item xs={12} md={3} sx={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "auto" }}>
                    <Box sx={{
                        // borderTop: "2px solid #c8102e",
                        // pt: 3,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "auto",
                        gap: 2
                    }}>

                        <Box
                            component="img"
                            src={story.FounderLogoImg}
                            alt={story.StartupName}
                            sx={{
                                width: "100%",
                                height: { xs: "10vh", md: "10vh" },
                                objectFit: "cover",
                                borderRadius: "4px",
                                margin: "auto",
                                boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                            }}
                        />

                        {/* <Typography
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
                            </Box> */}

                    </Box>
                </Grid>

                <Grid item xs={12} md={9} sx={{ minWidth: 0, }}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontFamily: "'Playfair Display', serif",
                            fontWeight: 400,
                            color: "#1a1a1a",
                            mb: 4,
                            fontSize: { xs: "1.8rem", md: "2.5rem" },
                            fontStyle: "italic",
                            wordBreak: "break-word",
                            overflowWrap: "break-word"
                        }}
                    >
                        "{story.StartupAbout}"
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "1.5rem",
                            lineHeight: 1.8,
                            color: "#444",
                            maxWidth: "100%"
                        }}
                    >
                        {story.StartupDescription}
                    </Typography>
               

<Typography
  variant="body1"
  sx={{
    fontFamily: "'Inter', sans-serif",
    fontSize: "1.5rem",
    lineHeight: 1.8,
    color: "#444",
    mt: "2vw",
  }}
>
  <Link
    href={story.StartupWebsite}
    target="_blank"
    rel="noopener noreferrer"
    underline="hover"
    sx={{ fontWeight: 600 }}
  >
    Check Our Website
  </Link>
</Typography>
<Typography
  variant="body1"
  sx={{
    fontFamily: "'Inter', sans-serif",
    fontSize: "1.5rem",
    lineHeight: 1.8,
    color: "#444",
    mt: "2vw",
  }}
>
  <Link
    href={story.StartupLinkdin}
    target="_blank"
    rel="noopener noreferrer"
    underline="hover"
    sx={{ fontWeight: 600 }}
  >
    Check Our Linkdin
  </Link>
</Typography>


                    <Box sx={{ mt: 10 }}>
                        <Typography
                            variant="h4"
                            sx={{
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 600,
                                mb: 4,
                                borderBottom: "1px solid #eee",
                                pb: 2
                            }}
                        >
                            A Glimpse Of {story.StartupName}
                        </Typography>
                        <Box
                            sx={{
                                display: "grid",
                                gridTemplateColumns: {
                                    xs: "repeat(2, 1fr)",
                                    md: "repeat(2, 1fr)",
                                },
                                gap: 2,
                            }}
                        >
                            {story.SuccessImages.map((img, index) => (
                                <Box
                                    key={index}
                                    component="img"
                                    src={img}
                                    alt={`${story.StartupName} ${index + 1}`}
                                    sx={{
                                        width: "100%",
                                        height: "20vh",
                                        objectFit: "cover",
                                        borderRadius: "6px",
                                        boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                                        transition: "0.3s",
                                        "&:hover": {
                                            transform: "scale(1.05)",
                                        },
                                    }}
                                />
                            ))}
                        </Box>

                        <Grid container spacing={3}>
                            {[1, 2, 3].map((item) => (
                                <Grid item xs={12} sm={4} key={item}>
                                    <Skeleton
                                        variant="rectangular"
                                        width="100%"
                                        height={200}
                                        sx={{ borderRadius: "2px", bgcolor: "#f0f0f0" }}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>


                </Grid>
            </Grid>

            
        </Box >
    );
};

export default StoryDetails;
