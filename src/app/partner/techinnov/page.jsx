"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function TechInnovCouncil() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch council members from backend
    axios.get('https://venture-nest-backend.onrender.com/council-members?category=techInnov')
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
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")' }}
      >
        {/* Cinematic Backdrop Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent z-0"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl space-y-10">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-[2px] bg-[#9E0203] w-12"></div>
                <span className="text-white/60 font-semibold uppercase tracking-[0.3em] text-[11px]">Future Excellence</span>
              </div>
              <h1 className="text-white text-6xl md:text-9xl font-extralight font-jakarta leading-[1] tracking-tight">
                Tech & <br />
                <span className="font-bold text-[#9E0203]">Innovation.</span>
              </h1>
            </div>

            <div className="space-y-6 border-l-2 border-white/10 pl-8 ml-1">
              <p className="text-gray-300 text-xl font-light leading-relaxed max-w-2xl">
                Driving <span className="text-white font-medium">technical mastery</span> and product excellence. We connect startups with emerging technologies and innovative frameworks to solve global challenges.
              </p>
              
              <button className="flex items-center gap-4 text-white hover:text-[#9E0203] transition-colors group">
                <span className="text-sm font-bold uppercase tracking-widest text-white/40 group-hover:text-[#9E0203]">Discover Our Tech Stack</span>
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#9E0203]">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MEMBERS GRID */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
           <div className="mb-16 border-b-4 border-black inline-block pr-12 pb-2">
             <span className="text-[#9E0203] font-black uppercase tracking-[0.4em] text-[10px] block mb-2">Innovators</span>
             <h2 className="text-4xl font-black text-black uppercase tracking-tighter">Council Members</h2>
           </div>

           {loading && (
              <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#9E0203]"></div>
              </div>
            )}

            {!loading && members.length === 0 && (
               <div className="text-center py-20 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
                  <p className="text-gray-400 font-black uppercase tracking-widest">No members found currently.</p>
               </div>
            )}

            {!loading && members.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {members.map((member, index) => (
                  <div key={index} className="group relative bg-white border-2 border-gray-100 hover:border-[#9E0203] transition-all duration-300 rounded-none overflow-hidden hover:shadow-2xl hover:-translate-y-2">
                    {/* Image Area */}
                    <div className="aspect-[4/5] overflow-hidden bg-gray-100 relative">
                        <img 
                          src={member.imgpath} 
                          alt={member.name} 
                          className="w-full h-full object-cover transition-all duration-500 transform group-hover:scale-110" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                        
                        <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                           <span className="inline-block bg-[#9E0203] text-white text-[10px] font-bold uppercase px-2 py-1 tracking-widest">
                             {member.company}
                           </span>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold font-jakarta text-black leading-tight group-hover:text-[#9E0203] transition-colors uppercase">
                        {member.name}
                      </h3>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-2">{member.company}</p>
                    </div>
                    
                    <div className="absolute top-0 right-0 w-4 h-4 bg-[#9E0203] transform translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300"></div>
                  </div>
                ))}
              </div>
            )}
        </div>
      </section>
    </div>
  );
}
