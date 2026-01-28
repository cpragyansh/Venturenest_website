import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./global.css";
import Mslider from '../MainSlider/Mslider';
import Incubated_startups_rendering from '../Rendering_components/Incubated_startups_rendering';
import Incubated_venture_highlight from '../Rendering_components/Incubated_venture_highlight';
import Council_highlight from '../Rendering_components/Council_highlight';
import Partner_highlight from '../Rendering_components/Partner_highlight';
import StudentStories from './StudentStories';

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const startupLogos = [
  //   "1749710321866 - Aditya Raj Saxena.jpg",
  //   "5(3 - Karan Agrawal.png",
  //   "file_00000000fa6861f8b46d40c35e6646b9_conversation_id=67fe9c73-e260-8006-bab2-ec35ca4f9089 - Juara Organics.png",
  //   "IMG-20231230-WA0023(2) - Anand Kumar.jpg",
  //   "IMG-20250208-WA0007 - Shekhar kashyap.jpg",
  //   "IMG-20250611-WA0000 - arpit kumar.jpg",
  //   "IMG-20250612-WA0000 - JIGYASA GARG.jpg",
  //   "IMG-20250612-WA0004 - Navneet Yaduvanshi.jpg",
  //   "IMG-20250612-WA0004 - SHAGUN SHARMA.jpg",
  //   "IMG-20250612-WA0005 - Mayank Dahiya.jpg",
  //   "IMG_20250613_112419_040 - Vivek Singh.jpg",
  //   "Logo - Harris Babbar.png",
  //   "SAVE_20250611_152058 - Pulkesh Gautam.jpg",
  //   "Screenshot_2025-03-06-23-58-39-73_6012fa4d4ddec268fc5c7112cbb265e7 - Aryan Mankotia.jpg",
  //   "Screenshot_2025-06-12-18-15-12-052_com.whatsapp-edit - Vedant Daware.jpg",
  //   "stacked wordmark black - ansh haritash.png",
  //   "Techealth_logo - TecHealth.PNG",
  //   "tHM LOGO - Abhishek Sharma.png",
  //   "VeeGamma Logo Design in Gradient__endoftext__ - Vanshika.png"
  // ];

  const startupLogos = [
    "TIE.jpeg",
    "startup-india.jpeg",
    "startup-punjab.jpeg",
    "PHDCCI.jpeg",
    "meity.jpeg",
    "CII.jpeg",
  ];
  const studentNames = [
    { "FounderName": "Mr. RAJAT SONI", "StartupName": "V2R AUTOINFINITE PRIVATE LIMITED", "Story": "At V2R, we’re not just disrupting the automotive sector; we’re revolutionizing it. Our mission is to empower both vehicle owners and automotive service businesses through advanced, technology-driven solutions that streamline operations, enhance efficiency, and drive sustainable growth." },
    { "FounderName": "Mr. Akash Shrivastava", "StartupName": "Lorro Digital Pvt. Ltd.", "Story": "The networking opportunities at VentureNest helped us secure our first three major clients. It's the perfect launchpad for digital ventures." },
    { "FounderName": "Mr. Vishal", "StartupName": "Jagdev Organics Pvt Ltd", "Story": "From lab access to market connect, VentureNest supported our organic product journey every step of the way. Truly a transformative experience." },
    { "FounderName": "Mr Harrish Babber", "StartupName": "Escapekar", "Story": "Escapekar is a travel guidance platform that helps people become better travelers—from exploring and planning to taking a trip. Travelers across the globe use the Escapekar app to discover hidden places, find where to stay, what to do, and where to eat—all recommended by an algorithm that selects the best options for them." },
    { "FounderName": "Mr. Narinder Singh", "StartupName": "Nhanks Waste Recyclers Pvt.Ltd", "Story": "Sustainable solutions need specialized support. VentureNest's focus on social impact startups gave us the push we needed." },
    { "FounderName": "Mr Karan Kumar Aggrawal", "StartupName": "Indi Tech", "Story": "The technical mentorship here is unmatched. We scaled our tech stack and team efficiently under the guidance of industry experts." },
    { "FounderName": "Mr. Jaskaranpreet Singh", "StartupName": "Juniva Organics", "Story": "Juniva Organics found its footing here. The incubation support helped us navigate regulatory challenges and reach the market faster." },
    { "FounderName": "Mr. Tanzil Arshad Khan", "StartupName": "Edshire Global Skills Pvt. Ltd.", "Story": "Edshire's vision to upskill the workforce was amplified by VentureNest's strategic partnerships and connection to educational networks." },
    { "FounderName": "Ms. Arshpreet Ahluwalia", "StartupName": "Juara Organics", "Story": "The supportive environment at VentureNest allowed us to experiment and refine our products with confidence. A great place to grow." },
    { "FounderName": "Mr. Vivek Kumar", "StartupName": "Groming Young Minds Innovative Pvt. Ltd" },
    { "FounderName": "Mr. Nirdosh Arora", "StartupName": "Ashab Group" },
    { "FounderName": "Mr. Ashish Chhabra", "StartupName": "EDS Wagon Tech Pvt. Ltd", "Story": "EDS Wagon, an incubated startup at VentureNest, has secured ₹5 lakh in funding from IIT Madras under the Carbon Zero Challenge (CZC), a flagship initiative of the School of Sustainability (SoS). Selected among the top 25 teams nationwide, EDS Wagon was recognized for its innovative solution focused on carbon reduction and environmental sustainability. This achievement reflects VentureNest’s continued efforts to support high-impact ventures." },
    { "FounderName": "Mr. Anand Kumar", "StartupName": "Kulhad" },
    { "FounderName": "Mr. Risahbh Naithani", "StartupName": "Veritex Innovations" },
    { "FounderName": "Mr. Shreyansh Tiwari", "StartupName": "Tarang" },
    { "FounderName": "Mr. Yuvraj Bhadauriya", "StartupName": "Armbot" },
    { "FounderName": "Mr. Surya N", "StartupName": "NIL" },
    { "FounderName": "Mr. Shivang Tiwari", "StartupName": "Techealth Apex Pvt. Ltd", "Story": "Techealth Apex is revolutionizing healthcare accessibility through innovative digital solutions. Their commitment to improving patient outcomes through technology has made them a standout venture in our ecosystem." },
    { "FounderName": "Mr. Divyansh Sood", "StartupName": "Videlec" },
    { "FounderName": "Mr. Tejinder Pal Singh Jassal", "StartupName": "Dulcimer Innovations Pvt. Ltd." },
    { "FounderName": "Mr. Pratham Arora", "StartupName": "Start Spark Pvt. Ltd." },
    { "FounderName": "Mr. Harkanwar Singh", "StartupName": "Tics Food Works Pvt. Ltd." },
    { "FounderName": "Mr. Anshul Sethi", "StartupName": "TrashTech" },
    { "FounderName": "Mr. Pulkesh Gautam", "StartupName": "Kakumei" },
    { "FounderName": "Mr. Gurwant Singh", "StartupName": "B.G. Innovatech Pvt. Ltd." },
    { "FounderName": "Iresh Kumar Singla", "StartupName": "Apna Mandir" },
    { "FounderName": "Pulkesh Gautam", "StartupName": "Vidyutam Verde NCESOL Pvt. Ltd." },
    { "FounderName": "Nripen Kumar", "StartupName": "Neuralink" },
    { "FounderName": "Mr. Aditya Raj Saxena", "StartupName": "ANTHRONEX" },
    { "FounderName": "Rishi Raj Dutta", "StartupName": "Aastra" },
    { "FounderName": "Jaskaran Singh", "StartupName": "HIKK" },
    { "FounderName": "Navneet Yaduvanshi", "StartupName": "Aasyra" },
    { "FounderName": "Dr. Varsha Grover", "StartupName": "NA(Healing Waves)" },
    { "FounderName": "Mr. Parag Shrivastava", "StartupName": "Tech-She" },
    { "FounderName": "Mr. Pranshu", "StartupName": "Defenciq Tech" },
    { "FounderName": "Ms. Ritika", "StartupName": "NA( Mosquito Repellent Accessories)" },
    { "FounderName": "Dr. Swati Sharma", "StartupName": "SVN SCIENTIFIC VISION PRIVATE LIMITED" },
    { "FounderName": "Mr. Vedant Ashok Daware", "StartupName": "Frii Jal" },
    { "FounderName": "Ms. Vanshika", "StartupName": "Vee Gamma" },
    { "FounderName": "Mr. Kunwar Singh", "StartupName": "NA(Dual Battery Technology)" },
    { "FounderName": "Mr. MD Mustafa Yusuf", "StartupName": "BookEvm" },
    { "FounderName": "Shivam Chauhan", "StartupName": "Stoc ML" },
    { "FounderName": "Shekhar Kashyap", "StartupName": "UnifHub" },
    { "FounderName": "Aditya Raj", "StartupName": "A Bagwani" },
    { "FounderName": "Abhishek Sharma", "StartupName": "The Hard Millenium" },
    { "FounderName": "Aditya Raj", "StartupName": "NMAK (No More Andha Kannon)" },
    { "FounderName": "Moinak Dey", "StartupName": "Rheonix" }
  ]

  return (
    <div className="min-h-screen bg-white font-jakarta">
      {/* Top Banner */}
      {/* <div className="bg-brand-dark text-white text-sm py-2 text-center font-jakarta font-medium">
        Admissions open for B.Tech., BBA, BCA, M.tech. courses at CGC University, Mohali (2025-26)
      </div> */}

      {/* Header */}
      <header className="relative">
        {/* Hero Area with Mslider */}
        <div className="relative overflow-hidden">
          {/* Main Slider */}
          <Mslider />

          {/* Hero Content Overlay */}
          {/* <div className="absolute inset-0 z-10 flex items-center">
            <div className="container mx-auto px-4 mt-20">
              <div className="max-w-2xl">
                <p className="text-white text-3xl font-jakarta mb-4 drop-shadow-lg">The Ultimate Startup Hub</p>
                <h1 className="text-white text-7xl font-bold font-jakarta mb-8 drop-shadow-2xl">Venturenest</h1>
              </div>
            </div>
          </div> */}
        </div>
      </header>

      {/* Welcome Section */}
      <section className="relative py-20 overflow-hidden">
        <img src="https://api.builder.io/api/v1/image/assets/TEMP/4457b3ebf8e16b2f34e08b4bc4e55bb881f9f762?width=3840" alt="" className="absolute inset-0 w-full h-full object-cover" />

        <div className="relative z-10 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="relative">
              {/* <div className="absolute -left-8 top-12">
                <svg width="58" height="29" viewBox="0 0 58 29" fill="none">
                  <path d="M48.321 8.74875C45.6238 8.74875 44.3189 6.65379 43.0611 4.6313C41.8908 2.75375 40.7877 0.975009 38.6487 0.975009C36.5098 0.975009 35.4067 2.74716 34.2431 4.6313C32.9853 6.66038 31.6804 8.74875 28.9899 8.74875C26.2994 8.74875 24.9946 6.65379 23.73 4.6313C22.5597 2.75375 21.4566 0.975009 19.3176 0.975009C17.1787 0.975009 16.0756 2.74716 14.912 4.6313C13.6542 6.66038 12.3493 8.74875 9.65881 8.74875C6.96834 8.74875 5.66346 6.65379 4.40566 4.6313C3.2353 2.75375 2.1322 0.975009 0 0.975009V0C2.69721 0 3.99536 2.09495 5.25316 4.12403C6.42352 6.00159 7.52661 7.78033 9.65881 7.78033C11.791 7.78033 12.9008 6.00818 14.0645 4.12403C15.3223 2.09495 16.6272 0 19.3176 0C22.0081 0 23.313 2.09495 24.5775 4.12403C25.7479 6.00159 26.851 7.78033 28.9899 7.78033C31.1288 7.78033 32.2319 6.00818 33.4023 4.12403C34.6601 2.10154 35.965 0.0065843 38.6554 0.0065843C41.3459 0.0065843 42.6575 2.10155 43.9153 4.13063C45.0857 6.00818 46.1888 7.78691 48.3277 7.78691C50.4667 7.78691 51.5697 6.01477 52.7401 4.13063C53.9979 2.10155 55.3028 0.0065843 58 0.0065843V0.981603C55.8611 0.981603 54.758 2.75374 53.5876 4.63789C52.3298 6.66038 51.0249 8.75534 48.3277 8.75534L48.321 8.74875Z" fill="#9E0203" />
                </svg>
              </div> */}

              <h2 className="text-brand-red text-5xl font-bold font-jakarta mb-6">
                Welcome to CGC<br />Venturenest
              </h2>
              <h2 className="text-black text-2xl font-bold font-jakarta mb-6">
                VentureNest is CGC University’s Technology Business Incubator, where ideas evolve into impactful startups.
              </h2>

              <div className="space-y-4 text-brand-dark text-lg leading-relaxed mb-8">
                <p>
                  VentureNest is the dedicated Technology Business Incubator (TBI) at CGC University, established to foster a culture of innovation, entrepreneurship, and startup excellence within the university ecosystem. It serves as a structured platform that enables students, faculty members, and aspiring entrepreneurs to convert innovative ideas into viable and scalable business ventures.
                </p>
                <p>
                As a flagship initiative of CGC University, VentureNest provides a comprehensive support system including advanced infrastructure, structured incubation programs, expert mentorship, industry linkages, investor access, and policy guidance. The incubator actively supports technology-driven, knowledge-based, and social impact startups by offering end-to-end assistance from ideation and validation to product development, market entry, and scale-up.
                </p>
               

                
              </div>

              <button className="bg-brand-red text-white px-8 py-4 rounded-full font-bold uppercase text-sm hover:bg-brand-red-light transition-colors flex items-center space-x-2">
                <span>Launch your Startup Now</span>
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M22.731 12.0001L15.7662 18.9665L14.6334 17.8353L19.6686 12.8001L1.59976 12.8001L1.59976 11.2001L19.6686 11.2001L14.6334 6.16649L15.7662 5.03369L22.731 12.0001Z" />
                </svg>
              </button>
            </div>

            {/* Right side would have an image */}
            <div className="hidden md:block"></div>
          </div>
        </div>
      </section>

            <section className="bg-white py-12 border-y border-gray-100 overflow-hidden">
        <div className="container mx-auto px-4 mb-8 text-center">
          {/* <span className="text-brand-red font-bold uppercase tracking-widest text-sm">Our Network</span> */}
          <h3 className="text-3xl font-bold font-jakarta mt-2 text-brand-dark">Our Government Partners </h3>
        </div>

        <div className="relative w-full overflow-hidden group">
          <div className="flex gap-16 items-center animate-scroll whitespace-nowrap min-w-full">
            {/* Duplicate list 3 times to ensure smooth scrolling on wide screens */}
            {[...startupLogos, ...startupLogos, ...startupLogos].map((logo, idx) => (
              <div key={idx} className="flex-shrink-0 w-32 h-24 flex items-center justify-center transition-all duration-500 opacity-90 hover:opacity-100 hover:scale-110">
                <img
                  src={`/assets/Start-up-logos/${logo}`}
                  alt="Startup Logo"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
          }
          .animate-scroll {
            animation: scroll 40s linear infinite;
            width: max-content;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>


      {/* Stats Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="max-w-2xl py-8">
              <h2 className="text-brand-red text-6xl font-black font-jakarta mb-10 leading-[1.1] tracking-tighter">
                We Don't Just <br />
                <span className="text-brand-dark">Promise Growth</span> — <br />
                We Prove It.
              </h2>

            <p className="text-brand-dark text-lg leading-relaxed mb-12">
              {/* Driven by the motto "Each One, One Job", CGC University, Mohali ensures every student secures desirable career opportunities with 86% placement rate, featuring 1,600+ offers from 650+ recruiters like Microsoft, Amazon, Deloitte and many more. */}
              Driven by the vision of “Each One, One Job”,
CGC University Mohali’s Technology Business Incubator TBI – Venture Nest empowers students and startups with funding, mentorship, incubation support, and industry exposure—transforming ideas into scalable ventures and successful careers.
            </p>

            {/* Stats Grid */}
            <div className="bg-gray-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-brand-red text-4xl font-bold mb-2">26.5 Lakhs+</div>
                <div className="text-brand-dark text-sm">Of funding Granted to the startups</div>
              </div>
              <div className="text-center border-l border-black/20 pl-4">
                <div className="text-brand-red text-4xl font-bold mb-2">100+</div>
                <div className="text-brand-dark text-sm">Startups Incubated both physically and virtually</div>
              </div>
              <div className="text-center border-l border-black/20 pl-4">
                <div className="text-brand-red text-4xl font-bold mb-2">1000+</div>
                <div className="text-brand-dark text-sm">Patents published successfully</div>
              </div>
              <div className="text-center border-l border-black/20 pl-4">
                <div className="text-brand-red text-4xl font-bold mb-2">10+</div>
                <div className="text-brand-dark text-sm">Unicorn Ventures are launched</div>
              </div>
            </div>

            {/* Premium Stats Dashboard Visualization */}
            <div className="grid grid-cols-2 gap-4 h-full">
              {/* Funding Stat - Line Chart Style */}
              <div className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden relative group">
                <div className="relative z-10">
                  <div className="text-brand-red text-3xl font-black mb-1">1.5 Cr+</div>
                  <div className="text-brand-dark text-[10px] font-bold uppercase tracking-wider opacity-60">Funding Granted</div>
                </div>
                {/* Mini Sparkline SVG */}
                <div className="absolute bottom-0 left-0 w-full h-1/2 opacity-20 group-hover:opacity-40 transition-opacity">
                  <svg viewBox="0 0 100 40" className="w-full h-full preserve-3d">
                    <path d="M0,40 L10,35 L30,38 L50,20 L70,25 L100,0 L100,40 Z" fill="url(#grad-red)" />
                    <defs>
                      <linearGradient id="grad-red" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#9E0203" />
                        <stop offset="100%" stopColor="transparent" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* Startups Stat - Progress Circle Style */}
              <div className="bg-brand-red p-6 rounded-[32px] shadow-lg hover:shadow-red-200/50 transition-all duration-500 flex flex-col justify-between overflow-hidden relative group">
                <div className="relative z-10">
                  <div className="text-white text-3xl font-black mb-1">100+</div>
                  <div className="text-white/80 text-[10px] font-bold uppercase tracking-wider">Startups Incubated</div>
                </div>
                <div className="mt-4 w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin-slow"></div>
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
              </div>

              {/* Patents Stat - Bar Graph Style */}
              <div className="bg-gray-50 p-6 rounded-[32px] border border-gray-200 hover:border-brand-red transition-all duration-500 flex flex-col justify-between group">
                <div>
                  <div className="text-brand-red text-3xl font-black mb-1">685+</div>
                  <div className="text-brand-dark text-[10px] font-bold uppercase tracking-wider opacity-60">Patents Published</div>
                </div>
                <div className="flex items-end gap-1 h-12 mt-4">
                  {[30, 60, 45, 90, 70, 100].map((h, i) => (
                    <div key={i} className="flex-1 bg-brand-red/20 group-hover:bg-brand-red transition-all duration-500 rounded-sm" style={{ height: `${h}%` }}></div>
                  ))}
                </div>
              </div>

              {/* Unicorns Stat - Impact Style */}
              <div className="bg-brand-dark p-6 rounded-[32px] shadow-2xl transition-all duration-500 flex flex-col items-center justify-center text-center relative overflow-hidden group">
                <div className="relative z-10">
                  <div className="text-white text-4xl font-black mb-1 group-hover:scale-110 transition-transform">10+</div>
                  <div className="text-brand-red text-[11px] font-black uppercase tracking-widest">Unicorn Ventures</div>
                </div>
                {/* Decorative particles */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-2 left-4 w-1 h-1 bg-white rounded-full animate-ping"></div>
                  <div className="absolute bottom-6 right-8 w-2 h-2 bg-brand-red rounded-full animate-pulse"></div>
                  <div className="absolute top-1/2 left-1/2 w-20 h-20 border border-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 scale-150"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
      
      <Council_highlight />

      {/* Success Milestones Section - Redesigned for Image-based Analytics */}
      <section className="bg-white py-24 relative overflow-hidden">
        {/* Subtle background detail */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 -z-10 translate-x-1/2 rounded-full blur-3xl opacity-50"></div>
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* Left Content: The Data Breakdown */}
            <div className="w-full lg:w-1/3">
              <div className="mb-12">
                <span className="text-brand-red font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Analytics Dashboard</span>
                <h2 className="text-brand-dark text-5xl font-black font-jakarta leading-[1.1] mb-6 tracking-tight">
                  Incubation <br />
                  <span className="text-brand-red">Milestones</span>
                </h2>
                <div className="h-1.5 w-20 bg-brand-red mb-8"></div>
                <p className="text-gray-500 font-medium leading-relaxed">
                  VentureNest tracks the exponential growth and capital infusion across our incubated startups. Our data reflects a consistent upward trajectory in market readiness and investor confidence.
                </p>
              </div>

              {/* Seed Funding Steps */}
              <div className="space-y-4">
                <h4 className="text-brand-dark font-black uppercase tracking-widest text-[11px] mb-6 opacity-40">Seed Funding Roadmap</h4>
                {[
                  { phase: 'Seed Phase I', amount: '3 Lakhs', status: 'Completed' },
                  { phase: 'Seed Phase II', amount: '8 Lakhs', status: 'Completed' },
                  { phase: 'Seed Phase III', amount: '11 Lakhs', status: 'Completed' },
                  { phase: 'Bridge Phase IV', amount: '26.5 Lakhs', status: 'Achieved' },
                ].map((step, idx) => (
                  <div key={idx} className="flex items-center gap-6 p-5 rounded-[24px] bg-gray-50 border border-transparent group hover:bg-white hover:border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 cursor-default">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-red font-black group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                      {idx + 1}
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-bold text-gray-400 mb-0.5">{step.phase}</div>
                      <div className="text-brand-dark font-black text-xl tracking-tighter">{step.amount}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content: The Graph Display Area */}
            <div className="w-full lg:w-2/3">
              <div className="bg-brand-dark p-2 rounded-[48px] shadow-2xl relative">
                {/* Header of the Display Frame */}
                <div className="px-8 py-5 flex items-center justify-between border-b border-white/5">
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                  </div>
                  <div className="text-white/30 text-[10px] font-black uppercase tracking-[0.3em]">Growth_Analytics_Visualization_v2.0</div>
                </div>

                {/* Main Image Container */}
                <div className="bg-[#121212] rounded-[40px] overflow-hidden min-h-[550px] flex items-center justify-center group relative">
                  {/* The Image itself - USER CAN PASTE SRC HERE */}
                  <img 
                    src="/assets/funding-graph.png" 
                    alt="Seed Funding Growth Graph" 
                    className="w-full h-auto object-contain transition-transform duration-1000 group-hover:scale-105" 
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentNode.querySelector('.fallback-ui').style.display = 'flex';
                    }}
                  />
                  
                  {/* Fallback Display if image is missing */}
                  <div className="fallback-ui absolute inset-0 hidden flex-col items-center justify-center text-center p-12">
                     <div className="w-24 h-24 mb-8 text-brand-red opacity-20">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>
                     </div>
                     <h3 className="text-white/80 font-black text-2xl mb-4 tracking-tight">Visualization Engine Ready</h3>
                     <p className="text-white/30 text-sm max-w-xs font-medium leading-relaxed">Please update the image source in the DashboardRev.jsx component to display the growth data visualization here.</p>
                  </div>
                </div>

                {/* Floating Stats on the Frame */}
                <div className="absolute -bottom-8 -right-8 bg-brand-red p-10 rounded-[40px] shadow-[0_20px_50px_rgba(158,2,3,0.3)] hidden md:block">
                  <div className="text-white text-4xl font-black mb-1">685+</div>
                  <div className="text-white/70 text-[10px] uppercase font-black tracking-widest leading-tight">Total Patents <br /> Published</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Partner_highlight />

      {/* Company Logos */}

      {/* Student Cards Section */}
      <section className="bg-brand-red py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Shivang Tiwari', company: 'Techealth Apex Private Limited', package: '3 Lakhs', image: '/assets/success-1.jpeg', logo: '/assets/Start-up-logos/Techealth_logo - TecHealth.PNG' },
              { name: 'Pulkesh Gautam', company: 'Vidyutam Verde', package: '3 Lakhs', image: '/assets/pulkesh_img.jpg', logo: '/assets/pulkesh_logo-Photoroom.png' },
              { name: 'Ashish Chabra', company: 'EDS Wagon Tech', package: '3 Lakhs', image: '/assets/eds wagon.jpg', logo: '/assets/eds_logo.webp' },
              { name: 'Anmol Bhateja', company: 'escapekar ', package: '3 Lakhs', image: '/assets/escapekar.jpg', logo: '/assets/escapekar_logo.png' },
              // { name: 'Simran Saini', company: 'Autodesk', package: '33 LPA', image: '/assets/success-4.jpeg', logo: '/assets/autodesk.png' },
            ].map((student, idx) => (
              <div key={idx} className="relative bg-gray-800 h-[530px] overflow-hidden group">
                <img src={student.image} alt={student.name} className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[386px] w-auto object-cover" />
                {/* Overlay removed as requested */}

                <div className="absolute top-0 right-0 bg-brand-red rounded-bl-lg p-4">
                  <div className="text-white text-xs mb-1">Funding</div>
                  <div className="text-white font-bold text-2xl">{student.package}</div>
                </div>

                <div className="absolute top-4 left-4 w-28 h-8">
  <img
    src={student.logo}
    alt=""
    className="w-full h-auto object-contain"
  />
</div>

                <div className="absolute bottom-8 left-8">
                  <div className="text-white text-4xl font-bold mb-2">{student.name}</div>
                  <div className="text-white text-sm">~{student.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Venturenest Special */}
      <section className="bg-brand-red py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Left Content */}
            <div className="text-white">
              <h2 className="text-5xl font-bold font-jakarta mb-8 leading-tight">
                What makes<br />Venturenest<br />the Ultimate Startup Hub
              </h2>

              <div className="flex space-x-4 mb-8">
                <div className="h-0.5 bg-white w-56"></div>
                <div className="h-0.5 bg-white w-36"></div>
                <div className="h-0.5 bg-white w-14"></div>
              </div>

              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  Recognized as a Technology Business Incubator (TBI), CGC VentureNest offers specialized support and advanced infrastructure for tech-driven startups. Our TBI status enables startups to access exclusive government grants, funding schemes and a wide range of benefits designed to accelerate innovation and growth.
                </p>
                <p>
                  Beyond funding, we provide a collaborative ecosystem where founders connect with industry leaders, alumni network, and fellow entrepreneurs. Our mentorship programs are tailored to guide startups through every stage of their journey, from ideation and business modeling to market entry and scaling.
                </p>
                <p>
                  With state-of-the-art co-working spaces, dedicated research labs, and regular pitch events, VentureNest ensures that every startup has the resources they need to thrive. We are committed to fostering a culture of experimentation and risk-taking, empowering students to transform their groundbreaking ideas into viable, sustainable businesses.
                </p>
              </div>
            </div>


            {/* Right Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: 'Incubation Programs', icon: '/assets/su-1.svg', desc: 'Ideation to market entry' },
                { title: 'Mentorship network', icon: '/assets/su-2.svg', desc: 'Guidance from experts' },
                { title: 'Modern Infrastructure', icon: '/assets/su-3.svg', desc: 'Labs & prototyping' },
                { title: 'Funding Assistance', icon: '/assets/su-4.svg', desc: 'Venture & Angel connections' },
                { title: 'Networking events', icon: '/assets/su-5.svg', desc: 'Partner collaborations' },
                { title: 'Legal & IP Support', icon: '/assets/su-6.svg', desc: 'Regulatory guidance' },
              ].map((feature, idx) => (
                <div key={idx} className="bg-brand-red-light/60 p-6 flex flex-col items-center justify-center text-center text-white h-60 hover:bg-brand-red/80 transition-all duration-300 rounded-xl">
                  <div className="w-16 h-16 mb-4 flex items-center justify-center bg-white/10 rounded-full p-3 backdrop-blur-sm">
                    <img src={feature.icon} alt={feature.title} className="w-full h-full object-contain brightness-0 invert" />
                  </div>
                  <h3 className="text-lg font-bold mb-1">{feature.title}</h3>
                  <p className="text-xs opacity-80 leading-tight">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      <Incubated_startups_rendering />
      <Incubated_venture_highlight />

      {/* Incubation Application Process */}
      <section className="bg-white py-16 relative overflow-hidden">
        {/* World Map Background with Low Opacity */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none flex items-center justify-center overflow-hidden">
           <img 
             src="/assets/world_map.png" 
             alt="World Map Background" 
             className="w-full h-full object-cover opacity-60"
           />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-brand-red text-4xl font-black font-jakarta mb-3">
              Incubation Application Process
            </h2>
            <p className="text-gray-500 font-medium text-sm max-w-xl mx-auto">
              A structured roadmap designed to identify, nurture, and accelerate high-potential startup ventures within our ecosystem.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Horizontal Connector Line */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-gray-200 -translate-y-1/2 hidden md:block"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              
              {/* Step 1: Online Application (Label BOTTOM) */}
              <div className="flex flex-col items-center group">
                <div className="h-32 flex items-end justify-center mb-6 hidden md:flex">
                   {/* Spacing for TOP content in other columns */}
                </div>
                
                {/* Circle */}
                <div className="relative">
                   <div className="w-32 h-32 rounded-full bg-brand-red shadow-xl flex items-center justify-center z-10 relative transform group-hover:scale-110 transition-transform duration-500">
                      <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                         <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                         <polyline points="14 2 14 8 20 8"></polyline>
                         <line x1="16" y1="13" x2="8" y2="13"></line>
                         <line x1="16" y1="17" x2="8" y2="17"></line>
                         <polyline points="10 9 9 9 8 9"></polyline>
                      </svg>
                   </div>
                   {/* Line down to text */}
                   <div className="absolute top-full left-1/2 -translate-x-1/2 h-6 w-px bg-gray-300"></div>
                </div>

                <div className="mt-8 text-center max-w-[200px]">
                  <h3 className="text-brand-red text-lg font-black mb-2">Online Application</h3>
                  <p className="text-gray-500 text-xs leading-relaxed font-medium">
                    Startups can easily apply via our intuitive online portal. Just share your innovative business concept and core team details.
                  </p>
                </div>
              </div>

              {/* Step 2: Screening (Label TOP) */}
              <div className="flex flex-col-reverse md:flex-col items-center group">
                {/* Label Top Content */}
                <div className="mb-8 text-center max-w-[200px] relative">
                  <h3 className="text-brand-red text-lg font-black mb-2">Initial Screening</h3>
                  <p className="text-gray-500 text-xs leading-relaxed font-medium">
                    Our expert panel evaluates your submission based on the strength of your idea, team synergy, and market readiness.
                  </p>
                  {/* Line down to circle */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 h-6 w-px bg-gray-300 translate-y-2 hidden md:block"></div>
                </div>

                {/* Circle */}
                <div className="relative mt-8 md:mt-0">
                   <div className="w-32 h-32 rounded-full bg-gray-800 border-2 border-dashed border-gray-600 shadow-xl flex items-center justify-center z-10 relative transform group-hover:scale-110 transition-transform duration-500">
                      <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                         <circle cx="11" cy="11" r="8"></circle>
                         <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      </svg>
                   </div>
                </div>

                <div className="h-32 hidden md:block">
                   {/* Spacing for BOTTOM content in other columns */}
                </div>
              </div>

              {/* Step 3: Selection Board (Label BOTTOM) */}
              <div className="flex flex-col items-center group">
                <div className="h-32 flex items-end justify-center mb-6 hidden md:flex">
                </div>
                
                {/* Circle */}
                <div className="relative">
                   <div className="w-32 h-32 rounded-full bg-brand-red shadow-xl flex items-center justify-center z-10 relative transform group-hover:scale-110 transition-transform duration-500">
                      <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                         <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                         <circle cx="9" cy="7" r="4"></circle>
                         <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                         <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                   </div>
                   <div className="absolute top-full left-1/2 -translate-x-1/2 h-6 w-px bg-gray-300"></div>
                </div>

                <div className="mt-8 text-center max-w-[200px]">
                  <h3 className="text-brand-red text-lg font-black mb-2">Selection Board</h3>
                  <p className="text-gray-500 text-xs leading-relaxed font-medium">
                    Shortlisted startups present their vision to a panel of mentors and industry experts for final incubation approval.
                  </p>
                </div>
              </div>

              {/* Step 4: Onboarding (Label TOP) */}
              <div className="flex flex-col-reverse md:flex-col items-center group">
                <div className="mb-8 text-center max-w-[200px] relative">
                  <h3 className="text-brand-red text-lg font-black mb-2">Onboarding</h3>
                  <p className="text-gray-500 text-xs leading-relaxed font-medium">
                    Selected startups are onboarded into our ecosystem, gaining access to tailored mentorship and strategic resources.
                  </p>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 h-6 w-px bg-gray-300 translate-y-2 hidden md:block"></div>
                </div>

                {/* Circle */}
                <div className="relative mt-8 md:mt-0">
                   <div className="w-32 h-32 rounded-full bg-gray-800 border-2 border-dashed border-gray-600 shadow-xl flex items-center justify-center z-10 relative transform group-hover:scale-110 transition-transform duration-500">
                      <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                         <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                         <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                   </div>
                </div>

                <div className="h-32 hidden md:block">
                </div>
              </div>

            </div>

            <div className="text-center pt-16">
              <button className="bg-brand-red text-white px-8 py-4 rounded-full font-bold uppercase text-sm hover:bg-brand-red-light transition-all shadow-lg hover:shadow-xl flex items-center space-x-3 mx-auto">
                <span>Start Your Application</span>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M22.731 12.0001L15.7662 18.9665L14.6334 17.8353L19.6686 12.8001L1.59976 12.8001L1.59976 11.2001L19.6686 11.2001L14.6334 6.16649L15.7662 5.03369L22.731 12.0001Z" />
                </svg>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* North India's Fastest Growing Institute */}
      <section className="relative bg-cover bg-center py-20" style={{ backgroundImage: 'url(https://api.builder.io/api/v1/image/assets/TEMP/3d21804528e0cfd22fd4944defec35b289d09126?width=1920)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-blue-900/70"></div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl ml-auto text-white">
            <h2 className="text-5xl font-bold font-jakarta mb-8">
              Pioneering Innovation<br />in North India
            </h2>

            <p className="text-2xl mb-12 leading-relaxed">
              VentureNest stands as a beacon for aspiring entrepreneurs, fostering a dynamic ecosystem of innovation and risk-taking. We are not just an incubator; we are a launchpad for the next generation of industry disruptors, providing unparalleled access to resources, mentorship, and capital.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-12">
              <div className="border-b border-white pb-6">
                <div className="text-5xl font-bold mb-2">100+</div>
                <div className="text-lg">Startups Incubated</div>
              </div>
              <div className="border-b border-white pb-6">
                <div className="text-5xl font-bold mb-2">26.5 Lakh+</div>
                <div className="text-lg">Funding Raised</div>
              </div>
              <div className="border-b border-white pb-6">
                <div className="text-5xl font-bold mb-2">100+</div>
                <div className="text-lg">Partners</div>
              </div>
              <div className="border-b border-white pb-6">
                <div className="text-5xl font-bold mb-2">200+</div>
                <div className="text-lg">Mentors & Experts</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Student Stories */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-16">
            <span className="text-brand-red text-5xl font-bold font-jakarta">Student </span>
            <span className="text-brand-dark text-5xl font-bold font-jakarta">Stories</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {studentNames.slice(0, 8).map((student, idx) => (
              <div key={idx} className="bg-gray-100 p-8 relative">
                <svg className="absolute top-8 left-8 w-10 h-10 text-gray-400" fill="currentColor" viewBox="0 0 40 40">
                  <path fillRule="evenodd" clipRule="evenodd" d="M14.8665 30.824C13.1838 31.368 11.2425 31.3573 9.65584 30.544C5.99184 28.6613 4.40517 23.808 5.87984 18.6666C6.54117 16.36 7.7065 14.12 10.1705 11.8613C12.6345 9.59998 16.0532 8.26665 17.6372 8.26665C17.7705 8.26453 17.9029 8.28874 18.0268 8.33788C18.1507 8.38702 18.2637 8.46014 18.3594 8.55304C18.455 8.64593 18.5313 8.75678 18.584 8.87924C18.6367 9.00169 18.6648 9.13334 18.6665 9.26665C18.6665 9.81865 18.1972 10.2666 17.6372 10.2666C15.8265 10.2666 14.2078 11.2533 12.2905 12.704C10.8238 13.816 9.67717 15.2373 9.04517 16.4746C7.83184 18.8426 7.79184 22.1813 9.75183 23.0693C10.2069 22.5528 10.7677 22.1403 11.3962 21.8596C12.0247 21.579 12.7062 21.4367 13.3945 21.4426C16.5945 21.4426 18.4798 24.016 18.3972 26.3466C18.3198 28.5733 16.9038 30.16 14.8665 30.824ZM30.8665 30.824C29.1838 31.368 27.2425 31.3573 25.6558 30.544C21.9918 28.6613 20.4052 23.808 21.8798 18.6666C22.5412 16.36 23.7065 14.12 26.1705 11.8613C28.6345 9.59998 32.0532 8.26665 33.6372 8.26665C33.7705 8.26453 33.9029 8.28874 34.0268 8.33788C34.1507 8.38702 34.2637 8.46014 34.3594 8.55304C34.455 8.64593 34.5313 8.75678 34.584 8.87924C34.6367 9.00169 34.6648 9.13334 34.6665 9.26665C34.6665 9.81865 34.1972 10.2666 33.6372 10.2666C31.8265 10.2666 30.2078 11.2533 28.2905 12.704C26.8238 13.816 25.6772 15.2373 25.0452 16.4746C23.8318 18.8426 23.7918 22.1813 25.7518 23.0693C26.6932 22.04 27.9225 21.4426 29.3945 21.4426C32.5945 21.4426 34.4798 24.016 34.3972 26.3466C34.3198 28.5733 32.9038 30.16 30.8665 30.824Z" fillOpacity="0.4" />
                </svg>

                <div className="mt-16 mb-6">
                  <p className="text-brand-dark leading-relaxed">
                    "{student.Story}"
                  </p>
                </div>

                <div className="flex items-center space-x-4 pt-6 border-t border-gray-400">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-xl font-bold text-gray-600">
                    {student.FounderName.charAt(0)}
                  </div>
                  <div>
                    <div className="text-brand-red font-bold">{student.FounderName}</div>
                    <div className="text-gray-600 text-sm font-medium">Founder, {student.StartupName}</div>
                  </div>
                </div>
              </div>
            ))}</div>
        </div>
      </section>
    </div>
  );
}