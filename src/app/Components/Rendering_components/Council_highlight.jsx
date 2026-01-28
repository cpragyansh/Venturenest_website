import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const Council_highlight = () => {
    // Categories for the sorting bar
    const categories = [
        { id: 'advisory', label: 'Advisory', number: '01' },
        { id: 'investfund', label: 'Investment', number: '02' },
        { id: 'techInnov', label: 'Tech & Innovation', number: '03' },
        { id: 'legal Compliance', label: 'Legal & Compliance', number: '04' },
        { id: 'mentorship', label: 'Mentorship', number: '05' }
    ];

    const [activeCategory, setActiveCategory] = useState('advisory');
    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState(null);

    // Fetch data from API based on category
    useEffect(() => {
        const fetchMembers = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`https://venture-nest-backend.onrender.com/council-members?category=${activeCategory}`);
                const data = response.data;

                const mappedMembers = data.map((member, index) => ({
                    id: member._id || index,
                    logo: member.imgpath || "/assets/incubated_hero.png",
                    name: member.name,
                    role: member.company || "Council Member",
                    brief: member.description || `Distinguished member of our ${categories.find(c => c.id === activeCategory)?.label} Council.`,
                    category: categories.find(c => c.id === activeCategory)?.label || "Council"
                }));

                setMembers(mappedMembers);
                if (mappedMembers.length > 0) {
                    setActiveTab(mappedMembers[0].id);
                }
                setLoading(false);
            } catch (error) {
                console.error("Error fetching council members:", error);
                setMembers([]);
                setLoading(false);
            }
        };

        fetchMembers();
    }, [activeCategory]);

    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 300;
            if (direction === 'left') {
                current.scrollLeft -= scrollAmount;
            } else {
                current.scrollLeft += scrollAmount;
            }
        }
    };

    const activeMember = members.find(v => v.id === activeTab);

    return (
        <section className="bg-white font-jakarta overflow-hidden min-h-[calc(100vh-80px)] flex flex-col justify-between">
            {/* Header / Featured Member Section - Centered Layout */}
            <div className="bg-[#9E0203] pt-12 pb-20 relative text-white flex-grow-0">
                <div className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 50% 50%, #7a0000 0%, transparent 70%)',
                    }}>
                </div>
                
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-12">
                        {/* Left Side: Branding/Stats */}
                        <div className="hidden lg:flex flex-col items-start space-y-4 opacity-40">
                            <div className="flex flex-col">
                                <span className="text-6xl font-black tracking-tighter leading-none">V-NEST</span>
                                <span className="text-2xl font-black tracking-[0.2em] ml-1">COUNCIL</span>
                            </div>
                            <div className="h-px w-32 bg-white/40"></div>
                            <div className="text-[10px] uppercase font-black tracking-widest">
                                Global Strategy Group {new Date().getFullYear()}
                            </div>
                        </div>

                        {/* Center: Featured Member Portrait - Centered */}
                        <div className="flex justify-center order-first lg:order-none">
                            {loading ? (
                                <div className="w-56 h-56 rounded-full bg-white/5 animate-pulse"></div>
                            ) : activeMember ? (
                                <div className="relative group">
                                    <div className="absolute -inset-6 border border-white/10 rounded-full animate-spin-slow"></div>
                                    <div className="absolute -inset-3 border border-white/20 rounded-full"></div>
                                    <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl z-10 relative bg-[#7a0000]">
                                        <img 
                                            src={activeMember.logo} 
                                            alt={activeMember.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="absolute top-0 right-0 bg-white text-[#9E0203] px-4 py-1 rounded-full shadow-xl font-black text-[10px] z-20 uppercase">
                                        Active
                                    </div>
                                </div>
                            ) : null}
                        </div>

                        {/* Right Side: Featured Member Details */}
                        <div className="space-y-6 text-center lg:text-left">
                            {activeMember && !loading ? (
                                <div className="animate-fadeIn space-y-4">
                                    <div className="space-y-1">
                                        <div className="uppercase tracking-[0.4em] text-[10px] font-black opacity-70 block">
                                            {activeMember.category} Sector
                                        </div>
                                        <h3 className="text-3xl md:text-4xl font-black text-white leading-tight uppercase tracking-tighter">
                                            {activeMember.name}
                                        </h3>
                                        <div className="text-xs font-bold text-[#9E0203] bg-white inline-block px-4 py-1 rounded-md shadow-lg transform -rotate-1">
                                            {activeMember.role}
                                        </div>
                                    </div>
                                    
                                    <div className="relative">
                                        <div className="absolute -left-2 top-0 text-4xl text-white/20 font-serif">"</div>
                                        <p className="text-sm md:text-base opacity-90 leading-relaxed max-w-sm mx-auto lg:mx-0 font-medium italic pl-4">
                                            {activeMember.brief}
                                        </p>
                                    </div>

                                    <div className="flex justify-center lg:justify-start gap-4 pt-4">
                                        <div className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 cursor-pointer">
                                            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                        </div>
                                        <div className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 cursor-pointer">
                                            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M4 12h16m-7-7l7 7-7 7" /></svg>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="h-32 flex items-center justify-center">
                                    <p className="text-sm opacity-60">Selecting strategic leader...</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Category Navigation - Compact Pills */}
            <div className="relative -mt-10 z-20">
                <div className="container mx-auto px-6">
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
                        <div className="flex overflow-x-auto no-scrollbar divide-x divide-gray-100">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={`flex-1 min-w-[120px] p-4 group transition-all duration-300 relative flex flex-col items-center justify-center text-center ${
                                        activeCategory === cat.id ? 'bg-[#9E0203] text-white' : 'hover:bg-gray-50'
                                    }`}
                                >
                                    <span className={`text-[8px] font-black absolute top-2 right-4 tracking-widest ${
                                        activeCategory === cat.id ? 'text-white/40' : 'text-gray-300'
                                    }`}>
                                        {cat.number}
                                    </span>
                                    <h4 className="font-black text-[9px] uppercase tracking-[0.2em]">
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

            {/* Member List Section with Manual Navigation */}
            <div className="py-8 flex-grow">
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-between mb-6">
                        <div className="space-y-1">
                             <h3 className="text-lg font-black text-black tracking-tighter uppercase leading-none">
                                {activeCategory} <span className="text-[#9E0203]">Advisory Group</span>
                            </h3>
                            <p className="text-[9px] text-gray-400 font-bold uppercase tracking-[0.2em]">
                                Selective faculty of industry leaders
                            </p>
                        </div>
                        
                        {/* Navigation Buttons */}
                        <div className="flex gap-2">
                             <button 
                                onClick={() => scroll('left')}
                                className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-[#9E0203] hover:text-white transition-all shadow-sm"
                            >
                                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path d="M15 19l-7-7 7-7" /></svg>
                            </button>
                            <button 
                                onClick={() => scroll('right')}
                                className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-[#9E0203] hover:text-white transition-all shadow-sm"
                            >
                                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path d="M9 5l7 7-7 7" /></svg>
                            </button>
                        </div>
                    </div>

                    <div className="relative">
                        <div 
                            ref={scrollRef}
                            className="flex gap-6 items-center py-4 overflow-x-auto no-scrollbar scroll-smooth"
                        >
                            {loading ? (
                                Array(8).fill(0).map((_, i) => (
                                    <div key={i} className="w-24 h-24 rounded-full bg-gray-50 animate-pulse"></div>
                                ))
                            ) : members.length > 0 ? (
                                members.map((member) => (
                                    <div 
                                        key={member.id}
                                        onClick={() => setActiveTab(member.id)}
                                        className={`flex-shrink-0 group relative cursor-pointer outline-none touch-auto`}
                                    >
                                        <div className={`w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden transition-all duration-500 border-2 p-1 ${
                                            activeTab === member.id 
                                            ? 'border-[#9E0203] shadow-xl scale-110' 
                                            : 'border-transparent opacity-60 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-105 hover:border-gray-200'
                                        }`}>
                                            <img 
                                                src={member.logo} 
                                                alt={member.name}
                                                className="w-full h-full object-cover rounded-full"
                                            />
                                        </div>
                                        {activeTab === member.id && (
                                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-1 bg-[#9E0203] rounded-full"></div>
                                        )}
                                    </div>
                                ))
                            ) : (
                                <div className="w-full py-10 text-center border-2 border-dashed border-gray-100 rounded-3xl">
                                    <span className="font-black text-gray-300 text-[10px] uppercase tracking-widest">Category Empty</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 15s linear infinite;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: scale(0.95) translateY(10px); }
                    to { opacity: 1; transform: scale(1) translateY(0); }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
                }
            `}</style>
        </section>
    );
};

export default Council_highlight;
