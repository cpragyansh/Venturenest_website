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
  Container
} from '@mui/material';
import { motion } from 'framer-motion';
import SendIcon from '@mui/icons-material/Send';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

// --- Assets & Config ---
const BRAND_COLOR = "#A30D33";
const BRAND_LIGHT = "#fff0f3";
const TEXT_DARK = "#0a0a0a";
const TEXT_MUTED = "#555";

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
    <Box sx={{
      position: "absolute",
      inset: 0,
      backgroundImage: `radial-gradient(${BRAND_COLOR}05 1px, transparent 1px)`,
      backgroundSize: "60px 60px",
      opacity: 0.4
    }} />
  </Box>
);

const ContactCard = ({ icon, title, value, onClick }) => (
  <Paper
    component={motion.div}
    whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
    onClick={onClick}
    elevation={0}
    sx={{
      p: 3,
      display: 'flex',
      gap: 3,
      alignItems: 'center',
      borderRadius: 4,
      border: "1px solid #eee",
      bgcolor: "rgba(255,255,255,0.7)",
      backdropFilter: "blur(10px)",
      cursor: onClick ? 'pointer' : 'default',
      height: '100%'
    }}
  >
    <Avatar sx={{ bgcolor: BRAND_COLOR, width: 56, height: 56 }}>
      {icon}
    </Avatar>
    <Box>
      <Typography variant="subtitle2" sx={{ color: TEXT_MUTED, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>
        {title}
      </Typography>
      <Typography variant="body1" sx={{ color: TEXT_DARK, fontWeight: 600 }}>
        {value}
      </Typography>
    </Box>
  </Paper>
);

const ContactSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ bgcolor: "#FDFDFD", minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      <GlobalVectorBackground />

      {/* --- HERO / HEADER --- */}
      <Box sx={{
        pt: { xs: 15, md: 20 },
        pb: 10,
        textAlign: "center",
        position: "relative",
        zIndex: 1
      }}>
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="overline" sx={{ color: BRAND_COLOR, fontWeight: 800, letterSpacing: 4 }}>
              GET IN TOUCH
            </Typography>
            <Typography variant="h2" sx={{
              fontWeight: 900,
              fontFamily: "var(--font-display)",
              color: TEXT_DARK,
              letterSpacing: -1,
              mt: 1,
              fontSize: { xs: "3rem", md: "4.5rem" }
            }}>
              Contact Us
            </Typography>
            <Typography variant="h6" sx={{ color: TEXT_MUTED, mt: 3, fontWeight: 400, maxWidth: 600, mx: "auto" }}>
              Have questions or want to collaborate? We're here to help you navigate your startup journey.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* --- CONTENT SECTION --- */}
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, pb: 15 }}>
        <Grid container spacing={4}>
          {/* Info Cards */}
          <Grid item xs={12} md={4}>
            <ContactCard
              icon={<LocationOnIcon />}
              title="Address"
              value="CGC University, Mohali State Highway 12A, Punjab 140307"
              onClick={() => window.open('https://maps.app.goo.gl/rpp1Tn6aE7WjcZcx8', '_blank')}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <ContactCard
              icon={<PhoneIcon />}
              title="Phone"
              value="+91 9056710756"
              onClick={() => navigator.clipboard.writeText('+91 9056710756')}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <ContactCard
              icon={<EmailIcon />}
              title="Email"
              value="venturenest@cgc.ac.in"
              onClick={() => navigator.clipboard.writeText('venturenest@cgc.ac.in')}
            />
          </Grid>

          {/* Form and Map */}
          <Grid item xs={12} md={6} sx={{ mt: 4 }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Paper sx={{ p: 5, borderRadius: 6, border: "1px solid #eee", bgcolor: "white", boxShadow: "0 20px 60px rgba(0,0,0,0.05)" }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 4, color: TEXT_DARK }}>Send a Message</Typography>
                <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <TextField label="Full Name" variant="outlined" fullWidth sx={{ "& .MuiOutlinedInput-root": { borderRadius: 3 } }} />
                  <TextField label="Email Address" variant="outlined" type="email" fullWidth sx={{ "& .MuiOutlinedInput-root": { borderRadius: 3 } }} />
                  <TextField label="Subject" variant="outlined" fullWidth sx={{ "& .MuiOutlinedInput-root": { borderRadius: 3 } }} />
                  <TextField label="Message" variant="outlined" multiline rows={4} fullWidth sx={{ "& .MuiOutlinedInput-root": { borderRadius: 3 } }} />
                  <Button
                    variant="contained"
                    endIcon={<SendIcon />}
                    sx={{
                      py: 2,
                      px: 4,
                      borderRadius: "12px",
                      bgcolor: BRAND_COLOR,
                      fontWeight: 700,
                      textTransform: "none",
                      fontSize: "1.1rem",
                      boxShadow: `0 10px 25px ${BRAND_COLOR}40`,
                      "&:hover": { bgcolor: "#8a0b2b" }
                    }}
                  >
                    Send Message
                  </Button>
                </Box>
              </Paper>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6} sx={{ mt: 4 }}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ height: '100%' }}
            >
              <Box
                component="iframe"
                src="https://maps.google.com/maps?q=CGC%20University%20 University&t=&z=13&ie=UTF8&iwloc=&output=embed"
                sx={{
                  width: '100%',
                  height: { xs: 400, md: '100%' },
                  border: "1px solid #eee",
                  borderRadius: 6,
                  boxShadow: '0 20px 60px rgba(0,0,0,0.05)'
                }}
                allowFullScreen=""
                loading="lazy"
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactSection;

