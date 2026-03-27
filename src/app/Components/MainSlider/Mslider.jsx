'use client';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import axios from 'axios';

const Mslider = () => {
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const timerRef = useRef(null);

  // Simplified mobile check using window.innerWidth to avoid resize listeners if possible, 
  // but useEffect is safer for hydration.
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    // Check initially
      checkMobile();
      
      // Add event listener
      window.addEventListener('resize', checkMobile);
      
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    let active = true;

    if (isMobile) {
      setSlides(['/assets/Limca_Book_of_Records_2026.png', '/assets/Pulkesh_carousel1.png']);
    } else {
      const fetchImages = async () => {
        try {
          const response = await axios.get((window.API_BASE_URL || 'https://venturenestbackend.cgcuniversity.in') + '/images');
          if (!active) return;
          
          const imageData = response.data[0]?.laptop || [];
          const slidePaths = imageData.map(img => img.path);
          setSlides(slidePaths);
          
          // Preload images
          slidePaths.forEach((src) => {
            const img = new Image();
            img.src = src;
          });
        } catch (error) {
          console.error('Error fetching images:', error);
        }
      };
      fetchImages();
    }

    return () => {
      active = false;
    };
  }, [isMobile]);

  // Optimized animation variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
    }),
    center: {
      zIndex: 1,
      x: 0,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
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
      timerRef.current = setInterval(nextSlide, 5000); // reduced to 5s for better engagement
    }
    return () => clearInterval(timerRef.current);
  }, [nextSlide, slides.length]);

  const handleManualNav = (fn) => {
    clearInterval(timerRef.current);
    fn();
    timerRef.current = setInterval(nextSlide, 5000);
  };

  if (slides.length === 0) return null;

  return (
    <div className="relative w-full h-auto sm:h-[70vh] md:h-[80vh] lg:h-[calc(100vh-80px)] overflow-hidden bg-black">
      {/* Static spacer image to define a fixed height on mobile based on the Limca record image */}
      <img
        src="/assets/Limca_Book_of_Records_2026.png"
        alt="spacer"
        className="block w-full h-auto opacity-0 pointer-events-none sm:hidden"
        aria-hidden="true"
      />

      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.4}
          onDragEnd={(e, { offset, velocity }) => {
            const swipeThreshold = 50;
            if (offset.x < -swipeThreshold) {
              handleManualNav(nextSlide);
            } else if (offset.x > swipeThreshold) {
              handleManualNav(prevSlide);
            }
          }}
          className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing preserve-3d will-change-transform"
        >
          {/* Blurred background for mobile to fill letterbox areas */}
          <div 
            className="absolute inset-0 block sm:hidden"
            style={{
              backgroundImage: `url(${slides[currentIndex]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(20px) brightness(0.7)',
              transform: 'scale(1.1)' // Prevents white edges from blur
            }}
          />

          <img
            src={slides[currentIndex]}
            alt={`Venturenest Slide ${currentIndex + 1}`}
            className="relative w-full h-full object-contain sm:object-cover object-center z-10"
            loading="eager"
            decoding="sync"
          />
          {/* Main Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 sm:block hidden z-20" />
        </motion.div>
      </AnimatePresence>

      {/* Side Navigation Arrows - Simple UX */}
      <button
        onClick={() => handleManualNav(prevSlide)}
        className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-10 text-white bg-black/30 hover:bg-black/50 p-2 md:p-3 rounded-full transition-colors duration-200 focus:outline-none"
        aria-label="Previous Slide"
      >
        <ArrowBackIosNewIcon className="!text-lg md:!text-2xl" />
      </button>

      <button
        onClick={() => handleManualNav(nextSlide)}
        className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-10 text-white bg-black/30 hover:bg-black/50 p-2 md:p-3 rounded-full transition-colors duration-200 focus:outline-none"
        aria-label="Next Slide"
      >
        <ArrowForwardIosIcon className="!text-lg md:!text-2xl" />
      </button>

      {/* Bottom Center Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
              clearInterval(timerRef.current);
              timerRef.current = setInterval(nextSlide, 5000);
            }}
            className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
              currentIndex === index ? 'w-8 bg-[#9E0203]' : 'w-2.5 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar - Red Theme */}
      <div className="absolute bottom-0 left-0 h-1 w-full bg-white/10 z-20">
        <motion.div
          key={currentIndex}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 5, ease: "linear" }}
          className="h-full bg-[#9E0203] origin-left"
        />
      </div>
    </div>
  );
};

export default Mslider;
