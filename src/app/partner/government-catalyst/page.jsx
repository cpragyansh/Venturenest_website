"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function GovCatalyst() {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch investor partners from backend
    const fetchPartners = async () => {
      try {
        const response = await axios.get("https://venturenest.onrender.com/getpartner?category=government");
        setPartners(response.data);
      } catch (err) {
        console.error("Error fetching partners:", err);
        setError("Failed to load partners");
      } finally {
        setLoading(false);
      }
    };

    fetchPartners();
  }, []);

  return (
    <div className="min-h-screen bg-white font-jakarta">
      {/* 1. MAJESTIC SPLIT HERO */}
      <section className="relative bg-black py-24 md:py-32 overflow-hidden border-b-[12px] border-[#9E0203]">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#9E0203]/5 skew-x-[-20deg] transform translate-x-1/3 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <div className="w-full md:w-6/12 space-y-8 text-left">
              <div className="flex items-center space-x-4">
                <div className="h-1 bg-[#9E0203] w-12"></div>
                <span className="text-white/60 font-black uppercase tracking-[0.5em] text-[10px]">Strategic Alliance</span>
              </div>
              <h1 className="text-white text-5xl md:text-7xl font-black font-jakarta uppercase tracking-tighter leading-[0.85]">
                Government <br />
                <span className="text-[#9E0203]">Catalyst</span>
              </h1>
              <div className="space-y-4">
                <div className="h-1 w-32 bg-white"></div>
                <p className="text-gray-400 text-lg font-medium leading-relaxed max-w-xl">
                  We <strong className="text-white">proudly collaborate</strong> with key government bodies and state-led startup missions that act as catalysts for policy support, regulatory guidance, and public-sector innovation alignment to accelerate the growth of startups in our ecosystem.
                </p>
              </div>
            </div>

            <div className="w-full md:w-6/12 relative">
               {/* Abstract Visual Representation instead of generic image if not available, or use the pattern from other pages */}
              <div className="absolute -inset-4 border-2 border-white/5 rounded-3xl translate-x-4 translate-y-4"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] bg-[#111] aspect-[16/9] flex items-center justify-center group">
                 {/* Placeholder for Hero Image - utilizing a pattern or gradient if specific image not suitable, keeping it consistent with dark theme */}
                 <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-90"></div>
                 <div className="relative z-10 text-center p-8">
                    <svg className="w-24 h-24 text-[#9E0203] mx-auto mb-4 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <h3 className="text-white text-xl font-bold uppercase tracking-widest">Public Sector<br/>Innovation</h3>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PARTNERS GRID SECTION */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div className="space-y-2">
               <span className="text-[#9E0203] font-black uppercase tracking-[0.4em] text-[10px] block">Network</span>
               <h2 className="text-4xl md:text-5xl font-black font-jakarta text-black uppercase tracking-tighter border-b-4 border-black inline-block pb-2">
                 Our Partners
               </h2>
            </div>
            <div className="text-right hidden md:block">
               <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Empowering the Ecosystem</p>
            </div>
          </div>

          <div className="relative min-h-[400px]">
            {loading && (
              <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#9E0203]"></div>
              </div>
            )}

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">Error! </strong>
                <span className="block sm:inline">{error}</span>
              </div>
            )}

            {!loading && !error && partners.length === 0 && (
               <div className="text-center py-20 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
                  <p className="text-gray-400 font-black uppercase tracking-widest">No partners found currently.</p>
               </div>
            )}

            {!loading && !error && partners.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {partners.map((partner, index) => (
                  <div key={index} className="group bg-white border border-gray-100 hover:border-[#9E0203] transition-all duration-300 p-8 flex flex-col items-center justify-center aspect-square shadow-sm hover:shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gray-50 -mr-8 -mt-8 rounded-full transition-transform group-hover:scale-[10] group-hover:bg-[#9E0203]/5 duration-500 ease-in-out"></div>
                    
                    <div className="relative z-10 w-full h-full flex items-center justify-center p-4">
                        <img 
                          src={partner.imgpath} 
                          alt={partner.Name} 
                          className="max-w-full max-h-full object-contain transition-all duration-300 transform group-hover:scale-110 mx-auto" 
                        />
                    </div>
                    
                    <div className="relative z-10 mt-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-4 w-full">
                        <span className="text-[#9E0203] text-xs font-bold uppercase tracking-widest">{partner.Name}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. CALL TO ACTION */}
      <section className="bg-gray-50 py-24 border-t border-gray-200">
         <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-black mb-6">Want to Partner With Us?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-lg">
              Join forces with VentureNest to shape the future of innovation and entrepreneurship.
            </p>
            <a href="/contact" className="inline-block bg-[#9E0203] text-white px-10 py-4 font-black uppercase tracking-widest text-sm hover:bg-black transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
               Contact Us
            </a>
         </div>
      </section>
    </div>
  );
}
