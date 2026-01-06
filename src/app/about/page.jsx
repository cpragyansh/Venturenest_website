"use client";
import React from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  Container,
  Card,
  CardContent,
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
import HandshakeIcon from "@mui/icons-material/Handshake";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

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

const BlobShape = ({ color, style }) => (
  <motion.div
    animate={{ 
      scale: [1, 1.1, 1], 
      rotate: [0, 10, -10, 0],
      borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "50% 50% 33% 67% / 55% 27% 73% 45%", "30% 70% 70% 30% / 30% 30% 70% 70%"] 
    }}
    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    style={{
      position: "absolute",
      width: "300px",
      height: "300px",
      background: color,
      filter: "blur(60px)",
      opacity: 0.4,
      zIndex: 0,
      pointerEvents: "none",
      ...style
    }}
  />
);

// --- Data ---
const leadershipData = [
  {
    name: "S. Rashpal Singh Dhaliwal",
    role: "Chancellor, CGC University",
    image: "/assets/chairman.png", // Ensure path is correct
    quote: "We build not just students, but the leaders of tomorrow.",
    desc: "The entrepreneurial association at CGC University is dedicated to fostering innovation. VenturesNest was established to encourage entrepreneurial thinking and provide a dynamic platform for aspiring founders."
  },
  {
    name: "Mr. Arsh Dhaliwal",
    role: "Managing Director",
    image: "/assets/md.png",
    quote: "Innovation is the heartbeat of our campus.",
    desc: "VenturesNest is envisioned as a launchpad for aspiring entrepreneurs. It reflects our goal of bridging academic learning with practical impact, empowering students to become visionary leaders."
  },
  {
    name: "Dr. Ati Priye",
    role: "CEO, Incubator & Startups",
    image: "/assets/ceo-incubator.jpg",
    quote: "This is more than an initiative—it’s a movement.",
    desc: "VenturesNest is designed to be a catalyst for student-led innovation—providing mentorship, infrastructure, and funding guidance. It brings together talent, technology, and teamwork."
  }
];

const features = [
  {
    title: "Ecosystem",
    subtitle: "How We Work",
    icon: <BoltIcon fontSize="inherit" />,
    image: "/assets/about-how-we-work.jpg",
    desc: "From ideation to IPO, we provide the complete roadmap for startups.",
    stats: "End-to-End Support"
  },
  {
    title: "Impact",
    subtitle: "Proven Results",
    icon: <EmojiEventsIcon fontSize="inherit" />,
    image: "/assets/our-impact-img-photo.jpg",
    desc: "Over 70+ ventures incubated with funding opportunities up to ₹12 Cr.",
    stats: "70+ Startups"
  },
  {
    title: "Infrastructure",
    subtitle: "World Class",
    icon: <GroupsIcon fontSize="inherit" />,
    image: "/assets/aboutUs-support--infra-photo-updated.jpg",
    desc: "24/7 Co-working spaces, Maker’s Labs, and High-Performance Computing.",
    stats: "24/7 Access"
  },
  {
    title: "Network",
    subtitle: "Global Reach",
    icon: <HandshakeIcon fontSize="inherit" />,
    image: "/assets/partners-section-bg.jpg",
    desc: "Partnerships with global accelerators, angel investors, and corporates.",
    stats: "Global Partners"
  }
];

// --- Sub-Components ---

const LeaderProfile = ({ data, index }) => {
  const isEven = index % 2 === 0;
  const bgColors = [BRAND_COLOR, "#102a43", "#486581"]; // Red, Navy Blue, Grayish Blue
  const bgColor = bgColors[index % 3];

  return (
    <Box 
      sx={{ 
        position: "relative", 
        mb: { xs: 8, md: 12 },
        py: 8,
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          [isEven ? "left" : "right"]: "-100vw", // Start from far edge
          width: "calc(100vw + 70%)", // Span across
          height: "100%",
          bgcolor: bgColor,
          opacity: 0.05, // Subtle background
          zIndex: 0,
          borderRadius: isEven ? "0 100px 100px 0" : "100px 0 0 100px"
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box 
          component={motion.div}
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          sx={{ 
            display: "flex",
            flexDirection: { xs: "column", md: isEven ? "row" : "row-reverse" },
            alignItems: "center",
            gap: { xs: 4, md: 8 }
          }}
        >
          {/* Decorative Background Strip (The one requested by user) */}
          <Box 
            sx={{
              position: "absolute",
              top: "10%",
              bottom: "10%",
              [isEven ? "left" : "right"]: { xs: "-5%", md: "-10%" },
              width: "70%",
              bgcolor: bgColor,
              opacity: 0.1,
              zIndex: -1,
              borderRadius: isEven ? "0 40px 40px 0" : "40px 0 0 40px",
              display: { xs: "none", md: "block" }
            }}
          />

          {/* Image Side */}
          <Box sx={{ flex: "0 0 40%", position: "relative", zIndex: 2 }}>
            <Box 
              sx={{ 
                borderRadius: "24px", 
                overflow: "hidden", 
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
                transform: isEven ? "rotate(-2deg)" : "rotate(2deg)",
                transition: "transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                "&:hover": { transform: "rotate(0deg) scale(1.05)" },
                bgcolor: "white",
                p: 1.5
              }}
            >
              <Box 
                component="img" 
                src={data.image} 
                alt={data.name}
                sx={{ 
                  width: "100%", 
                  height: "450px", 
                  objectFit: "cover", 
                  borderRadius: "18px", 
                  display: "block" 
                }} 
              />
            </Box>
            {/* Dot Pattern decoration */}
            <Box sx={{ position: "absolute", bottom: -20, [isEven ? "right" : "left"]: -20, zIndex: -1 }}>
              <DotPattern />
            </Box>
          </Box>

          {/* Text Side */}
          <Box sx={{ flex: 1, position: "relative", zIndex: 2 }}>
            <FormatQuoteIcon sx={{ fontSize: 80, color: bgColor, opacity: 0.15, position: "absolute", top: -40, left: -20 }} />
            <Typography variant="h3" sx={{ fontFamily: "var(--font-display)", fontWeight: 800, color: TEXT_DARK, mb: 1, fontSize: { xs: "2rem", md: "2.75rem" } }}>
              {data.name}
            </Typography>
            <Typography variant="h6" sx={{ color: bgColor, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, mb: 4, opacity: 0.9 }}>
              {data.role}
            </Typography>
            
            <Paper elevation={0} sx={{ p: 3, bgcolor: "rgba(255,255,255,0.7)", backdropFilter: "blur(10px)", borderRadius: 4, mb: 4, borderLeft: `6px solid ${bgColor}` }}>
              <Typography variant="h6" sx={{ fontStyle: "italic", color: "#333", fontWeight: 500, lineHeight: 1.6 }}>
                "{data.quote}"
              </Typography>
            </Paper>

            <Typography variant="body1" sx={{ color: TEXT_MUTED, lineHeight: 1.9, fontFamily: "var(--font-ui)", fontSize: "1.1rem" }}>
              {data.desc}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default function AboutPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ bgcolor: "#FDFDFD", overflowX: "hidden", minHeight: "100vh" }}>
      
      {/* --- HERO SECTION --- */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "60vh", md: "75vh" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `linear-gradient(135deg, rgba(163,13,51,0.92), rgba(26,35,126,0.92)), url('/assets/hero-about.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          textAlign: "center",
          color: "white",
          px: 2,
        }}
      >
         {/* Abstract geometric lines overlay */}
         <Box sx={{ position: "absolute", inset: 0, opacity: 0.1, backgroundImage: "radial-gradient(circle at 50% 50%, white 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Typography
              variant={isMobile ? "h2" : "h1"}
              sx={{
                fontWeight: 900,
                fontFamily: "var(--font-display)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                mb: 2,
                fontSize: { xs: "3rem", md: "5rem" }
              }}
            >
              VentureNest
            </Typography>
            
            <Box 
              component={motion.div} 
              initial={{ width: 0 }} 
              animate={{ width: "120px" }} 
              transition={{ delay: 0.5, duration: 0.8 }}
              sx={{ height: 6, bgcolor: "white", mx: "auto", mb: 4, borderRadius: 3 }} 
            />

            <Typography
              variant={isMobile ? "h6" : "h4"}
              sx={{
                fontWeight: 300,
                maxWidth: "850px",
                mx: "auto",
                lineHeight: 1.5,
                opacity: 0.95,
                letterSpacing: 1
              }}
            >
              The Premier Entrepreneurship Incubation Centre <br /> at CGC University, Mohali.
            </Typography>
          </motion.div>
        </Container>

        {/* Wave Divider at Bottom */}
        <Box sx={{ position: "absolute", bottom: -1, left: 0, right: 0, lineHeight: 0, color: "#FDFDFD" }}>
            <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
        </Box>
      </Box>

      {/* --- LEADERSHIP SECTION --- */}
      <Box sx={{ pt: 15, pb: 5 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 12 }}>
            <Chip 
              label="OUR VISIONARIES" 
              sx={{ 
                bgcolor: BRAND_LIGHT, 
                color: BRAND_COLOR, 
                fontWeight: 800, 
                px: 2, 
                py: 2.5,
                borderRadius: "8px",
                letterSpacing: 2,
                mb: 3 
              }} 
            />
            <Typography variant="h2" sx={{ fontWeight: 900, fontFamily: "var(--font-display)", color: TEXT_DARK, letterSpacing: -1 }}>
              Leadership
            </Typography>
          </Box>
        </Container>

        {leadershipData.map((leader, index) => (
          <LeaderProfile key={index} data={leader} index={index} />
        ))}
      </Box>

      {/* --- WHY CHOOSE US (Bento Grid) --- */}
      <Box sx={{ bgcolor: "white", py: 15, position: "relative", overflow: "hidden" }}>
        {/* Background Gradients */}
        <Box sx={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", opacity: 0.3, background: "radial-gradient(circle at 10% 10%, #fff0f3 0%, transparent 30%), radial-gradient(circle at 90% 90%, #e0f2fe 0%, transparent 30%)" }} />
        
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
            <Box sx={{ mb: 10, display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 4 }}>
                <Box>
                    <Typography variant="overline" sx={{ color: BRAND_COLOR, fontWeight: 800, letterSpacing: 3, display: "block", mb: 1 }}>
                        THE ADVANTAGE
                    </Typography>
                    <Typography variant="h2" sx={{ fontWeight: 900, fontFamily: "var(--font-display)", color: TEXT_DARK, letterSpacing: -1 }}>
                        Why VentureNest?
                    </Typography>
                </Box>
                <Typography variant="h6" sx={{ maxWidth: 500, color: TEXT_MUTED, fontWeight: 400, lineHeight: 1.6 }}>
                    We don't just provide space; we provide the ecosystem, mentorship, and funding to scale your dreams.
                </Typography>
            </Box>

            <Grid container spacing={4}>
                {features.map((item, i) => (
                    <Grid item xs={12} sm={6} md={3} key={i}>
                        <motion.div 
                          whileHover={{ y: -15 }} 
                          transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        >
                            <Card 
                                elevation={0}
                                sx={{ 
                                    height: "100%", 
                                    borderRadius: 5, 
                                    border: "1px solid #f0f0f0",
                                    bgcolor: "#FFF",
                                    transition: "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)",
                                    display: "flex",
                                    flexDirection: "column",
                                    overflow: "hidden",
                                    "&:hover": { 
                                        boxShadow: "0 30px 60px rgba(0,0,0,0.12)",
                                        borderColor: BRAND_COLOR,
                                        "& .card-image": { transform: "scale(1.1)" }
                                    }
                                }}
                            >
                                {/* Card Image */}
                                <Box sx={{ height: 180, overflow: "hidden", position: "relative" }}>
                                  <Box 
                                    component="img" 
                                    src={item.image} 
                                    className="card-image"
                                    sx={{ 
                                      width: "100%", 
                                      height: "100%", 
                                      objectFit: "cover", 
                                      transition: "transform 0.6s ease" 
                                    }} 
                                  />
                                  <Box sx={{ position: "absolute", top: 15, left: 15, zIndex: 2 }}>
                                    <Box 
                                        sx={{ 
                                            width: 45, 
                                            height: 45, 
                                            borderRadius: "12px", 
                                            bgcolor: "white", 
                                            color: BRAND_COLOR, 
                                            display: "flex", 
                                            alignItems: "center", 
                                            justifyContent: "center",
                                            fontSize: "1.5rem",
                                            boxShadow: "0 8px 16px rgba(0,0,0,0.1)"
                                        }}
                                    >
                                        {item.icon}
                                    </Box>
                                  </Box>
                                </Box>

                                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                                    <Typography variant="caption" sx={{ color: BRAND_COLOR, fontWeight: 800, textTransform: "uppercase", letterSpacing: 1.5, display: "block", mb: 1 }}>
                                        {item.subtitle}
                                    </Typography>
                                    <Typography variant="h5" sx={{ fontWeight: 800, fontFamily: "var(--font-display)", mb: 2, color: TEXT_DARK }}>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: TEXT_MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                                        {item.desc}
                                    </Typography>
                                </CardContent>
                                <Box sx={{ p: 3, pt: 0 }}>
                                    <Chip 
                                      size="small" 
                                      icon={<VerifiedIcon style={{ fontSize: 16 }} />} 
                                      label={item.stats} 
                                      sx={{ 
                                        bgcolor: BRAND_LIGHT, 
                                        color: BRAND_COLOR, 
                                        fontWeight: 700,
                                        borderRadius: "6px",
                                        "& .MuiChip-icon": { color: BRAND_COLOR }
                                      }} 
                                    />
                                </Box>
                            </Card>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </Container>
      </Box>


      {/* --- ISO & CTA SECTION --- */}
      <Box sx={{ py: 10, bgcolor: "#F8F9FA" }}>
        <Container maxWidth="lg">
            <Paper 
                elevation={0}
                sx={{ 
                    borderRadius: 6, 
                    overflow: "hidden", 
                    bgcolor: "white", 
                    border: "1px solid #eee",
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" }
                }}
            >
                {/* ISO Image Side */}
                <Box 
                    sx={{ 
                        width: { xs: "100%", md: "30%" }, 
                        bgcolor: "#e8f5e9", 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center", 
                        p: 4 
                    }}
                >
                    <Box component="img" src="/assets/iso-certified.png" alt="ISO" sx={{ width: "80%", maxWidth: 150 }} />
                </Box>

                {/* Content Side */}
                <Box sx={{ p: { xs: 4, md: 6 }, flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                        <VerifiedIcon sx={{ color: "#2e7d32", fontSize: 32 }} />
                        <Typography variant="h5" fontWeight="700">ISO 9001:2015 Certified</Typography>
                    </Box>
                    <Typography variant="body1" sx={{ color: TEXT_MUTED, mb: 4 }}>
                        We are proud to be ISO certified, reflecting our commitment to maintaining the highest standards in quality management.
                    </Typography>
                    
                    {/* Final CTA Button */}
                    <Box>
                         <Button
                            href="/IncubateWithUs"
                            variant="contained"
                            size="large"
                            endIcon={<ArrowForwardIcon />}
                            sx={{
                            bgcolor: BRAND_COLOR,
                            py: 1.5,
                            px: 5,
                            borderRadius: 3,
                            fontSize: "1rem",
                            fontWeight: 700,
                            boxShadow: "0 10px 20px rgba(163,13,51,0.3)",
                            "&:hover": { bgcolor: "#800a26" }
                            }}
                        >
                            Apply Now
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Container>
      </Box>
    </Box>
  );
}