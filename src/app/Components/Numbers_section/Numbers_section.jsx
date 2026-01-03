import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";

/* ===============================
   COUNT-UP + EASING (INLINE)
================================ */
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

const useCountUp = (targetValue, start, duration = 2000) => {
  const extractNumber = (value) => {
    const number = parseFloat(value.replace(/[^0-9.]/g, ""));
    const suffix = value.replace(/[0-9.]/g, "");
    return { number, suffix };
  };

  const { number: target, suffix } = extractNumber(targetValue);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime = null;
    let rafId;

    const animate = (time) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = easeOutCubic(progress);
      setCount(eased * target);

      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      }
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [start, target, duration]);

  return `${target % 1 !== 0 ? count.toFixed(1) : Math.floor(count)}${suffix}`;
};

/* ===============================
   NUMBER CIRCLE
================================ */
const NumberCircle = ({
  value,
  label,
  size,
  marginLeft,
  zIndex,
  animate,
}) => {
  const animatedValue = useCountUp(value, animate);

  return (
    <motion.div
      initial={{ scale: 0.7, opacity: 0 }}
      animate={animate ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ marginLeft, zIndex }}
    >
      <Box
        sx={{
          width: size,
          height: size,
          borderRadius: "50%",
          backgroundColor: "white",
          border: "6px solid #A01D3F",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
          transition: "transform 0.3s",
          "&:hover": { transform: "scale(1.1)" },
        }}
      >
        <Typography
          sx={{
            fontFamily: "var(--font-ui)",
            fontSize: "1.8rem",
            fontWeight: "bold",
            color: "black",
          }}
        >
          {animatedValue}
        </Typography>

        <Typography
          sx={{
            fontFamily: "var(--font-ui)",
            fontSize: "1rem",
            fontWeight: "bold",
            color: "#A01D3F",
            mt: 1,
            textAlign: "center",
          }}
        >
          {label}
        </Typography>
      </Box>
    </motion.div>
  );
};

/* ===============================
   MAIN SECTION
================================ */
const NumberSection = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const isMobile = useMediaQuery("(max-width:480px)");
  const isTablet = useMediaQuery("(min-width:481px) and (max-width:1124px)");

  /* Intersection Observer */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setInView(true),
      { threshold: 0.4 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const circleData = [
    { value: "20.5L", label: "Funding Secured" },
    { value: "70+", label: "Venture Incubated" },
    { value: "685+", label: "Patent Published" },
    { value: "100+", label: "Startups Mentored" },
    { value: "100+", label: "Mentors" },
  ];

  const circleSize = isMobile || isTablet ? 260 : [190, 250, 290, 250, 190];
  const marginLeftValues = ["-80px", "-40px", "-30px", "-30px", "-50px"];
  const zIndexes = [1, 2, 3, 2, 1];

  return (
    <Box
      ref={sectionRef}
      sx={{
        width: "100%",
        minHeight: "60vh",
        backgroundImage: "url(/assets/section-3-bg-img.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        py: 4,
        overflow: "hidden",
      }}
    >
      <Typography
        sx={{
          fontFamily: "var(--font-display)",
          color: "white",
          fontWeight: "bold",
          mb: 4,
          fontSize: isMobile ? "1.4rem" : isTablet ? "2rem" : "1.8vw",
        }}
      >
        CONTINUOUSLY IMPROVING
      </Typography>

      {(isMobile || isTablet) ? (
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop
          spaceBetween={20}
          slidesPerView={isMobile ? 1 : 2.2}
          style={{ width: "90%" }}
          onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
        >
          {circleData.map((item, index) => (
            <SwiperSlide key={index}>
              <NumberCircle
                value={item.value}
                label={item.label}
                size={circleSize}
                marginLeft="0"
                zIndex={1}
                animate={inView && activeSlide === index}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {circleData.map((item, index) => (
            <NumberCircle
              key={index}
              value={item.value}
              label={item.label}
              size={circleSize[index]}
              marginLeft={marginLeftValues[index]}
              zIndex={zIndexes[index]}
              animate={inView}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default NumberSection;
