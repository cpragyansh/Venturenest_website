"use client";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const ProgramsSection = () => {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const swiperRef = useRef(null);

  const createSlug = (name) => {
    return name
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await axios.get((window.API_BASE_URL || (window.API_BASE_URL || (window.API_BASE_URL || 'https://venturenestbackend.cgcuniversity.in'))) + '/programs');
        setPrograms(response.data);
      } catch (error) {
        console.error("Error fetching programs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPrograms();
  }, []);

  return (
    <section id="programs" className="py-12 bg-white font-jakarta overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Compact Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
          <div className="max-w-2xl">
            <span className="text-[#A40C1A] font-bold text-sm uppercase tracking-[0.3em] block mb-2">Global Opportunities</span>
            <h2 className="text-3xl md:text-5xl font-black text-[#1a1a1a] tracking-tight leading-none uppercase">
              Education Beyond Borders
            </h2>
          </div>
          
          <div className="flex items-center gap-3">
            <a 
              href="/IncubateWithUs" 
              className="hidden md:flex bg-[#A40C1A] text-white px-6 py-2.5 rounded-full font-bold text-xs tracking-widest uppercase items-center hover:bg-black transition-all shadow-md group"
            >
              APPLY NOW <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <div className="flex gap-2">
              <button 
                onClick={() => swiperRef.current?.swiper.slidePrev()}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#A40C1A] hover:border-[#A40C1A] hover:text-white transition-all z-10"
              >
                <ArrowBackIosNewIcon sx={{ fontSize: 16 }} />
              </button>
              <button 
                onClick={() => swiperRef.current?.swiper.slideNext()}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#A40C1A] hover:border-[#A40C1A] hover:text-white transition-all z-10"
              >
                <ArrowForwardIosIcon sx={{ fontSize: 16 }} />
              </button>
            </div>
          </div>
        </div>

        {/* Compact Stats Bar */}
        <div className="flex flex-wrap items-center gap-x-12 gap-y-4 mb-10 pb-6 border-b border-gray-100">
           {[
             { label: "Countries", value: "70+" },
             { label: "Collabs", value: "300+" },
             { label: "Programs", value: "100+" },
             { label: "Mentors", value: "50+" }
           ].map((stat, i) => (
             <div key={i} className="flex items-baseline gap-2">
               <span className="text-2xl font-black text-[#A40C1A]">{stat.value}</span>
               <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{stat.label}</span>
             </div>
           ))}
        </div>

        {/* Swiper Slider */}
        <div className="relative">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-[16/10] bg-gray-100 animate-pulse rounded-xl"></div>
              ))}
            </div>
          ) : (
            <Swiper
              ref={swiperRef}
              modules={[Navigation, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              autoplay={{ delay: 5000 }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="programs-swiper pb-5"
            >
              {programs.map((program, idx) => (
                <SwiperSlide key={program._id || idx}>
                  <Link to={`/Programs/${createSlug(program.programName)}`} className="block cursor-pointer">
                    <motion.div
                      className="group relative aspect-[16/10] overflow-hidden rounded-xl shadow-lg border border-gray-100"
                    >
                      <img 
                        src={program.imageUrl} 
                        alt={program.programName}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent"></div>
                      
                      <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                        <h3 className="text-xl md:text-2xl font-black mb-1 uppercase tracking-tight leading-[1.1]">
                          {program.programName}
                        </h3>
                        <p className="text-[10px] md:text-xs font-medium leading-relaxed opacity-80 line-clamp-2">
                          {program.programDescription}
                        </p>
                      </div>
                    </motion.div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
