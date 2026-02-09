import React, { useState, useEffect } from 'react';

const CGCUNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeMegaMenu, setActiveMegaMenu] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMegaMenu = (menu) => {
        if (activeMegaMenu === menu) setActiveMegaMenu(null);
        else setActiveMegaMenu(menu);
    };

    return (
        <header className="fixed top-0 left-0 w-full z-[10000] font-sans">
            {/* Top Scrolling Ticker */}
            <div className="bg-white py-1.5 overflow-hidden h-8 flex items-center">
                <div className="animate-marquee whitespace-nowrap flex items-center">
                    <span className="text-[11px] font-bold text-black uppercase mx-8">Apply Now for Admissions 2026-27 | Last few seats left in Ph.D | Apply for CGCUET Scholarship | Early bird Scholarship registrations closing on 14th February 2026</span>
                    <span className="text-[11px] font-bold text-black uppercase mx-8">Apply Now for Admissions 2026-27 | Last few seats left in Ph.D | Apply for CGCUET Scholarship | Early bird Scholarship registrations closing on 14th February 2026</span>
                </div>
            </div>

            {/* Main Navbar Container */}
            <div className={`transition-all duration-300 ${isScrolled ? 'bg-black/95 shadow-2xl' : 'bg-black/90'}`}>
                <div className="container mx-auto px-4 py-2">
                    <div className="flex items-center">
                        
                        {/* Logo Section */}
                        <div className="flex-shrink-0 mr-8">
                            <a href="https://www.cgcuniversity.in" className="block py-2">
                                <img 
                                    src="https://www.cgcuniversity.in/frontend/images/common-images/cgcu-logo-white.webp" 
                                    alt="CGC University Mohali" 
                                    className="h-16 w-auto"
                                />
                            </a>
                        </div>

                        {/* Navigation and Tools Section */}
                        <div className="flex-grow flex flex-col justify-center">
                            
                            {/* Top Row: Quick Links, Virtual Tour, Socials */}
                            <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2">
                                <ul className="flex items-center gap-5 text-[11px] font-medium text-white/70 uppercase tracking-wider">
                                    <li><a href="#" className="hover:text-white transition-colors">International</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Library</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Career</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Admission Login</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Joint Placement</a></li>
                                </ul>

                                <div className="flex items-center gap-6">
                                    {/* 360 Virtual Tour */}
                                    <a href="#" className="flex flex-col items-center group">
                                        <div className="relative">
                                            <img src="https://www.cgcuniversity.in/frontend/images/common-images/virtual-tour.svg" alt="360" className="w-8 h-8 brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity" />
                                            <span className="absolute -top-1 -right-2 text-[8px] font-black text-white">360°</span>
                                        </div>
                                        <span className="text-[8px] font-bold text-white uppercase mt-0.5 tracking-tighter opacity-80 group-hover:opacity-100 transition-opacity">Virtual Tour</span>
                                    </a>

                                    {/* Social Icons */}
                                    <div className="flex items-center gap-3.5 border-l border-white/20 pl-6">
                                        {['fb', 'x', 'linkedin', 'insta', 'youtube', 'thread'].map((social) => (
                                            <a key={social} href="#" className="opacity-70 hover:opacity-100 hover:scale-110 transition-all">
                                                <img src={`https://www.cgcuniversity.in/frontend/images/common-images/${social}.svg`} alt={social} className="w-4 h-4 brightness-0 invert" />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Row: Main Nav, Search, CGCUET, Helpline */}
                            <div className="flex items-center justify-between">
                                <nav>
                                    <ul className="flex items-center gap-7 text-[13px] font-black text-white uppercase tracking-wider">
                                        <li className="relative group">
                                            <button 
                                                onMouseEnter={() => setActiveMegaMenu('about')}
                                                className="hover:text-white/80 transition-colors flex items-center py-2"
                                            >
                                                About
                                                <span className="ml-1 text-[8px] opacity-40 group-hover:rotate-180 transition-transform">▼</span>
                                            </button>
                                        </li>
                                        <li><a href="#" className="hover:text-white/80 transition-colors">Schools</a></li>
                                        <li><a href="#" className="hover:text-white/80 transition-colors">Programs</a></li>
                                        <li><a href="#" className="hover:text-white/80 transition-colors">Admission</a></li>
                                        <li><a href="#" className="hover:text-white/80 transition-colors">Campus Life</a></li>
                                        <li><a href="#" className="hover:text-white/80 transition-colors">Placements</a></li>
                                        <li><a href="#" className="hover:text-white/80 transition-colors">Research & Innovation</a></li>
                                    </ul>
                                </nav>

                                <div className="flex items-center gap-6">
                                    {/* Search Icon */}
                                    <button className="text-white hover:text-red-500 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                        </svg>
                                    </button>

                                    {/* CGCUET Logo */}
                                    <div className="border-l border-white/20 pl-6">
                                        <img src="https://www.cgcuniversity.in/frontend/images/common-images/cgcuet.png" alt="CGCUET" className="h-10 w-auto" />
                                    </div>

                                    {/* Helpline Button */}
                                    <div className="flex flex-col items-end">
                                        <span className="text-[10px] font-bold text-white uppercase mb-0.5 tracking-tighter opacity-80">Admission Helpline</span>
                                        <a href="tel:18005005005" className="bg-[#9E0203] text-white px-5 py-1.5 rounded-full text-[15px] font-black hover:bg-red-700 transition-colors shadow-lg">
                                            18005005005
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Mega Menu: About */}
            <div 
                className={`absolute top-full left-0 w-full bg-white shadow-2xl transition-all duration-300 origin-top ${activeMegaMenu === 'about' ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 invisible'}`}
                onMouseLeave={() => setActiveMegaMenu(null)}
            >
                <div className="container mx-auto grid grid-cols-12 overflow-hidden min-h-[400px]">
                    {/* Left Section: Link Lists */}
                    <div className="col-span-6 p-8 grid grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-[15px] font-black uppercase text-gray-900 mb-6 border-b-2 border-red-600 inline-block">Who We Are</h4>
                            <ul className="space-y-3">
                                {['Overview', 'Message From Leadership', 'NCC', 'NSS', 'Legacy Milestones', 'Cultural Activities', 'Recognitions & Approvals', 'CGC University, Mohali Act', 'NBA Accreditation'].map(link => (
                                    <li key={link}><a href="#" className="text-[14px] text-gray-600 hover:text-red-600 transition-colors flex items-center gap-2 font-medium"><span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>{link}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-[15px] font-black uppercase text-gray-900 mb-6 border-b-2 border-red-600 inline-block">Related Menu</h4>
                            <ul className="space-y-3">
                                {['How to Apply?', 'Scholarships', 'Hostel Facility', 'Student Welfare Services', 'Gallery', 'Life At CGC', 'International Collaborations', 'Executive Council'].map(link => (
                                    <li key={link}><a href="#" className="text-[14px] text-gray-600 hover:text-red-600 transition-colors flex items-center gap-2 font-medium"><span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>{link}</a></li>
                                ))}
                            </ul>
                            <div className="mt-12 group cursor-pointer">
                                <p className="text-[14px] font-black text-red-600 uppercase tracking-tighter transition-all group-hover:translate-x-2">NORTH INDIA'S<br/>FASTEST GROWING UNIVERSITY →</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Section: Visual Content */}
                    <div className="col-span-6 flex flex-col">
                        <div className="relative h-2/3 overflow-hidden group">
                            <img src="https://www.cgcuniversity.in/frontend/images/header/placement.webp" alt="Graphic" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-10">
                                <h3 className="text-white text-3xl font-black leading-tight">CGC University, Mohali<br/><span className="text-yellow-400">Best Institution</span><br/>for Education</h3>
                            </div>
                        </div>
                        <div className="h-1/3 grid grid-cols-4 bg-[#990000]">
                            {[
                                { label: 'Human Dignity', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197' },
                                { label: 'Empathy', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
                                { label: 'Humility', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
                                { label: 'Giving', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' }
                            ].map((box, i) => (
                                <div key={i} className="flex flex-col items-center justify-center p-4 border-r border-white/10 last:border-0 hover:bg-black/10 transition-colors cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-7 h-7 mb-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d={box.icon} />
                                    </svg>
                                    <span className="text-[11px] font-bold text-white uppercase tracking-tighter">{box.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Vertical Apply Now Tab */}
            <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[10001] hidden xl:block">
                <a href="#" className="bg-cyan-500 text-white font-black py-4 px-2 rounded-l-md shadow-2xl transition-all hover:pr-4 hover:bg-cyan-600" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                    APPLY NOW
                </a>
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                    display: inline-flex;
                }
            `}</style>
        </header>
    );
};

export default CGCUNavbar;