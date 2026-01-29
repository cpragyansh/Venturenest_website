"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

// Reusable Section Component
const CouncilSection = ({ category, title, description, iconLetter, alignRight }) => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://venture-nest-backend.onrender.com/council-members?category=${category}`)
      .then(response => {
        setMembers(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(`Error fetching ${category}:`, error);
        setLoading(false);
      });
  }, [category]);

  if (!loading && members.length === 0) return null; // Don't show empty sections

  return (
    <section className={`relative py-24 overflow-hidden ${alignRight ? 'bg-gray-50' : 'bg-white'}`}>
      {/* Subtle Background Elements for sections */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`flex flex-col lg:flex-row gap-16 mb-12 ${alignRight ? 'lg:flex-row-reverse' : ''}`}>
           {/* Header Area */}
           <div className={`w-full lg:w-1/3 space-y-6 ${alignRight ? 'lg:text-right' : 'lg:text-left'}`}>
              <div className="space-y-2">
                 <div className={`flex items-center gap-3 ${alignRight ? 'justify-end' : 'justify-start'}`}>
                    <div className="h-[2px] w-8 bg-[#9E0203]"></div>
                    <span className="text-[#9E0203] font-bold uppercase tracking-[0.3em] text-[10px]">Strategic Council</span>
                 </div>
                 <h2 className="text-5xl font-black text-black uppercase tracking-tighter leading-tight">{title}</h2>
              </div>
              <p className="text-gray-500 font-medium leading-relaxed text-lg">{description}</p>
              
              <div className={`pt-4 flex ${alignRight ? 'justify-end' : 'justify-start'}`}>
                  <a href={`/partner/${category === 'investfund' ? 'InvestandFund' : category === 'techInnov' ? 'techinnov' : category === 'legalCompl' ? 'legalCompl' : title}`} className="group flex items-center gap-3 text-black font-bold uppercase tracking-widest text-xs hover:text-[#9E0203] transition-colors">
                      View Full Council
                      <div className="w-6 h-6 rounded-full border border-black/10 flex items-center justify-center group-hover:border-[#9E0203] group-hover:bg-[#9E0203] group-hover:text-white transition-all">
                        <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="3"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                      </div>
                  </a>
              </div>
           </div>
           
           {/* Grid Area */}
           <div className="w-full lg:w-2/3">
              {loading ? (
                <div className="flex items-center justify-center h-64">
                   <div className="relative w-12 h-12">
                      <div className="absolute inset-0 border-2 border-[#9E0203] border-t-transparent rounded-full animate-spin"></div>
                   </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {members.slice(0, 3).map((member, index) => (
                    <div key={index} className="group relative">
                        <div className="relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#9E0203]/30 group-hover:-translate-y-2">
                            {/* Image Frame */}
                            <div className="p-3 pb-0">
                                <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-gray-50">
                                    <img 
                                      src={member.imgpath} 
                                      alt={member.name} 
                                      className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0" 
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                                    <div className="absolute bottom-3 left-3 right-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                        <p className="text-white text-[10px] font-black uppercase tracking-widest opacity-80">{member.company}</p>
                                    </div>
                                </div>
                            </div>
                            {/* Details */}
                            <div className="p-4 text-center">
                                <h3 className="text-md font-bold font-jakarta text-black uppercase tracking-tight group-hover:text-[#9E0203] transition-colors truncate">
                                  {member.name}
                                </h3>
                                <div className="mt-2 text-[9px] font-black text-[#9E0203]/40 group-hover:text-[#9E0203] transition-colors uppercase tracking-[0.2em]">Council Member</div>
                            </div>
                        </div>
                    </div>
                  ))}
                </div>
              )}
           </div>
        </div>
      </div>
    </section>
  );
};

export default function CouncilOverview() {
  return (
    <div className="min-h-screen bg-white font-jakarta">
      {/* 1. HERO SECTION */}
      <section 
        className="relative h-[85vh] flex items-center overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1431540015161-0bf868a2d407?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")' }}
      >
        {/* Cinematic Backdrop Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent z-0"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl space-y-10">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-[2px] bg-[#9E0203] w-12"></div>
                <span className="text-white/60 font-semibold uppercase tracking-[0.3em] text-[11px]">Governance structure</span>
              </div>
              <h1 className="text-white text-6xl md:text-9xl font-extralight font-jakarta leading-[1] tracking-tight">
                The <br />
                <span className="font-bold text-[#9E0203]">Councils.</span>
              </h1>
            </div>

            <div className="space-y-6 border-l-2 border-white/10 pl-8 ml-1">
              <p className="text-gray-300 text-xl font-light leading-relaxed max-w-2xl">
                A multidimensional <span className="text-white font-medium">governance framework</span> comprising industry veterans and elite experts dedicated to guiding our startups through systemic growth.
              </p>
              
              <button className="flex items-center gap-4 text-white hover:text-[#9E0203] transition-colors group">
                <span className="text-sm font-bold uppercase tracking-widest text-white/40 group-hover:text-[#9E0203]">Meet our council heads</span>
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#9E0203]">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTIONS */}
      <CouncilSection 
         category="advisory" 
         title="Advisory" 
         description="Distinguished experts and thought leaders guiding strategic insights and industry foresight."
         alignRight={false}
      />
      
      <CouncilSection 
         category="techInnov" 
         title="Tech & Innovation" 
         description="Supporting adoption of emerging technologies and accelerating product development."
         alignRight={true}
      />

      <CouncilSection 
         category="legalCompl" 
         title="Legal & Compliance" 
         description="Ensuring legally sound foundations through IP protection and regulatory guidance."
         alignRight={false}
      />

      <CouncilSection 
         category="mentorship" 
         title="Mentorship" 
         description="Personalized, hands-on support through strategic guidance and one-on-one coaching."
         alignRight={true}
      />

      <CouncilSection 
         category="investfund" 
         title="Investment" 
         description="Empowering startups with financial knowledge, investor readiness, and funding networks."
         alignRight={false}
      />
      
      {/* 3. CTA */}
      <section className="bg-black py-20 text-center">
         <h2 className="text-white text-3xl font-black uppercase tracking-widest mb-8">Join Our Council</h2>
         <a href="/contact" className="inline-block border-2 border-white text-white px-10 py-3 font-bold uppercase hover:bg-white hover:text-black transition-all">
            Contact Us
         </a>
      </section>
    </div>
  );
}
