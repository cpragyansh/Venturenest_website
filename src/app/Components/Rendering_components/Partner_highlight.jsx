import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

// Inline Icons for better reliability
const IconZap = () => (<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>);
const IconTrendingUp = () => (<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>);
const IconShield = () => (<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>);
const IconGlobe = () => (<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>);
const IconArrowRight = () => (<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>);
const IconChevronLeft = () => (<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>);
const IconChevronRight = () => (<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>);

const Partner_highlight = () => {
    const categories = [
        { id: 'accelerator', label: 'Accelerator', icon: <IconZap />, number: '01' },
        { id: 'investor', label: 'Investment', icon: <IconTrendingUp />, number: '02' },
        { id: 'government', label: 'Government', icon: <IconShield />, number: '03' },
        { id: 'ecosystem', label: 'Ecosystem', icon: <IconGlobe />, number: '04' }
    ];

    const [activeCategory, setActiveCategory] = useState('accelerator');
    const [partners, setPartners] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState(null);

    useEffect(() => {
        const fetchPartners = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`https://venture-nest-backend.onrender.com/getpartner?category=${activeCategory}`);
                const data = response.data;

                const mappedPartners = data.map((partner, index) => ({
                    id: partner._id || index,
                    logo: partner.imgpath || "/assets/incubated_hero.png",
                    name: partner.Name,
                    type: categories.find(c => c.id === activeCategory)?.label || "Partner",
                    description: partner.Description || `Strategic ${categories.find(c => c.id === activeCategory)?.label} partner driving future-ready innovation.`,
                    ranking: partner.Ranking || "Top Tier"
                }));

                setPartners(mappedPartners);
                if (mappedPartners.length > 0) {
                    setActiveTab(mappedPartners[0].id);
                }
                setLoading(false);
            } catch (error) {
                console.error("Error fetching partners:", error);
                setPartners([]);
                setLoading(false);
            }
        };

        fetchPartners();
    }, [activeCategory]);

    const activePartner = partners.find(v => v.id === activeTab);

    return (
        <section className="bg-white font-jakarta overflow-hidden min-h-[calc(100vh-80px)] flex flex-col justify-between">
            {/* Hero Branding Section - Slimmer */}
            <div className="bg-[#9E0203] pt-12 pb-24 relative text-white flex-grow-0">
                <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
                    <div className="absolute top-[-20%] right-[-20%] w-[400px] h-[400px] bg-white rounded-full blur-[100px]"></div>
                </div>
                
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        {/* Left Side: Editorial Content - Smaller Fonts */}
                        <div className="w-full lg:w-1/2 space-y-4">
                            <div className="space-y-2">
                                <span className="uppercase tracking-[0.4em] text-[10px] font-black opacity-70 block">
                                    Strategic Alliances
                                </span>
                                <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tighter">
                                    Global Network of <span className="opacity-50">Excellence.</span>
                                </h2>
                            </div>
                            
                            <p className="text-sm md:text-base opacity-90 leading-relaxed max-w-lg font-medium">
                                We bridge the gap between visionaries and industry titans. Our partners provide the 
                                bedrock of expertise and capital for the next generation.
                            </p>

                            <div className="flex gap-4 pt-2">
                                <button className="bg-white text-[#9E0203] px-6 py-3 rounded-full font-black text-[10px] uppercase tracking-widest flex items-center gap-2 hover:bg-gray-100 transition-all group">
                                    Partner With Us 
                                    <IconArrowRight />
                                </button>
                                <button className="border-2 border-white/30 text-white px-6 py-3 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-white/10 transition-all">
                                    Our Impact
                                </button>
                            </div>
                        </div>

                        {/* Right Side: Featured Partner Showcase - Scaled Down */}
                        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                            {loading ? (
                                <div className="w-64 h-48 bg-white/5 rounded-[2rem] animate-pulse"></div>
                            ) : activePartner ? (
                                <div className="relative group perspective-1000">
                                    <div className="w-72 h-56 bg-white rounded-[2rem] overflow-hidden shadow-2xl flex items-center justify-center p-8 transition-all duration-700">
                                        <img 
                                            src={activePartner.logo} 
                                            alt={activePartner.name}
                                            className="max-w-full max-h-full object-contain filter drop-shadow-xl group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="absolute -bottom-4 -left-4 bg-black text-white px-4 py-2 rounded-xl shadow-2xl animate-float">
                                        <div className="text-[8px] font-black uppercase tracking-[0.2em] opacity-60">Status</div>
                                        <div className="text-sm font-black text-[#9E0203]">PLATINUM</div>
                                    </div>
                                </div>
                            ) : (
                                <div className="w-64 h-48 bg-white/5 rounded-[2rem] flex items-center justify-center border-2 border-dashed border-white/20">
                                    <span className="font-bold opacity-30 text-[10px] uppercase tracking-[0.3em]">Connecting...</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Category Navigation - Compact */}
            <div className="relative -mt-12 z-20">
                <div className="container mx-auto px-6">
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                        <div className="grid grid-cols-4 divide-x divide-gray-100">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={`p-4 group transition-all duration-300 relative flex flex-col items-center justify-center text-center ${
                                        activeCategory === cat.id ? 'bg-[#9E0203] text-white' : 'hover:bg-gray-50'
                                    }`}
                                >
                                    <div className={`transition-transform duration-500 scale-75 ${
                                        activeCategory === cat.id ? 'text-white' : 'text-[#9E0203]'
                                    }`}>
                                        {cat.icon}
                                    </div>
                                    <h4 className="font-black text-[9px] uppercase tracking-[0.2em] mt-2">
                                        {cat.label}
                                    </h4>
                                    {activeCategory === cat.id && (
                                        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/30"></div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Logo Marquee Section - Interactive */}
            <div className="py-8 flex-grow">
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-between mb-4">
                         <h3 className="text-lg font-black text-black tracking-tighter uppercase">
                            Active <span className="text-[#9E0203]">{activeCategory}</span> Partners
                        </h3>
                        <p className="text-gray-400 font-bold text-[9px] uppercase tracking-[0.3em]">
                            Click a logo to feature
                        </p>
                    </div>

                    <div className="relative overflow-hidden group">
                        <div className="marquee-container flex gap-8 items-center py-4">
                            {/* Double the array for seamless loop if needed, but marquee logic usually handles it */}
                            <div className="marquee-scroll flex gap-8 animate-marquee">
                                {loading ? (
                                    Array(6).fill(0).map((_, i) => (
                                        <div key={i} className="w-32 h-20 bg-gray-50 rounded-xl animate-pulse"></div>
                                    ))
                                ) : partners.length > 0 ? (
                                    [...partners, ...partners].map((partner, idx) => (
                                        <div 
                                            key={`${partner.id}-${idx}`}
                                            onClick={() => setActiveTab(partner.id)}
                                            className={`flex-shrink-0 w-32 h-20 rounded-xl p-4 flex items-center justify-center transition-all duration-300 cursor-pointer border-2 ${
                                                activeTab === partner.id 
                                                ? 'bg-white border-[#9E0203] shadow-lg scale-105' 
                                                : 'bg-gray-50 border-transparent hover:border-gray-200 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:bg-white'
                                            }`}
                                        >
                                            <img 
                                                src={partner.logo} 
                                                alt={partner.name}
                                                className="max-w-full max-h-full object-contain"
                                            />
                                        </div>
                                    ))
                                ) : (
                                    <div className="w-full py-10 text-center border-2 border-dashed border-gray-100 rounded-xl">
                                        <span className="font-black text-gray-300 text-[10px] uppercase tracking-widest">No Partners Found</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .perspective-1000 {
                    perspective: 1000px;
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-5px); }
                }
                .animate-float {
                    animation: float 4s ease-in-out infinite;
                }
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
                .marquee-container:hover .animate-marquee {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
};

export default Partner_highlight;

