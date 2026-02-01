"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const StartupInventorySection = () => {
  const [startups, setStartups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStartups = async () => {
      try {
        const response = await axios.get("https://venture-nest-backend.onrender.com/getstartup");
        setStartups(response.data);
      } catch (error) {
        console.error("Error fetching startups:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchStartups();
  }, []);

  return (
    <section className="py-12 bg-white font-jakarta">
      <div className="container mx-auto px-6">
        {/* Compact Header */}
        <div className="text-center mb-8">
           {/* <div className="flex items-center justify-center space-x-4 mb-2">
              <div className="h-0.5 bg-[#9E0203] w-12"></div>
              <span className="text-[#9E0203] font-black uppercase tracking-[0.4em] text-[10px]">Inventory</span>
              <div className="h-0.5 bg-[#9E0203] w-12"></div>
           </div> */}
          <h2 className="text-[#1a1a1a] text-3xl md:text-3xl font-black uppercase tracking-tight">
            Venture Portfolio
          </h2>
          <p className="text-gray-600 mt-4 text-md max-w-2xl mx-auto">
            Discover the next generation of innovation. A curated selection of high-potential startups currently shaping the future of their industries.
          </p>
        </div>

        {/* Efficient Layout: Split Image + Scrollable Table */}
        <div className="flex flex-col lg:flex-row gap-6 items-stretch max-h-[600px]">
          {/* Left Side: Image (Aspect Ratio maintained, compact on mobile) */}
          <div className="w-full lg:w-1/2 relative group overflow-hidden border-b-4 border-[#9E0203]">
            <img 
              src="/assets/incubated_hero.png" 
              alt="Incubated Ventures" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-md p-4 flex justify-between items-center">
               <span className="text-white text-xs font-black uppercase tracking-widest">Ecosystem Labs</span>
               <span className="text-white/60 text-[10px] uppercase font-bold tracking-tighter">Scale-Ready</span>
            </div>
          </div>

          {/* Right Side: Scrollable Table Container */}
          <div className="w-full lg:w-1/2 flex flex-col border border-gray-100 shadow-2xl bg-white overflow-hidden">
            {/* Sticky Table Header */}
            <div className="bg-[#9E0203] text-white flex items-center py-3 px-6 shadow-md z-20">
              <span className="w-12 text-[10px] font-black uppercase tracking-widest border-r border-white/20 mr-4">Sr. No.</span>
              <span className="flex-1 text-[10px] font-black uppercase tracking-widest">Venture Identify</span>
              <span className="w-24 text-[10px] font-black uppercase tracking-widest text-right">Status</span>
            </div>

            {/* Scrollable Body */}
            <div className="flex-1 overflow-y-auto custom-scrollbar bg-white" style={{ maxHeight: '450px' }}>
              <div className="divide-y divide-gray-50">
                {loading ? (
                  [1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="flex items-center py-4 px-6 animate-pulse">
                      <div className="w-12 h-4 bg-gray-100 mr-4"></div>
                      <div className="flex-1 h-4 bg-gray-100"></div>
                      <div className="w-20 h-4 bg-gray-100 ml-4"></div>
                    </div>
                  ))
                ) : (
                  startups.map((startup, idx) => (
                    <div key={startup._id || idx} className="flex items-center py-4 px-6 hover:bg-[#fdfdfd] group transition-all duration-300 border-l-4 border-transparent hover:border-[#9E0203]">
                      <span className="w-12 text-sm font-black text-gray-300 mr-4">
                        {(idx + 1).toString().padStart(2, '0')}
                      </span>
                      <div className="flex-1">
                        <div className="text-sm font-black uppercase tracking-tight text-gray-800 group-hover:text-[#9E0203] transition-colors line-clamp-1">
                          {startup.StartupName}
                        </div>
                        <div className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.1em] mt-0.5">
                          {startup.FounderName}
                        </div>
                      </div>
                      <div className="w-28 text-right">
                         <span className={`text-[8px] font-black px-2 py-0.5 rounded-full border uppercase tracking-widest ${
                           startup.RegistrationStatus?.includes('Registered') 
                           ? 'border-green-200 text-green-600 bg-green-50' 
                           : 'border-red-100 text-[#9E0203] bg-red-50'
                         }`}>
                           {startup.RegistrationStatus === "Not Registered" ? "Staged Process" : startup.RegistrationStatus || "Incubated"}
                         </span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #9E0203;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #7a0202;
        }
      `}</style>
    </section>
  );
};

export default StartupInventorySection;
