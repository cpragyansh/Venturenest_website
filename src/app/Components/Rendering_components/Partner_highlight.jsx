import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const Partner_highlight = () => {
    // Categories based on the website structure
    const categories = [
        { id: 'accelerator', label: 'Accelerators' },
        { id: 'corporate', label: 'Corporate' },
        { id: 'government', label: 'Government' },
        { id: 'ecosystem', label: 'Ecosystem' }
    ];

    const [activeCategory, setActiveCategory] = useState('accelerator');
    const [partners, setPartners] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState(null);
    const [isPaused, setIsPaused] = useState(false);
    const scrollRef = useRef(null);

    // Fetch data from API based on category
    useEffect(() => {
        const fetchPartners = async () => {
            setLoading(true);
            try {
                // Using the endpoint found in existing pages
                const response = await axios.get(`https://venturenest.onrender.com/getpartner?category=${activeCategory}`);
                const data = response.data;

                // Map API data to component structure
                const mappedPartners = data.map((partner, index) => ({
                    id: partner._id || index,
                    logo: partner.imgpath || "/assets/incubated_hero.png",
                    name: partner.Name, // Note: API uses 'Name' (capital N)
                    type: categories.find(c => c.id === activeCategory)?.label || "Partner",
                    // Generic description since API might not provide one
                    brief: `Strategic ${categories.find(c => c.id === activeCategory)?.label} partner collaborating to drive innovation and ecosystem growth.`
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

    // Auto-play effect
    useEffect(() => {
        let interval;
        if (!isPaused && partners.length > 0) {
            interval = setInterval(() => {
                setActiveTab((prevId) => {
                    const currentIndex = partners.findIndex(v => v.id === prevId);
                    const nextIndex = (currentIndex + 1) % partners.length;
                    return partners[nextIndex].id;
                });
            }, 3000); // Slightly faster rotation for partners
        }
        return () => clearInterval(interval);
    }, [isPaused, partners]);

    // Auto-scroll logic
    useEffect(() => {
        if (scrollRef.current && activeTab && partners.length > 0) {
            const index = partners.findIndex(v => v.id === activeTab);
            if (index !== -1) {
                const activeElement = scrollRef.current.children[index];
                const container = scrollRef.current;

                if (activeElement && container) {
                    const newScrollLeft = activeElement.offsetLeft - (container.offsetWidth / 2) + (activeElement.offsetWidth / 2);
                    container.scrollTo({
                        left: newScrollLeft,
                        behavior: 'smooth'
                    });
                }
            }
        }
    }, [activeTab, partners]);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 200;
            if (direction === 'left') {
                current.scrollLeft -= scrollAmount;
            } else {
                current.scrollLeft += scrollAmount;
            }
        }
    };

    const activePartner = partners.find(v => v.id === activeTab);

    return (
        <section className="bg-white py-24 font-jakarta relative overflow-hidden border-t border-gray-100">
            {/* Background Texture - Mesh Gradient */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}>
            </div>

            {/* Dynamic Mesh Gradients */}
            <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-gradient-to-br from-[#9E0203]/20 via-[#ff4d4d]/10 to-transparent rounded-full blur-[120px] animate-pulse-slow pointer-events-none"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-gradient-to-tl from-blue-900/20 via-blue-500/10 to-transparent rounded-full blur-[120px] animate-pulse-slow animation-delay-2000 pointer-events-none"></div>

            {/* Decorative Geometric Elements */}
            <div className="absolute top-20 right-10 w-24 h-24 border-2 border-dashed border-gray-200 rounded-full animate-[spin_30s_linear_infinite] pointer-events-none"></div>
            <div className="absolute top-40 right-20 w-4 h-4 bg-[#9E0203] rounded-full mix-blend-multiply opacity-50 animate-bounce pointer-events-none"></div>
            <div className="absolute bottom-20 left-10 w-16 h-16 border border-gray-200 rotate-45 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-20 relative">
                    {/* Decorative line behind text */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-red-50 to-blue-50 rounded-full blur-3xl -z-10 opacity-50"></div>

                    <span className="text-[#9E0203] font-black uppercase tracking-[0.4em] text-xs block mb-4 animate-fadeIn">Global Network</span>
                    <h2 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-800 to-gray-500 uppercase tracking-tighter mb-6 relative inline-block">
                        Strategic <span className="relative inline-block ml-4">
                            <span className="relative z-10 text-white px-6 py-2 bg-[#9E0203] transform -skew-x-12 shadow-[10px_10px_0px_rgba(0,0,0,0.1)] inline-block">Partners</span>
                            <span className="absolute top-2 left-2 w-full h-full border-2 border-[#9E0203] transform -skew-x-12 -z-10"></span>
                        </span>
                    </h2>
                    <p className="text-gray-500 font-medium text-xl max-w-2xl mx-auto leading-relaxed mt-6">
                        Collaborating with world-class institutions to build a <span className="text-black font-bold decoration-[#9E0203] underline decoration-4 underline-offset-4">borderless</span> innovation ecosystem.
                    </p>
                </div>

                {/* Sorting Bar - Modern Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-24 max-w-4xl mx-auto p-2 bg-gray-50/50 backdrop-blur-sm rounded-full border border-gray-100 shadow-sm">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`py-3 px-8 rounded-full font-bold uppercase tracking-widest text-[11px] transition-all duration-500 relative overflow-hidden group ${activeCategory === cat.id
                                ? 'bg-black text-white shadow-lg'
                                : 'text-gray-500 hover:text-black hover:bg-white'
                                }`}
                        >
                            <span className="relative z-10">{cat.label}</span>
                            {activeCategory === cat.id && (
                                <span className="absolute inset-0 bg-gradient-to-r from-[#9E0203] to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0"></span>
                            )}
                        </button>
                    ))}
                </div>

                {loading ? (
                    <div className="h-[400px] flex items-center justify-center">
                        <div className="relative">
                            <div className="w-20 h-20 border-4 border-gray-100 rounded-full animate-spin"></div>
                            <div className="absolute top-0 left-0 w-20 h-20 border-4 border-[#9E0203] rounded-full animate-spin border-t-transparent animation-delay-150"></div>
                        </div>
                    </div>
                ) : partners.length === 0 ? (
                    <div className="h-[300px] flex items-center justify-center text-center bg-gray-50/50 rounded-[2rem] border-2 border-dashed border-gray-200 backdrop-blur-sm">
                        <p className="text-gray-400 font-bold uppercase tracking-widest text-lg">No partners found in this category.</p>
                    </div>
                ) : (
                    <div
                        className="relative max-w-7xl mx-auto"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        {/* Main Content Area */}
                        {activePartner && (
                            <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24 mb-24 animate-fadeIn relative z-20">
                                {/* Decorative circle */}
                                <div className="absolute top-1/2 left-0 w-[500px] h-[500px] border border-gray-100 rounded-full -z-10 transform -translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

                                {/* Left: Logo Display (Ultra Glass) */}
                                <div className="w-full md:w-5/12 flex justify-center md:justify-end perspective-1000">
                                    <div className="relative group w-[350px] h-[350px]">
                                        {/* Card shadow/glow */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#9E0203]/20 to-blue-500/20 rounded-[3rem] blur-2xl transform group-hover:scale-105 transition-transform duration-700 opacity-50"></div>

                                        {/* Main Card */}
                                        <div className="relative h-full w-full bg-white/70 backdrop-blur-2xl rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-white flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:rotate-1 group-hover:scale-[1.02]">
                                            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-gray-100 to-transparent rounded-bl-[10rem] opacity-50"></div>
                                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#9E0203]/5 to-transparent rounded-tr-[5rem]"></div>

                                            <img
                                                src={activePartner.logo}
                                                alt={activePartner.name}
                                                className="max-w-[70%] max-h-[70%] object-contain transform group-hover:scale-110 transition-transform duration-700 relative z-10 filter drop-shadow-lg"
                                            />

                                            {/* Shine effect */}
                                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right: Info */}
                                <div className="w-full md:w-7/12 text-center md:text-left space-y-8">
                                    <div className="inline-flex items-center gap-3 px-5 py-2 bg-white border border-gray-200 shadow-sm text-gray-800 text-[10px] font-black uppercase tracking-[0.2em] rounded-full mb-2">
                                        <span className="w-2 h-2 rounded-full bg-[#9E0203] animate-pulse"></span>
                                        {activePartner.type}
                                    </div>
                                    <h3 className="text-5xl md:text-7xl font-black font-jakarta uppercase tracking-tighter text-black leading-[0.9]">
                                        {activePartner.name}
                                    </h3>
                                    <div className="flex items-center gap-4 justify-center md:justify-start">
                                        <div className="h-1.5 w-24 bg-gradient-to-r from-[#9E0203] to-red-400 rounded-full"></div>
                                        <div className="h-1.5 w-4 bg-gray-200 rounded-full"></div>
                                    </div>

                                    <p className="text-gray-500 font-medium text-xl leading-relaxed max-w-xl mx-auto md:mx-0">
                                        {activePartner.brief}
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Bottom Slider - Seamless Design */}
                        <div className="relative pt-12">
                            {/* Fade Masks */}
                            <div className="absolute left-0 top-12 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                            <div className="absolute right-0 top-12 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                            <div className="flex items-center gap-8 justify-center">
                                {/* Navigation Buttons */}
                                <button onClick={() => scroll('left')} className="p-5 rounded-full bg-white text-black hover:bg-black hover:text-white border border-gray-100 transition-all shadow-lg hover:shadow-xl z-20 group">
                                    <svg className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                                </button>

                                <div ref={scrollRef} className="flex overflow-x-auto gap-6 py-8 px-4 flex-grow no-scrollbar scroll-smooth items-center">
                                    {partners.map((partner) => (
                                        <button
                                            key={partner.id}
                                            onClick={() => setActiveTab(partner.id)}
                                            className={`flex-shrink-0 w-48 h-28 bg-white border rounded-2xl flex items-center justify-center p-6 transition-all duration-500 relative overflow-hidden group ${activeTab === partner.id
                                                ? 'border-[#9E0203] shadow-[0_20px_40px_-10px_rgba(158,2,3,0.15)] scale-110 -translate-y-2'
                                                : 'border-gray-100 hover:border-gray-300 opacity-60 hover:opacity-100 hover:-translate-y-1'
                                                }`}
                                        >
                                            <div className={`absolute top-0 left-0 w-1 h-full bg-[#9E0203] transition-all duration-300 ${activeTab === partner.id ? 'opacity-100' : 'opacity-0'}`}></div>
                                            <img
                                                src={partner.logo}
                                                alt={partner.name}
                                                className="max-w-full max-h-full object-contain filter drop-shadow-sm transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </button>
                                    ))}
                                </div>

                                <button onClick={() => scroll('right')} className="p-5 rounded-full bg-white text-black hover:bg-black hover:text-white border border-gray-100 transition-all shadow-lg hover:shadow-xl z-20 group">
                                    <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                </button>
                            </div>
                        </div>

                    </div>
                )}
            </div>
            <style jsx>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                 @keyframes pulse-slow {
                    0%, 100% { transform: scale(1); opacity: 0.3; }
                    50% { transform: scale(1.1); opacity: 0.5; }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
                .animate-pulse-slow {
                    animation: pulse-slow 8s ease-in-out infinite;
                }
                .perspective-1000 {
                    perspective: 1000px;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
            `}</style>
        </section>
    );
};

export default Partner_highlight;
