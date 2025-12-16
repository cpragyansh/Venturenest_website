import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import axios from "axios";
import "./StarredEvents.css";

const StarredEvents = () => {
  const [events, setEvents] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch starred events from backend
  useEffect(() => {
    const fetchStarredEvents = async () => {
      try {
        const response = await axios.get("https://venturenest.onrender.com/starred-events"); // Your existing route
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching starred events:", error);
      }
    };
    fetchStarredEvents();
  }, []);

  // Auto-rotate large event every 20 seconds
  useEffect(() => {
    if (events.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
      }, 20000);

      return () => clearInterval(interval);
    }
  }, [events]);

  // Handle clicking on a small event to move it to the large box
  const handleEventClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Box className="events-section" sx={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center",width:"100%" }}>
      <Typography  sx={{fontSize:{xs:"6vw",sm:"6vw",lg:"3vw"}}} className="section-title">News and Events</Typography>

      {/* Background Video */}
      {/* <video src="/assets/starred-events-animated-image.mp4" className="background-video" autoPlay loop muted playsInline /> */}

      <Grid container spacing={4} className="events-grid" >
        {events.length > 0 ? (
          <>
            {/* Large Featured Event - Rotates Every 20 Seconds */}
            <Grid item xs={12} md={6}  className="featured-event">
              <Box className="event-card large">
                <img src={events[currentIndex].imageUrl} alt={events[currentIndex].eventTitle} className="event-image" />
                <Box className="event-overlay">
                  <Typography className="event-title">{events[currentIndex].eventTitle}</Typography>
                  {/* <Button className="read-more">Read More</Button> */}
                </Box>
              </Box>
            </Grid>

            {/* Smaller Events on the Right */}
            <Grid item xs={12} md={6} sx={{width:{sm:"100%",md:"100%",lg:"50vw",margin:"auto"}}}>
              <Grid container spacing={2}>
                {events.map((event, index) =>
                  index !== currentIndex ? ( // Exclude the large event from small boxes
                    <Grid item xs={6} key={event._id} className="events-starred-small-boxes-settings">
                      <Box className="event-card small" onClick={() => handleEventClick(index)} sx={{ cursor: "pointer" }}>
                        <img src={event.imageUrl} alt={event.eventTitle} className="event-image" />
                        <Box className="event-overlay">
                          <Typography className="event-title">{event.eventTitle}</Typography>
                          {/* <Button className="read-more">Read More</Button> */}
                        </Box>
                      </Box>
                    </Grid>
                  ) : null
                )}
              </Grid>
            </Grid>
          </>
        ) : (
          <Typography variant="h6" className="no-events">No starred events available</Typography>
        )}
      </Grid>
    </Box>
  );
};

export default StarredEvents;
