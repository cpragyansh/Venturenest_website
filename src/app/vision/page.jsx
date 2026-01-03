// // "use client"
import React, { useEffect } from "react";
import { Box, Typography, Grid, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import '../about/about.css'

export default function VIsion() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Box sx={{overflow:"hidden"}}>
      
      {/* 🔴 About VentureNest Section */}
      <Box
        sx={{
          backgroundImage: "url(/assets/corosuel-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          py: 8,
          px: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          position: "relative",
        }}
      >
        <Typography
          // variant="h3"
          fontWeight="bold"
          Component={motion.div}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          sx={{fontSize:{xs:"5vw",sm:"2vw",lg:"3vw"} ,mt:{xs:"2vw"} }}
        >
         Mission & Vision
        </Typography>

        <Typography
          
          sx={{ mt: 2, textAlign:"justify",maxWidth:{sm:"80vw",lg:"60vw"}, lineHeight: 1.6 ,fontSize:{xs:"2.8vw",lg:"1vw"}}}
          data-aos="fade-up"
        >
          VentureNest is the first entrepreneurship incubation centre at CGC University, founded to promote innovation, business development and entrepreneurship. Located at Block 3 of the campus, VentureNest is essentially one of the most vibrant hubs for entrepreneurship development with the necessary facilities for startup success. We incubate and mentor creativity and innovation enabling idea developers to turn their visions into successful ventures.
        </Typography>
      </Box>

      {/* 🔁 Second Image + Text Section (Reversed) */}
      <Grid
        container
        spacing={12}
        sx={{
          py: 6,
          px: 3,
          maxWidth: "90vw",
          mx: "auto",
          alignItems: "center",
          flexDirection: isMobile ? "column" : "row-reverse",
          textAlign: isMobile ? "center" : "left", // Center text in mobile
        }}
      >
        <Grid item xs={12} md={6} data-aos="fade-left">
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <Box
              sx={{
                width: isMobile ? "100%" : "500px", // Full width on mobile
                height: isMobile ? "auto" : "300px",
                // border: "8px solid #A30D33",
                border: {xs:"1px solid #A30D33",lg:"4px solid #a98f96ff"},
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "5px 5px 15px rgba(0,0,0,0.2)",
              }}
            >
              <img
                src="./assets/vision-updated.jpg"
                alt="VentureNest"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={6} data-aos="fade-right">
          <Typography variant="h4" fontWeight="bold" sx={{ mb: 2, color:"rgb(154 0 54 / var(--tw-text-opacity, 1))" }}>
            Vision
          </Typography>
          <Typography  sx={{ lineHeight: 1.6,width:{xs:"100%",lg:"40vw"},fontSize:{xs:"4vw",lg:"1.2vw"},textAlign:"justify" }}>
          To be a premier incubation hub that fuels technological innovation, nurtures high-potential startups, and drives sustainable entrepreneurial success at regional and national levels.

          </Typography>
        </Grid>
      </Grid>

      {/* 🏢 First Image + Text Section */}
      <Grid
        container
        spacing={12}
        sx={{
          py: 6,
          px: 3,
          maxWidth: "90vw",
          mx: "auto",
          alignItems: "center",
          flexDirection: isMobile ? "column" : "row",
          textAlign: isMobile ? "center" : "left", // Center text in mobile
        }}
      >
        <Grid item xs={12} md={6} data-aos="fade-right">
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <Box
              sx={{
                width: isMobile ? "100%" : "500px", // Full width on mobile
                height: isMobile ? "auto" : "300px",
               border: {xs:"4px solid #A30D33",lg:"4px solid #ab828cff"},
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "5px 5px 15px rgba(0,0,0,0.2)",
              }}
            >
              <img
                src="/assets/mission-updated.jpg"
                alt="VentureNest"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={6} data-aos="fade-left">
          <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 , color:"rgb(154 0 54 / var(--tw-text-opacity, 1))" }}>
          Mission
          </Typography>
          <Typography  sx={{ lineHeight: 1.6 ,width:{xs:"100%",lg:"40vw"},fontSize:{xs:"4vw",lg:"1.2vw",textAlign:"justify"}}}>
To empower early-stage ventures by providing structured mentorship, access to funding, cutting-edge infrastructure, and a collaborative ecosystem that fosters innovation, accelerates business growth, and contributes meaningfully to the larger startup landscape.          </Typography>
        </Grid>
      </Grid>

      
    </Box>
  );
}
