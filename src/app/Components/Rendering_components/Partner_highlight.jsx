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
    const scrollRef = useRef(null);

    // Fetch data from API based on category
    useEffect(() => {
        const fetchPartners = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`https://venturenest.onrender.com/getpartner?category=${activeCategory}`);
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
        <section className="bg-white font-jakarta overflow-hidden">
            {/* Hero Branding Section (Inspired by Image 0 & 1) */}
            <div className="bg-[#9E0203] pt-20 pb-32 relative text-white">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
                    <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-white rounded-full blur-[120px]"></div>
                </div>
                
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        {/* Left Side: Editorial Content */}
                        <div className="w-full lg:w-1/2 space-y-8">
                            <div className="space-y-4">
                                <span className="uppercase tracking-[0.4em] text-xs font-black opacity-70 block">
                                    Strategic Alliances
                                </span>
                                <h2 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter">
                                    Global Network of <span className="opacity-50">Excellence.</span>
                                </h2>
                            </div>
                            
                            <p className="text-lg md:text-xl opacity-90 leading-relaxed max-w-xl font-medium">
                                We bridge the gap between visionaries and industry titans. Our partners provide the 
                                bedrock of expertise, capital, and infrastructure for the next generation of startups.
                            </p>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <button className="bg-white text-[#9E0203] px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest flex items-center gap-3 hover:bg-gray-100 transition-all group">
                                    Partner With Us 
                                    <IconArrowRight />
                                </button>
                                <button className="border-2 border-white/30 text-white px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-white/10 transition-all">
                                    Our Impact
                                </button>
                            </div>
                        </div>

                        {/* Right Side: Featured Partner Showcase (Inspired by Image 0/1) */}
                        <div className="w-full lg:w-1/2 relative">
                            {loading ? (
                                <div className="aspect-[4/3] bg-white/5 rounded-[2.5rem] animate-pulse"></div>
                            ) : activePartner ? (
                                <div className="relative group perspective-1000">
                                    <div className="aspect-[4/3] bg-white rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-700 flex items-center justify-center p-16">
                                        <img 
                                            src={activePartner.logo} 
                                            alt={activePartner.name}
                                            className="max-w-full max-h-full object-contain filter drop-shadow-2xl group-hover:scale-110 transition-transform duration-700"
                                        />
                                        {/* Corner Accent */}
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#9E0203]/5 rounded-bl-[100%]"></div>
                                    </div>
                                    {/* Floating Stats Label (Inspired by Image 4) */}
                                    <div className="absolute -bottom-6 -left-6 bg-black text-white p-6 rounded-2xl shadow-2xl animate-float">
                                        <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60 mb-1">Status</div>
                                        <div className="text-xl font-black text-[#9E0203]">PLATINUM</div>
                                    </div>
                                </div>
                            ) : (
                                <div className="aspect-[4/3] bg-white/5 rounded-[2.5rem] flex items-center justify-center border-2 border-dashed border-white/20">
                                    <span className="font-bold opacity-30 text-sm uppercase tracking-[0.3em]">Connecting Partners...</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Category Navigation (Inspired by Image 1's icons) */}
            <div className="relative -mt-20 z-20 pb-20">
                <div className="container mx-auto px-6">
                    <div className="bg-white rounded-3xl shadow-[0_30px_100px_-20px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden">
                        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={`p-8 group transition-all duration-500 relative flex flex-col items-center justify-center text-center ${
                                        activeCategory === cat.id ? 'bg-[#9E0203] text-white' : 'hover:bg-gray-50'
                                    }`}
                                >
                                    <span className={`text-[10px] font-black absolute top-4 left-6 tracking-widest ${
                                        activeCategory === cat.id ? 'text-white/40' : 'text-gray-300'
                                    }`}>
                                        {cat.number}
                                    </span>
                                    <div className={`transition-transform duration-500 group-hover:scale-110 ${
                                        activeCategory === cat.id ? 'text-white' : 'text-[#9E0203]'
                                    }`}>
                                        {cat.icon}
                                    </div>
                                    <div className="space-y-1 mt-4">
                                        <h4 className="font-black text-xs uppercase tracking-[0.2em]">
                                            {cat.label}
                                        </h4>
                                        <p className={`text-[9px] font-bold uppercase tracking-wider ${
                                            activeCategory === cat.id ? 'text-white/60' : 'text-gray-400'
                                        }`}>
                                            Network Path
                                        </p>
                                    </div>
                                    {activeCategory === cat.id && (
                                        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/30"></div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Partners Grid (Inspired by Image 4 - Legacy Cards) */}
            <div className="pb-24">
                <div className="container mx-auto px-6">
                    <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                        <div className="space-y-2">
                            <h3 className="text-4xl font-black text-black tracking-tighter uppercase">
                                Active <span className="text-[#9E0203]">{activeCategory}</span> Leaders
                            </h3>
                            <p className="text-gray-400 font-bold text-xs uppercase tracking-[0.3em]">
                                Showing {partners.length} Accredited Organizations
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <button className="w-12 h-12 rounded-full border-2 border-gray-100 flex items-center justify-center text-gray-400 hover:bg-[#9E0203] hover:border-[#9E0203] hover:text-white transition-all">
                                <IconChevronLeft />
                            </button>
                            <button className="w-12 h-12 rounded-full border-2 border-gray-100 flex items-center justify-center text-gray-400 hover:bg-[#9E0203] hover:border-[#9E0203] hover:text-white transition-all">
                                <IconChevronRight />
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {loading ? (
                            Array(4).fill(0).map((_, i) => (
                                <div key={i} className="h-[300px] bg-gray-50 rounded-[2rem] animate-pulse"></div>
                            ))
                        ) : partners.length > 0 ? (
                            partners.map((partner) => (
                                <div 
                                    key={partner.id}
                                    onClick={() => setActiveTab(partner.id)}
                                    className={`group cursor-pointer rounded-[2rem] p-8 transition-all duration-500 min-h-[320px] flex flex-col justify-between border-2 ${
                                        activeTab === partner.id 
                                        ? 'bg-[#9E0203] border-[#9E0203] text-white shadow-2xl active-card scale-[1.02]' 
                                        : 'bg-white border-gray-100 hover:border-[#9E0203]/20 shadow-sm'
                                    }`}
                                >
                                    <div className="space-y-6">
                                        <div className="flex justify-between items-start">
                                            <div className="space-y-1">
                                                <div className={`text-[10px] font-black uppercase tracking-widest ${
                                                    activeTab === partner.id ? 'text-white/60' : 'text-gray-400'
                                                }`}>
                                                    Accredited
                                                </div>
                                                <div className={`text-2xl font-black tracking-tight ${
                                                    activeTab === partner.id ? 'text-white' : 'text-[#9E0203]'
                                                }`}>
                                                    {partner.ranking}
                                                </div>
                                            </div>
                                            <div className={`w-8 h-8 rounded-full border flex items-center justify-center ${
                                                activeTab === partner.id ? 'border-white/30 text-white' : 'border-gray-100 text-[#9E0203]'
                                            }`}>
                                                <IconArrowRight />
                                            </div>
                                        </div>
                                        
                                        <div className={`h-[100px] flex items-center justify-center p-4 rounded-xl transition-all duration-500 ${
                                            activeTab === partner.id ? 'bg-white shadow-inner' : 'bg-gray-50'
                                        }`}>
                                            <img 
                                                src={partner.logo} 
                                                alt={partner.name}
                                                className="max-w-full max-h-full object-contain filter drop-shadow-sm" 
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1 mt-6">
                                        <h4 className="font-black uppercase tracking-tight text-lg line-clamp-1">
                                            {partner.name}
                                        </h4>
                                        <p className={`text-[10px] font-bold uppercase tracking-widest ${
                                            activeTab === partner.id ? 'text-white/50' : 'text-gray-400'
                                        }`}>
                                            Strategic {activeCategory}
                                        </p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full py-20 text-center border-2 border-dashed border-gray-100 rounded-[2rem]">
                                <span className="font-black text-gray-300 uppercase tracking-widest">No Partners Found in this Category</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .perspective-1000 {
                    perspective: 1000px;
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                .animate-float {
                    animation: float 4s ease-in-out infinite;
                }
                .active-card {
                    transform: translateY(-8px);
                }
            `}</style>
        </section>
    );
};

export default Partner_highlight;

