"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const logos = [
  "/assets/Start-up-logos/1. V2R AutoInfinite.jpg",
  "/assets/Start-up-logos/aasyra - Navneet Yaduvanshi.jpg",
  "/assets/Start-up-logos/Antrhonex- Aditya Raj Saxena.jpg",
  "/assets/Start-up-logos/ASME - arpit kumar.jpg",
  "/assets/Start-up-logos/DefensIQ Tech - ansh haritash.png",
  "/assets/Start-up-logos/EduAr - Mayank Dahiya.jpg",
  "/assets/Start-up-logos/EscapeKar - Harris Babbar.png",
  "/assets/Start-up-logos/Frii jal- Vedant Daware.jpg",
  "/assets/Start-up-logos/Inditech - Karan Aggrawal.png",
  "/assets/Start-up-logos/JIGYASA GARG.jpg",
  "/assets/Start-up-logos/Jagdev Organics.webp",
  "/assets/Start-up-logos/Juara Organics.png",
  "/assets/Start-up-logos/Kulhad - Anand Kumar.jpg",
  "/assets/Start-up-logos/PixelPeak- Aryan Mankotia.jpg",
  "/assets/Start-up-logos/TechHealth - TecHealth.PNG",
  "/assets/Start-up-logos/tHM LOGO - Abhishek Sharma.png",
  "/assets/Start-up-logos/UniifHub - Shekhar kashyap.jpg",
  "/assets/Start-up-logos/vedabox - SHAGUN SHARMA.jpg",
  "/assets/Start-up-logos/VeeGamma Logo- Vanshika.png",
  "/assets/Start-up-logos/Vidyutam Verde - Pulkesh Gautam.jpg",
  "/assets/eds_logo.webp",
  "/assets/Start-up-logos/xcomrade.jpg"
];

const StartupLogoCloud = () => {
  return (
    <section className="py-16 bg-gray-50 border-y border-gray-100">
      <div className="container mx-auto px-4">
         <div className="text-center mb-10">
            <span className="text-[#9E0203] font-black uppercase tracking-[0.4em] text-[10px]">Brand Identity</span>
            <h2 className="text-2xl font-black uppercase tracking-tighter mt-1">The Foundry Network</h2>
         </div>
         
         <Swiper
            modules={[Autoplay]}
            spaceBetween={40}
            slidesPerView={2}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 3 },
              900: { slidesPerView: 4 },
              1200: { slidesPerView: 6 },
            }}
            className="logo-swiper"
          >
            {logos.map((logo, index) => (
              <SwiperSlide key={index}>
                <div className="h-20 flex items-center justify-center opacity-70 hover:opacity-100 transition-all duration-500 cursor-pointer group">
                  <img 
                    src={logo} 
                    alt="Startup Logo" 
                    className="max-w-full max-h-full object-contain transform group-hover:scale-110 transition-transform" 
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
      </div>
    </section>
  );
};

export default StartupLogoCloud;
