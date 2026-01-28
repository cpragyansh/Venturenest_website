// // "use client"

import React, { useEffect, useState } from 'react';

import HeroSection from '../HeroSection/HeroSection';
// import { scrollanimation } from './scrollAnimation';
import "./dashboard.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

import axios from 'axios'; // Import axios for API calls
import HeroCarousel from '../MainSlider/HeroCarousel';
import PartnersSection from '../partners_slider/partners_slider';
import NumberSection from '../Numbers_section/Numbers_section';
import StarredEvents from '../StarredEvents/StarredEvents';
import InspirationalStories from '../Inspirational_stories/Inspirational_stories';
import HowWeSupportYou from '../HowWeWork/HowWeWork';
import Video from '../VideoCorosuel/Video';
import { motion, useSpring, useTransform, useMotionValue } from 'framer-motion';
import VentureNestIntro from '../../New_components/Component_2/Component_2';
import { Box, Typography } from '@mui/material';

// --- Colors for Background ---
const COLORS = {
    red: "#a40f19",
    blue: "#1b4880",
    grey: "#515257",
    lightGrey: "#f4f6f8",
    white: "#ffffff",
};

// --- Background Elements ---
const Bubble = ({ color, size, top, left, right, bottom, duration, delay }) => (
    <Box
        component={motion.div}
        animate={{
            y: [0, -30, 0],
            x: [0, 15, -15, 0],
            scale: [1, 1.1, 1],
        }}
        transition={{
            duration: duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay,
        }}
        sx={{
            position: "absolute",
            top: top, left: left, right: right, bottom: bottom,
            width: size, height: size,
            borderRadius: "50%",
            bgcolor: color,
            opacity: 0.05,
            zIndex: 0,
            pointerEvents: "none",
        }}
    />
);

const FloatingSquare = ({ color, size, top, left, right, bottom, duration, delay }) => (
    <Box
        component={motion.div}
        animate={{
            rotate: [0, 90, 180, 270, 360],
            y: [0, -20, 0],
        }}
        transition={{
            duration: duration,
            repeat: Infinity,
            ease: "linear",
            delay: delay,
        }}
        sx={{
            position: "absolute",
            top: top, left: left, right: right, bottom: bottom,
            width: size, height: size,
            border: `2px solid ${color}`,
            opacity: 0.08,
            zIndex: 0,
            pointerEvents: "none",
            borderRadius: "8px",
        }}
    />
);

const FloatingTriangle = ({ color, size, top, left, right, bottom, duration, delay }) => (
    <Box
        component={motion.div}
        animate={{
            rotate: [0, -10, 10, 0],
            y: [0, 15, 0],
        }}
        transition={{
            duration: duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay,
        }}
        sx={{
            position: "absolute",
            top: top, left: left, right: right, bottom: bottom,
            width: 0, height: 0,
            borderLeft: `${size / 2}px solid transparent`,
            borderRight: `${size / 2}px solid transparent`,
            borderBottom: `${size}px solid ${color}`,
            opacity: 0.08,
            zIndex: 0,
            pointerEvents: "none",
        }}
    />
);

const MagneticButton = ({ children, className }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 150 };
    const dx = useSpring(mouseX, springConfig);
    const dy = useSpring(mouseY, springConfig);

    const handleMouseMove = (e) => {
        const { clientX, clientY, currentTarget } = e;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        mouseX.set(x * 0.4);
        mouseY.set(y * 0.4);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: dx, y: dy }}
        >
            {children}
        </motion.div>
    );
};
// import Slider from 'react-slick';
// import Slider from '../swiperslider/swiperjs';

const Dashboard = () => {

    const [starredEvents, setStarredEvents] = useState([]); // State to hold starred events
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [starredStories, setStarredStories] = useState([]);


    // / Function to fetch starred events
    const fetchStarredEvents = async () => {
        try {
            const response = await axios.get('https://venture-nest-backend.onrender.com/starred-events'); // Adjust the API path if necessary
            setStarredEvents(response.data);
        } catch (err) {
            console.error("Error fetching starred events:", err);
            setError('Failed to load events.');
        } finally {
            setLoading(false);
        }
    };
    const fetchStarredStories = async () => {
        try {
            const response = await axios.get('https://venture-nest-backend.onrender.com/starred-stories');
            setStarredStories(response.data);  // Assuming the response contains the array of starred stories
        } catch (error) {
            console.error("Error fetching starred stories:", error);
        }

    };
    // Fetch starred events when the Component mounts
    useEffect(() => {
        fetchStarredStories();
        fetchStarredEvents(); // Fetch events from the backend
        // scrollanimation();
        // Initialize the scroll animation when the Component mounts
    }, []);





    return (
        <div className="home-top-main-div">

            <div className="md:mb-8" >
                {/* <HeroSection /> */}
                {/* <Swiperjs /> */}
                {/* <Slider/> */}
                {/* <Video/> */}
                {/* <h1 className='dashboard-image-corosuel-text'>Innovation . Entrepreneurship . Growth</h1> */}
                <HeroCarousel />
            </div>

            <div className="welcome-container" data-aos="fade-up">
                <div className="vn-title-icon-placeholder">
                    <img src="/assets/section-2-logo.png" alt="Nest Logo" className='new-section-2-mian-head-logo-img-direct' />
                </div>
                <h1 className="welcome-text">
                    <span className="welcome-blue">Welcome to</span>
                    <span className="welcome-red"> Venturenest</span>
                </h1>
            </div>

            <VentureNestIntro />





            {/* <div className="section-2-bg" data-aos="fade-up" data-aos-duration="1200" data-aos-easing="ease-out">
    <div className="section-2-inner-part">
        <div className="section-2-inner-text" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300" data-aos-easing="ease-in-out">
            <h1 className="section-2-inner-part-heading" data-aos="zoom-in" data-aos-duration="800" data-aos-easing="ease-in-out">
                <img src="assets/section-2-logo.png" alt="Logo"  className='section-2-mian-head-logo-img-direct'/>Welcome to CGC VentureNest </h1>
            <div className="section-2-para-animation">
                <p className="section-2-para section-para-upper" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-easing="ease-out">
                CGC VentureNest is the premier business incubator at CGC University , designed to empower innovation, entrepreneurship, and sustainable business growth. As a dynamic startup hub, VentureNest provides a thriving ecosystem where aspiring entrepreneurs and early-stage startups can transform groundbreaking ideas into successful ventures.
                </p>
                <br></br>
                <p className="section-2-para" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="700" data-aos-easing="ease-out">
                As a flagship initiative of CGC University, CGC VentureNest is dedicated to fostering an entrepreneurial culture among students, faculty and the broader community. Our incubator offers cutting-edge infrastructure, personalized mentorship from industry experts, strong networking opportunities and access to investors and funding resources. Whether you're launching a tech startup, social enterprise, or scalable business model, CGC VentureNest accelerates your journey from concept to market success.                </p>
            </div>
        </div>
        <div 
        
        
        >
      <video
       src="assets/section-1-video.mp4"className="cgc-venture-img"
        autoPlay
        loop
        muted
        playsInline
      
      />
    </div>
    </div>
</div> */}


            {/* <div className="section-3-vv">
            <img src="assets/section-3-bg-img.jpg" alt="" className="section-3-bg-img" />
                     <div className="section-3-text-overlay">
            <span className='keyhightlight-animation'>
                <h1 className="section-3-heading"><img className="section-3-h1-logo" src="assets/highlight.svg" alt="" />KEY HIGHLIGHTS</h1>
                <hr className="hr-below-section-3-heading" />
                <h1 className="section-3-heading-2">Technology Business Incubator (TBI)</h1>
                <p className="section-3-para"> dolor sit amet consectetur adipisicing elit. Iusto magnam nihil blanditiis similique odit excepturi quis cumque a minus voluptate. sit amet consectetur adipisicing elit. Quisquam iure impedit neque excepturi libero in sint blanditiis distinctio optio ad!</p>
            </span>
            </div>

        </div> */}
            {/* <div className="section-3-vv" data-aos="fade-in" data-aos-duration="1200" data-aos-easing="ease-out">
    <div className="section-3-text-overlay" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-easing="ease-out">
        <span className="keyhighlight-animation">
            <h1 className="section-3-heading" data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out">
                <img className="section-3-h1-logo" src="assets/highlight.svg" alt="Highlight Logo" />
                KEY HIGHLIGHTS
            </h1>
            <hr className="hr-below-section-3-heading" data-aos="fade-left" data-aos-duration="800" data-aos-easing="ease-out" />
            <h1 className="section-3-heading-2" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200" data-aos-easing="ease-out">Technology Business Incubator (TBI)</h1>
            <p className="section-3-para" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400" data-aos-easing="ease-in-out">
            Recognized as a Technology Business Incubator (TBI), CGC VentureNest offers specialized support and advanced infrastructure for tech-driven startups. Our TBI status enables startups to access exclusive government grants, funding schemes and a wide range of benefits designed to accelerate innovation and growth.
            </p>
        </span>
    </div>
</div> */}


            {/* <div className="section-4-main">
            <h1><img src="" alt="" />HOW WE HELP YOU </h1>
            <div className="section-4-all-fields" id="section-4-part-1">
                <div className="section-4-field-1">
                    <h1 className="section-r-program-heading"><img className="section-4-program-images" src="assets/section-4-program-1-img.png" alt="" />INCUBATION PROGRAMS</h1>
                    <p className="section-4-program-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quasi obcaecati error perspiciatis consequatur architecto nesciunt animi maiores sint nam?</p>
                </div>
                <div className="section-4-field-1">
                    <h1 className="section-r-program-heading"><img className="section-4-program-images" src="assets/section-4-program-1-img.png" alt="" />INCUBATION PROGRAMS</h1>
                    <p className="section-4-program-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quasi obcaecati error perspiciatis consequatur architecto nesciunt animi maiores sint nam?</p>
                </div>
                <div className="section-4-field-1">
                    <h1 className="section-r-program-heading"><img className="section-4-program-images" src="assets/section-4-program-1-img.png" alt="" />INCUBATION PROGRAMS</h1>
                    <p className="section-4-program-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quasi obcaecati error perspiciatis consequatur architecto nesciunt animi maiores sint nam?</p>
                </div>

            </div>
            <div className="section-4-all-fields" id="section-4-part-2">
                <div className="section-4-field-1">
                    <h1 className="section-r-program-heading"><img className="section-4-program-images" src="assets/section-4-program-1-img.png" alt="" />INCUBATION PROGRAMS</h1>
                    <p className="section-4-program-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quasi obcaecati error perspiciatis consequatur architecto nesciunt animi maiores sint nam?</p>
                </div>
                <div className="section-4-field-1">
                    <h1 className="section-r-program-heading"><img className="section-4-program-images" src="assets/section-4-program-1-img.png" alt="" />INCUBATION PROGRAMS</h1>
                    <p className="section-4-program-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quasi obcaecati error perspiciatis consequatur architecto nesciunt animi maiores sint nam?</p>
                </div>
                <div className="section-4-field-1">
                    <h1 className="section-r-program-heading"><img className="section-4-program-images" src="assets/section-4-program-1-img.png" alt="" />INCUBATION PROGRAMS</h1>
                    <p className="section-4-program-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quasi obcaecati error perspiciatis consequatur architecto nesciunt animi maiores sint nam?</p>
                </div>

            </div>
        </div> */}
            {/* <div className="section-4-main text-center py-10" data-aos="fade-in" data-aos-duration="1200" data-aos-easing="ease-out">
    <h1 className="section-4-heading text-4xl font-bold mb-8 flex items-center justify-center" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-out">
        <img src="assets/helpyou-section-2-img.svg" alt="" className="inline-block w-24 h-24 mr-3 help-you-section-4-head-img" />
        HOW WE SUPPORT YOU
    </h1>

    <div className="section-4-all-fields grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="section-4-field-1 p-6 bg-white rounded-lg shadow-lg border-4 border-transparent transform transition-transform hover:scale-105  hover:shadow-xl" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200" data-aos-easing="ease-out">
            <img className="section-4-program-images w-24 h-16 mr-4" src="assets/su-1.svg" alt="" />
            <h1 className="section-r-program-heading font-semibold mb-4">
                INCUBATION PROGRAMS
            </h1>
            <p className="section-4-program-para ">Tailored programs designed to guide startups through every stage of their journey, from ideation to market entry and growth</p>
        </div>

        <div className="section-4-field-1 p-6 bg-white rounded-lg shadow-lg border-4 border-transparent transform transition-transform hover:scale-105 h hover:shadow-xl" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400" data-aos-easing="ease-out">
            <img className="section-4-program-images w-24 h-16 mr-4" src="assets/su-2.svg" alt="" />
            <h1 className="section-r-program-heading text-xl font-semibold mb-4 flex items-center">
                MENTORSHIP PROGRAMS
            </h1>
            <p className="section-4-program-para ">Expert guidance and mentorship from seasoned industry professionals, entrepreneurs, and subject matter experts</p>
        </div>

        <div className="section-4-field-1 p-6 bg-white rounded-lg shadow-lg border-4 border-transparent transform transition-transform hover:scale-105 hover:shadow-xl" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="600" data-aos-easing="ease-out">
            <img className="section-4-program-images w-24 h-16 mr-4" src="assets/su-3.svg" alt="" />
            <h1 className="section-r-program-heading flex items-center">
                Infrastructure & Facilities
            </h1>
            <p className="section-4-program-para  mt-3">State-of-the-art workspace, laboratories, prototyping facilities, and access to cutting-edge technologies</p>
        </div>

        <div className="section-4-field-1 p-6 bg-white rounded-lg shadow-lg border-4 border-transparent transform transition-transform hover:scale-105 ho hover:shadow-xl" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="800" data-aos-easing="ease-out">
            <img className="section-4-program-images w-24 h-16 mr-4" src="assets/su-4.svg" alt="" />
            <h1 className="section-r-program-heading font-semibold mb-4 flex items-center">
                Funding Assistance
            </h1>
            <p className="section-4-program-para ">Assistance in securing funding through investor connections, pitch events, and access to venture capital firms and angel investors</p>
        </div>

        <div className="section-4-field-1 p-6 bg-white rounded-lg shadow-lg border-4 border-transparent transform transition-transform hover:scale-105 ho hover:shadow-xl" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="1000" data-aos-easing="ease-out">
            <img className="section-4-program-images w-24 h-16 mr-4" src="assets/su-5.svg" alt="" />
            <h1 className="section-r-program-heading font-semibold mb-4 flex items-center">
                Networking Opportunities
            </h1>
            <p className="section-4-program-para ">Regular networking events, workshops, seminars, and industry collaborations to foster connections and partnerships</p>
        </div>

        <div className="section-4-field-1 p-6 bg-white rounded-lg shadow-lg border-4 border-transparent transform transition-transform hover:scale-105  hover:shadow-xl" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="1200" data-aos-easing="ease-out">
            <img className="section-4-program-images w-24 h-16 mr-4" src="assets/su-6.svg" alt="" />
            <h1 className="section-r-program-heading font-semibold mb-4 flex items-center">
                Legal & Regulatory Support
            </h1>
            <p className="section-4-program-para ">Guidance on legal and regulatory compliance, intellectual property rights, company registration, and business incorporation</p>
        </div>

        <div className="section-4-field-1 p-6 bg-white rounded-lg shadow-lg border-4 border-transparent transform transition-transform hover:scale-105  hover:shadow-xl" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="1400" data-aos-easing="ease-out">
            <img className="section-4-program-images w-24 h-16 mr-4" src="assets/validation.svg" alt="" />
            <h1 className="section-r-program-heading font-semibold mb-4 flex items-center">
                Market Access & Validation
            </h1>
            <p className="section-4-program-para ">Support in market research, validation, product development, and access to potential customers and markets</p>
        </div>

        <div className="section-4-field-1 p-6 bg-white rounded-lg shadow-lg border-4 border-transparent transform transition-transform hover:scale-105  hover:shadow-xl" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="1600" data-aos-easing="ease-out">
            <img className="section-4-program-images w-24 h-16 mr-4" src="assets/alumni.svg" alt="" />
            <h1 className="section-r-program-heading font-semibold mb-4 flex items-center">
                Alumni Support
            </h1>
            <p className="section-4-program-para ">Continued support and guidance for alumni startups, including access to resources, mentorship, and networking opportunities</p>
        </div>
    </div>
</div> */}

            <HowWeSupportYou />



            {/* <div className="partners-section" data-aos="fade-up" data-aos-duration="1000">

    <div className="partners-section-text">
       
        <div className="partners-images-text-div">
            <div className="partners-section-text-box" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
                <h1 className="partners-section-heading">
                    <img src="assets/partner.svg" alt="" className='partners-section-heading-svg' /> Associations & Partners
                </h1>
               
            </div>
            <div className="slider" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="700">
                <div className="slide-track">
                    <div className="slide">
                        <img src="assets/partners_logos/hover.png" className='slider-images' />
                    </div>
                    <div className="slide">
                        <img src="assets/partners_logos/inovation_punjab.png" className='slider-images' />
                    </div>
                    <div className="slide">
                        <img src="assets/partners_logos/mentorX.png" className='slider-images' />
                    </div>
                    <div className="slide">
                        <img src="assets/partners_logos/pscst.png" className='slider-images' />
                    </div>
                    <div className="slide">
                        <img src="assets/partners_logos/mentorX.png" className='slider-images' />
                    </div>
                    <div className="slide">
                        <img src="assets/partners_logos/hover.png" className='slider-images' />
                    </div>
                    <div className="slide">
                        <img src="assets/partners_logos/inovation_punjab.png" className='slider-images' />
                    </div>
                    <div className="slide">
                        <img src="assets/partners_logos/mentorX.png" className='slider-images' />
                    </div>
                    <div className="slide">
                        <img src="assets/partners_logos/pscst.png" className='slider-images' />
                    </div>
                    <div className="slide">
                        <img src="assets/partners_logos/mentorX.png" className='slider-images' />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> */}

            <PartnersSection />


            <div className="application-section-container" data-aos="fade-up" data-aos-duration="1000" style={{ boxShadow: "0px -12px 8px rgba(0, 0, 0, 0.25)", marginTop: "0px", padding: "20px" }}>
                <hr className="hr-below-section-5-heading upper" />
                <h1 className='application-section-heading animated-element' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300" style={{ color: '#A30D33' }}>
                    <img src="assets/application-heading.svg" alt="" className="application-container-bg" />
                    Application Process
                </h1>
                <hr className="hr-below-section-5-heading" />

                <div className="application-steps-process-text">
                    <div className="application-step-1" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="500">
                        <div className="step-1-text">
                            <h1 className='application-step-1-heading'>Online Application</h1>
                            <p className='application-step-1-para ' id='appplication-para'>
                                <strong>Kickstart Your Journey</strong> <br />
                                Startups can easily apply via our intuitive online portal. Just share your innovative business concept, core team details, market traction and the current stage of your venture’s development.
                            </p>
                        </div>
                        <div className="application-img-between-line-img">
                            <img src="assets/application-blue-line.png" alt="" className="application-img-divider-line-img" />
                        </div>
                        <div className="application-step-1-img">
                            <img src="assets/application-step-1.svg" alt="" className="step-1-img" />
                        </div>
                    </div>

                    <div className="application-step-2" data-aos="fade-left" data-aos-duration="1200" data-aos-delay="700">
                        <div className="application-step-2-inner">
                            <div className="step-2-sub-part">
                                <h1 className='application-step-2-heading'>Screening & Evaluation</h1>
                                <p className='application-step-2-para step-box-gray' id='appplication-para'>
                                    <strong>Your Idea, Our Insights</strong> <br />
                                    Once you apply, our expert panel evaluates your submission based on the strength of your idea, team synergy, scalability and market readiness. Every application gets the attention it deserves.
                                </p>
                            </div>
                            <div className="application-img-between-line-img">
                                <img src="assets/application-grey-line.png" alt="" className="application-img-divider-line-img" />
                            </div>
                            <div className="step-2-sub-img-part">
                                <img src="assets/application-step-2.svg" alt="" className="step-1-img" />
                            </div>
                        </div>
                    </div>

                    <div className="application-step-3" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="900">
                        <div className="step-3-text">
                            <h1 className='application-step-3-heading'>Selection & Onboarding</h1>
                            <p className='application-step-3-para step-box-red' id='appplication-para'>
                                <strong>Welcome to Growth</strong> <br />
                                Selected startups are onboarded into our ecosystem, gaining access to tailored mentorship, strategic resources and hands-on support to scale efficiently and sustainably.
                            </p>
                        </div>
                        <div className="application-img-between-line-img">
                            <img src="assets/application-red-line.png" alt="" className="application-img-divider-line-img" />
                        </div>
                        <div className="application-step-1-img">
                            <img src="assets/application-step-3.svg" alt="" className="step-1-img" />
                        </div>
                    </div>
                </div>

                <div className="apply-now-button-container" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1100">
                    <MagneticButton>
                        <a href="/IncubateWithUs" className="fancy-apply-button">
                            Apply Now
                        </a>
                    </MagneticButton>
                </div>
            </div>



            {/* <div className="NUmbers-section-bg-main-container" data-aos="fade-up" data-aos-duration="1000">
        
        <div className="justify-center items-center flex font-light text-4xl number-section-heading" data-aos="fade-right" data-aos-duration="1000">
            <h1>CONTINUOUSLY IMPROVING</h1>
        </div>

        <div className="circle-section flex justify-center items-center  py-8">
        <div className="flex items-center relative   all-circles-in-main-block">
            <div className=" rounded-full border-8 border-green-500 flex justify-center items-center text-center z-0 inner-circle inner-circle-last">
            <div className=" font-bold text-black inner-circle-last-text-para">
                150+
            </div>
            </div>

            <div className=" rounded-full border-8 border-slate-400 flex justify-center items-center text-center z-0 inner-circle inner-circle-last-second">
            <div className=" font-bold text-black inner-circle-last-second-text-para inner-circle-last-second-text-para-left">
                150+
            </div>
            </div>

            <div className=" rounded-full border-8 border-yellow-300 flex justify-center items-center text-center z-10 inner-circle inner-circle-middle">
            <div className=" font-bold textblacke inner-circle-middle-para">
                150+
            </div>
            </div>

            <div className=" rounded-full border-8 border-blue-400 flex justify-center items-center text-center z-0 inner-circle inner-circle-last-second">
            <div className=" font-bold text-black inner-circle-last-second-text-para inner-circle-last-second-text-para-right">
                150+
                <p className="inner-circle-last-second-para mt-2 ">Key Mentors</p>
            </div>
            </div>

            <div className=" rounded-full border-8 border-red-600 flex justify-center items-center text-center z-1 inner-circle inner-circle-last">
            <div className=" font-bold text-black ml-4 inner-circle-last-text-para">
                150+
            </div>
            </div>
        </div>
        </div>
    </div> */}

            <NumberSection />

            {/* <!-- continuously improving section ends here --> */}
            {/* Starred Events Section */}
            {/* <div className="events-dashboard-main-container" data-aos="fade-up" data-aos-duration="1000">
    <div className="event-heading" data-aos="fade-right" data-aos-duration="1200">
        <h1 className="event_name-dashboard">Starred Events</h1>
    </div>

    {loading ? (
        <p>Loading events...</p>
         Show loading state
    ) : error ? (
        <p>{error}</p> 
        Show error message if there's an error
    ) : (
        <div className="events-container">
            <div className="events">
                {starredEvents.length > 0 ? (
                    <div className="event-row-one event-main" data-aos="fade-up" data-aos-duration="1200">
                        Display only the first 3 starred events
                        {starredEvents.slice(0, 3).map((event) => (
                            <div className="event" key={event._id} data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200">
                                <img
                                    src={event.imageUrl}
                                    alt={event.eventTitle}
                                    className="event-event-image"
                                />
                                <div className="head-event">{event.eventName}</div>
                                <div className="details-event">
                                    <p>{event.eventTitle}</p>
                                    <p>{new Date(event.eventDate).toLocaleDateString()}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No starred events found.</p>
                     Show message if no events found
                )}
            </div>
        </div>
    )}
</div> */}

            {/* <div className="starrd-events-new-design">

    <div className="starred-events-section-left-side-main-contaienr-new">
    <video
       src="assets/starred-events-animated-image.mp4"className="starred-images-animated-video-iamge-new"
        autoPlay
        loop
        muted
        playsInline
        // style={{
        //   width: '80vw',
        //   height: 'auto',
        //   objectFit: 'cover',
        //   borderRadius: '8px', // Optional: Add rounded corners
        //   display: 'block',
        // }}
      />
    </div>

<div className="starred-events-new-design-right-side-container">
<div className="starred-events-right-container-rows-1 new-row-2">
        <div className="starred-events-new-right0side-container-row-1-blocks">
            <div className="right-side-container-blocks-text-section-new">
            <h1 className="right-side-container-main-heading-block-new">Venture Vault</h1>
            <h1 className="right-side-container-main-event-number-block-new">1</h1>
            
            </div>
            <div className="right-side-container-main-block-image">
                <img 
                src="FullSizeRender-3.jpg" 
                alt="" 
                className="right-size-contaier-first-block-main-inner-direct-image" 
                />
            </div>
        </div>
        <div className="starred-events-new-right0side-container-row-1-blocks">
            <div className="right-side-container-blocks-text-section-new">
            <h1 className="right-side-container-main-heading-block-new">Venture Vault</h1>
            <h1 className="right-side-container-main-event-number-block-new">1</h1>
            
            </div>
            <div className="right-side-container-main-block-image">
                <img 
                src="FullSizeRender-3.jpg" 
                alt="" 
                className="right-size-contaier-first-block-main-inner-direct-image" 
                />
            </div>
        </div>
    </div> 
    <div className="between-testing-vertical-line-divider"></div>
    <div className="starred-events-right-container-rows-1 new-row-1">
        <div className="starred-events-new-right0side-container-row-1-blocks">
            <div className="right-side-container-blocks-text-section-new">
            <h1 className="right-side-container-main-heading-block-new">Venture Vault</h1>
            <h1 className="right-side-container-main-event-number-block-new">1</h1>
            
            </div>
            <div className="right-side-container-main-block-image">
                <img 
                src="FullSizeRender-3.jpg" 
                alt="" 
                className="right-size-contaier-first-block-main-inner-direct-image" 
                />
            </div>
        </div>
        <div className="starred-events-new-right0side-container-row-1-blocks">
            <div className="right-side-container-blocks-text-section-new">
            <h1 className="right-side-container-main-heading-block-new">Venture Vault</h1>
            <h1 className="right-side-container-main-event-number-block-new">1</h1>
            
            </div>
            <div className="right-side-container-main-block-image">
                <img 
                src="FullSizeRender-3.jpg" 
                alt="" 
                className="right-size-contaier-first-block-main-inner-direct-image" 
                />
            </div>
        </div>
    </div>
    
</div>

</div> */}

            {/* Premium Background Container for both News and Stories */}
            <Box sx={{
                position: 'relative',
                overflow: 'hidden',
                bgcolor: '#fafafa',
                pb: 10,
                borderTop: '1px solid rgba(0,0,0,0.05)'
            }}>
                {/* Background Grid Pattern */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundImage: `
                            linear-gradient(rgba(27, 72, 128, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(27, 72, 128, 0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '40px 40px',
                        zIndex: 0,
                        pointerEvents: 'none',
                    }}
                />

                {/* Floating Elements distributed across both sections */}
                <Bubble color={COLORS.red} size={250} top="5%" left="-50px" duration={15} delay={0} />
                <FloatingSquare color={COLORS.blue} size={100} top="15%" right="10%" duration={25} delay={1} />
                <FloatingTriangle color={COLORS.red} size={60} top="40%" left="15%" duration={12} delay={2} />

                <Bubble color={COLORS.blue} size={200} bottom="20%" right="-50px" duration={18} delay={3} />
                <FloatingSquare color={COLORS.red} size={120} bottom="10%" left="5%" duration={30} delay={4} />
                <FloatingTriangle color={COLORS.blue} size={80} bottom="5%" right="15%" duration={14} delay={5} />

                <Box sx={{ position: 'relative', zIndex: 1 }}>
                    <StarredEvents />
                    <InspirationalStories />
                </Box>
            </Box>



        </div>
    );
}

export default Dashboard;
