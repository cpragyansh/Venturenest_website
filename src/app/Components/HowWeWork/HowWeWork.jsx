"use client";
import React, { useEffect } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { height, styled, textAlign } from "@mui/system";
import AOS from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Styled Components
const SectionContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: "4vh 1vw",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "2vw",
<<<<<<< Updated upstream
  backgroundColor: "white",
=======
  position: "relative",
  zIndex: 0,
  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.5)",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: `url("/legacy.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    opacity: 0.25,
    zIndex: -1,
  },
>>>>>>> Stashed changes
}));

const SectionHeading = styled(Typography)(({ theme }) => ({
  fontFamily: '"Plus Jakarta Sans", sans-serif',
  fontSize: "clamp(3.5rem, 2.5vw, 2rem)",
  textTransform: "uppercase",
  fontWeight: 999,
  textAlign: "center",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.42)",
  letterSpacing: "0.1em",
  color: "rgba(27, 72, 128, 1)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem",
  flexWrap: "wrap",
}));

const StyledCard = styled(Card)(({ theme }) => ({
  padding: "1.5rem 0.1rem",
  borderRadius: "30px",
<<<<<<< Updated upstream
  border: "2px solid #1b4880",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  transition:
    "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.4s ease",
=======
  border: "0px solid #A30D33",
  boxShadow: "0 4px 12px rgba(27, 72, 128, 0.42)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.4s ease",
>>>>>>> Stashed changes
  textAlign: "center",
  height: "100%",
  width: "100%", // Default width

  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  backgroundColor: "#d9d9d9",

  [theme.breakpoints.up("xs")]: {
    width: "100%",
    height: "16rem"
  },
  [theme.breakpoints.up("sm")]: {
    width: "46vw",
  },
  [theme.breakpoints.up("md")]: {
    width: "30vw",
  },
  [theme.breakpoints.up("lg")]: {
    width: "20vw",
<<<<<<< Updated upstream
    height: "80%",
    border: "4px solid #1b4880",
    textAlign: "center"
=======
    height: "90%",
    border: "0px solid #A30D33",
    textAlign: "center",
>>>>>>> Stashed changes
  },

  "&:hover": {
    transform: "translateY(-10px)",
<<<<<<< Updated upstream
    boxShadow: "0 6px 16px rgba(0, 0, 0, 0.2)",
    // backgroundColor: "#A30D33",
    color: "white",
    border:"8px solid #1b4880",
   
=======
    boxShadow: "0 8px 24px rgba(27, 72, 128, 0.42)",
    // border: "6px solid rgba(27, 72, 128, 1)",
>>>>>>> Stashed changes
  },

}));


const StyledImage = styled("img")(({ theme }) => ({
  width: "clamp(50px, 6vw, 50px)",
  height: "clamp(50px, 6vw, 80px)",
  transition: "transform 0.3s ease",
  marginBottom: "0.8rem",

  "&:hover": {
    transform: "scale(1.1)",
  },
}));

const ProgramTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-ui)",
  fontWeight: 600,
  fontSize: "clamp(1rem, 1.1vw, 1.5rem)",
  marginTop: "0.5rem",
  textAlign: "center",
  lineHeight: 1.3,
  letterSpacing: "0.02em",
  color: "#2C2C2C",
}));

const ProgramDescription = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-ui)",
  textAlign: "center",
  fontSize: "clamp(0.95rem, 1vw, 1.25rem)",
  fontWeight: 400,
  lineHeight: 1.6,
  color: "#555",
  marginTop: "0.8rem",
  padding: "0 0.5rem",
  letterSpacing: "0.01em",
  // width:"100%",
  [theme.breakpoints.up("xs")]: {

  },
  [theme.breakpoints.up("sm")]: {
  },
  [theme.breakpoints.up("md")]: {
  },
  [theme.breakpoints.up("lg")]: {
  },
}));

const supportPrograms = [
  {
    title: "Incubation Programs",
    description:
      "Tailored programs designed to guide startups through every stage of their journey, from ideation to market entry and growth.",
    img: "/assets/su-1.svg",
    delay: 200,
  },
  {
    title: "Mentorship Programs",
    description:
      "Expert guidance and mentorship from seasoned industry professionals, entrepreneurs and subject matter experts.",
    img: "/assets/su-2.svg",
    delay: 400,
  },
  {
    title: "Infrastructure & Facilities",
    description:
      "State-of-the-art workspace, laboratories, prototyping facilities and access to cutting-edge technologies.",
    img: "/assets/su-3.svg",
    delay: 600,
  },
  {
    title: "Funding Assistance",
    description:
      "Assistance in securing funding through investor connections, pitch events and access to venture capital firms and angel investors.",
    img: "/assets/su-4.svg",
    delay: 800,
  },
  {
    title: "Networking Opportunities",
    description:
      "Regular networking events, workshops, seminars, and industry collaborations to foster connections and partnerships.",
    img: "/assets/su-5.svg",
    delay: 1000,
  },
  {
    title: "Legal & Regulatory Support",
    description:
      "Guidance on legal and regulatory compliance, intellectual property rights, company registration and business incorporation.",
    img: "/assets/su-6.svg",
    delay: 1200,
  },
  {
    title: "Market Access & Validation",
    description:
      "Support in market research, validation, product development, and access to potential customers and markets.",
    img: "/assets/validation.svg",
    delay: 1400,
  },
  {
    title: "Alumni Support",
    description:
      "Continued support and guidance for alumni startups, including access to resources, mentorship and networking opportunities.",
    img: "/assets/alumni.svg",
    delay: 1600,
  },
];

const HowWeSupportYou = () => {
  const theme = useTheme();
  const isTabletOrMobile = useMediaQuery(theme.breakpoints.down("lg")); // lg = 1200px

  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({
        offset: 200,
        duration: 1000,
        easing: "ease",
        delay: 100,
        once: true,
        mirror: false,
      });
    }
  }, []);

  return (
    <SectionContainer>
      <SectionHeading
        variant="h1"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-out"
      >
        <img
          src="/assets/newImage.svg"
          alt="Icon"
          style={{
            color: "rgba(27, 72, 128, 0.42)",
            marginRight: "-30px",
          }}
          width={isTabletOrMobile ? 150 : 160}
          height={isTabletOrMobile ? 150 : 160}
        />
        HOW WE SUPPORT YOU
      </SectionHeading>

      {/* Mobile / Tablet View: Swiper */}
      {isTabletOrMobile ? (
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
            // 1200:{slidesPerView: 4 },
            // 1600:{slidesPerView: 5 },
          }}
          style={{ width: "100%", padding: "1rem 0.5rem" }}
        >
          {supportPrograms.map((program, index) => (
            <SwiperSlide key={index}>
              <Box sx={{ p: 0, mb: 2 }}>
                <StyledCard>
                  <StyledImage src={program.img} alt={program.title} />
                  <CardContent>
                    <ProgramTitle variant="h6">{program.title}</ProgramTitle>
                    <ProgramDescription variant="body2">
                      {program.description}
                    </ProgramDescription>
                  </CardContent>
                </StyledCard>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        // Desktop View: Grid
        <Grid container spacing={4} justifyContent="center">
          {supportPrograms.map((program, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={index}
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay={program.delay}
              data-aos-easing="ease-out"
            >
              <Box sx={{ height: "100%" }}>
                <StyledCard>
                  <StyledImage src={program.img} alt={program.title} />
                  <CardContent>
                    <ProgramTitle variant="h6">{program.title}</ProgramTitle>
                    <ProgramDescription variant="body2">
                      {program.description}
                    </ProgramDescription>
                  </CardContent>
                </StyledCard>
              </Box>
            </Grid>
          ))}
        </Grid>
      )}
    </SectionContainer>
  );
};

export default HowWeSupportYou;
