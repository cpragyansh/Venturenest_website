"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Advisory() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch council members from backend
    axios.get('https://venture-nest-backend.onrender.com/council-members?category=advisory')
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
      <section className="relative bg-black py-24 md:py-32 overflow-hidden border-b-[12px] border-[#9E0203]">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#9E0203]/5 skew-x-[-20deg] transform translate-x-1/3 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <div className="w-full md:w-7/12 space-y-8 text-left">
              <div className="flex items-center space-x-4">
                <div className="h-1 bg-[#9E0203] w-12"></div>
                <span className="text-white/60 font-black uppercase tracking-[0.5em] text-[10px]">Thought Leadership</span>
              </div>
              <h1 className="text-white text-5xl md:text-7xl font-black font-jakarta uppercase tracking-tighter leading-[0.85]">
                Advisory <br />
                <span className="text-[#9E0203]">Council</span>
              </h1>
              <div className="space-y-4">
                <div className="h-1 w-32 bg-white"></div>
                <p className="text-gray-400 text-lg font-medium leading-relaxed max-w-2xl">
                   The <strong className="text-white">Advisory Council</strong> at CGC VentureNest brings together distinguished experts and thought leaders who guide our startups with strategic insights, mentorship, and industry foresight helping to identify market trends and ensure evolving innovation.
                </p>
              </div>
            </div>
            
            <div className="w-full md:w-5/12 hidden md:block relative">
                {/* Decorative Element */}
                <div className="w-full aspect-square border-2 border-dashed border-[#9E0203]/30 rounded-full animate-[spin_60s_linear_infinite] flex items-center justify-center p-12">
                   <div className="w-full h-full border border-white/10 rounded-full flex items-center justify-center">
                      <div className="text-[#9E0203] text-6xl font-black">?</div>
                   </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MEMBERS GRID */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
           <div className="mb-16 border-b-4 border-black inline-block pr-12 pb-2">
             <span className="text-[#9E0203] font-black uppercase tracking-[0.4em] text-[10px] block mb-2">Experts</span>
             <h2 className="text-4xl font-black text-black uppercase tracking-tighter">Council Members</h2>
           </div>

           {loading && (
              <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#9E0203]"></div>
              </div>
            )}

            {!loading && members.length === 0 && (
               <div className="text-center py-20 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
                  <p className="text-gray-400 font-black uppercase tracking-widest">No existing members found.</p>
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
                        
                        {/* Company Badge acting as overlay */}
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
                    
                    {/* Decorative Corner */}
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