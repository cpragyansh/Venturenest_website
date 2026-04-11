"use client";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Container, Grid, Button, Stack } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import { Globe, Handshake } from "lucide-react";

const AfricaGlobalFounderProgram = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { scrollYProgress } = useScroll();
    const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);

    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
        }
    };

    return (
        <div className="bg-white font-['Public_Sans',_sans-serif] text-[#1A1A1A] antialiased">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Public+Sans:wght@300;400;500;600;700&family=Inter:wght@400;500;600;700&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');

                .material-symbols-outlined {
                    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
                }
                .text-stroke {
                    -webkit-text-stroke: 1px rgba(0,0,0,0.1);
                    color: transparent;
                }
                .grid-line {
                    border: 1px solid #E0E0E0;
                }
                .prestige-gradient {
                    background: linear-gradient(135deg, #000000 0%, #1A1A1A 100%);
                }
                .prestige-hover:hover {
                    background-color: #D41D24;
                    color: white;
                    border-color: #D41D24;
                }
                .density-container {
                    max-width: 1440px;
                    margin: 0 auto;
                }
                
                .editorial-title {
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    font-weight: 800;
                    letter-spacing: -0.04em;
                }

                .pill-label {
                    background: #A30D33;
                    color: #fff;
                    padding: 6px 16px;
                    border-radius: 100px;
                    font-size: 0.75rem;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    width: fit-content;
                }

                /* Custom utility classes mimicking the user's tailwind config */
                .bg-primary { background-color: #D41D24; }
                .text-primary { color: #D41D24; }
                .border-primary { border-color: #D41D24; }
                .hover\\:bg-primary:hover { background-color: #D41D24; }
                .hover\\:text-primary:hover { color: #D41D24; }
                
                .bg-secondary { background-color: #000000; }
                .text-secondary { color: #000000; }
                .border-secondary { border-color: #000000; }
                .hover\\:bg-secondary:hover { background-color: #000000; }
                .hover\\:text-secondary:hover { color: #000000; }
                
                .bg-surface-variant { background-color: #F5F5F5; }
                .border-outline { border-color: #E0E0E0; }
                .divide-outline { border-color: #E0E0E0; }
            `}</style>

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-outline">
                <div className="density-container flex justify-between items-center px-6 py-3">
                    <Link to="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary flex items-center justify-center">
                            <span className="text-white font-bold text-xl">A</span>
                        </div>
                        <span className="text-lg font-extrabold tracking-tighter text-secondary font-['Manrope',_sans-serif]">AFRICA GLOBAL FOUNDERS</span>
                    </Link>
                    <div className="hidden md:flex items-center gap-10">
                        <Link to="#" className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">Programs</Link>
                        <Link to="#" className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">Mentorship</Link>
                        <Link to="#" className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">Roadmap</Link>
                        <Link to="#" className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">Impact</Link>
                    </div>
                    <Link to="/IncubateWithUs" className="bg-secondary text-white px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-primary transition-all duration-300">
                        Apply Now
                    </Link>
                </div>
            </nav>

            {/* Immersive Hero Section (Restored Previous Version) */}
            <Box sx={{ 
                height: '100vh',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                bgcolor: '#000',
                color: '#fff',
                overflow: 'hidden'
            }}>
                <motion.div 
                    style={{ 
                        position: 'absolute', 
                        top: 0, left: 0, right: 0, bottom: 0, 
                        opacity: 0.7,
                        scale: heroScale
                    }}
                >
                    <Box sx={{
                        position: 'absolute',
                        top: 0, left: 0, right: 0, bottom: 0,
                        backgroundImage: 'url("/assets/africa_program_hero.png")',
                        backgroundSize: 'cover',
                        backgroundPosition: { xs: 'top', md: 'center' },
                        filter: 'grayscale(1) brightness(0.6)'
                    }} />
                    <Box sx={{
                        position: 'absolute',
                        top: 0, left: 0, right: 0, bottom: 0,
                        background: 'radial-gradient(circle at 20% 50%, rgba(163, 13, 51, 0.15) 0%, transparent 50%)'
                    }} />
                </motion.div>

                <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 10 }}>
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} lg={8}>
                            <motion.div initial="hidden" animate="visible" variants={ fadeInUp }>
                                <Box className="pill-label" sx={{ mb: 4 }}>
                                    <Globe size={14} /> Global Impact Initiative
                                </Box>
                                <Typography variant="h1" className="editorial-title" sx={{ fontSize: { xs: '3.5rem', md: '7rem', lg: '9rem' }, lineHeight: 0.85, mb: 4, textTransform: 'uppercase' }}>
                                    Africa<br />
                                    <span style={{ color: '#A30D33' }}>Global Founders</span>
                                </Typography>
                                <Typography sx={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.7)', maxWidth: '600px', mb: 6, fontWeight: 500, lineHeight: 1.6 }}>
                                    A premier international entrepreneurship division empowering the next generation of African innovators with global startup exposure.
                                </Typography>
                                
                                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                                    <Button 
                                        variant="contained" 
                                        component={Link}
                                        to="/IncubateWithUs"
                                        sx={{ 
                                            bgcolor: '#A30D33', 
                                            px: 6, py: 2.5, 
                                            borderRadius: '100px', 
                                            fontWeight: 800,
                                            fontSize: '1rem',
                                            '&:hover': { bgcolor: '#fff', color: '#000', transform: 'scale(1.05)' },
                                            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                                        }}
                                    >
                                        JOIN THE COHORT
                                    </Button>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <Typography sx={{ fontSize: '0.9rem', fontWeight: 700, opacity: 0.6 }}>In Collaboration with</Typography>
                                        <Typography sx={{ fontWeight: 800, fontSize: '1rem' }}>Thrive Future Global</Typography>
                                    </Box>
                                </Stack>
                            </motion.div>
                        </Grid>
                    </Grid>
                </Container>

                <Box sx={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)', textAlign: 'center', opacity: 0.4 }}>
                    <Typography variant="overline" sx={{ fontWeight: 800, letterSpacing: '0.3em', mb: 2, display: 'block' }}>Scroll to Explore</Typography>
                    <Box sx={{ width: '1px', height: '60px', bgcolor: '#fff', mx: 'auto' }} />
                </Box>
            </Box>

            {/* High-Density Stats Bar */}
            <div className="bg-secondary text-white border-b border-outline">
                <div className="density-container grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
                    <div className="p-8 text-center">
                        <div className="text-3xl font-black text-primary mb-1">GLOBAL</div>
                        <div className="text-[10px] uppercase tracking-widest opacity-60">Ecosystem Reach</div>
                    </div>
                    <div className="p-8 text-center">
                        <div className="text-3xl font-black text-primary mb-1">INTENSIVE</div>
                        <div className="text-[10px] uppercase tracking-widest opacity-60">Startup Training</div>
                    </div>
                    <div className="p-8 text-center">
                        <div className="text-3xl font-black text-primary mb-1">ELITE</div>
                        <div className="text-[10px] uppercase tracking-widest opacity-60">Mentor Network</div>
                    </div>
                    <div className="p-8 text-center">
                        <div className="text-3xl font-black text-primary mb-1">SCALABLE</div>
                        <div className="text-[10px] uppercase tracking-widest opacity-60">Venture Models</div>
                    </div>
                </div>
            </div>

            {/* Support Grid: High Density */}
            <section className="border-b border-outline">
                <div className="grid grid-cols-1 lg:grid-cols-4">
                    {/* Section Header */}
                    <div className="lg:col-span-1 p-12 bg-surface-variant border-r border-outline flex flex-col justify-between">
                        <div>
                            <h2 className="font-['Manrope',_sans-serif] font-extrabold text-4xl text-secondary tracking-tighter leading-none mb-6">COMPREHENSIVE<br />SUPPORT</h2>
                            <p className="text-sm text-[#1A1A1A]/60 leading-relaxed uppercase font-bold tracking-tight">Bridging the gap between local innovation and global markets.</p>
                        </div>
                        <div className="text-stroke text-7xl font-black select-none">IMPACT</div>
                    </div>
                    {/* Support Items */}
                    <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2">
                        <div className="p-10 border-b md:border-b-0 md:border-r border-outline prestige-hover group transition-all duration-300">
                            <span className="material-symbols-outlined text-4xl mb-6 text-primary group-hover:text-white transition-colors">diversity_3</span>
                            <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Mentorship from Global Experts</h3>
                            <p className="text-sm opacity-70 leading-relaxed">Direct access to industry titans and seasoned entrepreneurs from the world's leading tech hubs like Silicon Valley and Bangalore.</p>
                        </div>
                        <div className="p-10 border-b border-outline prestige-hover group transition-all duration-300">
                            <span className="material-symbols-outlined text-4xl mb-6 text-primary group-hover:text-white transition-colors">model_training</span>
                            <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Startup Development</h3>
                            <p className="text-sm opacity-70 leading-relaxed">Structured intensive training focused on building sustainable business models and operational excellence at scale.</p>
                        </div>
                        <div className="p-10 md:border-r border-outline prestige-hover group transition-all duration-300">
                            <span className="material-symbols-outlined text-4xl mb-6 text-primary group-hover:text-white transition-colors">public</span>
                            <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Ecosystem Exposure</h3>
                            <p className="text-sm opacity-70 leading-relaxed">Cross-border opportunities to immerse in international tech environments and build valuable global networks.</p>
                        </div>
                        <div className="p-10 prestige-hover group transition-all duration-300">
                            <span className="material-symbols-outlined text-4xl mb-6 text-primary group-hover:text-white transition-colors">payments</span>
                            <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Investor Readiness</h3>
                            <p className="text-sm opacity-70 leading-relaxed">Prepare your venture for global fundraising with elite pitch coaching and comprehensive financial modeling workshops.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Objectives: Dense List */}
            <section className="border-b border-outline overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                    <div className="lg:col-span-5 p-12 lg:p-20 bg-secondary text-white relative">
                        <h2 className="font-['Manrope',_sans-serif] font-extrabold text-5xl tracking-tighter mb-10 leading-none">CORE<br /><span className="text-primary italic">OBJECTIVES</span></h2>
                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <span className="text-primary font-black">01.</span>
                                <p className="text-sm font-bold uppercase tracking-widest opacity-80">Strengthen Capabilities</p>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="text-primary font-black">02.</span>
                                <p className="text-sm font-bold uppercase tracking-widest opacity-80">Structured Training</p>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="text-primary font-black">03.</span>
                                <p className="text-sm font-bold uppercase tracking-widest opacity-80">Connect with Mentors</p>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="text-primary font-black">04.</span>
                                <p className="text-sm font-bold uppercase tracking-widest opacity-80">Global Market Prep</p>
                            </div>
                        </div>
                        <div className="mt-16 p-6 border border-white/20 inline-flex items-center gap-4">
                            <span className="material-symbols-outlined text-primary">handshake</span>
                            <span className="text-xs font-bold uppercase tracking-widest">Promoting India-Africa Collaboration</span>
                        </div>
                    </div>
                    <div className="lg:col-span-7 relative h-full min-h-[400px]">
                        <img 
                            alt="Collaboration" 
                            className="w-full h-full object-cover grayscale" 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuATK5wyUWxpaD-VxJJDY54WEE_M67ZkaQdMHuXq7AV8nm8-OESdfo32yvWbe9pqTBDdsOJCWr5XmCNP_L2d9V5apOU93vR36GqqWlk72FOUM9usHOFtzl4THMjV8bRDXM5F1to4BrPsjk5Pnnv7EiLDy5_JhzahK7jnswRhhU-SRoy37vW3dtvmkLOd1465FwIozJ5VgrkJQPbl6QOCdme-S756lflMJlVxYZP2L8TkjqV14_0nGS4AYUECinG0SJX7-t_AYwf-Auo0" 
                        />
                        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
                    </div>
                </div>
            </section>

            {/* Roadmap: Compact 3x2 Grid */}
            <section className="py-24 border-b border-outline">
                <div className="density-container px-6">
                    <div className="mb-16 text-center">
                        <h2 className="text-xs font-bold text-primary uppercase tracking-[0.4em] mb-4">The Scalable Journey</h2>
                        <h3 className="font-['Manrope',_sans-serif] font-extrabold text-5xl text-secondary tracking-tighter">PROGRAM ROADMAP</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-outline">
                        {/* Phase 01 */}
                        <div className="p-10 border-r border-b border-outline hover:bg-surface-variant transition-colors group">
                            <div className="text-5xl font-black text-stroke mb-6 group-hover:text-primary transition-colors">01</div>
                            <h4 className="text-lg font-bold uppercase tracking-tight mb-4">Entrepreneurship Fundamentals</h4>
                            <p className="text-sm text-[#1A1A1A]/70 leading-relaxed">Developing the foundational mindset, resilience, and creative ideation techniques needed for the journey.</p>
                        </div>
                        {/* Phase 02 */}
                        <div className="p-10 border-r border-b border-outline hover:bg-surface-variant transition-colors group">
                            <div className="text-5xl font-black text-stroke mb-6 group-hover:text-primary transition-colors">02</div>
                            <h4 className="text-lg font-bold uppercase tracking-tight mb-4">Business Model Development</h4>
                            <p className="text-sm text-[#1A1A1A]/70 leading-relaxed">Defining value propositions and segmenting target markets for maximum competitive advantage.</p>
                        </div>
                        {/* Phase 03 */}
                        <div className="p-10 border-r border-b border-outline hover:bg-surface-variant transition-colors group">
                            <div className="text-5xl font-black text-stroke mb-6 group-hover:text-primary transition-colors">03</div>
                            <h4 className="text-lg font-bold uppercase tracking-tight mb-4">Product Development</h4>
                            <p className="text-sm text-[#1A1A1A]/70 leading-relaxed">Building the MVP through rapid iteration, focusing intensely on achieving Product-Market Fit.</p>
                        </div>
                        {/* Phase 04 */}
                        <div className="p-10 border-r border-b border-outline hover:bg-surface-variant transition-colors group">
                            <div className="text-5xl font-black text-stroke mb-6 group-hover:text-primary transition-colors">04</div>
                            <h4 className="text-lg font-bold uppercase tracking-tight mb-4">Go-To-Market Strategy</h4>
                            <p className="text-sm text-[#1A1A1A]/70 leading-relaxed">Executing validation tests and scaling growth channels through data-driven marketing approaches.</p>
                        </div>
                        {/* Phase 05 */}
                        <div className="p-10 border-r border-b border-outline hover:bg-surface-variant transition-colors group">
                            <div className="text-5xl font-black text-stroke mb-6 group-hover:text-primary transition-colors">05</div>
                            <h4 className="text-lg font-bold uppercase tracking-tight mb-4">Startup Fundraising</h4>
                            <p className="text-sm text-[#1A1A1A]/70 leading-relaxed">Mastering the art of the pitch, valuation methodologies, and investor relationship management.</p>
                        </div>
                        {/* Phase 06 */}
                        <div className="p-10 border-r border-b border-outline hover:bg-surface-variant transition-colors group">
                            <div className="text-5xl font-black text-stroke mb-6 group-hover:text-primary transition-colors">06</div>
                            <h4 className="text-lg font-bold uppercase tracking-tight mb-4">Leadership & Team</h4>
                            <p className="text-sm text-[#1A1A1A]/70 leading-relaxed">Scaling culture, organizational structures, and high-performance team management for global scale.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA: Punchy & Professional */}
            <section className="bg-secondary text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] border border-primary rotate-45 translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] border border-primary rotate-45 -translate-x-1/2 translate-y-1/2"></div>
                </div>
                <div className="density-container px-6 relative z-10 text-center">
                    <h2 className="font-['Manrope',_sans-serif] font-extrabold text-5xl md:text-7xl tracking-tighter mb-8 leading-none">READY FOR<br /><span className="text-primary italic">GLOBAL VENTURES?</span></h2>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto mb-12">Join an elite network of visionary founders from Africa. Gain access to the global entrepreneurship ecosystem today.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/contact" className="bg-primary text-white px-12 py-5 font-bold text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-secondary transition-all text-center">Stay Connected</Link>
                        <Link to="#" className="border border-white text-white px-12 py-5 font-bold text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-secondary transition-all text-center">View Alumni</Link>
                    </div>
                </div>
            </section>

            {/* Footer
            <footer className="bg-white border-t border-outline">
                <div className="density-container px-6 py-12">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
                        <div className="max-w-xs">
                            <div className="text-2xl font-black tracking-tighter mb-4 text-secondary">VENTURE NEST</div>
                            <p className="text-xs text-[#1A1A1A]/60 uppercase tracking-widest font-bold">International Entrepreneurship Division</p>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-16">
                            <div>
                                <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-6">Directory</h5>
                                <ul className="space-y-3">
                                    <li><Link to="#" className="text-xs font-bold hover:text-primary transition-colors">Programs</Link></li>
                                    <li><Link to="#" className="text-xs font-bold hover:text-primary transition-colors">Mentorship</Link></li>
                                    <li><Link to="#" className="text-xs font-bold hover:text-primary transition-colors">Roadmap</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-6">Legal</h5>
                                <ul className="space-y-3">
                                    <li><Link to="#" className="text-xs font-bold hover:text-primary transition-colors">Privacy</Link></li>
                                    <li><Link to="#" className="text-xs font-bold hover:text-primary transition-colors">Terms</Link></li>
                                    <li><Link to="#" className="text-xs font-bold hover:text-primary transition-colors">Policy</Link></li>
                                </ul>
                            </div>
                            <div className="col-span-2 sm:col-span-1">
                                <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-6">Connect</h5>
                                <div className="flex gap-4">
                                    <Link to="#" className="w-8 h-8 border border-outline flex items-center justify-center hover:bg-primary hover:text-white transition-all"><span className="material-symbols-outlined text-sm">share</span></Link>
                                    <Link to="#" className="w-8 h-8 border border-outline flex items-center justify-center hover:bg-primary hover:text-white transition-all"><span className="material-symbols-outlined text-sm">alternate_email</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-8 border-t border-outline flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-[10px] text-[#1A1A1A]/40 uppercase font-bold tracking-[0.2em]">© 2024 AFRICA GLOBAL FOUNDERS. IGNITE PRESTIGE EDITION.</p>
                        <div className="flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest">
                            <span>IN COLLABORATION WITH</span>
                            <span className="text-secondary">THRIVE FUTURE GLOBAL</span>
                        </div>
                    </div>
                </div>
            </footer> */}
        </div>
    );
};

export default AfricaGlobalFounderProgram;
