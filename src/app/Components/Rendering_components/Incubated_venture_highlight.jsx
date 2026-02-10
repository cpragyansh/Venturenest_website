import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

// Static logos pool to assign to fetched startups (Backend missing some logos)
// Comprehensive logo pool with specific keyword// Curated stories pool to provide professional descriptions when API data is missing/NIL
const briefPool = [
    { keywords: ["v2r", "autoinfinite"], text: "Revolutionizing the automotive sector with advanced, technology-driven solutions that enhance efficiency and drive sustainable growth." },
    { keywords: ["lorro", "digital"], text: "Leading digital transformation for enterprises through innovative software solutions and high-velocity product engineering." },
    { keywords: ["escape planner", "escapekar"], text: "A travel guidance platform helping people become better travelers through AI-driven recommendations for hidden gems and stays." },
    { keywords: ["nhanks", "waste"], text: "Pioneering sustainable waste management solutions with a focus on recycling efficiency and environmental social impact." },
    { keywords: ["indi tech", "inditech"], text: "Mentorship and engineering solutions scaling complex tech stacks for high-growth ventures." },
    { keywords: ["juniva", "organics"], text: "Bridging the gap in the organic products market through sustainable sourcing and direct-to-consumer health solutions." },
    { keywords: ["eds wagon"], text: "Award-winning environmental innovation focused on carbon reduction and sustainability, recognized by IIT Madras CZC." },
    { keywords: ["juara"], text: "Harnessing the power of organic ingredients to provide scientifically-backed wellness and skin-care solutions." },
    { keywords: ["thm", "millennium"], text: "Industry 4.0 solutions helping manufacturers optimize their production lines through IoT and real-time technical audits." },
    { keywords: ["vidyutam", "verde"], text: "Green energy initiatives focused on bringing sustainable and clean power solutions to residential and commercial sectors." },
    { keywords: ["innovative", "trash",], text: "Be a recycler,be a saver.Today, recycle for a better tomorrow." }
];

const logoPool = [
    { file: "aasyra - Navneet Yaduvanshi.jpg", keywords: ["aasyra"] },
    { file: "Antrhonex- Aditya Raj Saxena.jpg", keywords: ["antrhonex", "anthronex"] },
    { file: "ASME - arpit kumar.jpg", keywords: ["asme"] },
    { file: "DefensIQ Tech - ansh haritash.png", keywords: ["defensiq", "defenciq"] },
    { file: "EduAr - Mayank Dahiya.jpg", keywords: ["eduar", "edshire"] },
    { file: "EscapeKar - Harris Babbar.png", keywords: ["escapekar", "escape planner"] },
    { file: "Frii jal- Vedant Daware.jpg", keywords: ["friijal", "frii jal"] },
    { file: "Inditech - Karan Aggrawal.png", keywords: ["inditech", "indi-tech", "indi tech"] },
    { file: "JIGYASA GARG.jpg", keywords: ["jigyasa", "jigyasa garg"] },
    { file: "Juara Organics.png", keywords: ["juara", "juniva"] },
    { file: "Kulhad - Anand Kumar.jpg", keywords: ["kulhad"] },
    { file: "PixelPeak- Aryan Mankotia.jpg", keywords: ["pixelpeak", "veritex"] },
    { file: "TechHealth - TecHealth.PNG", keywords: ["techhealth"] },
    { file: "tHM LOGO - Abhishek Sharma.png", keywords: ["thm", "millennium", "millenium"] },
    { file: "UniifHub - Shekhar kashyap.jpg", keywords: ["unifhub", "uniifhub"] },
    { file: "vedabox - SHAGUN SHARMA.jpg", keywords: ["vedabox", "mosquito"] },
    { file: "VeeGamma Logo- Vanshika.png", keywords: ["veegamma", "vee gamma"] },
    { file: "Vidyutam Verde - Pulkesh Gautam.jpg", keywords: ["vidyutam", "kakumei"] },
    { file: "onspot.jpg", keywords: ["onspot"] },
    { file: "/assets/eds_logo.webp", keywords: ["eds wagon"] },
    { file: "1. V2R AutoInfinite.jpg", keywords: ["v2r", "autoinfinite"] },
    { file: "Jagdev Organics.webp", keywords: ["jagdev"] },
    { file: "innovative Trash tech.jpg", keywords: ["trash", "innovative"] }
];

const IncubatedVentureHighlight = () => {
    const [ventures, setVentures] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState(null);
    const [isPaused, setIsPaused] = useState(false);
    const scrollRef = useRef(null);

    // Helper to find the best matching logo
    const findLogo = (startupName, index) => {
        if (!startupName) return `/assets/Start-up-logos/${logoPool[index % logoPool.length].file}`;
        
        const name = startupName.toLowerCase();
        const matched = logoPool.find(item => 
            item.keywords.some(keyword => name.includes(keyword))
        );
        
        if (matched) {
            // Handle both relative assets and absolute paths
            return matched.file.startsWith('/') ? matched.file : `/assets/Start-up-logos/${matched.file}`;
        }
        
        const fallback = logoPool[index % logoPool.length];
        return fallback.file.startsWith('/') ? fallback.file : `/assets/Start-up-logos/${fallback.file}`;
    };

    // Helper to find professional description
    const findBrief = (startup, index) => {
        const name = (startup.StartupName || "").toLowerCase();
        const product = (startup.ProductName || "").toLowerCase();
        
        const matched = briefPool.find(item => 
            item.keywords.some(keyword => name.includes(keyword) || product.includes(keyword))
        );
        
        if (matched) return matched.text;
        if (startup.ProductName && startup.ProductName !== "NIL") return startup.ProductName;
        
        return "Building innovative solutions for a better tomorrow through persistent engineering and visionary leadership.";
    };

    // Fetch data from API
    useEffect(() => {
        const fetchStartups = async () => {
            try {
                const response = await axios.get((window.API_BASE_URL || 'https://venturenestbackend.cgcuniversity.in') + '/getstartup');
                const data = response.data;

                // Map API data and match with corresponding logos
                const mappedVentures = data.slice(0, 20).map((startup, index) => ({
                    id: startup._id,
                    logo: findLogo(startup.StartupName, index),
                    name: startup.StartupName,
                    founders: startup.FounderName,
                    brief: findBrief(startup, index),
                    status: startup.RegistrationStatus || "Incubated"
                }));

                setVentures(mappedVentures);
                if (mappedVentures.length > 0) {
                    setActiveTab(mappedVentures[0].id);
                }
                setLoading(false);
            } catch (error) {
                console.error("Error fetching startups:", error);
                setLoading(false);
            }
        };

        fetchStartups();
    }, []);

    // Auto-play effect
    useEffect(() => {
        let interval;
        if (!isPaused && ventures.length > 0) {
            interval = setInterval(() => {
                setActiveTab((prevId) => {
                    const currentIndex = ventures.findIndex(v => v.id === prevId);
                    const nextIndex = (currentIndex + 1) % ventures.length;
                    return ventures[nextIndex].id;
                });
            }, 4000);
        }
        return () => clearInterval(interval);
    }, [isPaused, ventures]);

    // Auto-scroll the slider to keep active tab in view (without scrolling page)
    useEffect(() => {
        if (scrollRef.current && activeTab && ventures.length > 0) {
            const index = ventures.findIndex(v => v.id === activeTab);
            if (index !== -1) {
                const activeElement = scrollRef.current.children[index];
                const container = scrollRef.current;

                if (activeElement && container) {
                    // Calculate center position
                    const newScrollLeft = activeElement.offsetLeft - (container.offsetWidth / 2) + (activeElement.offsetWidth / 2);

                    container.scrollTo({
                        left: newScrollLeft,
                        behavior: 'smooth'
                    });
                }
            }
        }
    }, [activeTab, ventures]);

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

    const activeVenture = ventures.find(v => v.id === activeTab);

    if (loading) return <div className="py-20 text-center text-white">Loading Ventures...</div>;
    if (!activeVenture) return null;

    return (
        <section className="bg-[#124578] py-20 font-jakarta relative overflow-hidden">
            {/* Background Pattern/Texture to reduce empty feel */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }}>
            </div>

            {/* Decorative Overlay Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4 drop-shadow-sm">
                        Our <span className="text-[#9E0203] bg-white px-2 rounded-lg">Incubated Ventures</span>
                    </h2>
                    <p className="text-gray-200 font-medium uppercase tracking-widest text-sm bg-white/10 inline-block px-4 py-1 rounded-full backdrop-blur-sm">
                        Innovating for a better tomorrow · 100+ Active Startups
                    </p>
                </div>

                <div
                    className="relative max-w-7xl mx-auto"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Navigation & Slider */}
                    <div className="flex items-center gap-6 mb-12">
                        {/* Left Arrow */}
                        <button
                            onClick={() => scroll('left')}
                            className="hidden md:flex flex-shrink-0 w-12 h-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-all backdrop-blur-md border border-white/10 shadow-lg"
                        >
                            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
                        </button>

                        {/* Slider Container */}
                        <div
                            ref={scrollRef}
                            className="flex overflow-x-auto space-x-6 no-scrollbar py-8 px-4 flex-grow items-end scroll-smooth mask-image-linear-to-r"
                        >
                            {ventures.map((venture) => (
                                <button
                                    key={venture.id}
                                    onClick={() => setActiveTab(venture.id)}
                                    className={`flex-shrink-0 relative transition-all duration-300 group px-6 py-4 flex items-center justify-center rounded-xl ${activeTab === venture.id
                                        ? 'bg-white border-2 border-[#9E0203] shadow-[0_0_30px_rgba(255,255,255,0.4)] transform scale-110 z-20'
                                        : 'bg-white/80 border-2 border-transparent hover:bg-white opacity-70 hover:opacity-100 hover:scale-105'
                                        }`}
                                    style={{
                                        width: '220px',
                                        height: '130px',
                                    }}
                                >
                                    <img
                                        src={venture.logo}
                                        alt={venture.name}
                                        className="max-w-full max-h-full object-contain transition-all duration-300 transform group-hover:scale-110"
                                    />
                                    {/* Active Tab Indicator */}
                                    {activeTab === venture.id && (
                                        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-t-[12px] border-t-[#9E0203] border-r-[10px] border-r-transparent filter drop-shadow-md"></div>
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Right Arrow */}
                        <button
                            onClick={() => scroll('right')}
                            className="hidden md:flex flex-shrink-0 w-12 h-12 items-center justify-center rounded-full bg-[#9E0203] text-white hover:bg-[#b00404] transition-all shadow-xl hover:shadow-2xl hover:scale-105 border-2 border-white/20"
                        >
                            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                        </button>
                    </div>

                    {/* Main Content Box */}
                    <div className="relative z-10 bg-gradient-to-br from-white via-[#fffdfd] to-[#ffebeb] border-t-4 border-t-[#9E0203] rounded-3xl shadow-2xl p-8 md:p-12 h-auto md:h-[550px] flex items-center justify-center overflow-hidden transition-all duration-300">

                        {/* Background subtle watermark */}
                        <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none flex items-center justify-center">
                            <img src={activeVenture.logo} alt="" className="w-[80%] h-[80%] object-contain mix-blend-overlay grayscale" />
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto animate-fadeIn w-full relative z-10">

                            {/* Left Side: Enlarged Logo */}
                            <div className="w-full md:w-5/12 flex justify-center md:justify-end">
                                <div className="bg-white p-6 rounded-[2rem] shadow-2xl border-4 border-white ring-1 ring-gray-100 w-80 h-80 flex items-center justify-center transform hover:scale-105 hover:rotate-2 transition-all duration-500 ease-out">
                                    <img
                                        src={activeVenture.logo}
                                        alt={activeVenture.name}
                                        className="max-w-full max-h-full object-contain"
                                    />
                                </div>
                            </div>

                            {/* Right Side: Content */}
                            <div className="w-full md:w-7/12 space-y-6 text-center md:text-left pl-0 md:pl-8">
                                <div className="space-y-3">
                                    <h3 className="text-[#9E0203] text-4xl md:text-6xl font-black font-jakarta uppercase tracking-tighter leading-[0.9] drop-shadow-sm">
                                        {activeVenture.name}
                                    </h3>
                                    <p className="text-gray-600 font-medium text-lg tracking-wide leading-relaxed max-w-2xl mx-auto md:mx-0">
                                        {activeVenture.brief}
                                    </p>
                                </div>

                                <div className="h-1.5 w-32 bg-gradient-to-r from-[#9E0203] to-red-300 rounded-full mx-auto md:mx-0 opacity-80"></div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4">
                                    <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-8 h-8 rounded-full bg-[#124578] flex items-center justify-center text-white text-xs">
                                                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                                            </div>
                                            <span className="text-[#124578] text-xs font-black uppercase tracking-widest">Founders</span>
                                        </div>
                                        <span className="text-lg font-bold text-gray-900 leading-tight block">{activeVenture.founders}</span>
                                    </div>
                                    <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-center">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-8 h-8 rounded-full bg-[#9E0203] flex items-center justify-center text-white text-xs">
                                                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                                            </div>
                                            <span className="text-[#9E0203] text-xs font-black uppercase tracking-widest">Status</span>
                                        </div>
                                        <div>
                                            <span className="inline-block px-4 py-1.5 bg-[#9E0203] text-white text-xs font-black uppercase tracking-widest rounded-full shadow-md">
                                                {activeVenture.status}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

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
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.4s ease-out forwards;
                }
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
                .mask-image-linear-to-r {
                    mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                    -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                }
            `}</style>
        </section>
    );
};

export default IncubatedVentureHighlight;
