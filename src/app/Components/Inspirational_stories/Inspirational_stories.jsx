import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Fade,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

const StartupStories = () => {
  const [starredStories, setStarredStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [show, setShow] = useState(true);
  const [selectedStory, setSelectedStory] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1200 });
    fetchStarredStories();
  }, []);

  const fetchStarredStories = async () => {
    try {
      const response = await axios.get("https://venturenest.onrender.com/starred-stories");
      setStarredStories(response.data);
    } catch (err) {
      console.error("Error fetching starred stories:", err);
      setError("Failed to load stories.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (starredStories.length > 0) {
      const interval = setInterval(() => {
        setShow(false); // trigger fade out
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % starredStories.length);
          setShow(true); // trigger fade in
        }, 500);
      }, 4000); // change story every 4s
      return () => clearInterval(interval);
    }
  }, [starredStories]);

  const handleOpenPopup = (story) => {
    setSelectedStory(story);
  };

  const handleClosePopup = () => {
    setSelectedStory(null);
  };

  const story = starredStories[currentIndex];

  return (
    <Box sx={{ width: {xs:"100%",sm:"100%" , lg:"80%"}, minHeight: "100vh", display: "flex", flexDirection: "column",justifyContent:"center",alignItems:"center",margin:"auto" }}>
       <Typography sx={{mb:"4vw", fontSize:{xs:"6vw",sm:"6vw",lg:"2vw"},mt:"2vw"}} className="section-title "> Inspirational Stories</Typography>
      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" py={4}>
          <CircularProgress size={50} />
        </Box>
      ) : error ? (
        <Typography color="error" textAlign="center">
          {error}
        </Typography>
      ) : story ? (
        <Fade in={show} timeout={500}>
          <Box
            onClick={() => handleOpenPopup(story)}
            sx={{
              display: "flex",
              flexDirection: "column",
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: 3,
              cursor: "pointer",
              width:{xs:"90%",sm:"100%" , lg:"70vw"}
            }}
          >
            {/* Top section */}
            <Box
              sx={{
                backgroundColor: "#fff",
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems:{xs:"center",sm:"start",md:"start",lg:"center"},
                p: 3,
              }}
            >
              <Box flex={1}>
                <Box  sx={{height:{xs:"14vw",sm:"10vw",lg:"12vw"},width:{xs:"32vw",sm:"25vw" , lg:"14vw"},objectFit:"cover",mb:{xs:"8vw",lg:"4vw"}}}>
                <img
                  src={story.FounderLogoImg || "assets/logo-placeholder.png"}
                  alt="Startup Logo"
                  style={{ height:{xs:"8vw",sm:"10vw",lg:"8vw"},mb:"8vw",width:{xs:"4vw",sm:"8vw" , lg:"8vw"},objectFit:"cover" }}
                />
              </Box>
                <Typography variant="body1" color="red">
                  Success
                </Typography>
                <Typography variant="h4" fontWeight="bold">
                  {story.StartupName}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Creating the World’s Largest Community <br /> for Entrepreneurs and Investors
                </Typography>
              </Box>
              <Box
                flex={1}
                display="flex"
                justifyContent="center"
                mt={{ xs: 2, md: 0 }}
                sx={{
                  backgroundImage: `url(${story.FounderImg || "assets/default.jpg"})`,
                  backgroundSize: "cover",
                  backgroundRepeat:"no-repeat",
                  backgroundPosition: "center",
                  borderRadius: 2,
                  width: {xs:"110%",sm:"100%" , lg:"26vw"} ,
                  minHeight: 500,
                  
                }}
              ></Box>
            </Box>

            {/* Bottom red section */}
            <Box
              sx={{
                backgroundColor: "#e94b5e",
                color: "#fff",
                p: 3,
              }}
            >
              
              <Typography variant="body1">
                {story.StartupAbout}
              </Typography>
            </Box>
          </Box>
        </Fade>
      ) : (
        <Typography textAlign="center">No starred stories available.</Typography>
      )}

      {/* Popup */}
      <Dialog
  open={Boolean(selectedStory)}
  onClose={handleClosePopup}
  maxWidth="md"
  fullWidth
  PaperProps={{
    sx: {
      borderRadius: 4,
      backgroundColor: "#fff",
      p: { xs: 2, sm: 4 },
      boxShadow: 10,
      position: "relative",
    },
  }}
>
  {selectedStory && (
    <Box>
      {/* Close Button */}
      <IconButton
        aria-label="close"
        onClick={handleClosePopup}
        sx={{
          position: "absolute",
          right: 16,
          top: 16,
          color: "grey.500",
          zIndex: 1,
        }}
      >
        <CloseIcon />
      </IconButton>

      {/* Header Section */}
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        alignItems={{ xs: "center", md: "flex-start" }}
        gap={3}
        mb={3}
      >
        {/* Founder Image */}
        <Box
          sx={{
            width: { xs: "100%", md: "40%" },
            height: { xs: 200, md: 300 },
            backgroundImage: `url(${selectedStory.FounderImg || "assets/default.jpg"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: 2,
          }}
        />

        {/* Info Section */}
        <Box flex={1}>
          <Box display="flex" alignItems="center" gap={2} mb={1}>
            <Avatar
              src={selectedStory.StartupLogo || "assets/logo-placeholder.png"}
              alt="Startup Logo"
              sx={{ width: 56, height: 56 }}
              variant="rounded"
            />
            <Typography variant="h5" fontWeight="bold">
              {selectedStory.StartupName}
            </Typography>
          </Box>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            mb={2}
            fontStyle="italic"
          >
            Creating the World’s Largest Community for Entrepreneurs and Investors
          </Typography>

          <Box
            component="hr"
            sx={{
              border: "none",
              borderTop: "1px solid #eee",
              my: 2,
            }}
          />
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              lineHeight: 1.6,
              fontSize: "1rem",
              whiteSpace: "pre-line",
            }}
          >
            {selectedStory.StartupAbout}
          </Typography>
        </Box>
      </Box>
    </Box>
  )}
</Dialog>


    </Box>
  );
};

export default StartupStories;
