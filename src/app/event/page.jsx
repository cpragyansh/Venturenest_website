// "use client";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Grid,
  Typography,
  Button,
  Modal,
  IconButton,
  Collapse,
  Card,
  MenuItem,
  Select,
  FormControl,
  InputLabel
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("https://venturenest.onrender.com/events");
        setEvents(response.data);
        setFilteredEvents(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, []);

  const createSlug = (name) => {
    return name
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  useEffect(() => {
    if (!selectedMonth && !selectedYear) {
      setFilteredEvents(events);
    } else {
      const filtered = events.filter((event) => {
        const date = new Date(event.eventDate);
        const eventMonth = (date.getMonth() + 1).toString().padStart(2, "0");
        const eventYear = date.getFullYear().toString();
        const monthMatch = selectedMonth ? selectedMonth === eventMonth : true;
        const yearMatch = selectedYear ? selectedYear === eventYear : true;
        return monthMatch && yearMatch;
      });
      setFilteredEvents(filtered);
    }
  }, [selectedMonth, selectedYear, events]);

  const handleOpenModal = (event) => {
    setSelectedEvent(event);
    setExpanded(false);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
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

  return (
    <Box sx={{ background: "#f9f9f9", minHeight: "100vh", pb: "4vw", pt: { xs: "30vw", sm: "30vw", md: "10vw", lg: "5vw" } }}>
      {/* 🌟 CAROUSEL */}
      {/* <Box sx={{ width: "100%", height: { xs: "40vh", sm: "50vh", md: "70vh" }, mb: 4 }}>
        <Swiper
          modules={[Autoplay, Navigation, EffectFade]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation
          effect="fade"
          loop
          style={{ height: "100%" }}
        >
          {filteredEvents.map(event => (
            <SwiperSlide key={event._id}>
              <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
                <Box
                  component="img"
                  src={event.imageUrl}
                  alt={event.eventName}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    margin: "auto",
                    background: "#000"
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "rgba(0,0,0,0.5)",
                    color: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    p: 2,
                    textAlign: "center",
                    zIndex: 2
                  }}
                >
                  <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { xs: "6vw", sm: "4vw", md: "2.5vw" } }}>
                    {event.eventName}
                  </Typography>
                  <Typography variant="h6" sx={{ fontSize: { xs: "4vw", sm: "2.5vw", md: "1.5vw" }, mb: 1 }}>
                    {event.eventTitle}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ fontSize: { xs: "3vw", sm: "1.8vw", md: "1vw" } }}>
                    {formatDate(event.eventDate)}
                  </Typography>
                  <Button
                    variant="outlined"
                    sx={{
                      mt: 2,
                      color: "#fff",
                      borderColor: "#fff",
                      fontSize: { xs: "2.5vw", sm: "1.2vw" }
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenModal(event);
                    }}
                  >
                    View Details
                  </Button>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box> */}

      {/* 🔤 HEADING */}
      <Typography
        variant="h4"
        textAlign="center"
        fontWeight="bold"
        mb={2}
        sx={{ fontSize: { xs: "7vw", sm: "5vw", md: "3vw" }, mt: { xs: "4vw", md: "2vw", lg: "1vw" } }}
      >
        Events
      </Typography>

      {/* 🎯 FILTER BELOW HEADING */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 4 }}>
        <FormControl size="small">
          <InputLabel>Month</InputLabel>
          <Select
            value={selectedMonth}
            label="Month"
            onChange={(e) => setSelectedMonth(e.target.value)}
            sx={{ minWidth: 100 }}
          >
            <MenuItem value="">All</MenuItem>
            {[
              "01", "02", "03", "04", "05", "06",
              "07", "08", "09", "10", "11", "12"
            ].map((month, i) => (
              <MenuItem key={month} value={month}>
                {new Date(2000, i).toLocaleString("default", { month: "long" })}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl size="small">
          <InputLabel>Year</InputLabel>
          <Select
            value={selectedYear}
            label="Year"
            onChange={(e) => setSelectedYear(e.target.value)}
            sx={{ minWidth: 100 }}
          >
            <MenuItem value="">All</MenuItem>
            {[...new Set(events.map(e => new Date(e.eventDate).getFullYear()))].map(year => (
              <MenuItem key={year} value={year.toString()}>{year}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {/* 📅 EVENT GRID */}
      <Box sx={{ maxWidth: "95vw", mx: "auto", px: 2 }}>
        {filteredEvents.length === 0 ? (
          <Typography textAlign="center" color="text.secondary" fontSize="1.2rem" mt={5}>
            No events found for selected filter.
          </Typography>
        ) : (
          <Grid container spacing={4} justifyContent="center">
            {filteredEvents.map((event) => (
              <Grid item xs={12} sm={10} md={6} lg={5} key={event._id}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    borderRadius: 3,
                    boxShadow: 3,
                    overflow: "hidden",
                    background: "#fff",
                    width: { xs: "70vw", lg: "40vw" },
                    height: { xs: "auto", sm: "16vw", lg: "16vw" },
                    minHeight: "200px"
                  }}
                >
                  <Box
                    component="img"
                    src={event.imageUrl}
                    alt={event.eventName}
                    sx={{
                      width: { xs: "100%", sm: "40%" },
                      height: { xs: "50vw", sm: "100%" },
                      objectFit: "cover",
                      flexShrink: 0
                    }}
                  />
                  <Box
                    sx={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      p: { xs: 2, sm: 3 }
                    }}
                  >
                    <Box>
                      <Typography variant="subtitle2" color="text.secondary" mb={0.5}>
                        {formatDate(event.eventDate)}
                      </Typography>
                      <Typography
                        fontWeight="bold"
                        sx={{ fontSize: { xs: "4.2vw", sm: "2vw", md: "1.2vw" }, mb: 1 }}
                      >
                        {event.eventName}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { xs: "3.5vw", sm: "1.3vw", md: "1vw" },
                          color: "#555"
                        }}
                      >
                        {trimText(event.eventTitle, 20)}
                      </Typography>
                    </Box>

                    <Button
                      component={Link}
                      to={`/Events/${createSlug(event.eventName)}`}
                      size="small"
                      variant="contained"
                      sx={{
                        background: "#8B0000",
                        textTransform: "none",
                        fontWeight: "bold",
                        mt: 2,
                        fontSize: { xs: "3.5vw", sm: "1.1vw" },
                        alignSelf: "flex-start",
                        "&:hover": { background: "#B22222" }
                      }}
                    >
                      Read More
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>

      {/* 🔍 MODAL */}
      <Modal open={!!selectedEvent} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "fixed",
            top: 0,
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
              maxWidth: 700,
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

            {selectedEvent && (
              <>
                <Box
                  component="img"
                  src={selectedEvent.imageUrl}
                  alt={selectedEvent.eventName}
                  sx={{
                    width: "100%",
                    maxHeight: 300,
                    objectFit: "cover",
                    borderRadius: 2,
                    mb: 2
                  }}
                />
                <Typography variant="h5" fontWeight="bold" mb={1}>
                  {selectedEvent.eventName}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" mb={1}>
                  {selectedEvent.eventTitle}
                </Typography>
                <Typography variant="body2" fontStyle="italic" mb={2}>
                  {new Date(selectedEvent.eventDate).toDateString()}
                </Typography>
                <IconButton onClick={() => setExpanded(!expanded)}>
                  {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </IconButton>
                <Collapse in={expanded}>
                  <Typography textAlign="left" mt={1}>
                    {selectedEvent.eventDescription || "No details available."}
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
