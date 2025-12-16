// ContactSection.jsx
import React from 'react';
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  useMediaQuery,
  useTheme,
  Slide,
  Fade,
  Avatar,
  Paper
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const ContactSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        py: 10,
        px: 3,
        background: 'linear-gradient(to bottom right, #eef2f3, #8e9eab)',
        minHeight: '100vh',
      }}
    >
      <Grid
        container
        spacing={6}
        direction={isMobile ? 'column-reverse' : 'row'}
        alignItems="center"
        justifyContent="center"
      >
        {/* Form Section */}
        <Grid item xs={12} md={6}>
          <Fade in timeout={1000}>
            <Box>
              <Typography
                variant="h3"
                fontWeight={700}
                gutterBottom
                sx={{ color: 'rgb(133, 41, 41)' }}
              >
                Get in Touch
              </Typography>
              <Typography
                variant="body1"
                sx={{ mb: 3, color: '#37474f', maxWidth: 500 }}
              >
                Questions? We'd love to hear from you. Fill out the form and our team will get back to you soon.
              </Typography>

              <Box
                component="form"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                  backgroundColor: '#ffffff',
                  p: 4,
                  borderRadius: 4,
                  boxShadow: '0 12px 40px rgba(0,0,0,0.1)',
                }}
              >
                <TextField label="Your Name" variant="outlined" fullWidth />
                <TextField label="Your Email" variant="outlined" type="email" fullWidth />
                <TextField label="Your Message" variant="outlined" multiline rows={4} fullWidth />
                <Button
                  variant="contained"
                  endIcon={<SendIcon />}
                  sx={{
                    mt: 2,
                    alignSelf: 'flex-start',
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                    borderRadius: '30px',
                    background: 'linear-gradient(to right, rgb(133, 41, 41), rgba(174, 79, 79, 1))',
                    color: '#fff',
                    boxShadow: '0px 4px 20px rgba(0,0,0,0.2)',
                    '&:hover': {
                      background: 'linear-gradient(to right, #0d47a1, #1e88e5)',
                    },
                  }}
                >
                  Send Message
                </Button>
              </Box>

              {/* Highlighted Campus Info */}
              <Grid container spacing={2} mt={6}>
                <Grid item xs={12} sm={6}>
                  <Paper sx={{ p: 3, display: 'flex', gap: 2, alignItems: 'center' }} elevation={3}>
                    <Avatar sx={{ bgcolor: 'rgb(133, 41, 41)' }}><LocationOnIcon /></Avatar>
                    <Box>
                      <Typography variant="subtitle1" fontWeight={600}>Address</Typography>
                      <Typography variant="body2">
                        CGC University,
                        Mohali State Highway 12A,
                        Sahibzada Ajit Singh Nagar, Punjab 140307
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Paper sx={{ p: 3, display: 'flex', gap: 2, alignItems: 'center' }} elevation={3}>
                    <Avatar sx={{ bgcolor: 'rgb(133, 41, 41)' }}><PhoneIcon /></Avatar>
                    <Box>
                      <Typography variant="subtitle1" fontWeight={600}>Phone</Typography>
                      <Typography variant="body2">+91 9056710756</Typography>
                    </Box>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Paper sx={{ p: 3, display: 'flex', gap: 2, alignItems: 'center' }} elevation={3}>
                    <Avatar sx={{ bgcolor: 'rgb(133, 41, 41)' }}><EmailIcon /></Avatar>
                    <Box>
                      <Typography variant="subtitle1" fontWeight={600}>Email</Typography>
                      <Typography variant="body2">venturenest@cgc.ac.in</Typography>
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
          </Fade>
        </Grid>

        {/* Map Section */}
        <Grid item xs={12} md={6}>
          <Slide direction="left" in timeout={1000}>
            <Box
              component="iframe"
              src="https://maps.google.com/maps?q=CGC%20University%20 University&t=&z=13&ie=UTF8&iwloc=&output=embed"
              sx={{
                width: '100%',
                height: 420,
                border: 0,
                borderRadius: 4,
                boxShadow: '0 8px 30px rgba(0,0,0,0.2)'
              }}
              allowFullScreen=""
              loading="lazy"
            />
          </Slide>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactSection;
