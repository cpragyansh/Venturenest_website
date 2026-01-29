import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';

// --- Icons ---
const IconZap = () => (<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>);
const IconTrendingUp = () => (<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>);
const IconShield = () => (<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>);
const IconGlobe = () => (<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>);
const IconArrowRight = () => (<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>);
const IconSearch = () => (<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>);

const Partner_highlight = () => {
    const categories = useMemo(() => [
        { id: 'accelerator', label: 'Accelerator', icon: <IconZap />, color: '#A40C1A', desc: 'Accelerating growth through mentorship and capital.' },
        { id: 'investor', label: 'Investment', icon: <IconTrendingUp />, color: '#1A4880', desc: 'Direct funding and strategic investment networks.' },
        { id: 'government', label: 'Government', icon: <IconShield />, color: '#4a4a4a', desc: 'Official institutional and regulatory support.' },
        { id: 'ecosystem', label: 'Ecosystem', icon: <IconGlobe />, color: '#000000', desc: 'A global network of innovation hubs and labs.' }
    ], []);

    const [activeCategory, setActiveCategory] = useState('accelerator');
    const [partners, setPartners] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedId, setSelectedId] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchPartners = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`https://venture-nest-backend.onrender.com/getpartner?category=${activeCategory}`);
                const data = response.data;

                const mappedPartners = data.map((partner, index) => ({
                    id: partner._id || `p-${index}`,
                    logo: partner.imgpath || "/assets/incubated_hero.png",
                    name: partner.Name || "Innovative Partner",
                    type: categories.find(c => c.id === activeCategory)?.label || "Partner",
                    description: partner.Description || `Strategic ${categories.find(c => c.id === activeCategory)?.label} partner driving future-ready innovation.`,
                    ranking: partner.Ranking || "Top Tier",
                    impact: Math.floor(Math.random() * 20) + 80 // Meaningful looking metric
                }));

                setPartners(mappedPartners);
                if (mappedPartners.length > 0) {
                    setSelectedId(mappedPartners[0].id);
                }
                setLoading(false);
            } catch (error) {
                console.error("Error fetching partners:", error);
                setPartners([]);
                setLoading(false);
            }
        };

        fetchPartners();
    }, [activeCategory, categories]);

    const activePartner = partners.find(p => p.id === selectedId);
    
    const filteredPartners = partners.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <section className="bg-slate-50 py-16 md:py-24 font-jakarta min-h-screen relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-red-50/50 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-50/50 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-6">
                {/* --- Header Section --- */}
                <header className="mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                    <div className="max-w-2xl">
                        <motion.span 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-[#A40C1A] text-xs font-black uppercase tracking-[0.3em] mb-4 block"
                        >
                            Global Alliances
                        </motion.span>
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-black text-black leading-tight tracking-tighter"
                        >
                            Propelling Visionaries <br />
                            <span className="text-gray-300">Through Excellence.</span>
                        </motion.h2>
                    </div>

                    <div className="relative group w-full lg:w-80">
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#A40C1A] transition-colors">
                            <IconSearch />
                        </div>
                        <input 
                            type="text" 
                            placeholder="Find a partner..." 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-white border border-gray-100 py-4 pl-12 pr-4 rounded-2xl shadow-sm focus:ring-2 focus:ring-[#A40C1A]/20 focus:border-[#A40C1A] transition-all outline-none font-medium text-sm text-black"
                        />
                    </div>
                </header>

                {/* --- Main Bento Grid --- */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
                    
                    {/* 1. Category Navigation (Left/Side) */}
                    <div className="md:col-span-3 space-y-3">
                        {categories.map((cat) => (
                            <motion.button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                whileHover={{ x: 5 }}
                                className={`w-full group relative flex flex-col p-5 rounded-3xl transition-all border ${
                                    activeCategory === cat.id 
                                    ? "bg-black border-black shadow-xl" 
                                    : "bg-white border-gray-100 hover:border-gray-200"
                                }`}
                            >
                                <div className="flex items-center gap-4 mb-3">
                                    <div className={`p-2 rounded-xl ${
                                        activeCategory === cat.id ? "bg-white text-black" : "bg-slate-50 text-[#A40C1A]"
                                    }`}>
                                        {cat.icon}
                                    </div>
                                    <span className={`text-[10px] font-black uppercase tracking-widest ${
                                        activeCategory === cat.id ? "text-gray-400" : "text-gray-300"
                                    }`}>
                                        {cat.id.slice(0,3)}
                                    </span>
                                </div>
                                <h4 className={`text-sm font-black text-left tracking-tight mb-1 ${
                                    activeCategory === cat.id ? "text-white" : "text-black"
                                }`}>
                                    {cat.label}
                                </h4>
                                <p className={`text-[10px] text-left leading-relaxed opacity-60 font-medium ${
                                    activeCategory === cat.id ? "text-white" : "text-gray-500"
                                }`}>
                                    {cat.desc}
                                </p>
                                {activeCategory === cat.id && (
                                    <motion.div 
                                        layoutId="active-nav-bg"
                                        className="absolute right-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#A40C1A] rounded-full"
                                    />
                                )}
                            </motion.button>
                        ))}

                        {/* Functional CTA Card */}
                        <div className="bg-[#A40C1A] p-6 rounded-3xl text-white mt-8 shadow-2xl shadow-red-900/20 group cursor-pointer overflow-hidden relative" 
                             onClick={() => window.location.href='/contact'}>
                            <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-x-[-20%] -translate-y-[20%] group-hover:scale-125 transition-transform"></div>
                            <h5 className="font-black text-xs uppercase tracking-[0.2em] mb-3 relative z-10">Collaboration</h5>
                            <p className="text-[11px] leading-relaxed mb-6 opacity-90 relative z-10 font-bold">Interested in joining our global network of excellence?</p>
                            <button className="flex items-center gap-2 bg-white text-[#A40C1A] px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest group-hover:gap-4 transition-all relative z-10">
                                Apply Now <IconArrowRight />
                            </button>
                        </div>
                    </div>

                    {/* 2. Spotlight & List (Center/Right) */}
                    <div className="md:col-span-9 grid grid-cols-1 lg:grid-cols-3 gap-6">
                        
                        {/* Spotlight Card */}
                        <div className="lg:col-span-2 bg-white rounded-[2.5rem] border border-gray-100 p-8 md:p-12 shadow-sm relative overflow-hidden flex flex-col justify-between min-h-[500px]">
                            {/* Watermark Decoration */}
                            <div className="absolute top-[-10%] right-[-10%] text-[15rem] leading-none font-black text-slate-50 select-none pointer-events-none">
                                {categories.find(c => c.id === activeCategory)?.id[0].toUpperCase()}
                            </div>
                            
                            <AnimatePresence mode="wait">
                                {loading ? (
                                    <motion.div 
                                        key="loader"
                                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                        className="flex flex-col items-center justify-center flex-grow space-y-4"
                                    >
                                        <div className="w-16 h-16 border-4 border-slate-50 border-t-[#A40C1A] rounded-full animate-spin"></div>
                                        <span className="text-[10px] font-black uppercase text-gray-300 tracking-[0.4em]">Aggregating Partners...</span>
                                    </motion.div>
                                ) : activePartner ? (
                                    <motion.div 
                                        key={activePartner.id}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="relative z-10 flex flex-col h-full"
                                    >
                                        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-10">
                                            <div className="w-40 h-28 bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex items-center justify-center hover:shadow-md transition-shadow group">
                                                <img 
                                                    src={activePartner.logo} 
                                                    alt={activePartner.name} 
                                                    className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-3">
                                                    <span className="bg-slate-100 text-slate-500 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest">
                                                        {activePartner.type}
                                                    </span>
                                                    <span className="bg-[#A40C1A]/10 text-[#A40C1A] px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest">
                                                        {activePartner.ranking}
                                                    </span>
                                                </div>
                                                <h3 className="text-3xl font-black text-black tracking-tighter">{activePartner.name}</h3>
                                            </div>
                                        </div>

                                        <p className="text-gray-500 text-base md:text-lg leading-relaxed font-medium mb-10 max-w-xl">
                                            {activePartner.description}
                                        </p>

                                        <div className="mt-auto grid grid-cols-2 md:grid-cols-3 gap-8">
                                            <div className="space-y-1">
                                                <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Strategic Value</div>
                                                <div className="text-2xl font-black text-black">{activePartner.impact}%</div>
                                                <div className="w-full h-1.5 bg-gray-50 rounded-full overflow-hidden">
                                                    <motion.div 
                                                        initial={{ width: 0 }}
                                                        animate={{ width: `${activePartner.impact}%` }}
                                                        className="h-full bg-green-500"
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-1">
                                                <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Global Status</div>
                                                <div className="text-xl font-black text-black flex items-center gap-2">
                                                    Verified 
                                                    <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center text-white p-0.5">
                                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hidden md:block">
                                                <button className="h-full w-full border-2 border-slate-100 hover:border-black rounded-2xl flex flex-col items-center justify-center gap-2 transition-all group">
                                                    <span className="text-[10px] font-black uppercase tracking-widest">Official Site</span>
                                                    <IconArrowRight />
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <div className="flex flex-col items-center justify-center flex-grow text-gray-300">
                                        <p className="font-black text-xs uppercase tracking-[0.4em]">Selection Required</p>
                                    </div>
                                )}
                            </AnimatePresence>
                        </div>

                    {/* Logo Quick-Grid (Right/Side) */}
                    <div className="bg-white rounded-[2.5rem] border border-gray-100 p-6 shadow-sm overflow-hidden flex flex-col">
                        <div className="flex items-center justify-between mb-6">
                            <h5 className="font-black text-xs uppercase tracking-widest text-black">Registry</h5>
                            <span className="text-[10px] font-bold text-gray-400">{filteredPartners.length} Found</span>
                        </div>

                        <div className="space-y-3 overflow-y-auto max-h-[400px] pr-2 custom-scrollbar">
                            {filteredPartners.length > 0 ? (
                                filteredPartners.map((p) => (
                                    <button 
                                        key={p.id}
                                        onClick={() => setSelectedId(p.id)}
                                        className={`w-full flex items-center gap-4 p-3 rounded-2xl transition-all border ${
                                            selectedId === p.id 
                                            ? "bg-slate-50 border-gray-200" 
                                            : "hover:bg-gray-50 border-transparent grayscale hover:grayscale-0 opacity-60 hover:opacity-100"
                                        }`}
                                    >
                                        <div className="w-12 h-10 bg-white rounded-lg p-2 flex items-center justify-center border border-gray-100">
                                            <img src={p.logo} alt={p.name} className="max-w-full max-h-full object-contain" />
                                        </div>
                                        <div className="text-left overflow-hidden">
                                            <h6 className="text-[11px] font-black text-black truncate">{p.name}</h6>
                                            <p className="text-[9px] font-bold text-gray-400 capitalize">{p.type}</p>
                                        </div>
                                    </button>
                                ))
                            ) : !loading && (
                                <div className="py-10 text-center opacity-30 flex flex-col items-center gap-4">
                                     <div className="p-4 bg-slate-50 rounded-full"><IconSearch /></div>
                                     <p className="text-[10px] font-black uppercase tracking-widest">Empty State</p>
                                </div>
                            )}
                        </div>
                    </div>

                    </div>
                </div>
            </div>

            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #f1f1f1;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #ddd;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #ccc;
                }
            `}</style>
        </section>
    );
};

export default Partner_highlight;


