import React, { useEffect } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import Aos from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const NumberSection = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const isMobile = useMediaQuery("(max-width:480px)");
  const isTablet = useMediaQuery("(min-width:481px) and (max-width:1124px)");
  const isDesktop = useMediaQuery("(min-width:1125px)");

  const circleData = [
    { value: "20.5L", label: "Funding Secured" },
    { value: "70+", label: "Venture Incubated" },
    { value: "685+", label: "Patent published" },
    { value: "100+", label: "Startups Mentored" },
    { value: "100+", label: "Mentors" },
  ];

  const circleSize = isMobile || isTablet ? 280 : [190, 250, 290, 250, 190];
  const marginLeftValues = ["-80px", "-40px", "-30px", "-30px", "-50px"];
  const zIndexes = [1, 2, 3, 2, 1];

  return (
    <Box
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
        overflow: "hidden",
        py: 4,
      }}
    >
      <Typography
        variant="h4"
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
          loop={true}
          spaceBetween={20}
          slidesPerView={isMobile ? 1 : isTablet ? 2.2 : 3}
          style={{ width: "90%" }}
        >
          {circleData.map((item, index) => (
            <SwiperSlide key={index}>
              <Box
                data-aos="zoom-in"
                sx={{
                  width: circleSize,
                  height: circleSize,
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
                  mx: "auto",
                }}
              >
                <Typography
                  fontWeight="bold"
                  color="black"
                  sx={{ fontFamily: "var(--font-ui)", fontSize: "1.6rem" }}
                >
                  {item.value}
                </Typography>
                <Typography
                  color="#A01D3F"
                  sx={{
                    fontFamily: "var(--font-ui)",
                    mt: 1,
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {item.label}
                </Typography>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "nowrap",
            gap: 0,
          }}
        >
          {circleData.map((item, index) => (
            <Box
              key={index}
              data-aos="zoom-in"
              sx={{
                width: circleSize[index],
                height: circleSize[index],
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
                marginLeft: marginLeftValues[index],
                zIndex: zIndexes[index],
              }}
            >
              <Typography
                fontWeight="bold"
                color="black"
                sx={{ fontFamily: "var(--font-ui)", fontSize: "1.8rem" }}
              >
                {item.value}
              </Typography>
              <Typography
                color="#A01D3F"
                sx={{
                  fontFamily: "var(--font-ui)",
                  mt: 1,
                  fontSize: "1rem",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {item.label}
              </Typography>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default NumberSection;
