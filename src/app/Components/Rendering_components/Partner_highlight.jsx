import React, { useState, useEffect, useMemo, useRef } from 'react';
import axios from 'axios';

const PartnerHighlight = () => {
    const categories = useMemo(() => [
        { id: 'accelerator', label: 'Accelerator', desc: 'Accelerating growth through mentorship and capital.' },
        { id: 'investor', label: 'Investment', desc: 'Direct funding and strategic investment networks.' },
        { id: 'government', label: 'Government', desc: 'Official institutional and regulatory support.' },
        { id: 'ecosystem', label: 'Ecosystem', desc: 'A global network of innovation hubs and labs.' }
    ], []);

    const [activeCategory, setActiveCategory] = useState('accelerator');
    const [partners, setPartners] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activePartner, setActivePartner] = useState(null);
    const [isPaused, setIsPaused] = useState(false);
    const scrollRef = useRef(null);

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
                    description: partner.Description || `Strategic partner driving future-ready innovation.`,
                }));

                setPartners(mappedPartners);
                if (mappedPartners.length > 0) {
                    setActivePartner(mappedPartners[0]);
                } else {
                    setActivePartner(null);
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

    // Auto-cycle partners and categories
    useEffect(() => {
        if (loading || isPaused) return;

        const interval = setInterval(() => {
            if (partners.length > 0) {
                const currentIndex = partners.findIndex(p => p.id === activePartner?.id);
                
                if (currentIndex !== -1 && currentIndex < partners.length - 1) {
                    // Next partner in current category
                    setActivePartner(partners[currentIndex + 1]);
                } else {
                    // Last partner in category or no partner active, switch category
                    const currentCatIndex = categories.findIndex(c => c.id === activeCategory);
                    const nextCatIndex = (currentCatIndex + 1) % categories.length;
                    setActiveCategory(categories[nextCatIndex].id);
                }
            } else {
                // No partners in current category, move to next category after a delay
                const currentCatIndex = categories.findIndex(c => c.id === activeCategory);
                const nextCatIndex = (currentCatIndex + 1) % categories.length;
                setActiveCategory(categories[nextCatIndex].id);
            }
        }, 6000); // Change every 6 seconds

        return () => clearInterval(interval);
    }, [partners, activePartner, activeCategory, categories, loading, isPaused]);

    // Auto-scroll the directory list
    useEffect(() => {
        if (scrollRef.current && activePartner && partners.length > 0) {
            const index = partners.findIndex(p => p.id === activePartner.id);
            if (index !== -1) {
                const container = scrollRef.current;
                const activeElement = container.children[index];
                if (activeElement) {
                    const scrollBottom = container.scrollTop + container.offsetHeight;
                    const elementBottom = activeElement.offsetTop + activeElement.offsetHeight;
                    const elementTop = activeElement.offsetTop;

                    if (elementBottom > scrollBottom || elementTop < container.scrollTop) {
                        container.scrollTo({
                            top: elementTop - (container.offsetHeight / 2) + (activeElement.offsetHeight / 2),
                            behavior: 'smooth'
                        });
                    }
                }
            }
        }
    }, [activePartner, partners]);

    return (
        <section className="partner-section font-jakarta relative min-h-[600px] flex items-center pt-0 pb-12 md:py-20 overflow-hidden bg-[#fafafa]">
            {/* RAW BACKGROUND IMAGE WITH LOW OPACITY */}
            {activePartner && (
                <div 
                    key={`bg-${activePartner.id}`}
                    className="absolute inset-0 z-0 animate-kenBurns"
                    style={{
                        backgroundImage: `url(${activePartner.logo})`,
                        backgroundSize: '40%',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        opacity: 0.05,
                        filter: 'grayscale(100%) blur(2px)'
                    }}
                ></div>
            )}

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid md:grid-cols-12 gap-8 items-start">
                    
                    {/* LEFT SIDE: Heading and Categories */}
                    <div className="md:col-span-4 pt-0">
                        <h2 className="text-[#A40C1A] text-2xl md:text-3xl lg:text-4xl font-bold mb-2 pt-0 md:pt-0">Our Partners</h2>
                        <p className="text-gray-600 mb-4 md:mb-8 max-w-sm text-[12px] md:text-sm">
                            We collaborate with global leaders to provide our startups with the best resources, funding, and mentorship.
                        </p>

                        <div className="flex flex-col space-y-1 md:space-y-2">
                            {categories.map((cat) => (
                                <div key={cat.id} className="w-full">
                                    <button
                                        onClick={() => setActiveCategory(cat.id)}
                                        className={`w-full text-left px-4 py-3 md:px-6 md:py-4 border-l-2 md:border-l-4 transition-all flex justify-between items-center ${
                                            activeCategory === cat.id 
                                            ? "border-[#A40C1A] bg-white shadow-sm md:shadow-md text-black" 
                                            : "border-transparent text-gray-400 hover:text-gray-600"
                                        }`}
                                    >
                                        <div>
                                            <h4 className="font-bold text-base md:text-lg">{cat.label}</h4>
                                            <p className="text-[9px] md:text-xs opacity-70">{cat.desc}</p>
                                        </div>
                                        {/* Dropdown Menu Icon for Every Heading */}
                                        <div className="flex items-center gap-2">
                                            <span className={`transition-transform duration-300 md:hidden ${activeCategory === cat.id ? 'rotate-180 text-[#A40C1A]' : 'text-gray-300'}`}>
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="m6 9 6 6 6-6"/>
                                                </svg>
                                            </span>
                                        </div>
                                    </button>
                                    
                                    {/* MOBILE-ONLY DROPDOWN MENU CONTENT */}
                                    <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${activeCategory === cat.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <div className="bg-gray-50/30 p-3 border-l-2 border-[#A40C1A]/20">
                                            <div className="grid grid-cols-4 gap-2">
                                                {activeCategory === cat.id && partners.length > 0 ? (
                                                    partners.map(p => (
                                                        <div key={p.id} onClick={() => setActivePartner(p)} className="flex flex-col items-center gap-1 cursor-pointer group">
                                                            <div className={`w-12 h-12 bg-white rounded border flex items-center justify-center p-1 md:p-2 transition-all ${activePartner?.id === p.id ? 'border-[#A40C1A] scale-105 shadow-sm' : 'border-gray-100 group-hover:border-gray-200'}`}>
                                                                <img src={p.logo} alt="" className="max-w-full max-h-full object-contain" />
                                                            </div>
                                                            <span className={`text-[7px] font-bold truncate w-12 text-center ${activePartner?.id === p.id ? 'text-[#A40C1A]' : 'text-gray-500'}`}>
                                                                {p.name.split(' ')[0]}
                                                            </span>
                                                        </div>
                                                    ))
                                                ) : (
                                                    <p className="col-span-4 text-[10px] text-gray-400 italic py-2">Explore our {cat.label} network...</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT SIDE: Partner Profile Detail */}
                    <div className="md:col-span-8 relative" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
                        {/* DECORATIVE BACKGROUND */}
                        <div className="absolute -inset-y-40 -right-40 bg-[#1A4880]/[0.01] z-0 hidden md:block pointer-events-none" style={{ left: '-1rem' }}></div>
                        
                        <div className="relative z-10 bg-white p-4 md:p-12 shadow-sm border border-gray-100 h-full">
                        {loading ? (
                            <div className="flex justify-center py-10 md:py-20">
                                <div className="w-8 h-8 border-2 border-[#A40C1A] border-t-transparent rounded-full animate-spin"></div>
                            </div>
                        ) : (
                            <div className="grid md:grid-cols-2 gap-6 md:gap-12">
                                {/* Partner Detail Block */}
                                <div className="space-y-4 md:space-y-6 animate-fadeIn" key={activePartner?.id}>
                                    {activePartner ? (
                                        <>
                                            <div className="w-full h-32 md:h-50 flex items-center border-b border-gray-100 pb-4 md:pb-6">
                                                <img src={activePartner.logo} alt={activePartner.name} className="max-h-full max-w-full object-contain" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl md:text-2xl font-bold text-black mb-1 md:mb-2">{activePartner.name}</h3>
                                                <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-[#A40C1A] bg-red-50 px-2 py-1 rounded">
                                                    {activePartner.type}
                                                </span>
                                            </div>
                                            <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                                                {activePartner.description}
                                            </p>
                                        </>
                                    ) : (
                                        <p className="text-gray-400 italic text-sm">No partners found in this category.</p>
                                    )}
                                </div>

                                {/* LIST - Hidden on mobile, only desktop shows the right-column list */}
                                <div className="space-y-4 hidden md:block">
                                    <h5 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4">In this category</h5>
                                    <div ref={scrollRef} className="max-h-[300px] overflow-y-auto pr-4 space-y-2 custom-scrollbar">
                                        {partners.map((p) => (
                                            <button
                                                key={p.id}
                                                onClick={() => setActivePartner(p)}
                                                className={`w-full text-left p-4 transition-all border ${
                                                    activePartner?.id === p.id 
                                                    ? "bg-gray-50 border-gray-200 shadow-sm" 
                                                    : "bg-white border-transparent hover:bg-gray-50"
                                                }`}
                                            >
                                                <div className="flex items-center gap-6 relative z-10">
                                                    <div className="w-16 h-12 flex-shrink-0">
                                                        <img src={p.logo} alt="" className="w-full h-full object-contain" />
                                                    </div>
                                                    <span className="text-sm font-bold text-gray-800">{p.name}</span>
                                                </div>
                                                {/* Animated Progress */}
                                                {activePartner?.id === p.id && !isPaused && (
                                                    <div className="absolute bottom-0 left-0 h-0.5 bg-[#A40C1A] animate-progress"></div>
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>

            <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 3px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #f1f1f1;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #ccc;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #A40C1A;
                }
                .partner-section {
                    background-image: radial-gradient(#eee 1px, transparent 1px);
                    background-size: 20px 20px;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); filter: blur(10px); }
                    to { opacity: 1; transform: translateY(0); filter: blur(0); }
                }
                @keyframes kenBurns {
                    0% { opacity: 0; transform: scale(1) translate(0, 0); }
                    15% { opacity: 0.05; }
                    85% { opacity: 0.05; }
                    100% { opacity: 0; transform: scale(1.05) translate(1%, 1%); }
                }
                @keyframes progress {
                    from { width: 0%; }
                    to { width: 100%; }
                }
                .animate-fadeIn {
                    animation: fadeIn 1.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
                }
                .animate-kenBurns {
                    animation: kenBurns 6s linear forwards;
                }
                .animate-progress {
                    animation: progress 6s linear forwards;
                }
            `}</style>
        </section>
    );
};

export default PartnerHighlight;
