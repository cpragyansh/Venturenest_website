// // "use client"
import { Box, Typography, Button, Container, Grid, Paper, List, ListItem, ListItemText } from '@mui/material';
// import Image from 'next/image';
import { CheckCircle, RocketLaunch, Handshake, School, Groups } from "@mui/icons-material";
import { useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import AOS from "aos";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "aos/dist/aos.css";
import { Card, CardContent } from '@mui/material';
// import VerifiedIcon from '@mui/icons-material/Verified';
export default function JoinUs() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const isMobile = useMediaQuery("(max-width:768px)");

  const hoverEffect = {
    scale: 1.04,
    boxShadow: "0 20px 45px rgba(163, 13, 51, 0.45)",
  };
  return (
    <Box sx={{ backgroundColor: '#f9f9f9', minHeight: '100vh', py: 0 }}>
      <Box
        sx={{
          height: isMobile ? 300 : 260,
          backgroundImage: `linear-gradient(135deg, rgba(163,13,51,0.85), rgba(69,3,19,0.85)), url('/assets/hero-about.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "#fff",
          px: 3,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Typography
            variant={isMobile ? "h4" : "h2"}
            fontWeight={600}
            sx={{ letterSpacing: "0.15em", textTransform: "uppercase", textShadow: "4px 4px 15px rgba(0,0,0,0.7)" }}
          >
            Incubate With US
          </Typography>
          <Typography
            variant={isMobile ? "h6" : "h4"}
            fontWeight={500}
            sx={{ mt: 1, maxWidth: 600, mx: "auto", letterSpacing: "0.05em", lineHeight: 1.5 }}
          >
            Where Innovation Begins & Entrepreneurs Rise.
          </Typography>
          {/* <Button
            variant="contained"
            sx={{
              mt: 4,
              bgcolor: "#A30D33",
              px: 5,
              py: 1.5,
              fontWeight: 700,
              borderRadius: 3,
              boxShadow: "0 6px 20px rgba(163,13,51,0.5)",
              "&:hover": { bgcolor: "#750928", boxShadow: "0 10px 30px rgba(163,13,51,0.7)" },
            }}
            whileHover={{ scale: 1.05 }}
          >
            Learn More
          </Button> */}
        </motion.div>
      </Box>







      <Box sx={{ position: "relative", overflow: "hidden", py: 6 }}>
        {/* Decorative Wave & Blobs */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "150px",
            background: `url('data:image/svg+xml;utf8,<svg viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="%23eaf2f8" d="M0,32L80,58.7C160,85,320,139,480,144C640,149,800,107,960,90.7C1120,75,1280,85,1360,90.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>') no-repeat center top`,
            backgroundSize: "cover",
            zIndex: 1
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "250px",
            height: "250px",
            background: "radial-gradient(circle at center, #6dd5fa, transparent)",
            borderRadius: "50%",
            zIndex: 0
          }}
        />

        {/* <Box
        sx={{
          position: "absolute",
          bottom: "-120px",
          left: "-120px",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle at center, #d35400, transparent)",
          borderRadius: "50%",
          zIndex: 0
        }}
      /> */}
        <Box
          sx={{
            position: "absolute",
            bottom: -0,
            left: 0,
            width: "100%",
            height: "150px",
            background: `url('data:image/svg+xml;utf8,<svg viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="%23eaf2f8" d="M0,32L80,58.7C160,85,320,139,480,144C640,149,800,107,960,90.7C1120,75,1280,85,1360,90.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>') no-repeat center top`,
            backgroundSize: "cover",
            transform: "rotate(180deg)",
            zIndex: 1
          }}
        />

        <Box
          sx={{
            position: "absolute",
            bottom: "-100px",
            left: "-100px",
            width: "250px",
            height: "250px",
            background: "radial-gradient(circle at center, #6dd5fa, transparent)",
            borderRadius: "50%",
            zIndex: 0
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Box textAlign="center" mb={4}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  background: "linear-gradient(45deg, #e67e22, #d35400)",
                  color: "#fff",
                  fontWeight: 600,
                  px: 4,
                  py: 1.5,
                  borderRadius: "30px",
                  boxShadow: 3,
                  animation: "pulse 2s infinite",
                  "@keyframes pulse": {
                    "0%": { boxShadow: "0 0 0 0 rgba(230, 126, 34, 0.7)" },
                    "70%": { boxShadow: "0 0 0 10px rgba(230, 126, 34, 0)" },
                    "100%": { boxShadow: "0 0 0 0 rgba(230, 126, 34, 0)" }
                  },
                  "&:hover": {
                    background: "linear-gradient(45deg, #d35400, #e67e22)",
                    boxShadow: 6
                  }
                }}
                href="https://forms.gle/pPt5qsTXHLEs8pbV9"
                target="_blank"
              >
                Click here to Apply
              </Button>
            </Box>
          </motion.div>

          <Paper
            elevation={4}
            sx={{
              p: { xs: 3, md: 5 },
              borderRadius: "16px",
              background: "linear-gradient(135deg, #ffffff 0%, #f0f3f4 100%)"
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* TITLE */}
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  textAlign: "center",
                  background: "linear-gradient(45deg, #2c3e50, #2980b9)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  transition: "0.3s",
                  fontSize:{xs:"6vw",lg:"2vw"},
                  "&:hover": {
                    filter: "brightness(1.2)",
                    textShadow: "0 0 10px rgba(41, 128, 185, 0.6)"
                  }
                }}
              >
                Welcome to CGC VentureNest
              </Typography>

              <Typography

                sx={{
                  // color: "#34495e",
                  transition: "0.3s",
                  fontSize: {xs:"4vw",lg:"1vw"},
                  fontWeight: "500",
                  textAlign:"justify",marginTop:"1vw",
                  "&:hover": {
                    color: "black",
                  }
                }}
              >
                Welcome to CGC University VentureNest – The Innovation Hub for Emerging Startups
                Looking to transform your startup dream into a thriving business?
                CGC University VentureNest is your ultimate launchpad — an entrepreneurial ecosystem built to support and accelerate innovation, from ideation to execution.

              </Typography>
              <Typography

                sx={{
                  // color: "#34495e",
                  transition: "0.3s",
                  fontSize: {xs:"4vw",lg:"1vw"},
                  fontWeight: "500",marginTop:"1vw",textAlign:"justify",
                  "&:hover": {
                    color: "black",
                  }
                }}
              >
              Join a dynamic community of changemakers, visionary mentors and investors ready to fuel your journey. Whether you're a student founder or a growth-stage startup, VentureNest offers everything you need to scale smarter, faster and stronger.


              </Typography>

              {/* ABOUT */}
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  mt: 4,
                  mb:2,
                  background: "linear-gradient(45deg, #2980b9, #6dd5fa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  transition: "0.3s",
                    fontSize:{xs:"6 vw"},
                  "&:hover": {
                    filter: "brightness(1.2)",
                    textShadow: "0 0 10px rgba(109, 213, 250, 0.6)"
                  }
                }}
              >
                About CGC University VentureNest
              </Typography>
              <Typography
        
                sx={{
   fontSize: {xs:"4vw",lg:"1vw"},
                  fontWeight: "500",
                  color: "black",
                  transition: "0.3s",
                  textAlign:"justify",
                  "&:hover": {
                    color: "#2980b9"
                  }
                }}
              >
          At VentureNest, we empower startups at every stage — turning ambitious ideas into sustainable ventures.

              </Typography>
              <Typography
        
                sx={{
 fontSize: {xs:"4vw",lg:"1vw"},
                  fontWeight: "500",
                  color: "black",
                  transition: "0.3s",
                  "&:hover": {
                    color: "#2980b9"
                  }
                }}
              >
Our incubation program is designed to provide:

              </Typography>
              <List>
                {[
                  {
                    // icon: <CheckCircle sx={{ color: "#e67e22", mr: 1 }} />,
                    // primary: "Expert Mentorship",
                    secondary: "► Strategic Mentorship from seasoned entrepreneurs and industry experts"
                  },
                  {
                    // icon: <RocketLaunch sx={{ color: "#f39c12", mr: 1 }} />,
                    // primary: "Funding Access",
                    secondary: "► Seed Funding & Investor Access to back your vision"
                  },
                  {
                    // icon: <Groups sx={{ color: "#3498db", mr: 1 }} />,
                    // primary: "Modern Infrastructure",
                    secondary: "► Co-working Infrastructure that sparks productivity"
                  },
                  {
                    // icon: <Handshake sx={{ color: "#27ae60", mr: 1 }} />,
                    // primary: "Networking Power",
                    secondary: "► Workshops & Training to sharpen your startup skills"
                  },
                  {
                    // icon: <School sx={{ color: "#8e44ad", mr: 1 }} />,
                    // primary: "Skill-building Workshops",
                    secondary: " ► Exposure to Ecosystem Networks, events and pitch opportunities"
                  }
                ].map((item, i) => (
                  <ListItem
                    key={i}
                    sx={{
                      transition: "0.3s",
                      "&:hover": {
                        backgroundColor: "#ecf0f1",
                        transform: "scale(1.02)",
                        borderRadius: "8px"
                      }
                    }}
                  >
                    {item.icon}
                    <ListItemText
                      primaryTypographyProps={{
                        sx: {
                          fontWeight: 600,
                          color: "#2c3e50",
                          transition: "0.3s",
                          "&:hover": {
                            color: "#2980b9"
                          }
                        }
                      }}
                      secondaryTypographyProps={{
                        sx: {
                          color: "black",
                           fontSize: {xs:"4vw",lg:"1vw"},
                          transition: "0.3s",
                          "&:hover": {
                            color: "#34495e"
                          }
                        }
                      }}
                      primary={item.primary}
                      secondary={item.secondary}
                    />
                  </ListItem>
                ))}
              </List>
                  <Typography
        
                sx={{
  fontSize: {xs:"4vw",lg:"1vw"},
                  fontWeight: "500",
                  color: "black",
                  transition: "0.3s",
                  "&:hover": {
                    color: "#2980b9"
                  }
                }}
              >
Our goal is to create future-ready entrepreneurs equipped with the tools, knowledge and confidence to lead the next wave of innovation.


              </Typography>

              {/* WHY */}
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  mt: 4,
                  background: "linear-gradient(45deg, #27ae60, #2ecc71)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  transition: "0.3s",
                  "&:hover": {
                    filter: "brightness(1.2)",
                    textShadow: "0 0 10px rgba(46, 204, 113, 0.6)"
                  }
                }}
              >
                Why Choose VentureNest?
              </Typography>
              <List>
                {[
                  {
                    icon: <CheckCircle sx={{ color: "#e67e22", mr: 1 }} />,
                    primary: "Expert Mentorship",
                    secondary: "Get one-on-one guidance from startup veterans, industry leaders and domain experts."
                  },
                  {
                    icon: <RocketLaunch sx={{ color: "#f39c12", mr: 1 }} />,
                    primary: "Funding Access",
                    secondary: "Connect with angel investors, venture capitalists and funding bodies to raise capital."
                  },
                  {
                    icon: <Groups sx={{ color: "#3498db", mr: 1 }} />,
                    primary: "World-Class Infrastructure",
                    secondary: "Work in modern, tech-enabled office spaces that support focus, collaboration and creativity."
                  },
                  {
                    icon: <Handshake sx={{ color: "#27ae60", mr: 1 }} />,
                    primary: "Powerful Networking",
                    secondary: "Build valuable connections with fellow founders, investors, alumni and corporate partners."
                  },
                  {
                    icon: <School sx={{ color: "#8e44ad", mr: 1 }} />,
                    primary: "Skill-Building Bootcamps",
                    secondary: "Attend interactive masterclasses, startup workshops and intensive training sessions tailored to your growth stage."
                  }
                ].map((item, i) => (
                  <ListItem
                    key={i}
                    sx={{
                      transition: "0.3s",
                      "&:hover": {
                        backgroundColor: "#ecf0f1",
                        transform: "scale(1.02)",
                        borderRadius: "8px"
                      }
                    }}
                  >
                    {item.icon}
                    <ListItemText
                      primaryTypographyProps={{
                        sx: {
                          fontWeight: 600,
                          color: "#2c3e50",
                          transition: "0.3s",
                          "&:hover": {
                            color: "#2980b9"
                          }
                        }
                      }}
                      secondaryTypographyProps={{
                        sx: {
                          color: "#7f8c8d",
                          transition: "0.3s",
                          "&:hover": {
                            color: "#34495e"
                          }
                        }
                      }}
                      primary={item.primary}
                      secondary={item.secondary}
                    />
                  </ListItem>
                ))}
              </List>

              {/* WHO */}
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  mt: 4,mb:2,
                  background: "linear-gradient(45deg, #8e44ad, #9b59b6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  transition: "0.3s",
                  "&:hover": {
                    filter: "brightness(1.2)",
                    textShadow: "0 0 10px rgba(155, 89, 182, 0.6)"
                  }
                }}
              >
                Who Should Apply?
              </Typography>
              
              <Typography
                paragraph
                sx={{
                  color: "#34495e",
                  transition: "0.3s",
                  "&:hover": {
                    color: "#8e44ad"
                  }
                }}
              >
                •  Aspiring student entrepreneurs with big ideas Early-stage startups seeking traction and guidance
 <br />
                • Growth-focused teams solving real-world problems <br />
                • Innovators in tech, AI/ML, sustainability, healthtech, edtech and more<br/>
                • Whether you're at the prototype stage or looking to raise your first round — VentureNest is the place for you.


              </Typography>

              {/* PROCESS */}
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  mt: 4,
                  background: "linear-gradient(45deg, #e67e22, #d35400)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  transition: "0.3s",
                  "&:hover": {
                    filter: "brightness(1.2)",
                    textShadow: "0 0 10px rgba(211, 84, 0, 0.6)"
                  }
                }}
              >
                Application Process
              </Typography>
              <List>
                {[
                  {
                    primary: "Submit Your Application",
                    secondary: "Fill out our simple online form."
                  },
                  {
                    primary: "Screening & Evaluation",
                    secondary: "We review and invite top candidates for interviews."
                  },
                  {
                    primary: "Selection & Onboarding",
                    secondary: "Join our program and start your journey."
                  }
                ].map((item, i) => (
                  <ListItem
                    key={i}
                    sx={{
                      transition: "0.3s",
                      "&:hover": {
                        backgroundColor: "#ecf0f1",
                        transform: "scale(1.02)",
                        borderRadius: "8px"
                      }
                    }}
                  >
                    <ListItemText
                      primaryTypographyProps={{
                        sx: { fontWeight: 600, color: "#2c3e50" }
                      }}
                      secondaryTypographyProps={{ sx: { color: "#7f8c8d" } }}
                      primary={item.primary}
                      secondary={item.secondary}
                    />
                  </ListItem>
                ))}
              </List>

              {/* Apply Button */}
              <Box textAlign="center" mt={5}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    background: "linear-gradient(45deg, #e67e22, #d35400)",
                    px: 6,
                    py: 1.5,
                    fontWeight: 600,
                    borderRadius: "30px",
                    "&:hover": {
                      background: "linear-gradient(45deg, #d35400, #e67e22)"
                    }
                  }}
                  href="https://forms.gle/pPt5qsTXHLEs8pbV9"
                  target="_blank"
                >
                  Apply Now
                </Button>
              </Box>
            </motion.div>
          </Paper>

          {/* Image Grid */}
          <Grid
            container
            spacing={4}
            alignItems="center"
            sx={{
              display: "flex",
              flexDirection: "column-reverse",
              gap: "6vw",
              mt: 6
            }}
          >
            {/* <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: "center", mb: "6vw" }}>
                <img
                  src="/assets/incubation_poster.jpg"
                  alt="Join VentureNest"
                  width={800}
                  height={400}
                  style={{ borderRadius: "42px" }}
                />
              </Box>
            </Grid> */}
          </Grid>
        </Container>

      </Box>
    </Box>
  );
}
