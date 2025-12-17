import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Change this line
import axios from "axios";
import {
  Box,
  Grid,
  Typography,
  Button,
  Modal,
  IconButton,
  Collapse,
  Card
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function Programs() {
  const [programs, setPrograms] = useState([]);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await axios.get("https://venturenest.onrender.com/programs");
        setPrograms(response.data);
      } catch (error) {
        console.error("Error fetching programs:", error);
      }
    };
    fetchPrograms();
  }, []);

  const handleOpenModal = (program) => {
    setSelectedProgram(program);
    setExpanded(false);
  };

  const handleCloseModal = () => {
    setSelectedProgram(null);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
  };

  const trimText = (text, wordLimit) => {
    if (!text) return "";
    const words = text.split(" ");
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ") + " ...";
  };

  // Helper function to create slug
  const createSlug = (name) => {
    return name
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  return (
    <Box sx={{ background: "#f9f9f9", minHeight: "100vh", pb: "4vw" }}>
      <Typography variant="h3" textAlign="center" fontWeight="bold" pt={4} mb={2} sx={{ pt: { xs: "20%", lg: "2vw" } }}>
        Programs
      </Typography>

      {/* 🔥 Top Highlight Carousel */}
      <Box sx={{ width: "100%", maxWidth: "90vw", mx: "auto", mb: 4 }}>
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          effect="fade"
          loop
          style={{ borderRadius: "12px" }}
        >
          {programs.map((program) => (
            <SwiperSlide key={program._id}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: { xs: "40vh", md: "70vh" },
                  overflow: "hidden",
                  borderRadius: 3
                }}
              >
                <Box
                  component="img"
                  src={program.imageUrl}
                  alt={program.programName}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: { xs: "cover", lg: "cover" },
                    objectPosition: "center"
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    bgcolor: "rgba(0,0,0,0.5)",
                    color: "#fff",
                    p: 2
                  }}
                >
                  <Typography variant="h5" fontWeight="bold">
                    {program.programTitle}
                  </Typography>
                  <Typography variant="subtitle1">{program.programName}</Typography>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {/* Program Cards Grid */}
      <Box sx={{ maxWidth: "90vw", mx: "auto", px: 2 }}>
        <Grid container spacing={6} sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
          {programs.map((program) => (
            <Grid item xs={12} md={6} key={program._id}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  borderRadius: 3,
                  boxShadow: 3,
                  overflow: "hidden",
                  background: "#fff",
                  height: { md: 300 },
                  width: "80vw",
                  mx: "auto"
                }}
                onClick={() => handleOpenModal(program)}
              >
                <Box
                  component="img"
                  src={program.imageUrl}
                  alt={program.programName}
                  sx={{
                    width: { xs: "100%", md: "40%" },
                    height: { xs: 200, md: "100%" },
                    objectFit: "cover"
                  }}
                />
                <Box
                  sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    p: 2
                  }}
                >
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary" mb={0.5}>
                      {formatDate(program.programDate)}
                    </Typography>
                    <Typography variant="h6" fontWeight="bold">
                      {program.programName}
                    </Typography>
                    <Typography
                      sx={{
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        fontSize: { xs: "5vw", lg: "1vw" },
                        width: { xs: "100%", lg: "22vw" }
                      }}
                    >
                      {trimText(program.programTitle, 20)}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      mb={1}
                      sx={{
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden"
                      }}
                    >
                      {trimText(program.programDescription, 20)}
                    </Typography>
                  </Box>
                  <Button
                    component={Link}
                    to={`/Programs/${createSlug(program.programName)}`}
                    onClick={(e) => e.stopPropagation()}
                    size="small"
                    variant="outlined"
                    sx={{
                      color: "#c8102e",
                      borderColor: "#c8102e",
                      textTransform: "none",
                      fontWeight: "bold",
                      alignSelf: "flex-start"
                    }}
                  >
                    Read More
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Modal */}
      <Modal open={!!selectedProgram} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "fixed",
            top: 40,
            left: 0,
            width: "100%",
            height: "100%",
            bgcolor: "rgba(0,0,0,0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: 2
          }}
        >
          <Box
            sx={{
              bgcolor: "#fff",
              borderRadius: 3,
              p: 3,
              maxWidth: 1000,
              width: "100%",
              textAlign: "center",
              boxShadow: 10,
              position: "relative",
              maxHeight: "90vh",
              overflowY: "auto"
            }}
          >
            <IconButton
              onClick={handleCloseModal}
              sx={{ position: "absolute", top: 10, right: 10 }}
            >
              <CloseIcon />
            </IconButton>

            {selectedProgram && (
              <>
                <Box
                  component="img"
                  src={selectedProgram.imageUrl}
                  alt={selectedProgram.programName}
                  sx={{
                    width: "100%",
                    maxHeight: 500,
                    objectFit: "contain",
                    borderRadius: 2,
                    mb: 2
                  }}
                />
                <Typography variant="h4" fontWeight="bold" mb={1}>
                  {selectedProgram.programName}
                </Typography>
                <Typography variant="h6" color="text.secondary" mb={1}>
                  {selectedProgram.programTitle}
                </Typography>
                <Typography variant="body2" fontStyle="italic" mb={2}>
                  {new Date(selectedProgram.programDate).toDateString()}
                </Typography>
                <IconButton onClick={() => setExpanded(!expanded)}>
                  {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </IconButton>
                <Collapse in={expanded}>
                  <Typography textAlign="left" mt={1}>
                    {selectedProgram.programDescription || "No details available."}
                  </Typography>
                </Collapse>
              </>
            )}
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
