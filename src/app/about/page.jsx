"use client";
import React from "react";
import { Link } from "react-router-dom";

const LeadershipCard = ({ leader, index }) => {
  const isEven = index % 2 === 0;
  const bgColors = ["bg-[#003366]", "bg-[#333333]", "bg-black"];
  const bgColor = bgColors[index % 3];

  return (
    <div className="relative mb-20">
      {/* Title Section with Red Bar - Scaled Down */}
      <div className={`container mx-auto px-4 mb-6`}>
        <div className={`flex flex-col ${isEven ? 'items-start' : 'items-end'}`}>
          <div className={`flex items-start gap-3 ${isEven ? 'flex-row' : 'flex-row-reverse text-right'}`}>
            <div className="w-1.5 h-12 bg-[#9E0203]"></div>
            <div>
              <h3 className="text-3xl md:text-4xl font-black font-jakarta text-[#9E0203] uppercase tracking-tight leading-none">
                {leader.name}
              </h3>
              <p className="text-gray-700 font-bold text-sm mt-1 uppercase tracking-widest pl-0.5">
                {leader.role}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section - Compact Height */}
      <div className="relative min-h-[320px] flex items-center">
        {/* The Colored Container - Scaled to 80% */}
        <div 
          className={`absolute top-0 bottom-0 ${isEven ? 'left-0' : 'right-0'} w-[80%] ${bgColor} z-0 shadow-xl`}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
            {/* Text Side - Professional Font Sizes */}
            <div className={`w-full md:w-3/5 py-8 ${isEven ? 'md:pr-10' : 'md:pl-10'} text-white`}>
              <p className="text-base md:text-lg leading-relaxed italic opacity-95">
                <span className="text-2xl font-black mr-1">{leader.quote}</span> {leader.desc}
              </p>
            </div>
            
            {/* Image Side - Perfectly Scaled */}
            <div className={`w-full md:w-2/5 flex ${isEven ? 'justify-end' : 'justify-start'}`}>
              <div className="relative w-full h-[350px] md:h-[400px] overflow-visible">
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  className={`absolute bottom-[-10px] ${isEven ? 'right-0' : 'left-0'} h-[105%] w-auto object-contain max-w-none transform ${isEven ? 'translate-x-[5%]' : 'translate-x-[-5%]'}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureSection = ({ feature, index }) => {
  const isEven = index % 2 === 0;
  // Use slightly different colors but same logic as leadership
  const bgColors = ["bg-[#9E0203]", "bg-black", "bg-[#003366]", "bg-[#333333]"];
  const bgColor = bgColors[index % 4];
  
  return (
    <div className="relative mb-24">
      {/* Title Section with Red Bar (Black if red bg) */}
      <div className={`container mx-auto px-4 mb-6`}>
        <div className={`flex flex-col ${isEven ? 'items-start' : 'items-end'}`}>
          <div className={`flex items-start gap-3 ${isEven ? 'flex-row' : 'flex-row-reverse text-right'}`}>
            <div className={`w-1.5 h-12 ${bgColor === 'bg-[#9E0203]' ? 'bg-black' : 'bg-[#9E0203]'}`}></div>
            <div>
              <h3 className={`text-3xl md:text-4xl font-black font-jakarta ${bgColor === 'bg-[#9E0203]' ? 'text-black' : 'text-[#9E0203]'} uppercase tracking-tight leading-none`}>
                {feature.title}
              </h3>
              <p className="text-gray-700 font-bold text-sm mt-1 uppercase tracking-widest pl-0.5">
                {feature.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative min-h-[300px] flex items-center">
        <div 
          className={`absolute top-0 bottom-0 ${isEven ? 'left-0' : 'right-0'} w-[85%] ${bgColor} z-0 shadow-xl`}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
            {/* Text Side */}
            <div className={`w-full md:w-3/5 py-10 ${isEven ? 'md:pr-12' : 'md:pl-12'} text-white`}>
               <div className="mb-4">
                  <div className={`w-10 h-10 flex items-center justify-center font-bold bg-white text-black rounded-full shadow-lg`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" /></svg>
                  </div>
               </div>
               <p className="text-base md:text-xl leading-relaxed font-medium">
                  {feature.desc}
               </p>
               <div className="mt-4 pt-4 border-t border-white/20">
                  <span className="font-black uppercase tracking-widest text-xs opacity-80">{feature.stats}</span>
               </div>
            </div>
            
            {/* Image Side */}
            <div className={`w-full md:w-2/5 flex ${isEven ? 'justify-end' : 'justify-start'}`}>
              <div className="relative w-full h-[280px] md:h-[320px] overflow-visible">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className={`absolute bottom-[-10px] ${isEven ? 'right-0' : 'left-0'} h-[110%] w-auto object-contain max-w-none transform ${isEven ? 'translate-x-[5%]' : 'translate-x-[5%]'} rounded-lg shadow-2xl`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function AboutPage() {
  const leadershipData = [
    {
      name: "S. Rashpal Singh Dhaliwal",
      role: "Founder Chancellor",
      image: "/assets/chairman.png",
      quote: "Greetings.",
      desc: "I extend a warm welcome to all at CGC University, Mohali. Our university was established with the primary goal of providing quality education to all, recognizing its vital role in social mobility and economic development. In today’s globalized world, our focus is on fostering students’ confidence, self-motivation, and independent thinking. Join us at CGC University, where we strive to deliver a comprehensive, future-ready, and globally relevant education.",
    },
    {
      name: "Mr. Arsh Dhaliwal",
      role: "Managing Director, CGC University, Mohali",
      image: "/assets/md.png",
      quote: "Trust is the foundation",
      desc: "of educational excellence. As Managing Director, I am committed to making CGC University synonymous with agility, quality, and innovation. We have evolved significantly in our delivery of quality education, and our goal remains steadfast—to foster independent thinking and creative problem-solving in our students. Join us as we continue this journey of transformation and excellence.",
    },
    {
      name: "Dr. Ati Priye",
      role: "CEO, Incubator & Startups",
      image: "https://i.ibb.co/pjkyb1mG/Whats-App-Image-2026-01-29-at-00-25-21.jpg",
      quote: "Innovation creates impact.",
      desc: "It’s about making ideas a reality. At VentureNest, we are committed to building a strong founder ecosystem. Our mission extends beyond providing infrastructure—we offer a platform for growth, mentorship, and excellence that bridges the gap between entrepreneurial vision and market-ready enterprises.",
    }
  ];

  const features = [
    { title: "Ecosystem", subtitle: "HOW WE WORK", image: "/assets/about-how-we-work.jpg", desc: "From ideation to IPO, we provide the complete roadmap for startups. Our comprehensive lifecycle support ensures every founder has the tools and mentorship needed.", stats: "End-to-End Support" },
    { title: "Impact", subtitle: "PROVEN RESULTS", image: "/assets/our-impact-img-photo.jpg", desc: "Over 70+ ventures incubated with funding opportunities up to ₹12 Cr. We take pride in building businesses that create real-world impact.", stats: "70+ Startups" },
    { title: "Infrastructure", subtitle: "WORLD CLASS", image: "/assets/block3.jpeg", desc: "24/7 Co-working spaces and Maker's Labs designed to foster creativity round the clock with high-performance computing.", stats: "24/7 Access" },
    { title: "Network", subtitle: "GLOBAL REACH", image: "/assets/partners-section-hands-image.png", desc: "Partnerships with global accelerators bridge the gap between local innovation and global markets, providing unparalleled scale.", stats: "Global Partners" }
  ];

  return (
    <div className="min-h-screen bg-white font-jakarta">
      {/* Title Section - Scaled to Professional Size */}
      <section className="relative py-20 overflow-hidden border-b-4 border-black">
        <div className="absolute inset-0 z-0">
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/6dc17279a912816601334e7ee397ef8cff70d812?width=1920" alt="University" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-lg bg-white/95 p-10 border-l-[12px] border-[#9E0203] shadow-xl">
            <h1 className="text-black text-5xl md:text-6xl font-black uppercase tracking-tighter mb-2 leading-none">ABOUT <span className="text-[#9E0203]">US</span></h1>
            <p className="text-[#9E0203] font-black uppercase tracking-[0.2em] text-xs mb-5">Venturenest • CGC University Mohali</p>
            <div className="bg-black h-1.5 w-24 mb-6"></div>
            <p className="text-black text-lg font-bold uppercase leading-tight">Empowering visionary founders through a world-class incubation ecosystem.</p>
          </div>
        </div>
      </section>

      {/* Leadership Section - Redesigned to be Perfectly Sized */}
      <section className="py-20 bg-white space-y-24">
        <div className="container mx-auto px-4 text-center">
          <span className="text-[#9E0203] font-black uppercase tracking-[0.3em] text-[10px] block mb-2">Our Visionaries</span>
          <h2 className="text-4xl md:text-5xl font-black font-jakarta text-black uppercase tracking-tighter border-b-4 border-black inline-block pb-2">The Leadership</h2>
        </div>
        
        <div className="space-y-24">
          {leadershipData.map((leader, index) => (
            <LeadershipCard key={index} leader={leader} index={index} />
          ))}
        </div>
      </section>

      {/* Features Section - Matches Leadership Layout */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 text-center mb-20">
             <span className="text-[#9E0203] font-black uppercase tracking-[0.4em] text-[10px] block mb-2">The Venturenest Advantage</span>
             <h2 className="text-4xl md:text-6xl font-black font-jakarta text-black tracking-tighter uppercase leading-none border-b-4 border-black inline-block pb-2">Why Choose Us?</h2>
        </div>
        
        <div className="space-y-32">
          {features.map((feature, index) => (
            <FeatureSection key={index} feature={feature} index={index} />
          ))}
        </div>
      </section>

      {/* Certification Section - Streamlined */}
      <section className="bg-black py-20 border-t-8 border-[#9E0203]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-3/12"><div className="bg-white p-8"><img src="/assets/iso-certified.png" alt="ISO" className="w-full h-24 object-contain" /></div></div>
            <div className="w-full md:w-9/12 space-y-6">
              <div className="flex items-center space-x-5"><div className="w-12 h-12 bg-[#9E0203] text-white flex items-center justify-center font-bold rounded-sm"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div><h3 className="text-3xl md:text-4xl font-black font-jakarta text-white uppercase tracking-tighter">ISO 9001:2015</h3></div>
              <p className="text-gray-400 text-lg font-bold uppercase tracking-tight leading-relaxed max-w-2xl">WE ARE PROUD TO BE ISO CERTIFIED, MAINTAINING THE HIGHEST STANDARDS COMPLIANCE.</p>
              <div className="pt-4"><Link to="/IncubateWithUs" className="inline-block bg-[#9E0203] text-white px-10 py-4 font-black text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all">Apply Now</Link></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}