import React, { useState, useEffect, useMemo } from 'react';
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

    return (
        <section className="partner-section font-jakarta relative min-h-[600px] flex items-center py-20 overflow-hidden bg-[#fafafa]">
            {/* RAW BACKGROUND IMAGE WITH LOW OPACITY */}
            {activePartner && (
                <div 
                    className="absolute inset-0 z-0 transition-opacity duration-1000"
                    style={{
                        backgroundImage: `url(${activePartner.logo})`,
                        backgroundSize: '40%',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        opacity: 0.05,
                        filter: 'grayscale(100%)'
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
                    <div className="md:col-span-8 bg-white p-8 md:p-12 shadow-sm border border-gray-100">
                        {loading ? (
                            <div className="flex justify-center py-20">
                                <div className="w-8 h-8 border-2 border-[#A40C1A] border-t-transparent rounded-full animate-spin"></div>
                            </div>
                        ) : (
                            <div className="grid md:grid-cols-2 gap-12">
                                {/* Partner Detail */}
                                <div className="space-y-6">
                                    {activePartner ? (
                                        <>
                                            <div className="w-32 h-20 flex items-center border-b border-gray-100 pb-4">
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
                                            <button className="text-[#A40C1A] font-bold text-sm border-b-2 border-[#A40C1A] pb-1 hover:opacity-70 transition-opacity">
                                                Visit Official Website →
                                            </button>
                                        </>
                                    ) : (
                                        <p className="text-gray-400 italic">No partners found in this category.</p>
                                    )}
                                </div>

                                {/* Partner Directory */}
                                <div className="space-y-4">
                                    <h5 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4">In this category</h5>
                                    <div className="max-h-[300px] overflow-y-auto pr-4 space-y-2 custom-scrollbar">
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
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 flex-shrink-0">
                                                        <img src={p.logo} alt="" className="w-full h-full object-contain" />
                                                    </div>
                                                    <span className="text-sm font-bold text-gray-800">{p.name}</span>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
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
            `}</style>
        </section>
    );
};

export default Partner_highlight;
