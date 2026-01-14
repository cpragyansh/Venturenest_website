"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Box,
  Container,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  useTheme,
  useMediaQuery,
  Avatar,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Pagination as MuiPagination
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import BusinessIcon from "@mui/icons-material/Business";
import PeopleIcon from "@mui/icons-material/People";

// --- Assets & Config ---
const BRAND_COLOR = "#A30D33";
const BRAND_LIGHT = "#fff0f3";
const TEXT_DARK = "#0a0a0a";
const TEXT_MUTED = "#555";

const logos = [
  "/assets/Start-up-logos/5(3 - Karan Agrawal.png",
  "/assets/Start-up-logos/1749710321866 - Aditya Raj Saxena.jpg",
  "/assets/Start-up-logos/file_00000000fa6861f8b46d40c35e6646b9_conversation_id=67fe9c73-e260-8006-bab2-ec35ca4f9089 - Juara Organics.png",
  "/assets/Start-up-logos/IMG-20231230-WA0023(2) - Anand Kumar.jpg",
  "/assets/Start-up-logos/IMG-20250208-WA0007 - Shekhar kashyap.jpg",
  "/assets/Start-up-logos/IMG-20250611-WA0000 - arpit kumar.jpg",
  "/assets/Start-up-logos/IMG-20250612-WA0000 - JIGYASA GARG.jpg",
  "/assets/Start-up-logos/IMG-20250612-WA0004 - Navneet Yaduvanshi.jpg",
  "/assets/Start-up-logos/IMG-20250612-WA0004 - SHAGUN SHARMA.jpg",
  "/assets/Start-up-logos/IMG-20250612-WA0005 - Mayank Dahiya.jpg",
  "/assets/Start-up-logos/Logo - Harris Babbar.png",
  "/assets/Start-up-logos/SAVE_20250611_152058 - Pulkesh Gautam.jpg",
  "/assets/Start-up-logos/Screenshot_2025-03-06-23-58-39-73_6012fa4d4ddec268fc5c7112cbb265e7 - Aryan Mankotia.jpg",
  "/assets/Start-up-logos/Screenshot_2025-06-12-18-15-12-052_com.whatsapp-edit - Vedant Daware.jpg",
  "/assets/Start-up-logos/stacked wordmark black - ansh haritash.png",
  "/assets/Start-up-logos/Techealth_logo - TecHealth.png",
  "/assets/Start-up-logos/tHM LOGO - Abhishek Sharma.png",
  "/assets/Start-up-logos/VeeGamma Logo Design in Gradient__endoftext__ - Vanshika.png",
];

const GlobalVectorBackground = () => (
  <Box sx={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
    <svg width="100%" height="100%" viewBox="0 0 1440 2000" fill="none" style={{ position: 'absolute', top: 0, left: 0, opacity: 0.08 }}>
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

export default function Startups() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://venturenest.onrender.com/getstartup');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching startups:', error);
      }
    };
    fetchData();
  }, []);

  const totalPages = Math.ceil(data.length / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const currentData = data.slice(startIndex, startIndex + entriesPerPage);

  return (
    <Box sx={{ bgcolor: "#FDFDFD", overflowX: "hidden", minHeight: "100vh", position: "relative" }}>
      <GlobalVectorBackground />

      {/* --- HERO SECTION --- */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "50vh", md: "65vh" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `linear-gradient(135deg, rgba(163,13,51,0.92), rgba(26,35,126,0.92)), url('/assets/partners-section-bg.jpg')`,
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
                variant={isMobile ? "h3" : "h1"}
                sx={{
                  fontWeight: 900,
                  fontFamily: "var(--font-display)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  mb: 2,
                  fontSize: { xs: "2.5rem", md: "4.5rem" }
                }}
              >
                Incubated Ventures
              </Typography>
              <Box
                component={motion.div}
                initial={{ width: 0 }}
                animate={{ width: "120px" }}
                transition={{ delay: 0.5, duration: 0.8 }}
                sx={{ height: 5, bgcolor: "white", mx: "auto", mb: 3, borderRadius: 3 }}
              />
              <Typography variant="h6" sx={{ fontWeight: 300, opacity: 0.9 }}>
                Meet the innovators building the future at VentureNest.
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

      {/* --- LOGO SLIDER SECTION --- */}
      <Box sx={{ py: 10, px: 2 }}>
        <Container maxWidth="lg">
          <Box sx={{
            bgcolor: "white",
            borderRadius: 6,
            p: 4,
            boxShadow: "0 20px 40px rgba(0,0,0,0.03)",
            border: "1px solid #f0f0f0"
          }}>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={2}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              loop={true}
              breakpoints={{
                640: { slidesPerView: 3 },
                900: { slidesPerView: 4 },
                1200: { slidesPerView: 6 },
              }}
            >
              {logos.map((logo, index) => (
                <SwiperSlide key={index}>
                  <Box
                    sx={{
                      height: 100,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      p: 2,
                      filter: "grayscale(100%)",
                      opacity: 0.6,
                      transition: "all 0.4s ease",
                      "&:hover": { filter: "grayscale(0%)", opacity: 1, transform: "scale(1.1)" }
                    }}
                  >
                    <Box component="img" src={logo} sx={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Container>
      </Box>

      {/* --- TABLE SECTION --- */}
      <Box sx={{ pb: 15 }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 4, display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: { xs: "column", sm: "row" }, gap: 2 }}>
            <Typography variant="h4" sx={{ fontWeight: 800, color: TEXT_DARK }}>Portfolio</Typography>
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <Typography variant="body2" sx={{ color: TEXT_MUTED }}>Show</Typography>
              <Select
                value={entriesPerPage}
                onChange={(e) => setEntriesPerPage(e.target.value)}
                size="small"
                sx={{ borderRadius: 2, minWidth: 80 }}
              >
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
              </Select>
            </Box>
          </Box>

          <TableContainer
            component={Paper}
            elevation={0}
            sx={{
              borderRadius: 4,
              border: "1px solid #eee",
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
              background: "rgba(255,255,255,0.7)",
              backdropFilter: "blur(10px)"
            }}
          >
            <Table>
              <TableHead sx={{ bgcolor: BRAND_COLOR }}>
                <TableRow>
                  <TableCell sx={{ color: "white", fontWeight: 700 }}>Sr.</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: 700 }}>Venture Name</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: 700 }}>Founders</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: 700 }}>Overview</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: 700 }}>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <AnimatePresence mode="wait">
                  {currentData.map((item, index) => (
                    <TableRow
                      key={item._id}
                      component={motion.tr}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ delay: index * 0.05 }}
                      sx={{ "&:hover": { bgcolor: "rgba(163,13,51,0.02)" } }}
                    >
                      <TableCell>{startIndex + index + 1}</TableCell>
                      <TableCell sx={{ fontWeight: 600, color: TEXT_DARK }}>{item.StartupName}</TableCell>
                      <TableCell>{item.FounderName}</TableCell>
                      <TableCell sx={{ maxWidth: 300, color: TEXT_MUTED }}>
                        <Typography variant="body2" noWrap sx={{ overflow: "hidden", textOverflow: "ellipsis" }}>
                          {item.ProductName}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Chip
                          label={item.RegistrationStatus || "Unknown"}
                          size="small"
                          sx={{
                            bgcolor: item.RegistrationStatus?.includes("Registered") ? "#e8f5e9" : "#fff3e0",
                            color: item.RegistrationStatus?.includes("Registered") ? "#2e7d32" : "#e65100",
                            fontWeight: 700,
                            borderRadius: "6px"
                          }}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </AnimatePresence>
              </TableBody>
            </Table>
          </TableContainer>

          <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
            <MuiPagination
              count={totalPages}
              page={currentPage}
              onChange={(_, v) => setCurrentPage(v)}
              color="primary"
              sx={{
                "& .Mui-selected": { bgcolor: BRAND_COLOR, "&:hover": { bgcolor: BRAND_COLOR } }
              }}
            />
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

