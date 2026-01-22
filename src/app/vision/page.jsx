"use client";
import React from "react";
import { Link } from "react-router-dom";

const ContentBlock = ({ item, index }) => {
  const isEven = index % 2 === 0;
  const bgColors = ["bg-[#003366]", "bg-[#333333]", "bg-black"];
  const bgColor = bgColors[index % 3];

  return (
    <div className="relative mb-20 last:mb-0">
      {/* Title Section with Red Bar */}
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

      {/* Content Section */}
      <div className="relative min-h-[320px] flex items-center">
        {/* The Colored Container - Spans from side */}
        <div 
          className={`absolute top-0 bottom-0 ${isEven ? 'left-0' : 'right-0'} w-[82%] ${bgColor} z-0 shadow-xl`}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
            {/* Text Side */}
            <div className={`w-full md:w-3/5 py-10 ${isEven ? 'md:pr-12' : 'md:pl-12'} text-white`}>
              <p className="text-lg md:text-xl leading-relaxed italic opacity-95 first-letter:text-3xl first-letter:font-black first-letter:mr-1">
                {item.desc}
              </p>
              {item.extended && (
                <p className="text-base mt-4 text-white/80 leading-relaxed hidden md:block">
                  {item.extended}
                </p>
              )}
            </div>
            
            {/* Image Side */}
            <div className={`w-full md:w-2/5 flex ${isEven ? 'justify-end' : 'justify-start'}`}>
              <div className="relative w-full h-[350px] md:h-[400px] overflow-visible">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className={`absolute bottom-[-15px] ${isEven ? 'right-0' : 'left-0'} h-[108%] w-auto object-contain max-w-none transform ${isEven ? 'translate-x-[5%]' : 'translate-x-[-5%]'}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function VisionPage() {
  const visionMissionData = [
    {
      title: "Our Vision",
      subtitle: "THE FUTURE WE SEE",
      desc: "To be a premier incubation hub that fuels technological innovation, nurtures high-potential startups, and drives sustainable entrepreneurial success at regional and national levels.",
      extended: "We envision an ecosystem where every revolutionary idea has the support and resources to scale into a market-leading enterprise, contributing significantly to the nation's economic growth and technological advancement.",
      image: "/assets/vision-updated.jpg",
    },
    {
      title: "Our Mission",
      subtitle: "OUR PURPOSE",
      desc: "To empower early-stage ventures by providing structured mentorship, access to funding, cutting-edge infrastructure, and a collaborative ecosystem that fosters innovation and accelerates business growth.",
      extended: "Our mission is to bridge the gap between academic research and commercial viability, ensuring that the next generation of founders has the discipline, network, and tools required to navigate the complex global market.",
      image: "/assets/mission-updated.jpg",
    }
  ];

  return (
    <div className="min-h-screen bg-white font-jakarta">
      {/* Title Section - Professional Campus Theme */}
      <section className="relative py-28 overflow-hidden border-b-8 border-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/3d21804528e0cfd22fd4944defec35b289d09126?width=1920" 
            alt="University Campus" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl bg-white/95 p-12 border-l-[16px] border-[#9E0203] shadow-2xl">
            <h1 className="text-black text-6xl md:text-7xl font-black uppercase tracking-tighter mb-2 leading-none">
              Mission & <span className="text-[#9E0203]">Vision</span>
            </h1>
            <p className="text-[#9E0203] font-black uppercase tracking-[0.3em] text-sm mb-6">
              VENTURENEST • CGC UNIVERSITY MOHALI
            </p>
            <div className="bg-black h-2 w-32 mb-8"></div>
            <p className="text-black text-xl font-bold uppercase leading-tight max-w-lg">
              Fostering innovation and empowering the next generation of visionary founders.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Text - Institutional & Credible */}
      <section className="py-20 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-black text-black uppercase tracking-tighter">The Gateway to Innovation</h2>
            <div className="flex justify-center space-x-2">
              <div className="h-1.5 w-20 bg-[#9E0203]"></div>
              <div className="h-1.5 w-10 bg-black"></div>
            </div>
            <p className="text-gray-700 text-xl font-medium leading-relaxed italic">
              VentureNest is the first entrepreneurship incubation centre at CGC University, founded to promote innovation, business development and entrepreneurship. Located at Block 3 of the campus, VentureNest is essentially one of the most vibrant hubs for entrepreneurship development with the necessary facilities for startup success.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Sections - Majestic Blocks */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="space-y-32">
          {visionMissionData.map((item, index) => (
            <ContentBlock key={index} item={item} index={index} />
          ))}
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-black py-20 border-t-8 border-[#9E0203]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8">Ready to <span className="text-[#9E0203]">IGNITE</span> Your Vision?</h2>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link to="/IncubateWithUs" className="inline-block bg-[#9E0203] text-white px-12 py-5 font-black text-xl uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-xl">
              Incubate Now
            </Link>
            <Link to="/contact" className="inline-block border-2 border-white text-white px-12 py-5 font-black text-xl uppercase tracking-widest hover:bg-white hover:text-black transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
