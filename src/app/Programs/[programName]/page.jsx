"use client";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Box, Typography, CircularProgress, Button, Grid, Skeleton } from "@mui/material";

export default function ProgramDetails() {
    const { programName } = useParams();
    const [program, setProgram] = useState(null);
    const [prevProgram, setPrevProgram] = useState(null);
    const [nextProgram, setNextProgram] = useState(null);
    const [loading, setLoading] = useState(true);

    // function to create slug (must match the one in Programs/page.jsx) 
    const createSlug = (name) => {
        return name
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, "")
            .replace(/[\s_-]+/g, "-")
            .replace(/^-+|-+$/g, "");
    };

    useEffect(() => {
        const fetchProgram = async () => {
            try {
                const response = await axios.get((window.API_BASE_URL || (window.API_BASE_URL || 'https://venturenestbackend.cgcuniversity.in')) + '/programs');
                const programs = response.data;
                const index = programs.findIndex(
                    (p) => createSlug(p.programName) === programName
                );

                if (index !== -1) {
                    setProgram(programs[index]);
                    setPrevProgram(programs[index - 1] || null);
                    setNextProgram(programs[index + 1] || null);
                }
            } catch (error) {
                console.error("Error fetching program details:", error);
            } finally {
                setLoading(false);
            }
        };

        if (programName) {
            fetchProgram();
        }
    }, [programName]);

    if (loading) {
        return (
            <Box sx={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <CircularProgress />
            </Box>
        );
    }

    if (!program) {
        return (
            <Box sx={{ minHeight: "100vh", p: 4 }}>
                <Typography variant="h5">Program not found.</Typography>
            </Box>
        );
    }


    //  Note- Amit : theres a Content wrap bug which i'll Fix later

    const dateObj = new Date(program.programDate);
    const day = dateObj.getDate();
    const month = dateObj.toLocaleString("default", { month: "short" }).toUpperCase();
    const year = dateObj.getFullYear();

    return (
        <Box sx={{
            minHeight: "100vh",
            //    bgcolor: "#fdfdfd", 
            pb: 12
        }}>
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
                            mb: 2,
                            textAlign: "center"
                        }}
                    >
                        Program Details
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
                            mx: "auto",
                            textAlign: "center",
                            wordBreak: "break-word",
                            overflowWrap: "break-word"
                        }}
                    >
                        {program.programName}
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
                        src={program.imageUrl}
                        alt={program.programName}
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
                                fontSize: { xs: "1.2rem", md: "1.5rem" },
                                fontStyle: "italic",
                                wordBreak: "break-word",
                                overflowWrap: "break-word",
                                display: "block",
                                width: "100%"
                            }}
                        >
                            "{program.programTitle}"
                        </Typography>

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
                            {program.programDescription}
                        </Typography>

                        <Box sx={{ mt: 10 }}>
                             <Typography
                                variant="h6"
                                sx={{
                                    fontFamily: "'Inter', sans-serif",
                                    fontWeight: 600,
                                    mb: 4,
                                    borderBottom: "1px solid #eee",
                                    pb: 2,
                                    wordBreak: "break-word",
                                    overflowWrap: "break-word"
                                }}
                            >
                                A Glimpse Of {program.programName.split(":")[0]}
                            </Typography>
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

                        <Box sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            mt: 12,
                            pt: 4,
                            borderTop: "1px solid #eee"
                        }}>
                            {prevProgram ? (
                                <Button
                                    component={Link}
                                    to={`/Programs/${createSlug(prevProgram.programName)}`}
                                    sx={{
                                        textTransform: "none",
                                        color: "#444",
                                        fontFamily: "'Inter', sans-serif",
                                        "&:hover": { color: "#c8102e", bgcolor: "transparent" }
                                    }}
                                    startIcon={<span style={{ fontSize: "1.2rem" }}>←</span>}
                                >
                                    Previous Program
                                </Button>
                            ) : <Box />}

                            {nextProgram && (
                                <Button
                                    component={Link}
                                    to={`/Programs/${createSlug(nextProgram.programName)}`}
                                    sx={{
                                        textTransform: "none",
                                        color: "#444",
                                        fontFamily: "'Inter', sans-serif",
                                        "&:hover": { color: "#c8102e", bgcolor: "transparent" }
                                    }}
                                    endIcon={<span style={{ fontSize: "1.2rem" }}>→</span>}
                                >
                                    Next Program
                                </Button>
                            )}
                        </Box>

                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}
