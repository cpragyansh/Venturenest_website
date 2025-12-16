
// // // "use client"
import React, { useEffect } from "react";
import { Box, Typography, Grid, Button, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Card, CardContent} from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';

import Fade from '@mui/material/Fade';
// Small SVG icons for style
const CheckIcon = () => (
  <svg
    style={{ marginRight: 10 }}
    xmlns="http://www.w3.org/2000/svg"
    fill="#A30D33"
    height="24"
    viewBox="0 0 24 24"
    width="24"
  >
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
  </svg>
);

export default function AboutPage() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const isMobile = useMediaQuery("(max-width:768px)");

  const hoverEffect = {
    scale: 1.04,
    boxShadow: "0 20px 45px rgba(163, 13, 51, 0.45)",
  };

  return (
    <Box sx={{ bgcolor: "#fdf6f7", minHeight: "100vh", fontFamily: "'Poppins', sans-serif",overflow:"hidden" }}>


 
      {/* Hero Section */}
      <Box
        sx={{
          height: isMobile ? 300 : 500,
          backgroundImage: `linear-gradient(135deg, rgba(163,13,51,0.85), rgba(69,3,19,0.85)), url('/assets/hero-about.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "#fff",
          px: 3,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Typography
            variant={isMobile ? "h4" : "h1"}
            fontWeight={900}
            sx={{ letterSpacing: "0.15em", textTransform: "uppercase", textShadow: "4px 4px 15px rgba(0,0,0,0.7)" }}
          >
            VentureNest
          </Typography>
          <Typography
            variant={isMobile ? "h6" : "h4"}
            fontWeight={600}
            sx={{ mt: 1, maxWidth: 600, mx: "auto", letterSpacing: "0.05em", lineHeight: 1.5 }}
          >
            The premier Entrepreneurship Incubation Centre at CGC University,  Mohali.
          </Typography>
          {/* <Button
            variant="contained"
            sx={{
              mt: 4,
              bgcolor: "#A30D33",
              px: 5,
              py: 1.5,
              fontWeight: 700,
              borderRadius: 3,
              boxShadow: "0 6px 20px rgba(163,13,51,0.5)",
              "&:hover": { bgcolor: "#750928", boxShadow: "0 10px 30px rgba(163,13,51,0.7)" },
            }}
            whileHover={{ scale: 1.05 }}
          >
            Learn More
          </Button> */}
        </motion.div>
      </Box>
      <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12 max-w-[80vw] mx-auto">
        
        {/* Image Side */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <div className="shadow-2xl rounded-xl overflow-hidden border border-gray-200 p-2 bg-white max-w-lg">
            <img
              src="/assets/chairman.png"
              alt="Chairman Rashpal Singh Dhaliwal"
              width={600}
              height={600}
              className="rounded-lg object-cover"
              priority
            />
          </div>
        </div>

        {/* Text Side */}
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#9A0036]">
            S. Rashpal Singh Dhaliwal
          </h2>
          <p className="text-sm font-semibold text-gray-800 uppercase mt-1 mb-4">
            Chancellor, CGC University, Mohali
          </p>

          {/* Custom Decorative Line */}
          <div className="flex items-center mb-6">
            <div className="h-1 w-20 bg-[#9A0036] mr-2"></div>
            <div className="h-1 w-14 bg-gray-700 mr-2"></div>
            <div className="h-1 w-6 bg-[#9A0036]"></div>
          </div>

          {/* Message Paragraph */}
          <p className="text-black text-[1.02vw] text-justify font-[400]  chairmans-main-paragraph">
            Welcome to VenturesNest Association
            <br /><br />
            The entrepreneurial association at CGC University, dedicated to fostering innovation, leadership, and startup culture among students.

            <br /><br />

VenturesNest Association was established with the purpose of encouraging entrepreneurial thinking and providing a dynamic platform for aspiring founders, innovators, and change makers at CGC. The association aims to inspire and guide students in transforming their ideas into impactful ventures.
            <br /><br />
In an era defined by innovation and global interconnectivity, the focus remains on building essential skills such as confidence, critical thinking, problem-solving, and research aptitude. Independent learning and proactive engagement are at the core of every initiative.          
          </p>
        </div>
      </div>
    </section>
      <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12 max-w-[80vw] mx-auto">
         {/* Text Side */}
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#9A0036]">
            Mr. Arsh Dhaliwal
          </h2>
          <p className="text-sm font-semibold text-gray-800 uppercase mt-1 mb-4">
            Managing Director, CGC University, Mohali
          </p>

          {/* Custom Decorative Line */}
          <div className="flex items-center mb-6">
            <div className="h-1 w-20 bg-[#9A0036] mr-2"></div>
            <div className="h-1 w-14 bg-gray-700 mr-2"></div>
            <div className="h-1 w-6 bg-[#9A0036]"></div>
          </div>

          {/* Message Paragraph */}
          <p className=" text-black text-[1.02vw] text-justify font-[400]  chairmans-main-paragraph">
At CGC University, we have always stood for innovation, quality education, and student success. Today, I am proud to introduce the VenturesNest Association — A strategic initiative to cultivate entrepreneurship, industry collaboration, and real-world innovation within our campus.
<br /><br />
VenturesNest is envisioned as a launchpad for aspiring entrepreneurs and a hub for startup incubation and global partnerships. It reflects our goal of bridging academic learning with practical impact, empowering students to become visionary leaders and changemakers.       
     <br /><br /> 
With this, CGC University takes another firm step toward global relevance, reaffirming our commitment to excellence and future-ready education.
<br></br>
{/* Thank you for your continued trust in us. */}
</p>

        </div>
        {/* Image Side */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <div className="shadow-2xl rounded-xl overflow-hidden border border-gray-200 p-2 bg-white max-w-lg">
            <img
              src="/assets/md.png"
              alt="Chairman Rashpal Singh Dhaliwal"
              width={600}
              height={600}
              className="rounded-lg object-cover"
              priority
            />
          </div>
        </div>

       
      </div>
    </section>

    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12 max-w-[80vw] mx-auto">
        
        {/* Image Side */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <div className="shadow-2xl rounded-xl overflow-hidden border border-gray-200 p-2 bg-white max-w-lg">
            <img
              src="/assets/ceo-incubator.jpg"
              alt="Chairman Rashpal Singh Dhaliwal"
              width={600}
              height={600}
              className="rounded-lg object-cover"
              priority
            />
          </div>
        </div>

        {/* Text Side */}
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#9A0036]">
            Dr. Ati Priye
          </h2>
          <p className="text-sm font-semibold text-gray-800 uppercase mt-1 mb-4">
           CEO, Incubator & Startups - CGC University, Mohali
          </p>

          {/* Custom Decorative Line */}
          <div className="flex items-center mb-6">
            <div className="h-1 w-20 bg-[#9A0036] mr-2"></div>
            <div className="h-1 w-14 bg-gray-700 mr-2"></div>
            <div className="h-1 w-6 bg-[#9A0036]"></div>
          </div>

          {/* Message Paragraph */}
          <p className="text-black text-[1.02vw] text-justify font-[400]  chairmans-main-paragraph">
At CGC University, innovation is a way of life. I am proud to introduce the VenturesNest Association, a transformative initiative under our Incubation Center that aims to foster entrepreneurship and drive startup growth across campus.
            <br /><br />
VenturesNest is designed to be a catalyst for student-led innovation—providing mentorship, infrastructure, funding guidance, and industry exposure to turn promising ideas into scalable ventures. It brings together talent, technology, and teamwork to build a thriving startup ecosystem within CGC University.
            <br /><br />
Through VenturesNest, we envision empowering a new generation of entrepreneurs who are equipped to tackle real-world challenges and create meaningful impact. This is more than an initiative—it’s a movement to build the future.
          </p>
        </div>
      </div>
    </section>


      {/* Content Sections */}
      <Box sx={{ maxWidth: {xs:"100%", sm:"100%",lg:"80%"}, mx: "auto", mt: { xs: 6, md: 10 }, px: 3 }}>
        {[

          {
            title: "How We Work",
            image: "/assets/about-how-we-work.jpg",
            description: [
              "VentureNest operates as a dynamic startup ecosystem designed to empower visionary entrepreneurs and early-stage startups.",
              "Our programs are structured to guide startups from ideation and validation to market entry and growth.",
            ],
            features: [
              "Comprehensive mentorship from industry experts",
              "Access to cutting-edge tech resources",
              "Workshops on funding, marketing and legal aspects",
              "Networking events with investors and corporates",
            ],
            reverse: false,
          },

          {
            title: "Our Impact",
            image: "/assets/our-impact-img-photo.jpg",
            description: [
              "Since inception, we've empowered over 70+ ventures by connecting them with right mentorship, funding and strategic partnerships.",
              "Our ventures span sectors like technology, healthcare, education and sustainability.",
            ],
            features: [
              "70+ Ventures incubated",
              "20+ successful product launches",
              "Global accelerator collaborations",
              "Provided funding opportunities up to ₹12 Cr",
            ],
            reverse: true,
          },

          {
            title: "Support & Infrastructure",
            image: "/assets/team-collab.heic",
            description: [
              "Our co-working space offers high-speed internet, Meeting Rooms, and Tech Infrastructure to nurture startups professionally.",
              "We provide legal, financial and technical guidance via our expert team.",
            ],
            features: [
              "24*7 access to workspace",
              "Dedicated tech & business mentors",
              "State-of-the-art meeting room, Maker’s Space, Networking Hall, Business Strategy Room, Happiness Center, and Tech Infrastructure. ",
              "IPR Legal , Menoring services and all other services.",
            ],
            reverse: false,
          },

          {
            title: "Collaborations & Events",
            image: "/assets/event-support.heic",
            description: [
              "We host regular pitch sessions, workshops, and networking events that connect founders with investors and industry leaders.",
              "Our global partnerships help drive innovation and provide startups access to wider markets.",
            ],
            features: [
              "Monthly pitch events",
              "Workshops by industry leaders",
              "Partnerships with accelerators & corporates",
              "Exclusive investor meetups",
            ],
            reverse: true,
          },
        ].map(({ title, image, description, features, reverse }, idx) => (
          <Grid
            container
            key={idx}
            spacing="4vw"
             direction={isMobile ? "column" : reverse ? "row-reverse" : "row"}
            sx={{
              my: 10,
              // flexDirection: isMobile ? "column" : reverse ? "row-reverse" : "row",
              alignItems: "center",
              }}
            data-aos={reverse ? "fade-left" : "fade-right"}
          >
            {/* Image */}
            <Grid item xs={12} md={6}>
              <motion.div
                whileHover={hoverEffect}
                transition={{ duration: 0.4 }}
                style={{
                  borderRadius: 16,
                  overflow: "hidden",
                  boxShadow: "0 15px 40px rgba(163,13,51,0.25)",
                  cursor: "pointer",
                }}
              >
               <Box
  component="img"
  src={image}
  alt={title}
  loading="lazy"
  sx={{
    width: { sm: "100%", md:"",lg: "30vw" },
    height: 400,
    objectFit: "cover"
  }}
/>
              </motion.div>
            </Grid>

            {/* Text Content */}
            <Grid item xs={12} md={6}>
              <Typography
                // variant={isMobile ? "h5" : "h4"}
                fontWeight={700}
                sx={{
                  mb: 3,
                  color: "#A30D33",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontSize:{xs:"8vw",sm:"0.9vw",md:"2vw",lg:"2vw"}
                }}
              >
                {title}
              </Typography>

              {description.map((para, i) => (
                <Typography
                  key={i}
                  variant="body1"
                  sx={{
                    mb: 3,
                    fontSize: {sm:"1rem" , md:"1vw",lg:"1.15rem"},
                    fontWeight: 500,
                    color: "#4a4a4a",
                    lineHeight: 1.8,
                    width:{xs:"100%" , md:"50vw",lg:"35vw"},
                     fontSize:{xs:"4.6vw",sm:"0.9vw",md:"2vw",lg:"1.3vw"}
                  }}
                >
                  {para}
                </Typography>
              ))}

              {/* Features list */}
              <Box sx={{ mt: 2 }}>
                {features.map((feat, i) => (
                  <Box
                    key={i}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 1.5,
                      color: "#6f1d3f",
                      fontWeight: 600,
                      fontSize: {sm:"1rem" , lg:"1.1rem"},
                          width:{xs:"100%" , lg:"40vw"}
                    }}
                  >
                    <CheckIcon />
                    {feat}
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>



        ))}
      </Box>

      {/* Final Call to Action Section */}
      <Box
        sx={{
          mt: 10,
          py: 8,
          bgcolor: "#A30D33",
          color: "white",
          textAlign: "center",
          px: 3,
          borderRadius: 4,
          mx: "auto",
          maxWidth: 800,
          boxShadow: "0 12px 40px rgba(163,13,51,0.7)",
        }}
        data-aos="zoom-in"
      >
        <Typography variant={isMobile ? "h5" : "h3"} fontWeight={900} gutterBottom>
          Ready to Turn Your Idea into Reality?
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, fontWeight: 600, fontSize: "1.1rem" }}>
          Join VentureNest today and take the first step toward building a successful startup with our expert guidance and network.
        </Typography>
        
        <a href="/IncubateWithUs">
        <Button
          variant="contained"
          size="large"
          sx={{
            bgcolor: "#fff",
            color: "#A30D33",
            fontWeight: 700,
            px: 6,
            py: 1.5,
            borderRadius: 3,
            "&:hover": { bgcolor: "#f7c1c9", color: "#6f1d3f" },
            boxShadow: "0 8px 30px rgba(255,255,255,0.4)",
          }}
        >
          Apply Now
        </Button>
        </a>
      </Box>
      <Box sx={{ bgcolor: '#f4f6f8', py: 8 }}>
      <Container maxWidth="lg">
        <Fade in timeout={1000}>
          <Card elevation={4} sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, borderRadius: 3 }}>
            {/* Image Section */}
            <Box
              component="img"
              src="/assets/iso-certified.png"
              alt="ISO Certified"
              sx={{
                width: { xs: '50%', md: '20%' },
                objectFit: 'cover',
                borderTopLeftRadius: 12,
                borderBottomLeftRadius: { md: 12 },
                borderTopRightRadius: { xs: 12, md: 0 },
                padding:"1vw"
              }}
            />

            {/* Content Section */}
            <CardContent sx={{ p: 4, flex: 1 }}>
              <Box display="flex" alignItems="center" mb={2}>
                <VerifiedIcon sx={{ fontSize: 40, color: '#2e7d32', mr: 2 }} />
                <Typography variant="h5" fontWeight="bold">
                  ISO 9001:2015 Certified
                </Typography>
              </Box>
              <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                We are proud to be ISO 9001:2015 certified, reflecting our commitment to maintaining the highest standards in quality management and continuous improvement. This certification ensures that we consistently deliver exceptional services and value to our stakeholders.
              </Typography>
            </CardContent>
          </Card>
        </Fade>
      </Container>
    </Box>
    </Box>
  );
}
