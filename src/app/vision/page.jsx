"use client";
import React from "react";
import {
  Box,
  Typography,
  Container,
  Chip,
  Paper,
  useTheme,
  useMediaQuery,
  Avatar
} from "@mui/material";
import { motion } from "framer-motion";
import VerifiedIcon from "@mui/icons-material/Verified";
import BoltIcon from "@mui/icons-material/Bolt";
import GroupsIcon from "@mui/icons-material/Groups";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import VisibilityIcon from "@mui/icons-material/Visibility";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";

// --- Assets & Config ---
const BRAND_COLOR = "#A30D33";
const BRAND_LIGHT = "#fff0f3";
const TEXT_DARK = "#0a0a0a";
const TEXT_MUTED = "#555";

// --- Vector Components (Inline SVGs) ---
const DotPattern = () => (
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" style={{ position: 'absolute', opacity: 0.15, zIndex: 0 }}>
    <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="2" fill={BRAND_COLOR} />
    </pattern>
    <rect width="100" height="100" fill="url(#dots)" />
  </svg>
);

const LineArt = () => (
  <Box sx={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none", opacity: 0.3 }}>
    <svg width="100%" height="100%" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', top: 0, left: 0 }}>
      <motion.path
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        d="M-100 200 C 200 100, 400 500, 700 300 S 1200 100, 1600 400"
        stroke={BRAND_COLOR}
        strokeWidth="0.5"
        strokeDasharray="10 10"
        opacity="0.2"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
        d="M-100 600 C 300 400, 600 800, 900 500 S 1300 700, 1600 300"
        stroke="#1a237e"
        strokeWidth="0.5"
        strokeDasharray="15 5"
        opacity="0.15"
      />
    </svg>
  </Box>
);

const GlobalVectorBackground = () => (
  <Box sx={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
    <svg width="100%" height="100%" viewBox="0 0 1440 2000" fill="none" style={{ position: 'absolute', top: 0, left: 0, opacity: 0.1 }}>
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.3 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        d="M-100 300 Q 400 600 900 300 T 1600 300"
        stroke={BRAND_COLOR} strokeWidth="1"
      />
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.2 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 2 }}
        d="M1600 800 Q 1100 500 600 800 T -100 800"
        stroke="#1a237e" strokeWidth="1"
      />
    </svg>

    {[...Array(4)].map((_, i) => (
      <Box
        key={i}
        component={motion.div}
        animate={{
          y: [0, -40, 0],
          x: [0, 20, 0],
          rotate: [0, 10, 0],
          opacity: [0.05, 0.15, 0.05]
        }}
        transition={{
          duration: 8 + i * 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 1.5
        }}
        sx={{
          position: "absolute",
          top: `${20 + i * 20}%`,
          left: `${(i * 25) % 90}%`,
          color: i % 2 === 0 ? BRAND_COLOR : "#1a237e",
          fontSize: "4rem",
          zIndex: 0
        }}
      >
        {i % 2 === 0 ? <RocketLaunchIcon fontSize="inherit" /> : <TrackChangesIcon fontSize="inherit" />}
      </Box>
    ))}

    <Box sx={{
      position: "absolute",
      inset: 0,
      backgroundImage: `radial-gradient(${BRAND_COLOR}05 1px, transparent 1px)`,
      backgroundSize: "60px 60px",
      opacity: 0.4
    }} />
  </Box>
);

const FeatureSection = ({ item, index }) => {
  const isImageRight = index % 2 === 0;

  return (
    <Box
      sx={{
        position: "relative",
        mb: { xs: 10, md: 15 },
        "&:last-of-type": { mb: 5 }
      }}
    >
      <Container maxWidth="lg">
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: isImageRight ? "row" : "row-reverse" },
            alignItems: "center",
            gap: { xs: 6, md: 10 },
            position: "relative",
            zIndex: 1
          }}
        >
          {/* Text Content */}
          <Box
            sx={{
              flex: 1,
              textAlign: { xs: "center", md: isImageRight ? "left" : "right" },
            }}
          >
            <Chip
              label={item.subtitle}
              sx={{
                bgcolor: `${item.color}15`,
                color: item.color,
                fontWeight: 800,
                letterSpacing: 2,
                mb: 3,
                borderRadius: "8px",
                fontSize: "0.75rem"
              }}
            />
            <Typography
              variant="h2"
              sx={{
                fontWeight: 900,
                fontFamily: "var(--font-display)",
                color: TEXT_DARK,
                mb: 3,
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                lineHeight: 1.1,
                letterSpacing: -1
              }}
            >
              {item.title}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: TEXT_MUTED,
                lineHeight: 1.8,
                fontWeight: 400,
                mb: 4,
                maxWidth: 600,
                ml: { xs: "auto", md: isImageRight ? 0 : "auto" },
                mr: { xs: "auto", md: isImageRight ? "auto" : 0 }
              }}
            >
              {item.desc}
            </Typography>
          </Box>

          {/* Image Side */}
          <Box
            sx={{
              flex: 1.1,
              position: "relative",
              width: "100%",
            }}
          >
            <Box
              sx={{
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  inset: { xs: -10, md: -20 },
                  border: `2px solid ${item.color}`,
                  borderRadius: "40px",
                  opacity: 0.2,
                  zIndex: -1,
                  transform: isImageRight ? "rotate(3deg) scale(1.02)" : "rotate(-3deg) scale(1.02)"
                }
              }}
            >
              <Box
                sx={{
                  borderRadius: { xs: "24px", md: "40px" },
                  overflow: "hidden",
                  boxShadow: `0 40px 80px -20px ${item.color}30`,
                  aspectRatio: "16/10",
                  bgcolor: "white",
                  p: { xs: 1, md: 1.5 }
                }}
              >
                <Box
                  component="img"
                  src={item.image}
                  alt={item.title}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: { xs: "18px", md: "30px" },
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default function VisionPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const data = [
    {
      title: "Our Vision",
      subtitle: "THE FUTURE WE SEE",
      desc: "To be a premier incubation hub that fuels technological innovation, nurtures high-potential startups, and drives sustainable entrepreneurial success at regional and national levels.",
      image: "/assets/vision-updated.jpg",
      color: "#A30D33"
    },
    {
      title: "Our Mission",
      subtitle: "OUR PURPOSE",
      desc: "To empower early-stage ventures by providing structured mentorship, access to funding, cutting-edge infrastructure, and a collaborative ecosystem that fosters innovation, accelerates business growth, and contributes meaningfully to the larger startup landscape.",
      image: "/assets/mission-updated.jpg",
      color: "#1a237e"
    }
  ];

  return (
    <Box sx={{ bgcolor: "#FDFDFD", overflowX: "hidden", minHeight: "100vh", position: "relative" }}>
      <GlobalVectorBackground />

      {/* --- HERO SECTION --- */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "60vh", md: "70vh" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `linear-gradient(135deg, rgba(163,13,51,0.92), rgba(26,35,126,0.92)), url('/assets/corosuel-bg.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          textAlign: "center",
          color: "white",
          px: 2,
        }}
      >
        <Box sx={{ position: "absolute", inset: 0, opacity: 0.1, backgroundImage: "radial-gradient(circle at 50% 50%, white 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Box sx={{
              display: "inline-block",
              p: { xs: 3, md: 5 },
              borderRadius: 8,
              bgcolor: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 25px 50px rgba(0,0,0,0.1)"
            }}>
              <Typography
                variant={isMobile ? "h2" : "h1"}
                sx={{
                  fontWeight: 900,
                  fontFamily: "var(--font-display)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  mb: 2,
                  fontSize: { xs: "2.5rem", md: "4.5rem" }
                }}
              >
                Mission & Vision
              </Typography>
              <Box
                component={motion.div}
                initial={{ width: 0 }}
                animate={{ width: "100px" }}
                transition={{ delay: 0.5, duration: 0.8 }}
                sx={{ height: 4, bgcolor: "white", mx: "auto", mb: 4, borderRadius: 2 }}
              />
              <Typography
                variant={isMobile ? "body1" : "h5"}
                sx={{
                  fontWeight: 300,
                  maxWidth: "800px",
                  mx: "auto",
                  lineHeight: 1.6,
                  opacity: 0.9,
                }}
              >
                At VentureNest, we are dedicated to fostering innovation and empowering the next generation of visionary founders.
              </Typography>
            </Box>
          </motion.div>
        </Container>

        <Box sx={{ position: "absolute", bottom: -1, left: 0, right: 0, lineHeight: 0, color: "#FDFDFD" }}>
          <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </Box>
      </Box>

      {/* --- INTRODUCTION SECTION --- */}
      <Box sx={{ pt: 15, pb: 10, position: "relative" }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: "center", position: "relative", zIndex: 1 }}>
            <Typography variant="body1" sx={{ fontSize: "1.2rem", lineHeight: 1.8, color: TEXT_MUTED }}>
              VentureNest is the first entrepreneurship incubation centre at CGC University, founded to promote innovation, business development and entrepreneurship. Located at Block 3 of the campus, VentureNest is essentially one of the most vibrant hubs for entrepreneurship development with the necessary facilities for startup success. We incubate and mentor creativity and innovation enabling idea developers to turn their visions into successful ventures.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* --- VISION & MISSION SECTIONS --- */}
      <Box sx={{ position: "relative", pb: 20 }}>
        <LineArt />
        {data.map((item, index) => (
          <FeatureSection key={index} item={item} index={index} />
        ))}
      </Box>
    </Box>
  );
}

