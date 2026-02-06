"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function MentorshipCouncil() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch council members from backend
    axios.get((window.API_BASE_URL || (window.API_BASE_URL || 'https://venturenestbackend.cgcuniversity.in')) + '/council-members?category=mentorship')
      .then(response => {
        setMembers(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching council members:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-white font-jakarta">
      {/* 1. HERO SECTION */}
      <section 
        className="relative h-[85vh] flex items-center overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")' }}
      >
        {/* Cinematic Backdrop Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent z-0"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl space-y-10">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-[2px] bg-[#9E0203] w-12"></div>
                <span className="text-white/60 font-semibold uppercase tracking-[0.3em] text-[11px]">Personalized Guidance</span>
              </div>
              <h1 className="text-white text-6xl md:text-9xl font-extralight font-jakarta leading-[1] tracking-tight">
                Mentorship <br />
                <span className="font-bold text-[#9E0203]">Council.</span>
              </h1>
            </div>

            <div className="space-y-6 border-l-2 border-white/10 pl-8 ml-1">
              <p className="text-gray-300 text-xl font-light leading-relaxed max-w-2xl">
                Nurturing the next generation of founders through <span className="text-white font-medium">hands-on mentorship</span> and strategic business coaching from industry veterans.
              </p>
              
              <button className="flex items-center gap-4 text-white hover:text-[#9E0203] transition-colors group">
                <span className="text-sm font-bold uppercase tracking-widest text-white/40 group-hover:text-[#9E0203]">Meet Our Mentors</span>
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#9E0203]">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MEMBERS GRID */}
      <section className="relative py-16 overflow-hidden bg-gray-50">
        
        {/* Normal Grid Background */}
        <div className="absolute inset-0 z-0 opacity-60">
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000015_1px,transparent_1px),linear-gradient(to_bottom,#00000015_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        {/* DARK ACCENTS to reduce brightness */}
        <div className="absolute inset-0 z-0 pointer-events-none">
            {/* Dark Vignette / Gradient Blob Top Right */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-black/5 to-transparent rounded-bl-full"></div>
            {/* Dark Gradient Bottom Left */}
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-t from-black/5 to-transparent rounded-tr-full"></div>
            {/* Solid Black Decorative Line */}
            <div className="absolute top-0 bottom-0 left-[5%] w-[1px] bg-black/10 hidden md:block"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
           {/* Section Header */}
           <div className="relative w-full flex flex-col items-center justify-center mb-12 py-2">
             
             {/* Massive Background Text - Darkened */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center overflow-hidden pointer-events-none select-none">
                <h2 className="text-[12vw] font-black text-black/5 uppercase leading-none tracking-widest scale-y-150 transform">
                  Mentorship
                </h2>
             </div>

             <div className="relative z-10 flex flex-col items-center">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-[2px] w-12 bg-[#9E0203]"></div>
                  <span className="text-[#9E0203] font-bold uppercase tracking-[0.3em] text-sm">
                    Strategic Guides
                  </span>
                  <div className="h-[2px] w-12 bg-[#9E0203]"></div>
                </div>
                
                <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-black uppercase tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-black to-gray-700">
                  Council Members
                </h2>
                
                <p className="text-gray-600 max-w-2xl text-center text-lg font-medium leading-relaxed">
                  Cultivating <span className="text-black font-bold">Excellence</span> through <span className="text-[#9E0203] font-bold">Empowerment</span>.
                </p>
             </div>
           </div>

           {loading && (
              <div className="flex items-center justify-center h-64">
                <div className="relative w-16 h-16">
                    <div className="absolute inset-0 border-2 border-[#9E0203] border-t-transparent rounded-full animate-spin"></div>
                    <div className="absolute inset-2 border-2 border-black/10 border-b-transparent rounded-full animate-spin reverse"></div>
                </div>
              </div>
            )}

            {!loading && members.length === 0 && (
               <div className="text-center py-20 border border-black/5 rounded-xl bg-white/50 backdrop-blur">
                  <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">No members found.</p>
               </div>
            )}

            {!loading && members.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {members.map((member, index) => (
                  <div key={index} className="group relative">
                    {/* Card Body */}
                    <div className="relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#9E0203]/30 group-hover:-translate-y-2">
                        
                        {/* Black Accent Chip */}
                        <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none overflow-hidden z-30">
                            <div className="absolute top-0 right-0 w-8 h-8 bg-black/5 group-hover:bg-black/80 transition-colors -rotate-45 transform translate-x-4 -translate-y-4"></div>
                        </div>

                        {/* Designed Image Frame */}
                        <div className="p-4 pb-0">
                            <div className="relative">
                                {/* Decorative Corner Brackets - Focusing Effect */}
                                <div className="absolute -top-3 -left-3 w-8 h-8 border-t-[3px] border-l-[3px] border-[#9E0203] z-20 rounded-tl-lg transition-all duration-500 ease-out group-hover:-top-[1px] group-hover:-left-[1px]"></div>
                                <div className="absolute -top-3 -right-3 w-8 h-8 border-t-[3px] border-r-[3px] border-[#9E0203] z-20 rounded-tr-lg transition-all duration-500 ease-out group-hover:-top-[1px] group-hover:-right-[1px]"></div>
                                <div className="absolute -bottom-2 -left-3 w-8 h-8 border-b-[3px] border-l-[3px] border-[#9E0203] z-20 rounded-bl-lg transition-all duration-500 ease-out group-hover:bottom-[4px] group-hover:-left-[1px]"></div>
                                <div className="absolute -bottom-2 -right-3 w-8 h-8 border-b-[3px] border-r-[3px] border-[#9E0203] z-20 rounded-br-lg transition-all duration-500 ease-out group-hover:bottom-[4px] group-hover:-right-[1px]"></div>
                                
                                {/* Main Image Container */}
                                <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 m-1 rounded-sm shadow-inner">
                                    {/* Image */}
                                    <img 
                                      src={member.imgpath} 
                                      alt={member.name} 
                                      className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 grayscale-[20%] group-hover:grayscale-0" 
                                    />
                                    
                                    {/* Inner Border/Frame Overlay */}
                                    <div className="absolute inset-0 border border-black/5 group-hover:border-white/10 transition-colors pointer-events-none"></div>
                                    
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>

                                    {/* Floating Name Tag */}
                                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                        <h3 className="text-2xl font-black text-white uppercase leading-none drop-shadow-md">
                                            {member.name.split(' ')[0]} 
                                            <span className="block text-[#9E0203] text-lg">{member.name.split(' ').slice(1).join(' ')}</span>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Details Section */}
                        <div className="p-5 pt-4 relative">
                           {/* Decorative Line */}
                            <div className="w-full h-[1px] bg-gray-100 mb-4 group-hover:bg-[#9E0203]/20 transition-colors"></div>

                            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest line-clamp-2 group-hover:text-black transition-colors">
                              {member.company}
                            </p>
                            
                             {/* Corner Accent */}
                            <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="flex gap-1">
                                  <div className="w-1 h-1 bg-[#9E0203] rounded-full"></div>
                                  <div className="w-1 h-1 bg-[#9E0203] rounded-full opacity-50"></div>
                                  <div className="w-1 h-1 bg-[#9E0203] rounded-full opacity-25"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
        </div>
      </section>
    </div>
  );
}
