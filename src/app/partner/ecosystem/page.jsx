"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function EcosystemPartners() {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await axios.get((window.API_BASE_URL || (window.API_BASE_URL || 'https://venturenestbackend.cgcuniversity.in')) + '/getpartner?category=ecosystem');
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
      {/* 1. HERO SECTION */}
      <section 
        className="relative h-[85vh] flex items-center overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1522071823991-b5ae77c4740e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")' }}
      >
        {/* Cinematic Backdrop Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent z-0"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl space-y-10">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-[2px] bg-[#9E0203] w-12"></div>
                <span className="text-white/60 font-semibold uppercase tracking-[0.3em] text-[11px]">Innovation Hubs</span>
              </div>
              <h1 className="text-white text-6xl md:text-9xl font-extralight font-jakarta leading-[1] tracking-tight">
                Startup <br />
                <span className="font-bold text-[#9E0203]">Ecosystem.</span>
              </h1>
            </div>

            <div className="space-y-6 border-l-2 border-white/10 pl-8 ml-1">
              <p className="text-gray-300 text-xl font-light leading-relaxed max-w-2xl">
                Nurturing a <span className="text-white font-medium">thriving community</span> of innovators, institutional partners, and industry leaders working together to redefine excellence.
              </p>
              
              <button className="flex items-center gap-4 text-white hover:text-[#9E0203] transition-colors group">
                <span className="text-sm font-bold uppercase tracking-widest text-white/40 group-hover:text-[#9E0203]">Explore the Network</span>
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#9E0203]">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PARTNERS GRID */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div className="space-y-2">
               <span className="text-[#9E0203] font-black uppercase tracking-[0.4em] text-[10px] block">Alliances</span>
               <h2 className="text-4xl md:text-5xl font-black font-jakarta text-black uppercase tracking-tighter border-b-4 border-black inline-block pb-2">
                 Strategic Partners
               </h2>
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
                  <p className="text-gray-400 font-black uppercase tracking-widest">No ecosystem partners found.</p>
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
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-black mb-6">Join The Network</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-lg">
               Become part of a thriving ecosystem driving change and innovation.
            </p>
            <a href="/contact" className="inline-block bg-[#9E0203] text-white px-10 py-4 font-black uppercase tracking-widest text-sm hover:bg-black transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
               Connect Now
            </a>
         </div>
      </section>
    </div>
  );
}
