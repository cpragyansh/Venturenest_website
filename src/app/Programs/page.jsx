// "use client";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { ArrowRight, CalendarToday, AccessTime } from "@mui/icons-material";

// --- Components ---

const SectionHeader = () => (
  <motion.header
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className="relative flex flex-col items-center text-center max-w-4xl mx-auto pt-16 mb-24 px-6"
  >
    {/* Subtle Background Blob */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-b from-[#A40C1A]/5 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

    <h1
      className={`text-4xl md:text-5xl lg:text-6xl mb-6 font-bold text-[#A40C1A]`}
      style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}
    >
      Our Programs
    </h1>
    <p
      className={`text-lg md:text-xl max-w-2xl leading-relaxed text-gray-600`}
      style={{ fontFamily: 'var(--font-reading)' }}
    >
      Empowering innovators with structured pathways to success.
      From ideation to scaling, find the program that fits your journey.
    </p>
  </motion.header>
);

const ProgramCard = ({ program, index }) => {
  const createSlug = (name) => {
    return name
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return {
      day: date.getDate(),
      month: date.toLocaleString("default", { month: "short" }).toUpperCase(),
      year: date.getFullYear()
    };
  };

  const { day, month, year } = formatDate(program.programDate);

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col h-full bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-gray-100 relative"
    >
      {/* Image Container */}
      <Link to={`/Programs/${createSlug(program.programName)}`} className="relative block h-64 overflow-hidden">
        <motion.img
          src={program.imageUrl}
          alt={program.programName}
          className="w-full h-full object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

        {/* Date Badge - Inspired by Event Details */}
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-2 rounded-xl shadow-lg flex flex-col items-center min-w-[60px] border border-gray-100">
          <span className="text-xs font-bold text-[#A40C1A] uppercase tracking-wider">{month}</span>
          <span className="text-2xl font-bold text-gray-900 leading-none font-display">{day}</span>
          <span className="text-[10px] text-gray-500 font-medium">{year}</span>
        </div>
      </Link>

      <div className="flex-1 flex flex-col p-8">
        <h3
          className={`text-2xl font-bold leading-tight text-[#A40C1A] group-hover:text-[#1A4880] transition-colors duration-300 mb-2`}
          style={{ fontFamily: 'var(--font-display)' }}
        >
          <Link to={`/Programs/${createSlug(program.programName)}`}>
            {program.programName}
          </Link>
        </h3>

        <h4 className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wide">
          {program.programTitle}
        </h4>

        <p
          className={`text-sm leading-relaxed mb-6 line-clamp-3 text-gray-600`}
          style={{ fontFamily: 'var(--font-ui)' }}
        >
          {program.programDescription}
        </p>

        <div className="mt-auto pt-6 border-t border-gray-100">
          <Link
            to={`/Programs/${createSlug(program.programName)}`}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1A4880] hover:text-[#A40C1A] transition-colors duration-300 group/link"
          >
            Explore Program
            <ArrowRight className="text-lg transform group-hover/link:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

export default function Programs() {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await axios.get("https://venturenest.onrender.com/programs");
        setPrograms(response.data);
      } catch (error) {
        console.error("Error fetching programs:", error);
      }
    };
    fetchPrograms();
  }, []);

  const createSlug = (name) => {
    if (!name) return "";
    return name.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
  };


  return (
    <main className="min-h-screen w-full pb-32" style={{
      color: 'var(--color-foreground)',
    }}>
      <SectionHeader />

      {/* Featured Carousel */}
      {programs.length > 0 && (
        <section className="max-w-[95vw] lg:max-w-7xl mx-auto px-4 md:px-8 mb-24">
          <Swiper
            modules={[Autoplay, Pagination, EffectFade, Navigation]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            effect="fade"
            loop
            className="rounded-3xl shadow-2xl overflow-hidden aspect-[16/9] md:aspect-[21/9]"
          >
            {programs.slice(0, 5).map((program) => (
              <SwiperSlide key={program._id} className="relative w-full h-full bg-black">
                <img
                  src={program.imageUrl}
                  alt={program.programName}
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full md:w-2/3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-white uppercase bg-[#c8102e] rounded-full">
                      Featured Program
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-display leading-tight">
                      {program.programName}
                    </h2>
                    <p className="text-gray-200 text-lg mb-8 line-clamp-2 max-w-xl">
                      {program.programDescription}
                    </p>
                    <Link
                      to={`/Programs/${createSlug(program.programName)}`}
                      className="inline-flex items-center px-8 py-3 bg-white text-[#A40C1A] font-bold rounded-full hover:bg-gray-100 transition-colors shadow-lg"
                    >
                      View Details
                    </Link>
                  </motion.div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      )}

      {/* Programs Grid */}
      <section className="max-w-[90vw] lg:max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {programs.map((program, index) => (
            <ProgramCard key={program._id} program={program} index={index} />
          ))}
        </motion.div>

        {programs.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            Loading programs...
          </div>
        )}
      </section>

    </main>
  );
}
