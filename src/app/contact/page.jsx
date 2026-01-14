"use client";
import React from 'react';
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  useMediaQuery,
  useTheme,
  Avatar,
  Paper,
  Container,
  Stack,
  IconButton,
  InputAdornment,
  alpha,
  Chip
} from '@mui/material';
import { motion } from 'framer-motion';
import SendIcon from '@mui/icons-material/Send';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PersonIcon from '@mui/icons-material/Person';
import SubjectIcon from '@mui/icons-material/Subject';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

// --- Assets & Config ---
const BRAND_COLOR = "#A30D33";
const BRAND_SECONDARY = "#1a237e";
const TEXT_DARK = "#0a0a0a";
const TEXT_MUTED = "#555";

// --- Components for Depth ---

const FloatingShape = ({ color, size, top, left, delay, rotate }) => (
  <motion.div
    animate={{
      y: [0, -20, 0],
      rotate: [rotate, rotate + 10, rotate],
    }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
    style={{
      position: 'absolute',
      top,
      left,
      width: size,
      height: size,
      borderRadius: '25%',
      background: `linear-gradient(135deg, ${alpha(color, 0.1)}, ${alpha(color, 0.02)})`,
      border: `1px solid ${alpha(color, 0.1)}`,
      backdropFilter: 'blur(5px)',
      zIndex: 0,
      pointerEvents: 'none',
    }}
  />
);

const BackgroundTexture = () => (
  <Box sx={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}>
    {/* Subtle Grid */}
    <Box sx={{
      position: 'absolute',
      inset: 0,
      backgroundImage: `linear-gradient(${alpha(BRAND_COLOR, 0.03)} 1px, transparent 1px), linear-gradient(90deg, ${alpha(BRAND_COLOR, 0.03)} 1px, transparent 1px)`,
      backgroundSize: '100px 100px',
    }} />
    {/* Radial Gradients */}
    <Box sx={{
      position: 'absolute',
      top: '-20%',
      right: '-10%',
      width: '60vw',
      height: '60vw',
      background: `radial-gradient(circle, ${alpha(BRAND_COLOR, 0.05)} 0%, transparent 70%)`
    }} />
    <Box sx={{
      position: 'absolute',
      bottom: '-20%',
      left: '-10%',
      width: '60vw',
      height: '60vw',
      background: `radial-gradient(circle, ${alpha(BRAND_SECONDARY, 0.05)} 0%, transparent 70%)`
    }} />
  </Box>
);

const InfoCard = ({ icon, title, value, detail, delay, onClick }) => (
  <Grid item xs={12} md={4}>
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <Paper
        elevation={0}
        onClick={onClick}
        sx={{
          p: 5,
          borderRadius: 8,
          bgcolor: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.8)",
          boxShadow: `0 20px 40px ${alpha(TEXT_DARK, 0.04)}, 0 1px 3px ${alpha(TEXT_DARK, 0.02)}`,
          textAlign: "center",
          height: '100%',
          cursor: onClick ? 'pointer' : 'default',
          transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          "&:hover": {
            transform: "translateY(-12px)",
            boxShadow: `0 40px 80px ${alpha(BRAND_COLOR, 0.12)}`,
            borderColor: alpha(BRAND_COLOR, 0.1),
            "& .card-icon": {
              bgcolor: BRAND_COLOR,
              color: 'white',
              transform: 'scale(1.1) rotate(5deg)'
            }
          }
        }}
      >
        <Avatar
          className="card-icon"
          sx={{
            bgcolor: alpha(BRAND_COLOR, 0.05),
            color: BRAND_COLOR,
            width: 80,
            height: 80,
            mb: 4,
            fontSize: "2.2rem",
            transition: "all 0.4s ease",
            boxShadow: `0 10px 20px ${alpha(BRAND_COLOR, 0.1)}`
          }}
        >
          {icon}
        </Avatar>
        <Typography variant="h6" sx={{ fontWeight: 900, color: TEXT_DARK, mb: 1, letterSpacing: -0.5 }}>
          {title}
        </Typography>
        <Typography variant="body1" sx={{ color: BRAND_COLOR, fontWeight: 800, mb: 2, fontSize: '1.1rem' }}>
          {value}
        </Typography>
        <Typography variant="body2" sx={{ color: TEXT_MUTED, lineHeight: 1.8, maxWidth: '240px' }}>
          {detail}
        </Typography>
      </Paper>
    </motion.div>
  </Grid>
);

const ContactSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ bgcolor: "#FDFDFD", minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      <BackgroundTexture />

      {/* Decorative Floating Elements */}
      <FloatingShape color={BRAND_COLOR} size={150} top="15%" left="5%" delay={0} rotate={15} />
      <FloatingShape color={BRAND_SECONDARY} size={100} top="60%" left="90%" delay={1} rotate={-10} />
      <FloatingShape color={BRAND_COLOR} size={80} top="80%" left="10%" delay={2} rotate={45} />

      {/* --- HERO SECTION --- */}
      <Box sx={{
        pt: { xs: 15, md: 25 },
        pb: { xs: 20, md: 30 },
        position: 'relative',
        zIndex: 1,
        background: `linear-gradient(to bottom, ${alpha(BRAND_COLOR, 0.02)}, transparent)`
      }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Chip
                icon={<ContactSupportIcon sx={{ fontSize: '1rem !important' }} />}
                label="WE'RE HERE TO HELP"
                sx={{
                  bgcolor: 'white',
                  border: `1px solid ${alpha(BRAND_COLOR, 0.1)}`,
                  fontWeight: 800,
                  letterSpacing: 2,
                  px: 2,
                  mb: 3,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                }}
              />
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 950,
                  fontFamily: "var(--font-display)",
                  color: TEXT_DARK,
                  letterSpacing: -4,
                  fontSize: { xs: "3.5rem", md: "6rem" },
                  lineHeight: 0.9,
                  mb: 4
                }}
              >
                Contact Us<span style={{ color: BRAND_COLOR }}>.</span>
              </Typography>
              <Typography variant="h6" sx={{ color: TEXT_MUTED, maxWidth: 650, mx: "auto", fontWeight: 400, opacity: 0.8, lineHeight: 1.6 }}>
                Have a question, feedback, or a brilliant startup idea? Use the form below or find us at the campus.
              </Typography>
            </motion.div>
          </Box>
        </Container>
      </Box>

      {/* --- OVERLAPPING INFO CARDS --- */}
      <Container maxWidth="lg" sx={{ mt: { xs: -10, md: -15 }, mb: 15, position: "relative", zIndex: 2 }}>
        <Grid container spacing={4}>
          <InfoCard
            icon={<LocationOnIcon fontSize="inherit" />}
            title="Our Campus"
            value="Mohali, Punjab"
            detail="Block 3, CGC University, Mohali State Highway 12A, Sahibzada Ajit Singh Nagar, 140307"
            delay={0.1}
            onClick={() => window.open('https://maps.app.goo.gl/rpp1Tn6aE7WjcZcx8', '_blank')}
          />
          <InfoCard
            icon={<EmailIcon fontSize="inherit" />}
            title="Email Support"
            value="venturenest@cgc.ac.in"
            detail="Send us your pitch decks and partnership proposals any time of the week."
            delay={0.2}
            onClick={() => window.open('mailto:venturenest@cgc.ac.in', '_self')}
          />
          <InfoCard
            icon={<PhoneIcon fontSize="inherit" />}
            title="Direct Line"
            value="+91 9056710756"
            detail="Connect with our incubation managers during standard working hours."
            delay={0.3}
            onClick={() => window.open('tel:+919056710756', '_self')}
          />
        </Grid>
      </Container>

      {/* --- FORM & MAP UNIFIED BLOCK --- */}
      <Container maxWidth="lg" sx={{ pb: 20, position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <Box
            sx={{
              borderRadius: 10,
              overflow: 'hidden',
              boxShadow: `0 60px 120px -20px ${alpha(TEXT_DARK, 0.15)}, 0 30px 60px -30px ${alpha(BRAND_COLOR, 0.1)}`,
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              border: '1px solid rgba(255,255,255,0.5)',
              bgcolor: 'white'
            }}
          >
            {/* Form Column */}
            <Box sx={{ flex: 1, p: { xs: 5, md: 8 }, borderRight: { md: '1px solid #f0f0f0' } }}>
              <Typography variant="h3" sx={{ fontWeight: 950, color: TEXT_DARK, mb: 1, letterSpacing: -2 }}>Let's Talk Business</Typography>
              <Typography variant="body1" sx={{ color: TEXT_MUTED, mb: 6, fontWeight: 500 }}>We usually respond within a few business hours.</Typography>

              <Stack spacing={4}>
                <TextField
                  fullWidth
                  label="What's your name?"
                  variant="standard"
                  InputProps={{
                    startAdornment: <InputAdornment position="start"><PersonIcon sx={{ color: BRAND_COLOR, opacity: 0.6 }} /></InputAdornment>
                  }}
                  sx={{ "& label": { fontWeight: 600 } }}
                />
                <TextField
                  fullWidth
                  label="Email address"
                  variant="standard"
                  InputProps={{
                    startAdornment: <InputAdornment position="start"><EmailIcon sx={{ color: BRAND_COLOR, opacity: 0.6 }} /></InputAdornment>
                  }}
                  sx={{ "& label": { fontWeight: 600 } }}
                />
                <TextField
                  fullWidth
                  label="Subject"
                  variant="standard"
                  InputProps={{
                    startAdornment: <InputAdornment position="start"><SubjectIcon sx={{ color: BRAND_COLOR, opacity: 0.6 }} /></InputAdornment>
                  }}
                  sx={{ "& label": { fontWeight: 600 } }}
                />
                <TextField
                  fullWidth
                  label="Your message"
                  multiline
                  rows={4}
                  variant="standard"
                  sx={{ "& label": { fontWeight: 600 } }}
                />
                <Box sx={{ pt: 2 }}>
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<SendIcon />}
                    sx={{
                      py: 2.5,
                      px: 6,
                      borderRadius: "16px",
                      bgcolor: BRAND_COLOR,
                      fontWeight: 900,
                      fontSize: "1.05rem",
                      textTransform: "none",
                      boxShadow: `0 20px 40px ${alpha(BRAND_COLOR, 0.3)}`,
                      "&:hover": { bgcolor: "#8a0b2b", transform: 'translateY(-2px)' },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Send Message
                  </Button>
                </Box>
              </Stack>
            </Box>

            {/* Map Column */}
            <Box sx={{ flex: 1, position: 'relative', minHeight: { xs: 400, md: 'auto' }, bgcolor: '#111' }}>
              <Box
                component="iframe"
                src="https://maps.google.com/maps?q=CGC%20University%20 University&t=&z=15&ie=UTF8&iwloc=&output=embed"
                sx={{
                  width: '100%',
                  height: '100%',
                  border: 0,
                  filter: 'invert(90%) hue-rotate(180deg) brightness(0.9) contrast(1.1) grayscale(0.2)', // Sophisticated Dark Theme logic
                  opacity: 0.9,
                  mixBlendMode: 'screen'
                }}
                allowFullScreen=""
                loading="lazy"
              />

              {/* Floating Social Glass Panel */}
              <Box sx={{
                position: "absolute",
                bottom: 30,
                left: '50%',
                transform: 'translateX(-50%)',
                display: "flex",
                gap: 2,
                px: 3,
                py: 2,
                borderRadius: '20px',
                bgcolor: 'rgba(255,255,255,0.7)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.5)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
              }}>
                {[<FacebookIcon />, <TwitterIcon />, <LinkedInIcon />, <InstagramIcon />].map((icon, idx) => (
                  <IconButton
                    key={idx}
                    sx={{
                      color: TEXT_DARK,
                      transition: 'all 0.3s ease',
                      "&:hover": { color: BRAND_COLOR, transform: 'translateY(-3px)' }
                    }}
                  >
                    {icon}
                  </IconButton>
                ))}
              </Box>

              {/* Location Marker Label */}
              <Box sx={{
                position: 'absolute',
                top: 30,
                right: 30,
                bgcolor: BRAND_COLOR,
                color: 'white',
                py: 1.5,
                px: 3,
                borderRadius: '12px',
                boxShadow: '0 20px 40px rgba(163,13,51,0.3)',
                display: 'flex',
                alignItems: 'center',
                gap: 1.5
              }}>
                <LocationOnIcon fontSize="small" />
                <Typography variant="body2" sx={{ fontWeight: 900, fontSize: '0.75rem', letterSpacing: 1 }}>VISIT BLOCK 3</Typography>
              </Box>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ContactSection;
