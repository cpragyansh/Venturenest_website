"use client";
import React from "react";
import { Link } from "react-router-dom";

const BenefitBlock = ({ item, index }) => {
  const isEven = index % 2 === 0;
  const bgColors = ["bg-[#003366]", "bg-[#333333]", "bg-black"];
  const bgColor = bgColors[index % 3];

  return (
    <div className="relative mb-20 last:mb-0">
      <div className={`container mx-auto px-4 mb-6`}>
        <div className={`flex flex-col ${isEven ? 'items-start' : 'items-end'}`}>
          <div className={`flex items-start gap-3 ${isEven ? 'flex-row' : 'flex-row-reverse text-right'}`}>
            <div className="w-1.5 h-12 bg-[#9E0203]"></div>
            <div>
              <h3 className="text-3xl md:text-4xl font-black font-jakarta text-[#9E0203] uppercase tracking-tight leading-none">
                {item.title}
              </h3>
              <p className="text-gray-700 font-bold text-sm mt-1 uppercase tracking-widest pl-0.5">
                {item.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative min-h-[300px] flex items-center">
        <div className={`absolute top-0 bottom-0 ${isEven ? 'left-0' : 'right-0'} w-[82%] ${bgColor} z-0 shadow-xl`}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
            <div className={`w-full md:w-3/5 py-10 ${isEven ? 'md:pr-12' : 'md:pl-12'} text-white`}>
              <p className="text-lg md:text-xl leading-relaxed font-bold italic opacity-95">
                {item.desc}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {item.points.map((point, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-md px-4 py-2 border border-white/20 rounded-sm text-xs font-black uppercase tracking-widest">
                    {point}
                  </div>
                ))}
              </div>
            </div>
            <div className={`w-full md:w-2/5 flex ${isEven ? 'justify-end' : 'justify-start'}`}>
              <div className="relative w-full h-[300px] md:h-[350px] overflow-visible">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className={`absolute bottom-[-15px] ${isEven ? 'right-0' : 'left-0'} h-[110%] w-auto object-contain max-w-none transform ${isEven ? 'translate-x-[5%]' : 'translate-x-[-5%]'}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function IncubateFormPage() {

  return (
    <div className="min-h-screen bg-white font-jakarta">
      {/* 1. NEW MAJESTIC HERO SECTION */}
      <section className="relative bg-black py-24 md:py-32 overflow-hidden border-b-[12px] border-[#9E0203]">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#9E0203]/5 skew-x-[-20deg] transform translate-x-1/3 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <div className="w-full md:w-5/12 space-y-8 text-left">
              <div className="flex items-center space-x-4">
                <div className="h-1 bg-[#9E0203] w-12"></div>
                <span className="text-white/60 font-black uppercase tracking-[0.5em] text-[10px]">Call for Founders</span>
              </div>
              <h1 className="text-white text-6xl md:text-8xl font-black font-jakarta uppercase tracking-tighter leading-[0.9]">
                INCUBATE <br />
                <span className="text-[#9E0203]">WITH US</span>
              </h1>
              <div className="space-y-4">
                <div className="h-1 w-32 bg-white"></div>
                <p className="text-gray-400 text-xl font-bold uppercase tracking-tight leading-snug max-w-md">
                   Where visionary ideas Evolve into market-leading enterprises.
                </p>
              </div>
              <div className="pt-6">
                 <a 
                   href="https://forms.gle/pPt5qsTXHLEs8pbV9"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-block bg-[#9E0203] text-white px-12 py-5 font-black text-xl uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-2xl"
                 >
                   Apply Now
                 </a>
              </div>
            </div>
            <div className="w-full md:w-7/12 relative">
              <div className="absolute -inset-4 border-2 border-white/5 rounded-3xl translate-x-4 translate-y-4"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)]">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/4457b3ebf8e16b2f34e08b4bc4e55bb881f9f762?width=1200" 
                  alt="Venturenest Hub" 
                  className="w-full h-full object-cover aspect-[16/9]"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-[#9E0203] p-8 shadow-2xl border-4 border-black">
                 <div className="text-white font-black text-4xl uppercase tracking-tighter leading-none">JOIN THE<br/>ELITE</div>
                 <div className="text-white/70 text-[10px] uppercase font-bold tracking-widest mt-2">Limited Slots Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BENTO GRID - CLEAN VERSION */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
             <span className="text-[#a40f19] font-black uppercase tracking-[0.4em] text-[10px] block mb-2">The Ecosystem Advantage</span>
             <h2 className="text-4xl md:text-5xl font-black font-jakarta text-black uppercase tracking-tighter border-b-4 border-[#003366] inline-block pb-2">Why  VentureNest?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[600px]">
            {/* Main Feature - Red */}
            <div className="md:col-span-2 md:row-span-2 bg-[#a40f19] p-10 flex flex-col justify-end group cursor-pointer relative overflow-hidden rounded-3xl shadow-lg">
               <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                  <svg className="w-40 h-40 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/></svg>
               </div>
               <h3 className="text-4xl font-black text-white uppercase tracking-tighter mb-4">Unparalleled Growth</h3>
               <p className="text-white/80 text-lg font-bold">We don't just provide space; we provide a high-velocity launchpad for ambitious founders.</p>
               <div className="mt-8 border-t border-white/20 pt-4 flex items-center justify-between">
                  <span className="text-white font-black uppercase tracking-widest text-xs">Explore Program</span>
                  {/* <div className="w-10 h-10 border border-white flex items-center justify-center rounded-full group-hover:bg-white group-hover:text-[#a40f19] transition-colors">
                     →
                  </div> */}
               </div>
            </div>
            
            {/* Top Right - Black */}
            <div className="bg-black p-8 flex flex-col justify-center rounded-3xl shadow-lg">
               <div className="text-white font-black text-5xl mb-2">200+</div>
               <div className="text-[#003366] font-black uppercase tracking-widest text-[10px]">Expert Mentors</div>
               <p className="text-white/60 text-xs mt-4">Industry veterans from across the globe guiding Entureprenuerial Journey.</p>
            </div>
            
            {/* Row 2 Right 1 - White Border */}
            <div className="bg-white border-2 border-dashed border-gray-300 p-8 flex flex-col justify-between group hover:border-[#003366] transition-colors rounded-3xl">
               <h4 className="text-black font-black uppercase tracking-tighter text-xl group-hover:text-[#003366] transition-colors leading-tight">Fast-track <br/>Funding</h4>
               <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Pipeline Acceleration</p>
            </div>
            
             {/* Bottom Right Span - BLUE ACCENT */}
            <div className="md:col-span-2 bg-[#003366] p-8 flex items-center justify-between group cursor-pointer transition-colors rounded-3xl shadow-lg">
               <div className="space-y-4">
                  <h4 className="text-white font-black uppercase tracking-tighter text-2xl">State of the Art Infrastructure</h4>
                  <p className="text-white/70 text-sm max-w-xs">Access 24/7 dedicated workspaces and high-performance labs.</p>
               </div>
               <div className="w-16 h-16 bg-white/10 flex items-center justify-center rounded-full shrink-0 group-hover:bg-white group-hover:text-[#003366] text-white transition-all">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OFFLINE INCUBATION PROCESS - VENTURENEST THEMED */}
      <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
        {/* Background Image: Modern Startup Hub / Office */}
        <div className="absolute grayscale inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1920&q=80" 
            alt="VentureNest Startup Hub" 
            className="w-full h-full object-cover"
          />
          {/* Subtle overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Navy Blue Box Overlay */}
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="bg-[#1e4475] w-full md:w-[48%] p-8 md:p-14 text-white shadow-2xl relative overflow-hidden">
            {/* Decorative slant */}
            <div className="absolute top-0 right-0 w-full h-full bg-[#1e4475] opacity-50 transform translate-x-1/2 -skew-x-[15deg] pointer-events-none"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold font-jakarta leading-tight mb-4 uppercase tracking-tighter">
                Offline Incubation Process
              </h2>
              <p className="text-blue-100 text-sm md:text-base font-medium mb-8 leading-relaxed uppercase tracking-widest">
                Physical Registration Steps at Venturenest Hub
              </p>

              <ol className="space-y-4 text-[13px] md:text-sm font-medium">
                <li className="flex gap-4">
                  <span className="shrink-0 font-bold text-[#9E0203]">01.</span>
                  <p>Visit the VentureNest Hub for a center walkthrough and primary orientation.</p>
                </li>
                <li className="flex gap-4">
                  <span className="shrink-0 font-bold text-[#9E0203]">02.</span>
                  <p>Obtain the physical startup registration kit from the incubation reception desk.</p>
                </li>
                <li className="flex gap-4">
                  <span className="shrink-0 font-bold text-[#9E0203]">03.</span>
                  <p>Schedule a one-on-one session with our Portfolio Manager for initial idea vetting.</p>
                </li>
                <li className="flex gap-4">
                  <span className="shrink-0 font-bold text-[#9E0203]">04.</span>
                  <p>Submit the physical application along with your business plan and pitch deck.</p>
                </li>
                <li className="flex gap-4">
                  <span className="shrink-0 font-bold text-[#9E0203]">05.</span>
                  <p>Undergo an internal evaluation by the VentureNest technical audit committee.</p>
                </li>
                <li className="flex gap-4">
                  <span className="shrink-0 font-bold text-[#9E0203]">06.</span>
                  <p>Present your startup pitch in-person to our panel of internal industry experts.</p>
                </li>
                <li className="flex gap-4">
                  <span className="shrink-0 font-bold text-[#9E0203]">07.</span>
                  <p>Receive the formal incubation offer and membership agreement via registered mail.</p>
                </li>
                <li className="flex gap-4">
                  <span className="shrink-0 font-bold text-[#9E0203]">08.</span>
                  <p>Pay the hub membership/incubation fee to finalize your 24/7 center access.</p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* 3. APPLICATION PROCESS - ALREADY REDESIGNED (Keeping position for flow) */}
      <section className="relative bg-[#a40f19] py-24 overflow-hidden">
        {/* World Map Texture Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')", backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
             <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">Application Process</h2>
             <p className="text-white/80 text-lg font-medium leading-relaxed">
               Discover the seamless journey to joining VentureNest. We have streamlined our evaluation process to bring high-potential startups on board efficiently.
             </p>
          </div>

          <div className="bg-white rounded-[40px] p-8 md:p-16 shadow-2xl max-w-6xl mx-auto">
             <div className="flex flex-col md:flex-row items-start justify-between relative">
                
                {[
                  { step: "STEP-1", title: "Apply Online", desc: "Submit your startup details via our application form.", active: true },
                  { step: "STEP-2", title: "Evaluation", desc: "Expert panel reviews your proposal for viability.", active: false },
                  { step: "STEP-3", title: "Pitching", desc: "Present your idea to our investment committee.", active: false },
                  { step: "STEP-4", title: "Onboarding", desc: "Sign agreements and access resources immediately.", active: false }
                ].map((item, index, arr) => (
                  <div key={index} className="relative flex-1 group w-full md:w-auto mb-10 md:mb-0 last:mb-0">
                     {/* Horizontal Line (Desktop) */}
                     {index !== arr.length - 1 && (
                       <div className="hidden md:block absolute top-6 left-12 right-0 h-[2px] bg-gray-200"></div>
                     )}
                     
                     {/* Vertical Line (Mobile) */}
                     {index !== arr.length - 1 && (
                       <div className="md:hidden absolute left-6 top-12 bottom-[-40px] w-[2px] bg-gray-200"></div>
                     )}

                     <div className="flex md:flex-col items-start gap-6 md:gap-0">
                        {/* Icon */}
                        <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center shrink-0 mb-6 transition-transform hover:scale-110 ${item.active ? 'bg-[#009065] text-white' : 'bg-gray-200 text-gray-400'}`}>
                           {item.active ? (
                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                           ) : (
                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                           )}
                        </div>

                        {/* Content */}
                        <div className="md:pr-8 pt-1">
                           <span className="text-[#a40f19] font-bold text-xs uppercase tracking-widest block mb-2">{item.step}</span>
                           <h3 className="text-gray-900 font-bold text-lg leading-tight mb-2">{item.title}</h3>
                           <p className="text-gray-500 text-sm leading-relaxed max-w-[200px]">{item.desc}</p>
                        </div>
                     </div>
                  </div>
                ))}

             </div>

             {/* Bottom Button */}
             <div className="mt-16 text-center">
                <a 
                   href="https://forms.gle/pPt5qsTXHLEs8pbV9"
                   target="_blank"
                   rel="noopener noreferrer" 
                   className="inline-flex items-center gap-2 bg-[#a40f19] text-white px-8 py-3 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-black transition-colors"
                >
                   Start Application
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </a>
             </div>
          </div>
        </div>
      </section>

      {/* 5. FINAL ACTION BANNER - SIMPLE VERSION */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 p-8 bg-gray-50 rounded-2xl border border-gray-100">
            <div className="text-center md:text-left">
               <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-black">Ready to <span className="text-[#a40f19]">Apply?</span></h2>
               <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px] mt-1">Start your journey with VentureNest today.</p>
            </div>
            <div className="shrink-0">
              <a 
                href="https://forms.gle/pPt5qsTXHLEs8pbV9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#003366] text-white px-8 py-4 rounded-lg font-bold uppercase text-xs tracking-widest hover:bg-black transition-all shadow-md group"
              >
                APPLY NOW
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
