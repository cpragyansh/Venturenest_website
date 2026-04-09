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
   — Responsive sizing via clamp so labels never overflow the circle on small screens.
================================ */
const NumberCircle = ({
  value,
  label,
  size,       // px value for desktop
  marginLeft,
  zIndex,
  animate,
  isMobile,
}) => {
  const animatedValue = useCountUp(value, animate);

  /* 
   * On mobile/tablet use a CSS clamp so the circle scales with the
   * viewport instead of a fixed pixel value that bleeds out.
   */
  const circleSize = isMobile
    ? undefined   // let CSS handle it
    : size;

  const circleSx = {
    width:  isMobile ? "clamp(160px, 60vw, 260px)" : circleSize,
    height: isMobile ? "clamp(160px, 60vw, 260px)" : circleSize,
    borderRadius: "50%",
    backgroundColor: "white",
    border: "6px solid #A01D3F",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    /* 
     * Prevent any inner content from overflowing the circle boundary.
     * This stops labels like "Patent Published" from bleeding out.
     */
    overflow: "hidden",
    padding: "12px",
    boxSizing: "border-box",
    boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
    transition: "transform 0.3s",
    "&:hover": { transform: "scale(1.05)" },
  };

  return (
    <motion.div
      initial={{ scale: 0.7, opacity: 0 }}
      animate={animate ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ marginLeft, zIndex }}
    >
      <Box sx={circleSx}>
        <Typography
          sx={{
            fontFamily: "var(--font-ui)",
            /* Fluid number size — readable on all viewports */
            fontSize: "clamp(1.1rem, 4vw, 1.8rem)",
            fontWeight: "bold",
            color: "black",
            lineHeight: 1.1,
          }}
        >
          {animatedValue}
        </Typography>

        <Typography
          sx={{
            fontFamily: "var(--font-ui)",
            /* Fluid label size — prevents overflow at narrow widths */
            fontSize: "clamp(0.6rem, 2.2vw, 0.95rem)",
            fontWeight: "bold",
            color: "#A01D3F",
            mt: 0.75,
            textAlign: "center",
            lineHeight: 1.25,
            /* 
             * word-break: break-word ensures long labels like
             * "Patent Published" wrap instead of escaping the box.
             */
            wordBreak: "break-word",
            whiteSpace: "normal",
            px: 1,
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

  const isMobile  = useMediaQuery("(max-width:480px)");
  const isTablet  = useMediaQuery("(min-width:481px) and (max-width:1124px)");
  const isSmall   = isMobile || isTablet;

  /* Intersection Observer */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setInView(true),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const circleData = [
    { value: "20.5L", label: "Funding Secured" },
    { value: "70+",   label: "Ventures Incubated" },
    { value: "685+",  label: "Patents Published" },
    { value: "100+",  label: "Startups Mentored" },
    { value: "100+",  label: "Mentors" },
  ];

  /* Desktop sizes / offsets */
  const desktopSizes    = [190, 250, 290, 250, 190];
  const marginLeftValues = ["-80px", "-40px", "-30px", "-30px", "-50px"];
  const zIndexes         = [1, 2, 3, 2, 1];

  return (
    <Box
      ref={sectionRef}
      sx={{
        width: "100%",
        minHeight: "60vh",
        backgroundImage: "url(/assets/section-3-bg-img.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        /* 
         * backgroundAttachment: fixed causes CLS/repaints on mobile.
         * Use 'scroll' instead for better performance.
         */
        backgroundAttachment: "scroll",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        py: 4,
        overflow: "hidden",
        /*
         * content-visibility defers rendering cost of this off-screen
         * section until the user is about to scroll to it (LCP / INP fix).
         */
        contentVisibility: "auto",
        containIntrinsicSize: "0 600px",
      }}
    >
      <Typography
        sx={{
          fontFamily: "var(--font-display)",
          color: "white",
          fontWeight: "bold",
          mb: 4,
          fontSize: isMobile ? "1.4rem" : isTablet ? "2rem" : "1.8vw",
          /* Prevent heading from breaking mid-word on small screens */
          wordBreak: "keep-all",
          overflowWrap: "break-word",
        }}
      >
        CONTINUOUSLY IMPROVING
      </Typography>

      {isSmall ? (
        /*
         * Mobile / Tablet — horizontal swiper.
         * Width 100% + 8px side-padding ensures the circle is never
         * wider than the viewport (overflow → label bleed fix).
         */
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop
          spaceBetween={16}
          slidesPerView={isMobile ? 1 : 2.2}
          centeredSlides={isMobile}
          style={{ width: "100%", padding: "0 8px 16px" }}
          onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
        >
          {circleData.map((item, index) => (
            <SwiperSlide
              key={index}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <NumberCircle
                value={item.value}
                label={item.label}
                size={260}
                marginLeft="0"
                zIndex={1}
                animate={inView && activeSlide === index}
                isMobile={true}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        /* Desktop — overlapping circles */
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {circleData.map((item, index) => (
            <NumberCircle
              key={index}
              value={item.value}
              label={item.label}
              size={desktopSizes[index]}
              marginLeft={marginLeftValues[index]}
              zIndex={zIndexes[index]}
              animate={inView}
              isMobile={false}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default NumberSection;
