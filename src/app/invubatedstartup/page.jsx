"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// --- Design System Tokens ---
const BRAND_RED = "#9E0203";
const BRAND_NAVY = "#003366";

const logos = [
  "/assets/Start-up-logos/5(3 - Karan Agrawal.png",
  "/assets/Start-up-logos/1749710321866 - Aditya Raj Saxena.jpg",
  "/assets/Start-up-logos/file_00000000fa6861f8b46d40c35e6646b9_conversation_id=67fe9c73-e260-8006-bab2-ec35ca4f9089 - Juara Organics.png",
  "/assets/Start-up-logos/IMG-20231230-WA0023(2) - Anand Kumar.jpg",
  "/assets/Start-up-logos/IMG-20250208-WA0007 - Shekhar kashyap.jpg",
  "/assets/Start-up-logos/IMG-20250611-WA0000 - arpit kumar.jpg",
  "/assets/Start-up-logos/IMG-20250612-WA0000 - JIGYASA GARG.jpg",
  "/assets/Start-up-logos/IMG-20250612-WA0004 - Navneet Yaduvanshi.jpg",
  "/assets/Start-up-logos/IMG-20250612-WA0004 - SHAGUN SHARMA.jpg",
  "/assets/Start-up-logos/IMG-20250612-WA0005 - Mayank Dahiya.jpg",
  "/assets/Start-up-logos/Logo - Harris Babbar.png",
  "/assets/Start-up-logos/SAVE_20250611_152058 - Pulkesh Gautam.jpg",
  "/assets/Start-up-logos/Screenshot_2025-03-06-23-58-39-73_6012fa4d4ddec268fc5c7112cbb265e7 - Aryan Mankotia.jpg",
  "/assets/Start-up-logos/Screenshot_2025-06-12-18-15-12-052_com.whatsapp-edit - Vedant Daware.jpg",
  "/assets/Start-up-logos/stacked wordmark black - ansh haritash.png",
  "/assets/Start-up-logos/Techealth_logo - TecHealth.png",
  "/assets/Start-up-logos/tHM LOGO - Abhishek Sharma.png",
  "/assets/Start-up-logos/VeeGamma Logo Design in Gradient__endoftext__ - Vanshika.png",
];

const StatBlock = ({ number, label, desc, color }) => (
  <div className={`p-10 ${color === 'red' ? 'bg-[#9E0203]' : 'bg-[#003366]'} text-white relative overflow-hidden group`}>
    <div className="absolute -bottom-4 -right-4 text-9xl font-black opacity-10 transform group-hover:scale-110 transition-transform">{number}</div>
    <div className="relative z-10 space-y-4">
      <div className="text-5xl md:text-7xl font-black font-jakarta tracking-tighter uppercase">{number}</div>
      <div className="space-y-1">
        <h4 className="text-xl font-black uppercase tracking-widest">{label}</h4>
        <p className="text-white/60 text-sm font-medium uppercase tracking-tight">{desc}</p>
      </div>
    </div>
  </div>
);

export default function IncubatedStartupsPage() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://venturenest.onrender.com/getstartup');
        setData(response.data);
        setFilteredData(response.data);
      } catch (error) {
        console.error('Error fetching startups:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!searchQuery) {
      setFilteredData(data);
    } else {
      const query = searchQuery.toLowerCase();
      setFilteredData(data.filter(item => 
        item.StartupName.toLowerCase().includes(query) || 
        item.FounderName.toLowerCase().includes(query) ||
        (item.ProductName && item.ProductName.toLowerCase().includes(query))
      ));
    }
  }, [searchQuery, data]);

  return (
    <div className="min-h-screen bg-white font-jakarta">
      {/* 1. MAJESTIC SPLIT HERO */}
      <section className="relative bg-black py-24 md:py-32 overflow-hidden border-b-[12px] border-[#9E0203]">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#9E0203]/5 skew-x-[-20deg] transform translate-x-1/3 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <div className="w-full md:w-5/12 space-y-8 text-left">
              <div className="flex items-center space-x-4">
                <div className="h-1 bg-[#9E0203] w-12"></div>
                <span className="text-white/60 font-black uppercase tracking-[0.5em] text-[10px]">Ecosystem Portfolio</span>
              </div>
              <h1 className="text-white text-6xl md:text-8xl font-black font-jakarta uppercase tracking-tighter leading-[0.85]">
                INCUBATED <br />
                <span className="text-[#9E0203]">VENTURES</span>
              </h1>
              <div className="space-y-4">
                <div className="h-1 w-32 bg-white"></div>
                <p className="text-gray-400 text-xl font-bold uppercase tracking-tight leading-snug max-w-md">
                   Meet the architects of tomorrow, building high-impact solutions in our innovation labs.
                </p>
              </div>
            </div>

            <div className="w-full md:w-7/12 relative">
              <div className="absolute -inset-4 border-2 border-white/5 rounded-3xl translate-x-4 translate-y-4"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)]">
                <img 
                  src="/assets/incubated_hero.png" 
                  alt="Boardroom" 
                  className="w-full h-full object-cover aspect-[16/9]"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-[#9E0203] p-8 shadow-2xl border-4 border-black">
                 <div className="text-white font-black text-4xl uppercase tracking-tighter leading-none">BUILDING<br/>LEGACIES</div>
                 <div className="text-white/70 text-[10px] uppercase font-bold tracking-widest mt-2">Scale-Ready Portfolio</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PORTFOLIO INSIGHTS - Signature Blocks */}
      <section className="grid grid-cols-1 md:grid-cols-3">
         <StatBlock number="100+" label="Ventures" desc="Active Incubated Startups" color="red" />
         <StatBlock number="1000+" label="Patents" desc="Patents Published Successfully" color="navy" />
         <StatBlock number="1.5Cr+" label="Funding" desc="Total Ecosystem Capital Raised" color="red" />
      </section>

      {/* 3. LOGO CLOUD - Premium Slider */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4">
           <div className="text-center mb-16">
              <span className="text-[#9E0203] font-black uppercase tracking-[0.4em] text-[10px]">Brand Identity</span>
              <h2 className="text-3xl font-black uppercase tracking-tighter mt-2">The Foundry Network</h2>
           </div>
           
           <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={50}
              slidesPerView={2}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              loop={true}
              breakpoints={{
                640: { slidesPerView: 3 },
                900: { slidesPerView: 4 },
                1200: { slidesPerView: 6 },
              }}
              className="px-10"
            >
              {logos.map((logo, index) => (
                <SwiperSlide key={index}>
                  <div className="h-24 flex items-center justify-center  opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer group">
                    <img src={logo} alt="Startup Logo" className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
        </div>
      </section>

      {/* 4. VENTURE INVENTORY - The Modern Grid/List */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-20 gap-8">
            <div className="space-y-2 text-center md:text-left">
               <span className="text-[#9E0203] font-black uppercase tracking-[0.4em] text-[10px] block">Inventory</span>
               <h2 className="text-4xl md:text-6xl font-black font-jakarta text-black uppercase tracking-tighter border-b-4 border-black inline-block pb-2">Venture Portfolio</h2>
            </div>
            
            <div className="relative w-full md:w-96">
                <input 
                  type="text" 
                  placeholder="SEARCH PORTFOLIO..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border-2 border-black p-4 text-[10px] font-black tracking-widest uppercase focus:outline-none focus:bg-black focus:text-white transition-all placeholder:text-gray-300 shadow-[4px_4px_0px_rgba(0,0,0,0.1)]"
                />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-4 border-black text-left">
                  <th className="py-6 px-4 text-[11px] font-black uppercase tracking-widest text-gray-400">#</th>
                  <th className="py-6 px-4 text-[11px] font-black uppercase tracking-widest text-[#9E0203]">Venture Name</th>
                  <th className="py-6 px-4 text-[11px] font-black uppercase tracking-widest text-black">Founders</th>
                  <th className="py-6 px-4 text-[11px] font-black uppercase tracking-widest text-black hidden lg:table-cell">Brief</th>
                  <th className="py-6 px-4 text-[11px] font-black uppercase tracking-widest text-black">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {loading ? (
                   [1,2,3,4,5].map(i => (
                     <tr key={i} className="animate-pulse">
                        <td colSpan="5" className="h-16 bg-gray-50 mb-2"></td>
                     </tr>
                   ))
                ) : (
                  filteredData.map((item, index) => (
                    <tr key={item._id} className="group hover:bg-gray-50 transition-colors">
                      <td className="py-8 px-4 text-sm font-black text-gray-300">{(index + 1).toString().padStart(2, '0')}</td>
                      <td className="py-8 px-4">
                        <div className="text-xl font-black uppercase tracking-tighter text-black group-hover:text-[#9E0203] transition-colors">{item.StartupName}</div>
                      </td>
                      <td className="py-8 px-4">
                        <div className="text-sm font-bold uppercase text-gray-600">{item.FounderName}</div>
                      </td>
                      <td className="py-8 px-4 hidden lg:table-cell">
                        <div className="text-sm font-medium text-gray-400 max-w-xs truncate">{item.ProductName || "Stealth Mode Venture"}</div>
                      </td>
                      <td className="py-8 px-4">
                        <span className={`inline-block px-3 py-1 text-[9px] font-black uppercase tracking-widest border ${item.RegistrationStatus?.includes('Registered') ? 'border-green-500 text-green-500 bg-green-50' : 'border-[#9E0203] text-[#9E0203] bg-red-50'}`}>
                          
                          
                          {item.RegistrationStatus === "Not Registered" ? "Staged Process" : item.RegistrationStatus }
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>

            {!loading && filteredData.length === 0 && (
               <div className="text-center py-20">
                  <p className="text-gray-400 font-black uppercase tracking-widest">No matching ventures found.</p>
               </div>
            )}
          </div>
        </div>
      </section>

      {/* 5. FINAL ACTION */}
      <section className="bg-black py-24 border-t-8 border-[#003366]">
         <div className="container mx-auto px-4 text-center space-y-10">
            <h2 className="text-white text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">JOIN THE <span className="text-[#9E0203]">FOUNDRY</span></h2>
            <p className="text-gray-400 max-w-xl mx-auto font-bold uppercase tracking-tight text-xl">We are looking for the next generation of builders.</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
               <a href="/Incubate_form" className="bg-[#9E0203] text-white px-12 py-5 font-black text-xl uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-2xl">
                  Apply for Incubation
               </a>
               <a href="/contact" className="border-2 border-white text-white px-12 py-5 font-black text-xl uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                  Contact Us
               </a>
            </div>
         </div>
      </section>
    </div>
  );
}

