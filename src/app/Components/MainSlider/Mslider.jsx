// 'use client';
import React, { useState, useEffect } from 'react';
import { Box, Stack } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import axios from 'axios';
import "./mslider.css"

const Mslider = () => {
  const [slides, setSlides] = useState([]);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://venturenest.onrender.com/images'); // Update API URL if needed
        const data = response.data;

        const imageData = data[0]?.laptop || []; // Adjust as per backend structure
        const formattedImages = imageData.map(img => img.path);

        setSlides(formattedImages);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <Stack
      direction={{ xs: 'column', md: 'column',lg:"row" }} // Column for mobile, row for desktop
      // spacing={2}
      sx={{
        maxWidth: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        gap:{xs:"5vw", md:"2vw",lg:"4vw"}, 
        p: 2,
        mt:{xs:"26vw",sm:"16vw",md:"15vw",lg:"1vw"}
      }}
    >
      {/* Main Image Swiper */}
      <Box
  sx={{
    width: { xs: '90%', sm:"80%",md: '100%',lg:"60%" },
    height: { xs: '30%', sm: '30vh', md: '35vh',lg:"75vh" },
    borderRadius: 2,
    overflow: 'hidden',
  }}
>
  {slides.length > 0 ? (
    <Swiper
      modules={[Autoplay, Navigation]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      navigation
      loop
      className="main-slider"
      style={{ width: '100%', height: '100%' }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <Box
            component="img"
            src={slide}
            alt={`Slide ${index + 1}`}
            sx={{
              width: '100%',
              height: '100%',
              objectFit:{xs:"contain",sm:"contain",md:"contain",lg:"contain"}, // Or 'cover' if you want to fill the box
              display: 'block',
              borderRadius: 2,
              backgroundColor: 'transparent', // Optional to fill space
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  ) : (
    <p>Loading images...</p>
  )}
</Box>


      {/* Thumbnails */}
      <Stack
        spacing={2}
        direction={{ xs: 'row', md: 'row',lg:"column" }} // Row on mobile, column on desktop
        sx={{
          width: { s: '90%', md: '90%',lg:"20%" },
          alignItems: 'center',
          justifyContent: { xs: 'center', md: 'flex-start' },
          overflowX: { xs: 'auto', md: 'unset' }, // Enable horizontal scrolling on mobile
          gap: 1,
        }}
      >
        {slides.map((thumbnail, index) => (
          <Box
            key={index}
            onClick={() => setActiveSlide(index)}
            sx={{
              width: { xs: '40%', sm: '30%', md: '100%',lg:"100%" }, // Smaller thumbnails on mobile
              height: { xs: '6vh', sm: '10vh', md: '13vh',lg:"10.3vw" }, // Adjust height dynamically
              cursor: 'pointer',
              borderRadius: 2,
              overflow: 'hidden',
              transition: '0.3s',
              boxShadow: activeSlide === index ? '0px 4px 10px rgba(0,0,0,0.2)' : 'none',
              border: activeSlide === index ? '2px solid #ff5722' : 'none',
            }}
          >
            <img
              src={thumbnail}
              alt={`Thumbnail ${index + 1}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'fill',
              }}
            />
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};

export default Mslider;
