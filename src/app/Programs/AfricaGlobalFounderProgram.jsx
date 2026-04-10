"use client";
import React, { useEffect } from "react";
import { Box, Typography, Container, Grid, Button, Paper, Stack } from "@mui/material";
import { Globe, Users, Target, BookOpen, Award, Rocket, ShieldCheck, Zap, Handshake, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

const AfricaGlobalFounderProgram = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { scrollYProgress } = useScroll();
    const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);

    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const sections = [
        {
            title: "Program Overview",
            icon: <Globe size={28} />,
            color: "#A30D33",
            content: "The VentureNest – Africa Global Founder Program is an international entrepreneurship development initiative designed to empower emerging entrepreneurs and startup founders from the African continent.",
            description: "Providing structured mentorship, entrepreneurial training, and global startup ecosystem exposure to founders who aspire to build scalable and impactful ventures.",
            points: [
                { text: "Mentorship from global experts", icon: <Users size={18} />, color: "#A30D33", bgImage: "/assets/support_bg/mentorship.png" },
                { text: "Startup development training", icon: <BookOpen size={18} />, color: "#1A4880", bgImage: "/assets/support_bg/training.png" },
                { text: "Cross-border ecosystem exposure", icon: <Globe size={18} />, color: "#A30D33", bgImage: "/assets/support_bg/ecosystem.png" },
                { text: "Investor readiness support", icon: <Zap size={18} />, color: "#1A4880", bgImage: "/assets/support_bg/investor.png" },
                { text: "International networking opportunities", icon: <Handshake size={18} />, color: "#A30D33", bgImage: "/assets/support_bg/networking.png" }
            ]
        },
        {
            title: "Program Objectives",
            icon: <Target size={28} />,
            color: "#1A4880",
            content: "We seek to bridge the gap between innovation and market leadership through a multi-dimensional approach.",
            points: [
                { text: "Strengthen entrepreneurial capabilities among founders from Africa", icon: <Zap size={20} />, color: "#A30D33" },
                { text: "Provide structured training on startup development and scaling", icon: <BookOpen size={20} />, color: "#1A4880" },
                { text: "Enable founders to connect with mentors and ecosystem leaders", icon: <Users size={20} />, color: "#A30D33" },
                { text: "Prepare startups for global markets and investment opportunities", icon: <Target size={20} />, color: "#1A4880" },
                { text: "Promote cross-border collaboration between India and Africa", icon: <Globe size={20} />, color: "#A30D33" }
            ]
        }
    ];

    const curriculum = [
        {
            title: "Entrepreneurship Fundamentals",
            icon: <BookOpen size={20} />,
            modules: ["Startup ideation", "Opportunity identification", "Entrepreneurial mindset"]
        },
        {
            title: "Business Model Development",
            icon: <Target size={20} />,
            modules: ["Value proposition design", "Business model frameworks", "Customer segmentation"]
        },
        {
            title: "Product Development",
            icon: <Rocket size={20} />,
            modules: ["MVP development", "Product-market fit strategies", "Product iteration"]
        },
        {
            title: "Go-To-Market Strategy",
            icon: <Globe size={20} />,
            modules: ["Market validation", "Customer acquisition", "Growth planning"]
        },
        {
            title: "Startup Fundraising",
            icon: <Zap size={20} />,
            modules: ["Investor pitch decks", "Valuation fundamentals", "Engagement strategies"]
        },
        {
            title: "Leadership and Team Building",
            icon: <Users size={20} />,
            modules: ["Founder leadership", "Team management", "Startup culture"]
        }
    ];

    return (
        <Box sx={{ bgcolor: '#fff', minHeight: '100vh', overflowX: 'hidden' }}>
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');
                    
                    :root {
                        --brand-red: #A30D33;
                        --brand-blue: #1A4880;
                        --bg-dark: #0A0A0A;
                        --card-bg: rgba(255, 255, 255, 0.05);
                        --radius-lg: 32px;
                        --radius-md: 16px;
                    }

                    .editorial-title {
                        font-family: 'Plus Jakarta Sans', sans-serif;
                        font-weight: 800;
                        letter-spacing: -0.04em;
                    }

                    .modern-card {
                        background: var(--card-bg) !important;
                        backdrop-filter: blur(20px);
                        border: 1px solid rgba(255, 255, 255, 0.08) !important;
                        border-radius: var(--radius-lg) !important;
                        transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                        position: relative;
                        overflow: hidden;
                    }

                    .modern-card:hover {
                        transform: translateY(-10px);
                        border-color: var(--brand-red) !important;
                        box-shadow: 0 40px 80px rgba(0,0,0,0.4);
                        background: rgba(255, 255, 255, 0.08) !important;
                    }

                    .pill-label {
                        background: var(--brand-red);
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
                    }

                    .glass-card {
                        background: rgba(255, 255, 255, 0.95) !important;
                        backdrop-filter: blur(20px);
                        border: 1px solid rgba(0,0,0,0.05) !important;
                        border-radius: var(--radius-lg) !important;
                        box-shadow: 0 20px 40px rgba(0,0,0,0.05) !important;
                        position: relative;
                        overflow: hidden;
                    }

                    .blueprint-bg {
                        position: absolute;
                        top: 0; left: 0; right: 0; bottom: 0;
                        background-image: radial-gradient(rgba(0,0,0,0.05) 1px, transparent 1px);
                        background-size: 30px 30px;
                        pointer-events: none;
                        opacity: 0.5;
                    }

                    .curriculum-grid {
                        display: grid;
                        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
                        gap: 24px;
                    }

                    .line-draw {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 0%;
                        height: 4px;
                        background: var(--brand-red);
                        transition: width 0.6s ease;
                    }

                    .modern-card:hover .line-draw {
                        width: 100%;
                    }
                `}
            </style>            {/* Immersive Hero Section */}
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
>            {/* Redesigned Overview & Objectives Section */}
            <Box sx={{ py: 15, bgcolor: '#F9F9F9' }}>
                <Container maxWidth="xl">
                    <Grid container spacing={4} sx={{ mb: 15, alignItems: 'center' }}>
                        <Grid item xs={12} lg={12}>
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                                <Box className="pill-label" sx={{ mb: 4, bgcolor: '#1A4880' }}>
                                    <ShieldCheck size={14} /> Comprehensive Support
                                </Box>
                                <Typography variant="h2" className="editorial-title" sx={{ fontSize: { xs: '3rem', md: '5rem' }, mb: 4, textTransform: 'uppercase' }}>
                                    Global Impact <span style={{ color: '#A30D33' }}>Division</span>
                                </Typography>
                                <Typography sx={{ fontSize: '1.5rem', lineHeight: 1.6, color: '#444', mb: 8, maxWidth: '1000px' }}>
                                    An international entrepreneurship development initiative designed to empower emerging founders from the African continent by bridging the gap between local innovation and global markets.
                                </Typography>
                                
                                <Grid container spacing={3}>
                                    {sections[0].points.map((pt, i) => (
                                        <Grid item xs={12} sm={6} md={4} key={i}>
                                            <Box sx={{ 
                                                p: 6, 
                                                minHeight: '260px',
                                                background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url(${pt.bgImage})`, 
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                borderRadius: '32px', 
                                                border: '1px solid',
                                                borderColor: 'rgba(255,255,255,0.1)', 
                                                height: '100%', 
                                                transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)', 
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'flex-end',
                                                gap: 2.5,
                                                position: 'relative',
                                                overflow: 'hidden',
                                                cursor: 'pointer',
                                                '&:hover': { 
                                                    transform: 'translateY(-10px) scale(1.02)', 
                                                    borderColor: pt.color, 
                                                    boxShadow: `0 30px 60px ${pt.color}25`,
                                                    background: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.5)), url(${pt.bgImage})`,
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'center',
                                                    '& .glow-effect': { opacity: 1 }
                                                } 
                                            }}>
                                                <Box className="glow-effect" sx={{ 
                                                    position: 'absolute', 
                                                    top: -20, left: -20, 
                                                    width: 150, height: 150, 
                                                    background: `radial-gradient(circle, ${pt.color}40 0%, transparent 70%)`,
                                                    filter: 'blur(30px)',
                                                    opacity: 0,
                                                    transition: 'opacity 0.4s ease',
                                                    pointerEvents: 'none'
                                                }} />

                                                <Box sx={{ position: 'relative', zIndex: 1 }}>
                                                    <Typography sx={{ fontWeight: 800, fontSize: '1.25rem', color: '#fff', mb: 2, lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                                                        {pt.text}
                                                    </Typography>
                                                    <Box sx={{ width: '40px', height: '4px', bgcolor: pt.color, borderRadius: '4px' }} />
                                                </Box>
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                            </motion.div>
                        </Grid>
                    </Grid>

                    {/* Objectives Bento Grid */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                        <Paper className="glass-card" sx={{ p: { xs: 6, md: 10 }, bgcolor: '#fff !important' }}>
                            <Box className="blueprint-bg" />
                            <Grid container spacing={8} sx={{ position: 'relative', zIndex: 1 }}>
                                <Grid item xs={12} md={4}>
                                    <Box className="pill-label" sx={{ mb: 4 }}>
                                        <Target size={14} /> Program Goals
                                    </Box>
                                    <Typography variant="h2" className="editorial-title" sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, mb: 4 }}>
                                        Core<br /><span style={{ color: '#1A4880' }}>Objectives</span>
                                    </Typography>
                                    <Typography sx={{ color: '#666', fontSize: '1.2rem', lineHeight: 1.6 }}>
                                        We seek to bridge the gap between innovation and market leadership through a multi-dimensional approach to startup scaling.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={8}>
                                    <Grid container spacing={2}>
                                        {sections[1].points.map((pt, i) => (
                                            <Grid item xs={12} sm={6} key={i}>
                                                <Box sx={{ 
                                                    p: 4, 
                                                    background: `linear-gradient(135deg, ${pt.color}05 0%, #fff 100%)`,
                                                    borderRadius: '32px', 
                                                    border: '1px solid',
                                                    borderColor: `${pt.color}15`, 
                                                    transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)', 
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'center',
                                                    gap: 2,
                                                    height: '100%',
                                                    position: 'relative',
                                                    overflow: 'hidden',
                                                    '&:hover': { 
                                                        borderColor: pt.color, 
                                                        transform: 'translateY(-10px)',
                                                        boxShadow: `0 30px 60px ${pt.color}12`,
                                                    } 
                                                }}>
                                                    {/* Background Glow */}
                                                    <Box sx={{ 
                                                        position: 'absolute', 
                                                        top: -20, right: -20, 
                                                        width: 150, height: 150, 
                                                        background: `radial-gradient(circle, ${pt.color}10 0%, transparent 70%)`,
                                                        filter: 'blur(30px)',
                                                        pointerEvents: 'none'
                                                    }} />

                                                    <Typography sx={{ fontWeight: 800, fontSize: '1.2rem', color: '#1a1a1a', lineHeight: 1.4, letterSpacing: '-0.02em', position: 'relative', zIndex: 1 }}>
                                                        {pt.text}
                                                    </Typography>

                                                    <Box sx={{ 
                                                        position: 'absolute', 
                                                        bottom: 0, left: 0, 
                                                        width: '4px', height: '0', 
                                                        bgcolor: pt.color,
                                                        transition: 'height 0.4s ease'
                                                    }} className="hover-line" />
                                                </Box>
                                                <style>{`
                                                    .MuiBox-root:hover .hover-line { height: 100% !important; }
                                                `}</style>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </motion.div>
                </Container>
            </Box>
>            {/* Curriculum Roadmap Redesign */}
            <Box sx={{ bgcolor: '#000', color: '#fff', py: 20 }}>
                <Container maxWidth="xl">
                    <motion.div 
                        initial="hidden" 
                        whileInView="visible" 
                        viewport={{ once: true }} 
                        variants={fadeInUp}
                        style={{ textAlign: 'center', marginBottom: '100px' }}
                    >
                        <Box className="pill-label" sx={{ mb: 4 }}>
                            <Rocket size={14} /> Full Program Cycle
                        </Box>
                        <Typography variant="h2" className="editorial-title" sx={{ fontSize: { xs: '3.5rem', md: '6rem' }, mt: 2, textTransform: 'uppercase' }}>
                            The Roadmap to <span style={{ color: '#A30D33' }}>Scale</span>
                        </Typography>
                    </motion.div>

                    <Box className="curriculum-grid">
                        {curriculum.map((item, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <Box className="modern-card" sx={{ p: 6, height: '100%', display: 'flex', flexDirection: 'column' }}>
                                    <Box className="line-draw" />
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 6 }}>
                                        <Box sx={{ color: '#A30D33', transform: 'scale(1.5)', transformOrigin: 'left' }}>{item.icon}</Box>
                                        <Typography variant="h4" sx={{ 
                                            fontFamily: 'Plus Jakarta Sans', 
                                            fontWeight: 800, 
                                            opacity: 0.1, 
                                            fontSize: '4rem',
                                            lineHeight: 1
                                        }}>
                                            {(idx + 1).toString().padStart(2, '0')}
                                        </Typography>
                                    </Box>
                                    <Typography variant="h5" sx={{ fontWeight: 800, mb: 4, letterSpacing: '-0.02em', textTransform: 'uppercase' }}>
                                        {item.title}
                                    </Typography>
                                    <Stack spacing={2} sx={{ mt: 'auto' }}>
                                        {item.modules.map((m, i) => (
                                            <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                                <Box sx={{ w: 6, h: 6, bgcolor: '#A30D33', borderRadius: '50%' }} />
                                                <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', fontWeight: 500 }}>{m}</Typography>
                                            </Box>
                                        ))}
                                    </Stack>
                                </Box>
                            </motion.div>
                        ))}
                    </Box>
                </Container>
            </Box>

            {/* Final Call to Action */}
            <Box sx={{ py: 20, textAlign: 'center' }}>
                <Container maxWidth="md">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }} 
                        whileInView={{ opacity: 1, scale: 1 }} 
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Handshake size={80} color="#A30D33" style={{ marginBottom: '32px' }} />
                            <Typography variant="h2" className="editorial-title" sx={{ mb: 4 }}>
                                Ready for Global <span style={{ color: '#A30D33' }}>Ventures?</span>
                            </Typography>
                            <Typography sx={{ color: '#666', fontSize: '1.2rem', mb: 8 }}>
                                Join a network of visionary founders from Africa and gain access to the global entrepreneurship ecosystem.
                            </Typography>
                            <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} justifyContent="center">
                                <Button 
                                    variant="contained" 
                                    component={Link}
                                    to="/IncubateWithUs"
                                    sx={{ bgcolor: '#A30D33', px: 8, py: 2.5, fontWeight: 800, borderRadius: 0 }}
                                >
                                    START APPLICATION
                                </Button>
                                <Button 
                                    variant="outlined" 
                                    component={Link}
                                    to="/contact"
                                    sx={{ color: '#000', borderColor: '#000', px: 8, py: 2.5, fontWeight: 800, borderRadius: 0, '&:hover': { bgcolor: '#000', color: '#fff' } }}
                                >
                                    GET IN TOUCH
                                </Button>
                            </Stack>
                        </Box>
                    </motion.div>
                </Container>
            </Box>
        </Box>
    );
};

export default AfricaGlobalFounderProgram;

