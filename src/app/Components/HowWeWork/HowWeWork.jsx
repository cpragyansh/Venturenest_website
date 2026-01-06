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
import { styled } from "@mui/system";
import AOS from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const SectionContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: "4vh 1vw",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "2vw",
  backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url("/legacy.jpg")`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
}));

const SectionHeading = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-display)",
  fontSize: "clamp(1.6rem, 2.5vw, 2rem)",
  textTransform: "uppercase",
  fontWeight: 700,
  textAlign: "center",
  letterSpacing: "0.1em",
  color: "rgb(133, 41, 41)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem",
  flexWrap: "wrap",
}));

const StyledCard = styled(Card)(({ theme }) => ({
  padding: "1.5rem 0.1rem",
  borderRadius: "30px",
  border: "0px solid #A30D33",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.4s ease",
  textAlign: "center",
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  backgroundColor: "rgba(237, 237, 237, 0.9)",
  [theme.breakpoints.up("xs")]: {
    width: "100%",
    height: "16rem",
  },
  [theme.breakpoints.up("sm")]: {
    width: "46vw",
  },
  [theme.breakpoints.up("md")]: {
    width: "30vw",
  },
  [theme.breakpoints.up("lg")]: {
    width: "20vw",
    height: "80%",
    border: "0px solid #A30D33",
    textAlign: "center",
  },
  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: "0 6px 16px rgba(0, 0, 0, 0.2)",
    border: "8px solid #1b4880",
  },
}));

const StyledImage = styled("img")(({ theme }) => ({
  width: "clamp(50px, 6vw, 50px)",
  height: "clamp(50px, 6vw, 80px)",
  transition: "transform 0.5s ease",
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
}));

const supportPrograms = [
  {
    title: "Incubation Programs",
    description: "Tailored programs designed to guide startups through every stage of their journey, from ideation to market entry and growth.",
    img: "/assets/su-1.svg",
    delay: 200,
  },
  {
    title: "Mentorship Programs",
    description: "Expert guidance and mentorship from seasoned industry professionals, entrepreneurs and subject matter experts.",
    img: "/assets/su-2.svg",
    delay: 400,
  },
  {
    title: "Infrastructure & Facilities",
    description: "State-of-the-art workspace, laboratories, prototyping facilities and access to cutting-edge technologies.",
    img: "/assets/su-3.svg",
    delay: 600,
  },
  {
    title: "Funding Assistance",
    description: "Assistance in securing funding through investor connections, pitch events and access to venture capital firms and angel investors.",
    img: "/assets/su-4.svg",
    delay: 800,
  },
  {
    title: "Networking Opportunities",
    description: "Regular networking events, workshops, seminars, and industry collaborations to foster connections and partnerships.",
    img: "/assets/su-5.svg",
    delay: 1000,
  },
  {
    title: "Legal & Regulatory Support",
    description: "Guidance on legal and regulatory compliance, intellectual property rights, company registration and business incorporation.",
    img: "/assets/su-6.svg",
    delay: 1200,
  },
  {
    title: "Market Access & Validation",
    description: "Support in market research, validation, product development, and access to potential customers and markets.",
    img: "/assets/validation.svg",
    delay: 1400,
  },
  {
    title: "Alumni Support",
    description: "Continued support and guidance for alumni startups, including access to resources, mentorship and networking opportunities.",
    img: "/assets/alumni.svg",
    delay: 1600,
  },
];

const HowWeSupportYou = () => {
  const theme = useTheme();
  const isTabletOrMobile = useMediaQuery(theme.breakpoints.down("lg"));

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
          src="/assets/helpyou-section-2-img.svg"
          alt="Icon"
          width={isTabletOrMobile ? 30 : 40}
          height={isTabletOrMobile ? 30 : 40}
        />
        HOW WE SUPPORT YOU
      </SectionHeading>

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