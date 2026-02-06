import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
  return (
    <section className="relative min-h-[85vh] pt-24 lg:pt-28 pb-12 overflow-hidden font-jakarta bg-[#0a0a0a]">
      {/* Background with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://www.cgcuniversity.in/frontend/images/homepage-images/legacy.webp" 
          alt="CGC Campus" 
          className="w-full h-full object-cover"
        />
        {/* <div className="absolute inset-0 bg-black/40"></div> */}
      </div>

      <div className="w-full px-6 md:px-12 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">
          
          {/* LEFT CONTENT BLOCK - Simple Typography, Pushed Left */}
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-white text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight uppercase">
                Legacy of <br />
                <span className="text-[#9E0203]">VentureNest</span>
              </h2>
              
              <div className="border-l-2 border-[#9E0203] pl-6 py-2">
                <p className="text-white/70 text-lg leading-relaxed font-normal max-w-lg">
                  CGC University Mohali, has earned a multitude of prestigious awards, showcasing its unwavering dedication to excellence. These accolades span across academic prowess and innovative pedagogical approaches.
                </p>
              </div>

              <div className="mt-8 text-white/30 text-[10px] font-medium tracking-[0.4em] uppercase">
                Established 2024 — Statistics for 2026
              </div>
            </motion.div>
          </div>

          {/* RIGHT GRID BLOCK - "Raw" Style Cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Card 1: Placement & Scholarship (Raw Brutalist) */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="bg-white p-8 rounded-none border-b-[8px] border-r-[8px] border-[#9E0203] flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-[#1a1a1a] font-black text-2xl mb-6 leading-tight uppercase tracking-tighter">
                    Unwavering <br />Commitment
                  </h3>
                  <p className="text-xs text-black/60 font-bold leading-normal mb-10 uppercase tracking-widest">
                  {/* How many patents have been filed by Venturenest */}
                  Venturenest has scaled Patents from 50+ in 2024 to a monumental 2000+ Patents targeted in 2026.
                  </p>
                </div>
                <div className="flex items-baseline gap-4">
                  <div className="text-[#9E0203] text-6xl font-black">2000+</div>
                  <div className="text-[#1a1a1a] text-xl font-black uppercase">Patents Filed</div>
                </div>
              </motion.div>

              {/* Card 2: Patents Graph (Raw Minimal) */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="bg-white p-8 rounded-none border-b-[8px] border-r-[8px] border-black"
              >
                <div className="mb-8">
                  <h4 className="text-[#1a1a1a] font-black text-lg mb-1 uppercase">Institutional IP</h4>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em]">Patent Metrics 24-26</p>
                </div>
                <div className="aspect-[1.5/1] border-l-2 border-b-2 border-black relative mb-4">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 400 200">
                    {/* Y-axis markings */}
                    <text x="-10" y="165" fontSize="10" fontWeight="bold" fill="black" textAnchor="end">0</text>
                    <text x="-10" y="107" fontSize="10" fontWeight="bold" fill="black" textAnchor="end">500</text>
                    <text x="-10" y="50" fontSize="10" fontWeight="bold" fill="black" textAnchor="end">1000</text>
                    
                    {/* X-axis markings */}
                    <text x="60" y="215" fontSize="10" fontWeight="bold" fill="black" textAnchor="middle">2024</text>
                    <text x="210" y="215" fontSize="10" fontWeight="bold" fill="black" textAnchor="middle">2025</text>
                    <text x="360" y="215" fontSize="10" fontWeight="bold" fill="black" textAnchor="middle">2026</text>

                    <motion.path 
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 1 }}
                      d="M60,165 L120,150 L180,140 L240,110 L300,90 L360,50" 
                      fill="none" 
                      stroke="#1a1a1a" 
                      strokeWidth="3" 
                    />
                    {[60, 120, 180, 240, 300, 360].map((x, i) => (
                      <rect key={i} x={x-4} y={165 - (i*23) - 4} width="8" height="8" fill="#9E0203" />
                    ))}
                  </svg>
                </div>
              </motion.div>

              {/* Card 3: Funding Graph (Raw Minimal) */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="bg-white p-8 rounded-none border-b-[8px] border-r-[8px] border-black"
              >
                <div className="mb-8">
                  <h4 className="text-[#1a1a1a] font-black text-lg mb-1 uppercase">Capital Growth</h4>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em]">Startup Funding (Lakhs)</p>
                </div>
                <div className="aspect-[1.5/1] border-l-2 border-b-2 border-black relative mb-4">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 400 200">
                    {/* Y-axis markings */}
                    <text x="-10" y="170" fontSize="10" fontWeight="bold" fill="black" textAnchor="end">0</text>
                    <text x="-10" y="115" fontSize="10" fontWeight="bold" fill="black" textAnchor="end">75L</text>
                    <text x="-10" y="60" fontSize="10" fontWeight="bold" fill="black" textAnchor="end">150L</text>

                    {/* X-axis markings */}
                    <text x="70" y="215" fontSize="10" fontWeight="bold" fill="black" textAnchor="middle">2024</text>
                    <text x="210" y="215" fontSize="10" fontWeight="bold" fill="black" textAnchor="middle">2025</text>
                    <text x="350" y="215" fontSize="10" fontWeight="bold" fill="black" textAnchor="middle">2026</text>

                    <motion.path 
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 1 }}
                      d="M70,170 L110,165 L150,155 L190,135 L230,115 L270,105 L310,95 L350,60" 
                      fill="none" 
                      stroke="#9E0203" 
                      strokeWidth="3" 
                    />
                    <circle cx="350" cy="60" r="6" fill="#1a1a1a" />
                  </svg>
                </div>
              </motion.div>

              {/* Card 4: Main Funding Stat (Raw Impact) */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="bg-[#9E0203] p-8 rounded-none border-b-[8px] border-r-[8px] border-black text-white flex flex-col items-center justify-center text-center"
              >
                <span className="text-white/60 font-black text-[10px] uppercase tracking-[0.4em] mb-4">Total Funding Raised</span>
                <div className="text-5xl md:text-6xl font-black mb-4 leading-none tracking-tighter italic">1.5 CR+</div>
                <div className="h-[2px] w-full bg-white/20 mb-4"></div>
                <p className="text-white font-bold text-sm uppercase tracking-widest">Grants Engineered</p>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;
