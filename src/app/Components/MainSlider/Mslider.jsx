'use client';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Box, IconButton, Stack, Typography, useTheme, useMediaQuery } from '@mui/material';
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
        const response = await axios.get('https://venturenest.onrender.com/images');
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
      scale: 1.1,
      filter: 'blur(10px)',
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.9,
      filter: 'blur(10px)',
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
        height: { xs: '300px', sm: '400px', md: '500px', lg: '650px' },
        borderRadius: { xs: 0, md: 0 }, // Removed border radius for a more "full width" immersive look
        overflow: 'hidden',
        boxShadow: '0 30px 60px rgba(0,0,0,0.15)',
        backgroundColor: '#0a0a0a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
            x: { type: "spring", stiffness: 260, damping: 30 },
            opacity: { duration: 0.5 },
            scale: { duration: 0.7 },
            filter: { duration: 0.4 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = offset.x;
            if (swipe < -100) handleManualNav(nextSlide);
            else if (swipe > 100) handleManualNav(prevSlide);
          }}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            cursor: 'grab',
          }}
          whileTap={{ cursor: 'grabbing' }}
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
              pointerEvents: 'none',
              transition: 'transform 0.5s ease-out',
            }}
          />
          {/* Decorative Overlay for Depth */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(rgba(0,0,0,0.2) 0%, transparent 40%, transparent 60%, rgba(0,0,0,0.4) 100%)',
              pointerEvents: 'none',
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Floating Navigation Panel - Bottom Right */}
      <Stack
        direction="row"
        alignItems="center"
        sx={{
          position: 'absolute',
          bottom: { xs: 20, md: 40 },
          right: { xs: 20, md: 40 },
          zIndex: 10,
          background: 'rgba(15, 15, 15, 0.6)',
          backdropFilter: 'blur(20px) saturate(180%)',
          padding: { xs: '10px 16px', md: '12px 24px' },
          borderRadius: 100,
          border: '1px solid rgba(255, 255, 255, 0.15)',
          boxShadow: '0 15px 45px rgba(0,0,0,0.4)',
        }}
      >
        {/* Slide Counter */}
        <Typography 
          sx={{ 
            color: 'rgba(255,255,255,0.9)', 
            fontSize: '0.85rem', 
            fontWeight: 600, 
            fontFamily: 'monospace',
            mr: 2,
            minWidth: '45px'
          }}
        >
          {String(currentIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </Typography>

        {/* Animated Dots Trail */}
        <Stack direction="row" spacing={1.2} sx={{ mr: { xs: 2, md: 3 }, px: 1 }}>
          {slides.map((_, index) => (
            <motion.div
              key={index}
              initial={false}
              animate={{
                width: currentIndex === index ? (isMobile ? 24 : 36) : 8,
                backgroundColor: currentIndex === index ? '#fff' : 'rgba(255,255,255,0.25)',
              }}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              style={{
                height: 8,
                borderRadius: 4,
                cursor: 'pointer',
                transition: 'background-color 0.3s'
              }}
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.5)' }}
            />
          ))}
        </Stack>

        {/* Separator */}
        <Box sx={{ width: '1px', height: '24px', background: 'rgba(255,255,255,0.15)', mr: 2, display: { xs: 'none', sm: 'block' } }} />

        {/* Arrow Buttons */}
        <Stack direction="row" spacing={0.5}>
          <IconButton
            onClick={() => handleManualNav(prevSlide)}
            sx={{
              color: '#fff',
              backgroundColor: 'rgba(255,255,255,0.05)',
              '&:hover': { backgroundColor: 'rgba(255,255,255,0.15)', transform: 'translateX(-2px)' },
              width: { xs: 32, md: 40 },
              height: { xs: 32, md: 40 },
              transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <ArrowBackIosNewIcon sx={{ fontSize: { xs: 14, md: 18 } }} />
          </IconButton>
          <IconButton
            onClick={() => handleManualNav(nextSlide)}
            sx={{
              color: '#fff',
              backgroundColor: 'rgba(255,255,255,0.05)',
              '&:hover': { backgroundColor: 'rgba(255,255,255,0.15)', transform: 'translateX(2px)' },
              width: { xs: 32, md: 40 },
              height: { xs: 32, md: 40 },
              transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <ArrowForwardIosIcon sx={{ fontSize: { xs: 14, md: 18 } }} />
          </IconButton>
        </Stack>
      </Stack>

      {/* Progress Bar (Optional but Premium) */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: 3,
          background: 'rgba(255,255,255,0.3)',
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
            background: '#fff',
            originX: 0,
          }}
        />
      </Box>
    </Box>
  );
};

export default Mslider;
