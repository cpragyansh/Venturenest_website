"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

// Reusable Section Component
const CouncilSection = ({ category, title, description, iconLetter, alignRight }) => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://venturenest.onrender.com/council-members?category=${category}`)
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
    <section className={`py-20 ${alignRight ? 'bg-gray-50' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className={`flex flex-col md:flex-row gap-12 mb-12 ${alignRight ? 'md:flex-row-reverse' : ''}`}>
           {/* Header Area */}
           <div className={`w-full md:w-1/3 ${alignRight ? 'text-right' : 'text-left'}`}>
              <div className={`inline-block border-b-4 border-black mb-4 ${alignRight ? 'pr-12' : 'pr-12'}`}>
                 <span className="text-[#9E0203] font-black uppercase tracking-[0.4em] text-[10px] block mb-2">Council</span>
                 <h2 className="text-4xl font-black text-black uppercase tracking-tighter leading-none">{title}</h2>
              </div>
              <p className="text-gray-500 font-medium leading-relaxed">{description}</p>
           </div>
           
           {/* Grid Area */}
           <div className="w-full md:w-2/3">
              {loading ? (
                <div className="flex items-center justify-center h-32">
                   <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#9E0203]"></div>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {members.map((member, index) => (
                    <div key={index} className="group relative bg-white border border-gray-200 hover:border-[#9E0203] transition-all duration-300 overflow-hidden hover:shadow-xl">
                       <div className="aspect-square bg-gray-100 relative overflow-hidden">
                          <img 
                            src={member.imgpath} 
                            alt={member.name} 
                            className="w-full h-full object-cover transition-all duration-500" 
                          />
                          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                             <p className="text-white text-xs font-bold uppercase tracking-widest">{member.company}</p>
                          </div>
                       </div>
                       <div className="p-4 bg-white relative z-10">
                          <h3 className="text-lg font-bold font-jakarta text-black leading-tight group-hover:text-[#9E0203] transition-colors uppercase truncate">
                            {member.name}
                          </h3>
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
      {/* 1. MASTER HERO SECTION */}
      <section className="relative bg-black py-24 md:py-32 overflow-hidden border-b-[12px] border-[#9E0203]">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#9E0203]/5 skew-x-[-20deg] transform translate-x-1/3 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <div className="flex items-center space-x-4 mb-8">
                <div className="h-1 bg-[#9E0203] w-12"></div>
                <span className="text-white/60 font-black uppercase tracking-[0.5em] text-[10px]">Governance Structure</span>
              </div>
              <h1 className="text-white text-5xl md:text-8xl font-black font-jakarta uppercase tracking-tighter leading-[0.85] mb-8">
                The <br />
                <span className="text-[#9E0203]">Councils</span>
              </h1>
              <p className="text-gray-400 text-xl font-medium leading-relaxed max-w-2xl">
                 Our governance structure consists of five specialized councils, each comprising industry veterans and experts dedicated to guiding our startups through every phase of growth.
              </p>
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
