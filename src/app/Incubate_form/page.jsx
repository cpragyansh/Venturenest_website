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
  const benefitsData = [
    {
      title: "Strategic Mentorship",
      subtitle: "EXPERT GUIDANCE",
      desc: "Connect with seasoned entrepreneurs and industry veterans who have successfully navigated the startup journey from ideation to exit.",
      points: ["1-on-1 Sessions", "Domain Experts", "Exit Strategy"],
      image: "/assets/about-how-we-work.jpg",
    },
    {
      title: "Funding & Investment",
      subtitle: "CAPITAL ACCELERATION",
      desc: "Access a robust network of angel investors, venture capitalists, and government grants specifically curated for the Venturenest ecosystem.",
      points: ["Seed Funding", "VC Network", "Pitch Days"],
      image: "/assets/our-impact-img-photo.jpg",
    },
    {
      title: "Vibrant Infrastructure",
      subtitle: "WORLD CLASS FACILITIES",
      desc: "Work in a 24/7 high-performance environment equipped with modern labs, collaborative workspaces, and cutting-edge technical resources.",
      points: ["24/7 Access", "Makers Lab", "Global Connectivity"],
      image: "/assets/mission-updated.jpg",
    }
  ];

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
                   Where visionary ideas transform into market-leading enterprises.
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

      {/* 2. BENTO GRID - ADDING SOMETHING FROM INTERNET TRENDS */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
             <span className="text-[#9E0203] font-black uppercase tracking-[0.4em] text-[10px] block mb-2">The Ecosystem Advantage</span>
             <h2 className="text-4xl md:text-5xl font-black font-jakarta text-black uppercase tracking-tighter border-b-4 border-black inline-block pb-2">Why VentureNest?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[600px]">
            {/* Main Feature */}
            <div className="md:col-span-2 md:row-span-2 bg-[#9E0203] p-10 flex flex-col justify-end group cursor-pointer relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                  <svg className="w-40 h-40 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/></svg>
               </div>
               <h3 className="text-4xl font-black text-white uppercase tracking-tighter mb-4">Unparalleled Growth</h3>
               <p className="text-white/80 text-lg font-bold">We don't just provide space; we provide a high-velocity launchpad for ambitious founders.</p>
               <div className="mt-8 border-t border-white/20 pt-4 flex items-center justify-between">
                  <span className="text-white font-black uppercase tracking-widest text-xs">Explore Program</span>
                  <div className="w-10 h-10 border border-white flex items-center justify-center rounded-full group-hover:bg-white group-hover:text-[#9E0203] transition-colors">
                     →
                  </div>
               </div>
            </div>
            {/* Top Right */}
            <div className="bg-black p-8 flex flex-col justify-center">
               <div className="text-white font-black text-5xl mb-2">200+</div>
               <div className="text-[#9E0203] font-black uppercase tracking-widest text-[10px]">Expert Mentors</div>
               <p className="text-white/60 text-xs mt-4">Industry veterans from across the globe guiding your success.</p>
            </div>
            {/* Row 2 Right 1 */}
            <div className="bg-white border-2 border-black p-8 flex flex-col justify-between group hover:bg-black transition-colors">
               <h4 className="text-black font-black uppercase tracking-tighter text-xl group-hover:text-white transition-colors leading-tight">Fast-track <br/>Funding</h4>
               <p className="text-gray-500 text-xs group-hover:text-gray-400">Direct pipeline to venture capital firms.</p>
            </div>
             {/* Bottom Right Span */}
            <div className="md:col-span-2 bg-gray-200 p-8 flex items-center justify-between group cursor-pointer hover:bg-[#003366] transition-colors">
               <div className="space-y-4">
                  <h4 className="text-black font-black uppercase tracking-tighter text-2xl group-hover:text-white">State of the Art Infrastructure</h4>
                  <p className="text-black/60 group-hover:text-white/60 text-sm max-w-xs">Access 24/7 dedicated workspaces and high-performance labs.</p>
               </div>
               <div className="w-16 h-16 bg-black flex items-center justify-center rounded-full shrink-0 group-hover:bg-[#9E0203] transition-colors">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MAJESTIC ALTERNATING BLOCKS - BENEFITS */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 text-center mb-20">
             <span className="text-[#9E0203] font-black uppercase tracking-[0.4em] text-[10px] block mb-2">Our Offerings</span>
             <h2 className="text-4xl md:text-6xl font-black font-jakarta text-black tracking-tighter uppercase leading-none border-b-4 border-black inline-block pb-2">Founder Support</h2>
        </div>
        
        <div className="space-y-32">
          {benefitsData.map((item, index) => (
            <BenefitBlock key={index} item={item} index={index} />
          ))}
        </div>
      </section>

      {/* 4. APPLICATION PROCESS - MAJESTIC TIMELINE */}
      <section className="py-24 bg-black border-y-8 border-[#9E0203]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-20 space-y-6">
             <h2 className="text-white text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">THE JOURNEY <br/> <span className="text-[#9E0203]">STARTS HERE</span></h2>
             <div className="h-1 w-24 bg-[#9E0203] mx-auto"></div>
             <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">Transparency in every step of your onboarding.</p>
          </div>

          <div className="relative max-w-5xl mx-auto">
             {/* Timeline Line */}
             <div className="absolute left-[50%] top-0 bottom-0 w-1 bg-white/10 hidden md:block"></div>
             
             <div className="space-y-16">
                {[
                  { step: "01", title: "Submission", desc: "Submit your comprehensive application providing details of your vision and market potential." },
                  { step: "02", title: "Evaluation", desc: "Our expert panel reviews your proposal for feasibility, impact, and founder capability." },
                  { step: "03", title: "Selection", desc: "Shortlisted founders undergo an interview process to align goals and resource requirements." },
                  { step: "04", title: "Acceleration", desc: "Get onboarded into the ecosystem and begin your journey towards scaling excellence." }
                ].map((item, i) => (
                  <div key={i} className={`flex flex-col md:flex-row items-center gap-10 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                       <div className="text-[#9E0203] font-black text-px font-jakarta opacity-20 text-[6rem] leading-none mb-[-2rem]">{item.step}</div>
                       <h3 className="text-white text-4xl font-black uppercase tracking-tighter relative z-10">{item.title}</h3>
                       <p className="text-gray-400 text-lg font-medium max-w-sm">{item.desc}</p>
                    </div>
                    <div className="hidden md:flex relative z-20 w-16 h-16 bg-white border-8 border-black rounded-full items-center justify-center shrink-0">
                       <div className="w-4 h-4 bg-[#9E0203] rounded-full"></div>
                    </div>
                    <div className="w-full md:w-1/2"></div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* 5. FINAL ACTION BANNER */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 border-4 border-black p-12 md:p-20 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#9E0203]"></div>
            <div className="space-y-6 max-w-xl">
               <h2 className="text-black text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none">Ready to <span className="text-[#9E0203]">Disrupt</span> the Market?</h2>
               <p className="text-gray-600 font-bold uppercase tracking-tight text-xl">The next legendary startup starts with a single application.</p>
            </div>
            <div className="shrink-0">
              <a 
                href="https://forms.gle/pPt5qsTXHLEs8pbV9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black text-white px-16 py-6 font-black text-2xl uppercase tracking-widest hover:bg-[#9E0203] transition-all transform hover:scale-105"
              >
                APPLY NOW →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
