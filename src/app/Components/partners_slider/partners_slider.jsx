import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const partners = [
  { name: "Hover", img: "/assets/partners_logos/hover.png" },
  { name: "Innovation Punjab", img: "/assets/partners_logos/inovation_punjab.png" },
  { name: "MentorX", img: "/assets/partners_logos/mentorX.png" },
  { name: "PSCST", img: "/assets/partners_logos/pscst.png" },
  { name: "Indian-accelerator", img: "/assets/Accelerator Partners/india_accelerator_logo.jpeg" },
  { name: "wadhwani Foundations", img: "/assets/Accelerator Partners/wadhwanifoundation.png" },
  { name: "4. ADIF Logo", img: "/assets/3. Collaborative Ecosystem Partners/4. ADIF Logo.png" },
  { name: "5. IISER Mohali ", img: "/assets/3. Collaborative Ecosystem Partners/5. IISER Mohali .png" },
  { name: "13. Future University", img: "/assets/3. Collaborative Ecosystem Partners/13. Future University .png" },
  { name: "15. RevUp-2", img: "/assets/3. Collaborative Ecosystem Partners/15. RevUp-2.png" },
  { name: "18. vliif-png", img: "/assets/3. Collaborative Ecosystem Partners/18. vliif-png.png" },
  { name: "2. Marwari Catalysts", img: "/assets/2. Strategic Investment Partners/2. Marwari Catalysts.jpeg" },
  { name: "4. Lucr8-Ventures", img: "/assets/2. Strategic Investment Partners/4. Lucr8-Ventures-.jpg.webp" },
  { name: "6. Ludhiana Angel Network", img: "/assets/2. Strategic Investment Partners/6. Ludhiana Angel Network .png" },
  { name: "9. ekara_logo_hd", img: "/assets/2. Strategic Investment Partners/9. ekara_logo_hd_sharpened.png" },
];

const PartnersSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundImage: `url('/assets/corosuel-bg.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        py: { xs: 4, md: 8 },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="xxl" sx={{ textAlign: "center" }}>
        {/* Heading */}
        <Typography
          variant="h4"
          fontWeight="bold"
          color="white"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.4rem" },
            mb: { xs: 3, md: 4 },
          }}
        >
          <img
            src="/assets/partner.svg"
            alt="Partner Icon"
            style={{ width: "35px", height: "35px", objectFit: "contain" }}
          />
          Associations & Partners
        </Typography>

        {/* Swiper Slider */}
        <Box sx={{ mt: 2, px: { xs: 2, md: 4 } }}>
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 1500, disableOnInteraction: false }}
            loop={true}
            spaceBetween={30}
            breakpoints={{
              0: { slidesPerView: 2 },
              480: { slidesPerView: 2 },
              768: { slidesPerView: 2 },
              900: { slidesPerView: 3 },
              1024: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
              1340: { slidesPerView: 5 },
            }}
          >
            {partners.map((partner, index) => (
              <SwiperSlide key={index}>
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "30px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    p: { xs: 2, md: 3 },
                    height: { xs: "35vw", sm: "35vw", md: "25vw",lg:"16vw" },
                    width: { xs: "35vw", sm: "35vw", md: "25vw",lg:"16vw" },
                    // maxWidth: "150px",
                    // maxHeight: "10px",
                    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                    mx: "auto",
                  }}
                >
                  <img
                    src={partner.img}
                    alt={partner.name}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
};

export default PartnersSection;
