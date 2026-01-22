"use client";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// --- Design System Utilities ---
const BRAND_RED = "#9E0203";

const ProgramCard = ({ program, index }) => {
  const createSlug = (name) => {
    return name
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return {
      day: date.getDate(),
      month: date.toLocaleString("default", { month: "short" }).toUpperCase(),
      year: date.getFullYear()
    };
  };

  const { day, month } = formatDate(program.programDate);

  return (
    <article className="group relative bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col overflow-hidden">
      {/* Editorial Marker - Program Style */}
      <div className="absolute top-0 right-0 px-4 py-2 bg-black flex items-center justify-center text-white z-20 border-b border-l border-white/10">
         <span className="text-[10px] font-black tracking-widest uppercase">Batch 2026</span>
      </div>

      <Link to={`/Programs/${createSlug(program.programName)}`} className="relative block aspect-[16/10] overflow-hidden">
        <img
          src={program.imageUrl}
          alt={program.programName}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors"></div>
        
        {/* Date Overlay */}
        <div className="absolute bottom-4 left-4 flex items-center space-x-2">
            <div className="bg-[#9E0203] text-white p-2 font-black text-xs">
                {month} {day}
            </div>
        </div>
      </Link>

      <div className="p-8 flex-1 flex flex-col justify-between">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-1 bg-[#9E0203]"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#9E0203]">{program.programTitle || "Academic Core"}</span>
          </div>
          <h3 className="text-3xl font-black font-jakarta text-black uppercase tracking-tighter leading-tight group-hover:translate-x-1 transition-transform">
            {program.programName}
          </h3>
          <p className="text-sm text-gray-600 font-medium leading-relaxed line-clamp-3">
            {program.programDescription}
          </p>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
           <Link
            to={`/Programs/${createSlug(program.programName)}`}
            className="group/link text-[10px] font-black uppercase tracking-[0.4em] text-black hover:text-[#9E0203] transition-colors flex items-center gap-2"
           >
            Explore Syllabus <span className="group-hover/link:translate-x-2 transition-transform">→</span>
           </Link>
           <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
        </div>
      </div>
    </article>
  );
};

const ProgramSpotlight = ({ program }) => {
  if (!program) return null;
  
  const createSlug = (name) => {
    return name.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
  };

  return (
    <div className="container mx-auto px-4 mb-32 flex justify-center">
      {/* 16:9 Aspect Ratio Container, 85% Width, Max 70% Viewport Height */}
      <div className="w-full md:w-[85%] aspect-video max-h-[70vh] relative bg-[#0a0a0a] overflow-hidden group shadow-[0_60px_120px_-30px_rgba(0,0,0,0.9)] border border-white/5 mx-auto">
        {/* Internet Trend: Large Outline Text Watermark */}
        <div className="absolute -bottom-8 -left-8 text-[18rem] font-black text-white/[0.02] leading-none select-none pointer-events-none uppercase">
          HUB
        </div>

        <div className="flex h-full">
          {/* Text Side: High-End Agency Style */}
          <div className="w-full lg:w-[40%] p-10 md:p-16 flex flex-col justify-center relative z-10 bg-[#0a0a0a]">
             <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-[2px] bg-[#9E0203]"></div>
                  <span className="text-[#9E0203] font-black uppercase tracking-[0.5em] text-[10px]">Featured Program</span>
                </div>

                <div className="space-y-4">
                   <h2 className="text-white text-5xl md:text-6xl lg:text-7xl font-black font-jakarta uppercase tracking-tighter leading-[0.85]">
                      <span className="block">{program.programName.split(' ')[0]}</span>
                      <span className="block text-white/30 outline-text" style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.4)' }}>
                        {program.programName.split(' ').slice(1).join(' ')}
                      </span>
                   </h2>
                   <p className="text-gray-400 text-lg font-bold uppercase tracking-tight leading-snug max-w-sm line-clamp-3">
                      {program.programDescription}
                   </p>
                </div>

                <div className="flex flex-wrap gap-3 pt-3 border-t border-white/10">
                   {["MNETORSHIP", "DEDICATED LAB", "SEED FUNDING"].map(tag => (
                     <span key={tag} className="text-[9px] font-black border border-white/20 text-white/60 px-3 py-1 uppercase tracking-widest">{tag}</span>
                   ))}
                </div>
             </div>

             <div className="mt-12">
                <Link to={`/Programs/${createSlug(program.programName)}`} className="group/btn relative inline-flex items-center bg-[#9E0203] text-white px-12 py-5 font-black text-xl uppercase tracking-widest overflow-hidden transition-all hover:bg-white hover:text-black">
                   <span className="relative z-10 flex items-center gap-4">
                      Enroll Today <span className="text-2xl group-hover/btn:translate-x-3 transition-transform">→</span>
                   </span>
                </Link>
             </div>
          </div>

          {/* Hero Side: Cinematic Image Component */}
          <div className="hidden lg:block w-[60%] relative overflow-hidden">
             <img 
               src={program.imageUrl} 
               alt={program.programName} 
               className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
             />
             <div className="absolute inset-0 bg-gradient-to-l from-[#0a0a0a] via-transparent to-transparent"></div>
             
             {/* Dynamic Program Category Label */}
             <div className="absolute top-10 right-10 bg-white p-5 hidden xl:block">
                <div className="text-black font-black text-2xl uppercase tracking-tighter leading-none">ELITE</div>
                <div className="text-[#9E0203] text-[9px] font-black uppercase tracking-[0.3em] mt-1">Founders Cohort</div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// "Something from Myself/Internet" - The Program Journey SaaS Step Layout
const FounderJourney = () => {
    return (
        <section className="py-32 bg-black relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-500 via-transparent to-transparent"></div>
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-24 space-y-4">
                    <span className="text-[#9E0203] font-black uppercase tracking-[0.5em] text-xs">The Roadmap</span>
                    <h2 className="text-white text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">YOUR JOURNEY <br/> <span className="text-white/20">TO EXIT</span></h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-white">
                    {[
                        { step: "01", title: "Ignition", desc: "Validate your concept through professional mentorship and market research." },
                        { step: "02", title: "Structure", desc: "Build a robust business model and legal framework in our dedicated labs." },
                        { step: "03", title: "Velocity", desc: "Rapidly scale through seed funding and strategic industry network access." },
                        { step: "04", title: "Ascent", desc: "Prepare for market leadership and venture capital participation." }
                    ].map((item, i) => (
                        <div key={i} className="group relative pt-12 border-t-4 border-white/10 hover:border-[#9E0203] transition-colors">
                            <div className="text-7xl font-black text-white/5 absolute top-0 left-0 transition-colors group-hover:text-[#9E0203]/20 leading-none">{item.step}</div>
                            <h4 className="text-2xl font-black uppercase tracking-tighter mb-4 relative z-10">{item.title}</h4>
                            <p className="text-gray-400 font-medium leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function ProgramsPage() {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await axios.get("https://venturenest.onrender.com/programs");
        setPrograms(response.data);
      } catch (error) {
        console.error("Error fetching programs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPrograms();
  }, []);

  const featuredProgram = programs[0] || null;

  return (
    <div className="min-h-screen bg-white font-jakarta">
      {/* 1. CINEMATIC FOUNDRY HERO */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden border-b-[12px] border-[#9E0203]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
            alt="Foundry" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex flex-col items-center space-y-4">
              <div className="h-1 bg-[#9E0203] w-24"></div>
              <span className="text-white font-black uppercase tracking-[0.6em] text-xs">Innovation Foundry</span>
            </div>
            
            <h1 className="text-white text-6xl md:text-9xl font-black font-jakarta uppercase tracking-tight leading-[0.85]">
              FOUNDER <br />
              <span className="text-[#9E0203]">ACADEMY</span>
            </h1>
            
            <div className="flex flex-col items-center space-y-6">
              <div className="bg-white h-[2px] w-48 opacity-30"></div>
              <p className="text-gray-300 text-xl md:text-2xl font-bold uppercase tracking-tight leading-snug max-w-2xl">
                 Rigorous frameworks for the next generation of ambitious builders.
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Side Element */}
        <div className="absolute bottom-10 right-10 flex items-center space-x-4 opacity-50">
           <div className="text-white text-[10px] font-black uppercase tracking-widest">ESTABLISHED 2012</div>
           <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center text-white">↓</div>
        </div>
      </section>

      {/* 2. PROGRAM SPOTLIGHT - Internet Agency Inspired */}
      <section className="py-24 bg-white overflow-hidden">
        <ProgramSpotlight program={featuredProgram} />
      </section>

      {/* 3. FOUNDER JOURNEY - "From Myself" Impact Component */}
      <FounderJourney />

      {/* 4. PROGRAM INVENTORY - The Grid */}
      <section className="py-32 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center md:text-left mb-20 space-y-4">
             <span className="text-[#9E0203] font-black uppercase tracking-[0.4em] text-[10px] block">Curriculum</span>
             <h2 className="text-4xl md:text-6xl font-black font-jakarta text-black uppercase tracking-tighter border-b-4 border-black inline-block pb-2">Full Inventory</h2>
          </div>

          {loading ? (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
               {[1,2,3].map(i => <div key={i} className="h-[450px] bg-gray-200 animate-pulse"></div>)}
             </div>
          ) : (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
               {programs.map((program, index) => (
                 <ProgramCard key={program._id} program={program} index={index} />
               ))}
             </div>
          )}
        </div>
      </section>

      {/* 5. FINAL ACTION BANNER */}
      <section className="bg-black py-24 border-t-8 border-[#9E0203]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="text-white space-y-4">
               <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">Ready to <span className="text-[#9E0203]">SCALE?</span></h2>
               <p className="text-gray-400 font-bold uppercase tracking-tight text-xl">The next cohort is opening for admissions.</p>
            </div>
            <Link to="/IncubateWithUs" className="inline-block bg-[#9E0203] text-white px-16 py-6 font-black text-2xl uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-2xl">
              ENROLL NOW
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
