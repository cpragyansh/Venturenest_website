import React, { useState, useEffect, useMemo, useRef } from 'react';
import axios from 'axios';

const Partner_highlight = () => {
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
        <section className="partner-section font-jakarta relative min-h-[600px] flex items-center py-20 overflow-hidden bg-[#fafafa]">
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
                    <div className="md:col-span-4">
                        <h2 className="text-[#A40C1A] text-4xl font-bold mb-4">Our Partners</h2>
                        <p className="text-gray-600 mb-8 max-w-sm">
                            We collaborate with global leaders to provide our startups with the best resources, funding, and mentorship.
                        </p>

                        <div className="flex flex-col space-y-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={`text-left px-6 py-4 border-l-4 transition-all ${
                                        activeCategory === cat.id 
                                        ? "border-[#A40C1A] bg-white shadow-md text-black" 
                                        : "border-transparent text-gray-400 hover:text-gray-600"
                                    }`}
                                >
                                    <h4 className="font-bold text-lg">{cat.label}</h4>
                                    <p className="text-xs opacity-70">{cat.desc}</p>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT SIDE: Partner List and Profile */}
                    <div className="md:col-span-8 relative" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
                        {/* RED DECORATIVE BACKGROUND BLOCK */}
                        <div 
                            className="absolute -inset-y-40 -right-[100vw] 
                            bg-[#1A4880]/[0.01] 
                            z-0 hidden md:block pointer-events-none"
                            style={{ left: '-1rem' }}
                        ></div>
                        
                        <div className="relative z-10 bg-white p-8 md:p-12 shadow-sm border border-gray-100 h-full">
                        {loading ? (
                            <div className="flex justify-center py-20">
                                <div className="w-8 h-8 border-2 border-[#A40C1A] border-t-transparent rounded-full animate-spin"></div>
                            </div>
                        ) : (
                            <div className="grid md:grid-cols-2 gap-12">
                                {/* Partner Detail */}
                                <div className="space-y-6 animate-fadeIn" key={activePartner?.id}>
                                    {activePartner ? (
                                        <>
                                            <div className="w-50 h-50 flex items-center border-b border-gray-100 pb-6">
                                                <img 
                                                    src={activePartner.logo} 
                                                    alt={activePartner.name} 
                                                    className="max-h-full max-w-full object-contain"
                                                />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-black mb-2">{activePartner.name}</h3>
                                                <span className="text-[10px] font-bold uppercase tracking-widest text-[#A40C1A] bg-red-50 px-2 py-1 rounded">
                                                    {activePartner.type}
                                                </span>
                                            </div>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                {activePartner.description}
                                            </p>
                                        </>
                                    ) : (
                                        <p className="text-gray-400 italic">No partners found in this category.</p>
                                    )}
                                </div>

                                {/* Partner Directory */}
                                <div className="space-y-4">
                                    <h5 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4">In this category</h5>
                                    <div ref={scrollRef} className="max-h-[300px] overflow-y-auto pr-4 space-y-2 custom-scrollbar">
                                        {partners.map((p) => (
                                            <button
                                                key={p.id}
                                                onClick={() => setActivePartner(p)}
                                                className={`w-full text-left p-4 transition-all border ${
                                                    activePartner?.id === p.id 
                                                    ? "bg-gray-50 border-gray-200" 
                                                    : "bg-white border-transparent hover:bg-gray-50"
                                                }`}
                                            >
                                                <div className="flex items-center gap-6 relative z-10">
                                                    <div className="w-16 h-12 flex-shrink-0">
                                                        <img src={p.logo} alt="" className="w-full h-full object-contain" />
                                                    </div>
                                                    <span className="text-sm font-bold text-gray-800">{p.name}</span>
                                                </div>
                                                {/* Cinematic Progress Bar */}
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

export default Partner_highlight;
