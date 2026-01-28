'use client';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Box, IconButton, Stack, useTheme, useMediaQuery } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import axios from 'axios';

const Mslider = () => {
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const timerRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://venture-nest-backend.onrender.com/images');
        const imageData = response.data[0]?.laptop || [];
        setSlides(imageData.map(img => img.path));
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
    fetchImages();
  }, []);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (slides.length > 0) {
      timerRef.current = setInterval(nextSlide, 6000);
    }
    return () => clearInterval(timerRef.current);
  }, [nextSlide, slides.length]);

  const handleManualNav = (fn) => {
    clearInterval(timerRef.current);
    fn();
    timerRef.current = setInterval(nextSlide, 6000);
  };

  if (slides.length === 0) return null;

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: '300px', sm: '400px', md: '500px', lg: '800px' },
        borderRadius: { xs: 0, md: 0 }, // Removed border radius for a more "full width" immersive look
        overflow: 'hidden',
        backgroundColor: '#000',
      }}
    >
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "tween", duration: 0.5, ease: "easeInOut" },
            opacity: { duration: 0.5 }
          }}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
        >
          <Box
            component="img"
            src={slides[currentIndex]}
            alt={`Venturenest Slide ${currentIndex + 1}`}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
          {/* Main Overlay */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(rgba(0,0,0,0.3) 0%, transparent 50%, rgba(0,0,0,0.5) 100%)',
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Side Navigation Arrows - Simple UX */}
      {!isMobile && (
        <>
          <IconButton
            onClick={() => handleManualNav(prevSlide)}
            sx={{
              position: 'absolute',
              left: 30,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              color: '#fff',
              backgroundColor: 'rgba(0,0,0,0.3)',
              '&:hover': { backgroundColor: 'rgba(0,0,0,0.5)' },
              width: 50,
              height: 50,
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
          <IconButton
            onClick={() => handleManualNav(nextSlide)}
            sx={{
              position: 'absolute',
              right: 30,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              color: '#fff',
              backgroundColor: 'rgba(0,0,0,0.3)',
              '&:hover': { backgroundColor: 'rgba(0,0,0,0.5)' },
              width: 50,
              height: 50,
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </>
      )}

      {/* Bottom Center Dots */}
      <Stack
        direction="row"
        spacing={2}
        sx={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
        }}
      >
        {slides.map((_, index) => (
          <Box
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            sx={{
              width: currentIndex === index ? 30 : 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: currentIndex === index ? '#9E0203' : 'rgba(255,255,255,0.5)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </Stack>

      {/* Progress Bar - Red Theme */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: 4,
          background: 'rgba(255,255,255,0.1)',
          width: '100%',
          zIndex: 5,
        }}
      >
        <motion.div
          key={currentIndex}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 6, ease: "linear" }}
          style={{
            height: '100%',
            background: '#9E0203', // Changed to Brand Red
            originX: 0,
          }}
        />
      </Box>
    </Box>
  );
};

export default Mslider;
