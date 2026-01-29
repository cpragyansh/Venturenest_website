"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer";

const MagazineCard = ({ month, year, image }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
  >
    <div className="aspect-[3/4] overflow-hidden bg-gray-100">
      <img 
        src={image || "/assets/placeholder_mag.jpg"} 
        alt={`Campus to Corporate - ${month} ${year}`}
        className="w-full h-full object-cover"
        onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1544928147-7972fc03f231?q=80&w=600&auto=format&fit=crop"; }}
      />
    </div>
    <div className="p-4 flex items-center gap-3">
      <div className="w-1 h-6 bg-[#9E0203]"></div>
      <span className="font-bold text-gray-800 text-lg">
        {month}, {year}
      </span>
    </div>
  </motion.div>
);

const VenturePulseFullPage = () => {
  const magazineData = [
    { month: "November", year: "2025", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop" },
    { month: "October", year: "2025", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop" },
    { month: "September", year: "2025", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop" },
    { month: "August", year: "2025", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop" },
    { month: "July", year: "2025", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop" },
    ];

  return (
    <>
    <div className="min-h-screen bg-[#F5F5F5] font-jakarta">


      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-center bg-black overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop" 
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          alt="E-Magazine Hero"
        />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-white space-y-2"
          >
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight">E Magazine</h1>
            <p className="text-lg md:text-xl font-medium opacity-80">Delivering trusted information</p>
          </motion.div>
        </div>
        {/* Blue Ribbon Element (Top Rightish) */}
        <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 rotate-90 origin-right">
            <div className="bg-[#0099FF] text-white px-10 py-2 font-black uppercase tracking-widest text-xs whitespace-nowrap shadow-lg">
                APPLY NOW
            </div>
        </div>
      </section>

      {/* Breadcrumb Section */}
      <div className="bg-[#EFEFEF] py-4 border-b border-gray-200">
        <div className="container mx-auto px-6">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">
            Home <span className="mx-2 opacity-30">/</span> <span className="text-[#9E0203]">E-Magazine</span>
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          
          {/* Magazine Display Area */}
          <div className="w-full space-y-12">
            <div className="space-y-4 text-center flex flex-col items-center">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#9E0203]"></div>
                <h2 className="text-3xl md:text-4xl font-black text-gray-800 uppercase tracking-tight">Magazine</h2>
                <div className="w-2 h-2 rounded-full bg-[#9E0203]"></div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <h3 className="text-xl md:text-2xl font-bold text-[#9E0203] uppercase tracking-wide">
                  Campus to Corporate e-magazine
                </h3>
                <div className="w-24 h-[3px] bg-[#9E0203]"></div>
              </div>
              <p className="text-base text-gray-600 leading-relaxed pt-2 max-w-4xl font-medium mx-auto">
                Campus to Corporate Magazine is a pioneering initiative by CGC University, Mohali designed to bridge the gap between academic learning and the professional world. 
                This dynamic publication gives you the access for comprehensive insights into corporate trends, industry demands, and career opportunities, ensuring you are well 
                equipped to navigate your transition from campus to the career we desire for.
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {magazineData.map((mag, idx) => (
                <MagazineCard key={idx} {...mag} />
              ))}
            </div>
          </div>

          {/* Sidebar / Subscribe Form - COMMENTED OUT */}
          {/* ... */}


        </div>
      </main>

        <style jsx>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&display=swap');
        `}</style>
      </div>
    </>
  );
};

export default VenturePulseFullPage;
