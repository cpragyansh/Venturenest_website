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
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const [show, setShow] = useState(true);
  // const [selectedStory, setSelectedStory] = useState(null);

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


  return (
      // <Typography sx={{ mb: "4vw", fontSize: { xs: "6vw", sm: "6vw", lg: "2vw" }, mt: "2vw" }} className="section-title "> Inspirational Stories</Typography>
      <Box>

       <Typography variant="h3" textAlign="center" fontWeight="bold" pt={4} mb={8} sx={{pt:{xs:"20%",lg:"2vw"}}}>
              Programs
            </Typography>
    <Box sx={{ width: { xs: "100%", sm: "100%", lg: "80%" }, minHeight: "100vh", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", margin: "auto",flexWrap:"wrap",gap:"2vw" }}>
      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" py={4}>
          <CircularProgress size={50} />
        </Box>
      ) : error ? (
        <Typography color="error" textAlign="center">
          {error}
        </Typography>
      ) : starredStories.length > 0?  (
        starredStories.map((story , index) => (
        <Box
  key={index}
  sx={{
    display: "flex",
    flexDirection: "column",
    borderRadius: 2,
    overflow: "hidden",
    boxShadow: 3,
    cursor: "pointer",
    width: { xs: "90%", sm: "100%", lg: "20vw" },
    height: "700px",          // ✅ FIXED HEIGHT
    border: "2px solid black",
  }}
>

          {/* Top section */}
           <Box
  sx={{
    backgroundImage: `url(${story.FounderImg || "assets/default.jpg"})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "350px",        // ✅ FIXED IMAGE HEIGHT
  }}
/>

       <Box
  sx={{
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    flex: 1,                // ✅ THIS IS IMPORTANT
    p: 3,
  }}
>

            <Box flex={1} sx={{display:"flex",}}>
              {/* <Box sx={{ height: { xs: "14vw", sm: "10vw", lg: "2vw" }, width: { xs: "32vw", sm: "25vw", lg: "12vw" }, objectFit: "cover", mb: { xs: "8vw", lg: "4vw" } }}>
                <img
                  src={story.FounderLogoImg || "assets/logo-placeholder.png"}
                  alt="Startup Logo"
                  style={{  objectFit: "cover" }}
                />
              </Box> */}
              <Box>
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
            </Box>
          
          </Box>

          {/* Bottom red section */}
        <Box
  sx={{
    backgroundColor: "#e94b5e",
    color: "#fff",
    p: 3,
    height: "140px",        // ✅ SAME HEIGHT FOR ALL
    overflow: "hidden",
  }}
>
  <Typography
    variant="body1"
    sx={{
      display: "-webkit-box",
      WebkitLineClamp: 4,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
    }}
  >
    {story.StartupAbout}
  </Typography>
</Box>

        </Box>
        ))
        // {/* </Fade> */}
      )
        : (
          <Typography textAlign="center">No starred stories available.</Typography>
        )}

      {/* Popup */}



    </Box>
    </Box>
  );
};

export default StartupStories;
