'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import axios from 'axios';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

/* ─────────────────────────────────────────────────────────
   INLINE STYLES — defined outside the component so they
   are never re-created on each render (CLS + INP fix).
───────────────────────────────────────────────────────── */
const wrapperStyle = {
    /* 
     * Explicit aspect-ratio locks the height BEFORE images
     * arrive, eliminating the layout-shift on first load (CLS).
     */
    position: 'relative',
    width: '100%',
    // 16:7 desktop ≈ 70vh-ish feel; 4:3 on mobile via CSS below
    aspectRatio: '16 / 7',
    overflow: 'hidden',
};

const slideInnerStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
};

const overlayStyle = {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.3) 100%)',
    pointerEvents: 'none',
};

const controlBarStyle = {
    position: 'absolute',
    bottom: '2rem',
    right: '1rem',
    zIndex: 20,
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
};

const progressDotsStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
};

const arrowsStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
};

/* CSS injected once for the progress animation & mobile ratio */
const CAROUSEL_CSS = `
@keyframes vn-progressFill {
    from { width: 0%; }
    to   { width: 100%; }
}
.vn-progress-fill {
    animation: vn-progressFill var(--vn-delay, 5001ms) linear forwards;
}

/* 
 * Explicit aspect-ratio on mobile so there is NO cumulative
 * layout shift regardless of image dimensions (CLS fix).
 */
.vn-carousel-wrapper {
    aspect-ratio: 16 / 7;
}
@media (max-width: 768px) {
    .vn-carousel-wrapper {
        aspect-ratio: 4 / 3;
    }
}

/* 
 * Ensure images fill the slide area without cropping subjects —
 * object-position: center top keeps faces / logos visible.
 */
.vn-carousel-wrapper .swiper,
.vn-carousel-wrapper .swiper-wrapper,
.vn-carousel-wrapper .swiper-slide {
    height: 100% !important;
    width: 100% !important;
}
.vn-slide-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    display: block;
    /* GPU-layer hint only for the visible hero image */
    will-change: auto;
}
`;

const AUTOPLAY_DELAY = 5001;

const HeroCarousel = () => {
    const [slides, setSlides] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null);

    useEffect(() => {
        const fetchSlides = async () => {
            try {
                const response = await axios.get(
                    (window.API_BASE_URL || 'https://venturenestbackend.cgcuniversity.in') + '/images'
                );
                const data = response.data[0];
                const laptopImages = data?.laptop || [];
                const mobileImages = data?.mobile || [];

                const formattedSlides = laptopImages.map((laptop, index) => ({
                    id: laptop._id || index,
                    desktopImg: laptop.path,
                    mobileImg: mobileImages[index]?.path || laptop.path,
                }));

                setSlides(formattedSlides);
            } catch (error) {
                console.error('Error fetching carousel images:', error);
            }
        };
        fetchSlides();
    }, []);

    /* Stable callbacks — avoids re-renders that worsen INP */
    const handleSwiper = useCallback((swiper) => {
        swiperRef.current = swiper;
    }, []);

    const handleSlideChange = useCallback((swiper) => {
        setActiveIndex(swiper.realIndex);
    }, []);

    const handlePrev = useCallback(() => swiperRef.current?.slidePrev(), []);
    const handleNext = useCallback(() => swiperRef.current?.slideNext(), []);
    const handleDotClick = useCallback((index) => {
        swiperRef.current?.slideToLoop(index);
    }, []);

    if (slides.length === 0) return null;

    return (
        <div className="vn-carousel-wrapper" style={wrapperStyle}>
            {/* Inject animation CSS exactly once */}
            <style>{CAROUSEL_CSS}</style>

            <Swiper
                modules={[Autoplay, EffectFade, Navigation]}
                effect="fade"
                speed={900}
                autoplay={{
                    delay: AUTOPLAY_DELAY,
                    disableOnInteraction: false,
                }}
                loop={true}
                onSwiper={handleSwiper}
                onSlideChange={handleSlideChange}
                style={{ width: '100%', height: '100%' }}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={slide.id}>
                        <div style={slideInnerStyle}>
                            <picture>
                                <source media="(max-width: 768px)" srcSet={slide.mobileImg} />
                                <img
                                    src={slide.desktopImg}
                                    alt={`VentureNest slide ${index + 1}`}
                                    className="vn-slide-img"
                                    /* 
                                     * LCP fix: first image loads eagerly at high priority.
                                     * All others are lazy-loaded so they don't compete
                                     * for bandwidth during initial page load.
                                     */
                                    loading={index === 0 ? 'eager' : 'lazy'}
                                    fetchpriority={index === 0 ? 'high' : 'low'}
                                    decoding={index === 0 ? 'sync' : 'async'}
                                    width="1600"
                                    height="700"
                                />
                            </picture>
                            <div style={overlayStyle} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* ── DETACHED CONTROL BAR ── */}
            <div style={controlBarStyle}>
                {/* Progress Bars */}
                <div style={progressDotsStyle}>
                    {slides.map((_, index) => (
                        <div
                            key={index}
                            onClick={() => handleDotClick(index)}
                            style={{
                                position: 'relative',
                                height: '4px',
                                width: activeIndex === index ? '64px' : '40px',
                                overflow: 'hidden',
                                cursor: 'pointer',
                                opacity: activeIndex === index ? 1 : 0.5,
                                backgroundColor: 'rgba(255,255,255,0.3)',
                                transition: 'width 0.4s ease, opacity 0.4s ease',
                                borderRadius: '2px',
                            }}
                        >
                            {activeIndex === index && (
                                <div
                                    key={activeIndex}
                                    className="vn-progress-fill"
                                    style={{
                                        '--vn-delay': `${AUTOPLAY_DELAY}ms`,
                                        height: '100%',
                                        width: 0,
                                        backgroundColor: '#e31e24',
                                        borderRadius: '2px',
                                    }}
                                />
                            )}
                        </div>
                    ))}
                </div>

                {/* Arrow Buttons */}
                <div style={arrowsStyle}>
                    <button
                        onClick={handlePrev}
                        aria-label="Previous slide"
                        style={{
                            width: '44px',
                            height: '44px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '50%',
                            border: '1px solid rgba(255,255,255,0.8)',
                            background: 'transparent',
                            color: 'white',
                            cursor: 'pointer',
                            transition: 'background 0.25s, border-color 0.25s',
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = '#e31e24'}
                        onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                    >
                        <ArrowBackIosNewIcon sx={{ fontSize: 18 }} />
                    </button>
                    <button
                        onClick={handleNext}
                        aria-label="Next slide"
                        style={{
                            width: '44px',
                            height: '44px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '50%',
                            border: '1px solid rgba(255,255,255,0.8)',
                            background: 'transparent',
                            color: 'white',
                            cursor: 'pointer',
                            transition: 'background 0.25s, border-color 0.25s',
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = '#e31e24'}
                        onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                    >
                        <ArrowForwardIosIcon sx={{ fontSize: 18 }} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroCarousel;
