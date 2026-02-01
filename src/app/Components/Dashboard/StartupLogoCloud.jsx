"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const logos = [
  "/assets/Start-up-logos/5(3 - Karan Agrawal.png",
  "/assets/Start-up-logos/1749710321866 - Aditya Raj Saxena.jpg",
  "/assets/Start-up-logos/file_00000000fa6861f8b46d40c35e6646b9_conversation_id=67fe9c73-e260-8006-bab2-ec35ca4f9089 - Juara Organics.png",
  "/assets/Start-up-logos/IMG-20231230-WA0023(2) - Anand Kumar.jpg",
  "/assets/Start-up-logos/IMG-20250208-WA0007 - Shekhar kashyap.jpg",
  "/assets/Start-up-logos/IMG-20250611-WA0000 - arpit kumar.jpg",
  "/assets/Start-up-logos/IMG-20250612-WA0000 - JIGYASA GARG.jpg",
  "/assets/Start-up-logos/IMG-20250612-WA0004 - Navneet Yaduvanshi.jpg",
  "/assets/Start-up-logos/IMG-20250612-WA0004 - SHAGUN SHARMA.jpg",
  "/assets/Start-up-logos/IMG-20250612-WA0005 - Mayank Dahiya.jpg",
  "/assets/Start-up-logos/Logo - Harris Babbar.png",
  "/assets/Start-up-logos/SAVE_20250611_152058 - Pulkesh Gautam.jpg",
  "/assets/Start-up-logos/Screenshot_2025-03-06-23-58-39-73_6012fa4d4ddec268fc5c7112cbb265e7 - Aryan Mankotia.jpg",
  "/assets/Start-up-logos/Screenshot_2025-06-12-18-15-12-052_com.whatsapp-edit - Vedant Daware.jpg",
  "/assets/Start-up-logos/stacked wordmark black - ansh haritash.png",
  "/assets/Start-up-logos/Techealth_logo - TecHealth.png",
  "/assets/Start-up-logos/tHM LOGO - Abhishek Sharma.png",
  "/assets/Start-up-logos/VeeGamma Logo Design in Gradient__endoftext__ - Vanshika.png",
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
                <div className="h-20 flex items-center justify-center opacity-40 hover:opacity-100 transition-all duration-500 cursor-pointer group grayscale hover:grayscale-0">
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
