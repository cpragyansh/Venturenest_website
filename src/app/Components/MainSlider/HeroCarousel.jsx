'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import axios from 'axios';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

const HeroCarousel = () => {
    const [slides, setSlides] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null);
    const AUTOPLAY_DELAY = 5000;

    useEffect(() => {
        const fetchSlides = async () => {
            try {
                const response = await axios.get('https://venturenest.onrender.com/images');
                const data = response.data[0];
                
                // Construct slide data matching user constraints
                // We pair laptop and mobile images by index
                const laptopImages = data?.laptop || [];
                const mobileImages = data?.mobile || [];
                
                const formattedSlides = laptopImages.map((laptop, index) => ({
                    id: laptop._id || index,
                    desktopImg: laptop.path,
                    mobileImg: mobileImages[index]?.path || laptop.path, // Fallback to desktop if mobile missing
                    link: '#' // Standard placeholder as per constraints
                }));
                
                setSlides(formattedSlides);
            } catch (error) {
                console.error('Error fetching carousel images:', error);
            }
        };
        fetchSlides();
    }, []);

    if (slides.length === 0) return null;

    return (
        <div className="relative w-full h-[50vh] md:h-[70vh] lg:h-[80vh] overflow-hidden group">
            {/* Custom Styles for Progress Animation */}
            <style jsx>{`
                @keyframes progressFill {
                    from { width: 0%; }
                    to { width: 100%; }
                }
                .animate-progress-fill {
                    animation: progressFill ${AUTOPLAY_DELAY}ms linear forwards;
                }
            `}</style>

            <Swiper
                modules={[Autoplay, EffectFade, Navigation]}
                effect="fade"
                speed={1000}
                autoplay={{
                    delay: AUTOPLAY_DELAY,
                    disableOnInteraction: false,
                }}
                loop={true}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className="w-full h-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative w-full h-full">
                            <picture>
                                <source media="(max-width: 768px)" srcSet={slide.mobileImg} />
                                <img 
                                    src={slide.desktopImg} 
                                    alt="Hero Slide" 
                                    className="w-full h-full object-cover"
                                />
                            </picture>
                            {/* Optional Gradient Overlay for readability */}
                            <div className="absolute inset-0 bg-black/20" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* DETACHED CONTROL BAR */}
            <div className="absolute bottom-8 right-4 md:bottom-12 md:right-12 z-20 flex items-center gap-8">
                
                {/* PROGRESS DOTS (BARS) */}
                <div className="flex items-center gap-3">
                    {slides.map((_, index) => (
                        <div 
                            key={index}
                            onClick={() => swiperRef.current?.slideToLoop(index)}
                            className={`relative h-1 overflow-hidden cursor-pointer transition-all duration-500 ease-in-out
                                ${activeIndex === index ? 'w-16 opacity-100' : 'w-10 opacity-50 bg-white/30'}`}
                        >
                            {/* Background Gray for active bar */}
                            {activeIndex === index && (
                                <div className="absolute inset-0 bg-white/30" />
                            )}
                            
                            {/* Inner Fill Animation */}
                            {activeIndex === index && (
                                <div 
                                    key={activeIndex} // Force remount on slide change
                                    className="h-full bg-[#e31e24] animate-progress-fill origin-left"
                                />
                            )}
                        </div>
                    ))}
                </div>

                {/* ARROWS */}
                <div className="flex items-center gap-4">
                    <button 
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="w-12 h-12 flex items-center justify-center rounded-full border border-white text-white transition-all duration-300 hover:bg-[#e31e24] hover:border-[#e31e24] group/btn"
                    >
                        <ArrowBackIosNewIcon sx={{ fontSize: 20 }} />
                    </button>
                    <button 
                        onClick={() => swiperRef.current?.slideNext()}
                        className="w-12 h-12 flex items-center justify-center rounded-full border border-white text-white transition-all duration-300 hover:bg-[#e31e24] hover:border-[#e31e24] group/btn"
                    >
                        <ArrowForwardIosIcon sx={{ fontSize: 20 }} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroCarousel;
