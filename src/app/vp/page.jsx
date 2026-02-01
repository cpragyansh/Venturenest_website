"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer";

const MagazineCard = ({ month, year, image, link }) => (
  <motion.div 
    whileHover={{ y: -8 }}
    className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
  >
    <a href={link} target="_blank" rel="noopener noreferrer" className="block">
      <div className="aspect-[5/7] overflow-hidden bg-gray-50">
        <img 
          src={image || "/assets/placeholder_mag.jpg"} 
          alt={`Campus to Corporate - ${month} ${year}`}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1544928147-7972fc03f231?q=80&w=600&auto=format&fit=crop"; }}
        />
      </div>
      <div className="p-3 flex items-center justify-between border-t border-gray-50">
        <div className="flex items-center gap-2">
          <div className="w-1 h-5 bg-[#9E0203]"></div>
          <span className="font-bold text-gray-800 text-sm md:text-base">
            {month}, {year}
          </span>
        </div>
        <div className="text-[#9E0203] opacity-0 group-hover:opacity-100 transition-opacity">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </div>
    </a>
  </motion.div>
);

const VenturePulseFullPage = () => {
  const magazineData = [
    { 
      month: "Venture Pulse", 
      year: "Edition 1", 
      image: "https://cdnc.heyzine.com/files/uploaded/69c55f5505b1286d3eaf9dc07dc2458ef3e6e1d5.pdf-thumb.jpg",
      link: "https://heyzine.com/flip-book/69c55f5505.html"
    },
    { 
      month: "Venture Pulse", 
      year: "Edition 2", 
      image: "https://cdnc.heyzine.com/files/uploaded/1fc71cccb4eed2dc3b9f5f4f2e8a73712116e4fc.pdf-thumb.jpg",
      link: "https://heyzine.com/flip-book/1fc71cccb4.html"
    },
    { 
      month: "Venture Pulse", 
      year: "Edition 3", 
      image: "https://cdnc.heyzine.com/files/uploaded/86c2bfaef11424abee2be0f356c87f7d599d89cf.pdf-thumb.jpg",
      link: "https://heyzine.com/flip-book/86c2bfaef1.html"
    },
    { 
      month: "Venture Pulse", 
      year: "Edition 4", 
      image: "https://cdnc.heyzine.com/files/uploaded/752c92afd5650f04b7c69b396f6e1c5be8ded57e.pdf-thumb.jpg",
      link: "https://heyzine.com/flip-book/752c92afd5.html"
    },
    {
      month: "Venture Pulse", 
      year: "Edition 5", 
      image: "https://cdnc.heyzine.com/files/uploaded/b74d9a0bd94576c6a51c0760b855176aae2e57f7.pdf-thumb.jpg",
      link: "https://heyzine.com/flip-book/b74d9a0bd9.html"
    },
  ];

  return (
    <>
    <div className="min-h-screen bg-[#F5F5F5] font-jakarta">


      {/* Hero Section */}
      <section className="relative h-[180px] md:h-[220px] flex items-center bg-black overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          alt="E-Magazine Hero"
        />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-white space-y-1"
          >
            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight">E Magazine</h1>
            <p className="text-sm md:text-base font-medium opacity-80">Delivering trusted information</p>
          </motion.div>
        </div>
        {/* Blue Ribbon Element (Top Rightish) */}
        <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 rotate-90 origin-right">
            <div className="bg-[#0099FF] text-white px-8 py-1.5 font-black uppercase tracking-widest text-[10px] whitespace-nowrap shadow-lg">
                APPLY NOW
            </div>
        </div>
      </section>

      {/* Breadcrumb Section */}
      <div className="bg-[#EFEFEF] py-2 border-b border-gray-200">
        <div className="container mx-auto px-6">
          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
            Home <span className="mx-2 opacity-30">/</span> <span className="text-[#9E0203]">E-Magazine</span>
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-6 pt-8 pb-16">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          
          {/* Magazine Display Area */}
          <div className="w-full space-y-8">
            <div className="space-y-3 text-center flex flex-col items-center">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#9E0203]"></div>
                <h2 className="text-2xl md:text-3xl font-black text-gray-800 uppercase tracking-tight">Magazine</h2>
                <div className="w-1.5 h-1.5 rounded-full bg-[#9E0203]"></div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed max-w-4xl font-medium mx-auto">
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
