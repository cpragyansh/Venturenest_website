import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const Council_highlight = () => {
    // Categories for the sorting bar
    const categories = [
        { id: 'advisory', label: 'Advisory' },
        { id: 'investfund', label: 'Investment' },
        { id: 'techInnov', label: 'Tech & Innovation' },
        { id: 'legalCompl', label: 'Legal & Compliance' },
        { id: 'mentorship', label: 'Mentorship' }
    ];

    const [activeCategory, setActiveCategory] = useState('advisory');
    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState(null);
    const [isPaused, setIsPaused] = useState(false);
    const scrollRef = useRef(null);

    // Fetch data from API based on category
    useEffect(() => {
        const fetchMembers = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`https://venture-nest-backend.onrender.com/council-members?category=${activeCategory}`);
                const data = response.data;

                // Map API data to component structure
                const mappedMembers = data.map((member, index) => ({
                    id: member._id || index, // Fallback index if no ID
                    logo: member.imgpath || "/assets/incubated_hero.png", // Use member image
                    name: member.name,
                    role: member.company || "Council Member", // Using company as role/designation
                    brief: member.description || `Distinguished member of our ${categories.find(c => c.id === activeCategory)?.label} Council, driving innovation and strategic growth.`, // Generic brief if missing
                    category: categories.find(c => c.id === activeCategory)?.label || "Council"
                }));

                setMembers(mappedMembers);
                if (mappedMembers.length > 0) {
                    setActiveTab(mappedMembers[0].id);
                }
                setLoading(false);
            } catch (error) {
                console.error("Error fetching council members:", error);
                setMembers([]); // Clear data on error
                setLoading(false);
            }
        };

        fetchMembers();
    }, [activeCategory]);

    // Auto-play effect
    useEffect(() => {
        let interval;
        if (!isPaused && members.length > 0) {
            interval = setInterval(() => {
                setActiveTab((prevId) => {
                    const currentIndex = members.findIndex(v => v.id === prevId);
                    const nextIndex = (currentIndex + 1) % members.length;
                    return members[nextIndex].id;
                });
            }, 4000);
        }
        return () => clearInterval(interval);
    }, [isPaused, members]);

    // Auto-scroll the slider to keep active tab in view (without scrolling page)
    useEffect(() => {
        if (scrollRef.current && activeTab && members.length > 0) {
            const index = members.findIndex(v => v.id === activeTab);
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
    }, [activeTab, members]);

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

    const activeMember = members.find(v => v.id === activeTab);

    return (
        <section className="bg-[#9E0203] py-24 font-jakarta relative overflow-hidden text-white">
            {/* Background Texture - Mesh Gradient */}
            <div className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle at 50% 50%, #7a0000 0%, transparent 50%), radial-gradient(circle at 100% 0%, #500000 0%, transparent 50%)',
                }}>
            </div>

            {/* Decorative Elements - Less Blobs, More Geometric */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <span className="text-white/60 font-black uppercase tracking-[0.3em] text-xs block mb-3">Our Leadership</span>
                    <h2 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6 drop-shadow-md">
                        The <span className="text-[#003366] bg-white px-3 py-1 transform -skew-x-6 inline-block shadow-lg">Council</span>
                    </h2>
                    <p className="text-white/80 font-medium text-lg max-w-2xl mx-auto leading-relaxed">
                        Industry veterans and thought leaders guiding the next generation of innovation.
                    </p>
                </div>

                {/* Sorting Bar - Glassmorphic Pill Style */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`px-8 py-3 rounded-full font-black uppercase tracking-widest text-[10px] transition-all duration-300 border-2 ${activeCategory === cat.id
                                    ? 'bg-white text-[#9E0203] border-white shadow-[0_0_20px_rgba(255,255,255,0.4)] scale-105'
                                    : 'bg-transparent border-white/30 text-white/70 hover:bg-white/10 hover:border-white hover:text-white'
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {loading ? (
                    <div className="h-[500px] flex items-center justify-center">
                        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white"></div>
                    </div>
                ) : members.length === 0 ? (
                    <div className="h-[300px] flex items-center justify-center text-center border-2 border-dashed border-white/20 rounded-3xl bg-white/5">
                        <p className="text-white/50 font-bold uppercase tracking-widest text-lg">No council members in this category.</p>
                    </div>
                ) : (
                    <div
                        className="relative max-w-7xl mx-auto"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        {/* Main Content Box - Reversed Layout */}
                        {activeMember && (
                            <div className="relative z-20 mb-16">
                                <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">

                                    {/* Left Side: Content (Text) */}
                                    <div className="w-full md:w-1/2 text-center md:text-right space-y-8 animate-fadeIn">
                                        <div>
                                            <div className="inline-flex items-center gap-2 mb-4 justify-center md:justify-end opacity-80">
                                                <span className="h-px w-12 bg-white/60"></span>
                                                <span className="text-xs font-black uppercase tracking-widest text-white/80">{activeMember.category}</span>
                                            </div>
                                            <h3 className="text-4xl md:text-6xl font-black font-jakarta uppercase tracking-tighter leading-none mb-4">
                                                {activeMember.name}
                                            </h3>
                                            <div className="text-xl md:text-2xl font-bold text-[#003366] bg-white/90 inline-block px-4 py-1 rounded-lg shadow-lg rotate-1 transform">
                                                {activeMember.role}
                                            </div>
                                        </div>

                                        <p className="text-white/90 font-medium text-lg leading-relaxed shadow-black drop-shadow-md">
                                            "{activeMember.brief}"
                                        </p>

                                        {/* Stats / Badges Grid */}
                                        <div className="grid grid-cols-2 gap-4 max-w-md ml-auto mr-auto md:mr-0 md:ml-auto">
                                            <div className="bg-[#003366]/30 backdrop-blur-md border border-[#003366]/50 p-4 rounded-xl text-right">
                                                <div className="text-xs text-white/50 uppercase tracking-widest font-black mb-1">Focus Area</div>
                                                <div className="text-white font-bold">{activeMember.category}</div>
                                            </div>
                                            <div className="bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-xl text-right">
                                                <div className="text-xs text-white/50 uppercase tracking-widest font-black mb-1">Status</div>
                                                <div className="text-white font-bold">Active Member</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Side: Photo */}
                                    <div className="w-full md:w-1/2 flex justify-center md:justify-start relative">
                                        {/* Abstract shapes behind image */}
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border-2 border-dashed border-white/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

                                        <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.5)] z-10 bg-[#9E0203]">
                                            <img
                                                src={activeMember.logo}
                                                alt={activeMember.name}
                                                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                                            />
                                        </div>

                                        {/* Floating Badge */}
                                        <div className="absolute bottom-0 right-10 md:right-auto md:left-0 z-20 bg-[#003366] text-white p-4 rounded-full shadow-xl border-4 border-[#9E0203] animate-bounce">
                                            <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )}

                        {/* Bottom Slider - Minimalist Strip */}
                        <div className="border-t border-white/10 pt-8 mt-8">
                            <div className="flex items-center gap-6">
                                <button onClick={() => scroll('left')} className="p-3 rounded-full border border-white/20 hover:bg-white hover:text-[#9E0203] transition-colors">
                                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                                </button>

                                <div ref={scrollRef} className="flex overflow-x-auto gap-4 py-4 px-2 flex-grow no-scrollbar scroll-smooth">
                                    {members.map((member) => (
                                        <button
                                            key={member.id}
                                            onClick={() => setActiveTab(member.id)}
                                            className={`flex-shrink-0 w-20 h-20 rounded-full border-2 overflow-hidden transition-all duration-300 relative ${activeTab === member.id
                                                    ? 'border-white scale-110 shadow-[0_0_20px_rgba(255,255,255,0.6)] ring-4 ring-[#003366]/50'
                                                    : 'border-white/30 opacity-60 hover:opacity-100 hover:scale-105'
                                                }`}
                                        >
                                            <img
                                                src={member.logo}
                                                alt={member.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </button>
                                    ))}
                                </div>

                                <button onClick={() => scroll('right')} className="p-3 rounded-full border border-white/20 hover:bg-white hover:text-[#9E0203] transition-colors">
                                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
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
        .animate-fadeIn {
            animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
        </section>
    );
};

export default Council_highlight;
