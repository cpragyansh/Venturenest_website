// "use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  Skeleton,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { motion } from 'framer-motion';

// --- Font & Colors ---
const FONT_FAMILY = '"Plus Jakarta Sans", sans-serif';

const COLORS = {
  red: "#a40f19",
  blue: "#1b4880",
  grey: "#515257",
  lightGrey: "#f4f6f8",
  white: "#ffffff",
};

// --- Background Elements ---

// 1. Floating Bubble
const Bubble = ({ color, size, top, left, right, bottom, duration, delay }) => (
  <Box
    component={motion.div}
    animate={{
      y: [0, -30, 0],
      x: [0, 15, -15, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay,
    }}
    sx={{
      position: "absolute",
      top: top,
      left: left,
      right: right,
      bottom: bottom,
      width: size,
      height: size,
      borderRadius: "50%",
      bgcolor: color,
      opacity: 0.05,
      zIndex: 0,
      pointerEvents: "none",
    }}
  />
);

// 2. Rotating Square
const FloatingSquare = ({ color, size, top, left, right, bottom, duration, delay }) => (
  <Box
    component={motion.div}
    animate={{
      rotate: [0, 90, 180, 270, 360],
      y: [0, -20, 0],
    }}
    transition={{
      duration: duration,
      repeat: Infinity,
      ease: "linear",
      delay: delay,
    }}
    sx={{
      position: "absolute",
      top: top,
      left: left,
      right: right,
      bottom: bottom,
      width: size,
      height: size,
      border: `2px solid ${color}`,
      opacity: 0.08,
      zIndex: 0,
      pointerEvents: "none",
      borderRadius: "8px",
    }}
  />
);

// 3. Floating Triangle
const FloatingTriangle = ({ color, size, top, left, right, bottom, duration, delay }) => (
  <Box
    component={motion.div}
    animate={{
      rotate: [0, -10, 10, 0],
      y: [0, 15, 0],
    }}
    transition={{
      duration: duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay,
    }}
    sx={{
      position: "absolute",
      top: top,
      left: left,
      right: right,
      bottom: bottom,
      width: 0,
      height: 0,
      borderLeft: `${size / 2}px solid transparent`,
      borderRight: `${size / 2}px solid transparent`,
      borderBottom: `${size}px solid ${color}`,
      opacity: 0.08,
      zIndex: 0,
      pointerEvents: "none",
    }}
  />
);

// --- Member Card Component ---
const MemberCard = ({ member, index }) => {
  const accentColor = index % 2 === 0 ? COLORS.red : COLORS.blue;

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -10 }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 3,
            height: '100%',
            borderRadius: '20px',
            bgcolor: 'white',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            borderBottom: `6px solid ${accentColor}`,
            transition: 'box-shadow 0.3s ease',
            '&:hover': {
              boxShadow: `0 15px 30px ${accentColor}30`,
            },
          }}
        >
          {/* Decorative Circle behind image */}
          <Box
            sx={{
              position: 'absolute',
              top: -30,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 120,
              height: 120,
              borderRadius: '50%',
              bgcolor: `${accentColor}10`,
              zIndex: 0,
            }}
          />

          {/* Member Image */}
          <Box
            sx={{
              position: 'relative',
              zIndex: 1,
              width: 140,
              height: 140,
              mx: 'auto',
              mb: 2,
              borderRadius: '50%',
              p: 0.5,
              border: `2px solid ${accentColor}40`,
              bgcolor: 'white'
            }}
          >
            <Box
              component="img"
              src={member.imgpath}
              alt={member.name}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '50%',
              }}
            />
          </Box>

          {/* Member Details */}
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                fontFamily: FONT_FAMILY,
                color: '#222',
                mb: 0.5,
                lineHeight: 1.2
              }}
            >
              {member.name}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 500,
                fontFamily: FONT_FAMILY,
                color: COLORS.grey,
                textTransform: 'uppercase',
                fontSize: '0.75rem',
                letterSpacing: '0.05em'
              }}
            >
              {member.company}
            </Typography>
          </Box>
        </Paper>
      </motion.div>
    </Grid>
  );
};

export default function LegalComplianceCouncil() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch council members from backend
    axios.get('https://venturenest.onrender.com/council-members?category=legalCompl')
      .then(response => {
        setMembers(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching council members:', error);
        setLoading(false);
      });
  }, []);

  return (
    <Box sx={{
      bgcolor: '#fafafa',
      minHeight: '100vh',
      overflowX: 'hidden',
      pb: 10,
      position: 'relative'
    }}>
      {/* Import Font */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');`}
      </style>

      {/* --- Global Background Grid Pattern --- */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `
            linear-gradient(rgba(27, 72, 128, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(27, 72, 128, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          backgroundAttachment: 'fixed',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* --- Header Section --- */}
      <Box
        sx={{
          pt: { xs: 8, md: 12 },
          pb: { xs: 6, md: 8 },
          textAlign: 'center',
          position: 'relative',
          px: 2,
          zIndex: 1
        }}
      >
        {/* Background Elements for Header */}
        <Bubble color={COLORS.red} size={200} top="-50px" left="-50px" duration={10} delay={0} />
        <FloatingSquare color={COLORS.blue} size={60} top="10%" right="15%" duration={20} delay={0} />
        <FloatingTriangle color={COLORS.red} size={40} bottom="20%" left="10%" duration={8} delay={1} />

        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
          <Typography
            component={motion.h1}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            variant="h2"
            sx={{
              fontWeight: 800,
              fontFamily: FONT_FAMILY,
              color: COLORS.red,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              mb: 3
            }}
          >
            Legal & Compliance Council
          </Typography>

          <Box
            component={motion.div}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            sx={{ width: 80, height: 5, bgcolor: COLORS.blue, mx: 'auto', borderRadius: 2, mb: 4 }}
          />

          <Typography
            component={motion.p}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            variant="body1"
            sx={{
              fontFamily: FONT_FAMILY,
              color: COLORS.grey,
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.8,
              maxWidth: '800px',
              mx: 'auto'
            }}
          >
            The <strong style={{ color: '#000' }}>Legal & Compliance Council</strong> ensures that startups at VentureNest operate on a legally sound foundation. It supports entrepreneurs with IP protection, regulatory compliance, contract management and legal literacy—empowering them to build robust and risk-aware businesses.
          </Typography>
        </Container>
      </Box>

      {/* --- Members Grid --- */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Background Elements for Grid Area */}
        <Bubble color={COLORS.blue} size={100} top="5%" left="-20px" duration={9} delay={2} />
        <FloatingSquare color={COLORS.red} size={100} top="40%" right="-40px" duration={25} delay={2} />
        <FloatingTriangle color={COLORS.blue} size={50} bottom="10%" left="5%" duration={12} delay={0} />
        <Bubble color={COLORS.red} size={150} bottom="-50px" right="10%" duration={15} delay={1} />

        <Grid container spacing={4} justifyContent="center">
          {loading ? (
            // Loading Skeletons
            Array.from(new Array(4)).map((_, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Paper sx={{ p: 3, borderRadius: '20px', height: '100%' }}>
                  <Skeleton variant="circular" width={140} height={140} sx={{ mx: 'auto', mb: 2 }} />
                  <Skeleton variant="text" height={30} width="80%" sx={{ mx: 'auto', mb: 1 }} />
                  <Skeleton variant="text" height={20} width="60%" sx={{ mx: 'auto' }} />
                </Paper>
              </Grid>
            ))
          ) : members.length > 0 ? (
            // Member Cards
            members.map((member, index) => (
              <MemberCard key={index} member={member} index={index} />
            ))
          ) : (
            // Empty State
            <Grid item xs={12}>
              <Box sx={{ textAlign: 'center', py: 8 }}>
                <Typography variant="h6" color="text.secondary" fontFamily={FONT_FAMILY}>
                  No council members found.
                </Typography>
              </Box>
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
}
