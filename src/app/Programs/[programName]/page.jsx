"use client";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Box, Typography, CircularProgress, Button, Grid, Skeleton, Stack } from "@mui/material";

export default function ProgramDetails() {
    const { programName } = useParams();
    const [program, setProgram] = useState(null);
    const [prevProgram, setPrevProgram] = useState(null);
    const [nextProgram, setNextProgram] = useState(null);
    const [loading, setLoading] = useState(true);

    // Helper function to create slug (must match the one in Programs/page.jsx)
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
                const response = await axios.get("https://venturenest.onrender.com/programs");
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


    ///

    const dateObj = new Date(program.programDate);
    const day = dateObj.getDate();
    const month = dateObj.toLocaleString("default", { month: "short" }).toUpperCase();
    const year = dateObj.getFullYear();

    return (
        <Box sx={{ minHeight: "100vh", bgcolor: "#fff", pb: 8 }}>
            {/* Program Name */}
            <Typography
                variant="h1"
                fontWeight="900"
                textAlign="center"
                gutterBottom
                sx={{
                    color: "#333",
                    maxWidth: "80%",
                    mx: "auto",
                    mt: 4,
                    fontSize: { xs: "2.5rem", md: "4rem" } // Responsive font size
                }}
            >
                {program.programName}
            </Typography>

            {/* Hero Section */}
            <Box
                component="img"
                src={program.imageUrl}
                alt={program.programName}
                sx={{
                    width: "70%",
                    height: { xs: "40vh", md: "60vh" },
                    objectFit: "cover",
                    display: "block",
                    mx: "auto",
                    mt: 4,
                    borderRadius: 2,
                    boxShadow: 3
                }}
            />

            <Box sx={{ maxWidth: "70%", mx: "auto", mt: 4 }}>
                {/* Date and Description Row */}
                <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 4, mt: 4 }}>
                    {/* Date Block - Golden Ratio Typography */}
                    <Box sx={{ flexShrink: 0, display: "flex", alignItems: "center", gap: 1, color: "#c8102e" }}>
                        <Typography sx={{ fontSize: "5rem", fontWeight: "900", lineHeight: 0.8 }}>{day}</Typography>
                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                            <Typography sx={{ fontSize: "1.8rem", fontWeight: "700", textTransform: "uppercase", lineHeight: 1 }}>{month}</Typography>
                            <Typography sx={{ fontSize: "1.2rem", fontWeight: "500", color: "#666", lineHeight: 1 }}>{year}</Typography>
                        </Box>
                    </Box>

                    {/* Description */}
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="h4" fontWeight="800" gutterBottom sx={{ color: "#000" }}>
                            {program.programTitle}
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: "1.1rem", lineHeight: 1.8, color: "#555" }}>
                            {program.programDescription}
                        </Typography>
                    </Box>
                </Box>

                {/* Gallery Skeleton Section */}
                <Box sx={{ mt: 8 }}>
                    <Typography variant="h4" fontWeight="bold" gutterBottom>
                        A Glimpse Of {program.programName.split(":")[0]}
                    </Typography>
                    <Grid container spacing={2}>
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <Grid item xs={12} sm={6} md={4} key={item}>
                                <Skeleton variant="rectangular" width="100%" height={200} sx={{ borderRadius: 2 }} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Navigation Buttons */}
                <Box sx={{ display: "flex", justifyContent: "space-between", mt: 8, pt: 4, borderTop: "1px solid #eee" }}>
                    {prevProgram ? (
                        <Button
                            component={Link}
                            to={`/Programs/${createSlug(prevProgram.programName)}`}
                            variant="outlined"
                            sx={{ borderColor: "#c8102e", color: "#c8102e", fontWeight: "bold" }}
                        >
                            &larr; Previous
                        </Button>
                    ) : (
                        <Box />
                    )}

                    {nextProgram && (
                        <Button
                            component={Link}
                            to={`/Programs/${createSlug(nextProgram.programName)}`}
                            variant="contained"
                            sx={{ bgcolor: "#c8102e", fontWeight: "bold", "&:hover": { bgcolor: "#a00d25" } }}
                        >
                            Next &rarr;
                        </Button>
                    )}
                </Box>
            </Box>
        </Box>
    );
}
