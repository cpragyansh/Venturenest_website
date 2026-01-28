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
    { month: "December", year: "2025", image: "https://images.unsplash.com/photo-1523240715634-d8c8bf029a9b?q=80&w=800&auto=format&fit=crop" },
    { month: "November", year: "2025", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop" },
    { month: "October", year: "2025", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop" },
    { month: "September", year: "2025", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop" },
    { month: "August", year: "2025", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop" },
    { month: "July", year: "2025", image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop" },
    { month: "June", year: "2025", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop" },
    { month: "May", year: "2025", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop" },
    { month: "April", year: "2025", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop" },
    { month: "March", year: "2025", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop" },
    { month: "February", year: "2025", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop" },
    { month: "January", year: "2025", image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=800&auto=format&fit=crop" },
    { month: "December", year: "2024", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop" },
    { month: "November", year: "2024", image: "https://images.unsplash.com/photo-1522071823991-b99c22ed2c5b?q=80&w=800&auto=format&fit=crop" },
    { month: "October", year: "2024", image: "https://images.unsplash.com/photo-1531545517296-160de9a5cb44?q=80&w=800&auto=format&fit=crop" }
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
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Magazine Display Area */}
          <div className="lg:w-3/4 space-y-12">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#9E0203]"></div>
                <h2 className="text-3xl font-black text-gray-800 uppercase tracking-tight">Magazine</h2>
              </div>
              <h3 className="text-xl font-bold text-[#9E0203] flex items-center gap-2">
                <div className="w-10 h-[2px] bg-[#9E0203]"></div>
                Campus to Corporate e-magazine
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed pt-2 max-w-4xl font-medium">
                Campus to Corporate Magazine is a pioneering initiative by CGC University, Mohali designed to bridge the gap between academic learning and the professional world. 
                This dynamic publication gives you the access for comprehensive insights into corporate trends, industry demands, and career opportunities, ensuring you are well 
                equipped to navigate your transition from campus to the career we desire for.
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {magazineData.map((mag, idx) => (
                <MagazineCard key={idx} {...mag} />
              ))}
            </div>
          </div>

          {/* Sidebar / Subscribe Form */}
          <aside className="lg:w-1/4">
            <div className="bg-white p-8 rounded-sm shadow-xl sticky top-28 border-t-4 border-[#9E0203]">
              <h4 className="text-xl font-black text-gray-800 text-center leading-snug mb-8 uppercase tracking-tighter">
                Subscribe to our monthly <br/> <span className="text-[#9E0203]">E-Magazine</span>
              </h4>
              
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-[#9E0203] outline-none transition-colors text-sm font-bold"
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-[#9E0203] outline-none transition-colors text-sm font-bold"
                />
                <input 
                  type="tel" 
                  placeholder="Phone" 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-[#9E0203] outline-none transition-colors text-sm font-bold"
                />
                
                <div className="flex items-start gap-2 pt-2">
                  <input type="checkbox" id="agree" className="mt-1 accent-[#9E0203]" />
                  <label htmlFor="agree" className="text-[10px] text-gray-500 font-bold leading-tight">
                    I agree to receiving newsletters and updates from CGC University.
                  </label>
                </div>
                
                <button className="w-full bg-[#9E0203] text-white py-4 font-black uppercase tracking-[0.2em] text-xs hover:bg-black transition-all shadow-lg mt-4">
                  Subscribe Now
                </button>
              </form>
            </div>
          </aside>

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
