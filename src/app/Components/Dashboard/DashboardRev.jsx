import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./global.css";
import Mslider from '../MainSlider/Mslider';
import StudentStories from './StudentStories';

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const startupLogos = [
    "1749710321866 - Aditya Raj Saxena.jpg",
    "5(3 - Karan Agrawal.png",
    "file_00000000fa6861f8b46d40c35e6646b9_conversation_id=67fe9c73-e260-8006-bab2-ec35ca4f9089 - Juara Organics.png",
    "IMG-20231230-WA0023(2) - Anand Kumar.jpg",
    "IMG-20250208-WA0007 - Shekhar kashyap.jpg",
    "IMG-20250611-WA0000 - arpit kumar.jpg",
    "IMG-20250612-WA0000 - JIGYASA GARG.jpg",
    "IMG-20250612-WA0004 - Navneet Yaduvanshi.jpg",
    "IMG-20250612-WA0004 - SHAGUN SHARMA.jpg",
    "IMG-20250612-WA0005 - Mayank Dahiya.jpg",
    "IMG_20250613_112419_040 - Vivek Singh.jpg",
    "Logo - Harris Babbar.png",
    "SAVE_20250611_152058 - Pulkesh Gautam.jpg",
    "Screenshot_2025-03-06-23-58-39-73_6012fa4d4ddec268fc5c7112cbb265e7 - Aryan Mankotia.jpg",
    "Screenshot_2025-06-12-18-15-12-052_com.whatsapp-edit - Vedant Daware.jpg",
    "stacked wordmark black - ansh haritash.png",
    "Techealth_logo - TecHealth.PNG",
    "tHM LOGO - Abhishek Sharma.png",
    "VeeGamma Logo Design in Gradient__endoftext__ - Vanshika.png"
  ];



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
              <div className="absolute -left-8 top-12">
                <svg width="58" height="29" viewBox="0 0 58 29" fill="none">
                  <path d="M48.321 8.74875C45.6238 8.74875 44.3189 6.65379 43.0611 4.6313C41.8908 2.75375 40.7877 0.975009 38.6487 0.975009C36.5098 0.975009 35.4067 2.74716 34.2431 4.6313C32.9853 6.66038 31.6804 8.74875 28.9899 8.74875C26.2994 8.74875 24.9946 6.65379 23.73 4.6313C22.5597 2.75375 21.4566 0.975009 19.3176 0.975009C17.1787 0.975009 16.0756 2.74716 14.912 4.6313C13.6542 6.66038 12.3493 8.74875 9.65881 8.74875C6.96834 8.74875 5.66346 6.65379 4.40566 4.6313C3.2353 2.75375 2.1322 0.975009 0 0.975009V0C2.69721 0 3.99536 2.09495 5.25316 4.12403C6.42352 6.00159 7.52661 7.78033 9.65881 7.78033C11.791 7.78033 12.9008 6.00818 14.0645 4.12403C15.3223 2.09495 16.6272 0 19.3176 0C22.0081 0 23.313 2.09495 24.5775 4.12403C25.7479 6.00159 26.851 7.78033 28.9899 7.78033C31.1288 7.78033 32.2319 6.00818 33.4023 4.12403C34.6601 2.10154 35.965 0.0065843 38.6554 0.0065843C41.3459 0.0065843 42.6575 2.10155 43.9153 4.13063C45.0857 6.00818 46.1888 7.78691 48.3277 7.78691C50.4667 7.78691 51.5697 6.01477 52.7401 4.13063C53.9979 2.10155 55.3028 0.0065843 58 0.0065843V0.981603C55.8611 0.981603 54.758 2.75374 53.5876 4.63789C52.3298 6.66038 51.0249 8.75534 48.3277 8.75534L48.321 8.74875Z" fill="#9E0203"/>
                </svg>
              </div>
              
              <h2 className="text-brand-red text-5xl font-bold font-jakarta mb-6">
                Welcome to CGC<br />Venturenest
              </h2>
              
              <div className="space-y-4 text-brand-dark text-lg leading-relaxed mb-8">
                <p>
                  CGC VentureNest is the premier business incubator at CGC University , designed to empower innovation, entrepreneurship, and sustainable business growth. As a dynamic startup hub, VentureNest provides a thriving ecosystem where aspiring entrepreneurs and early-stage startups can transform groundbreaking ideas into successful ventures.
                </p>
               <p>
                
                  As a flagship initiative of CGC University, CGC VentureNest is dedicated to fostering an entrepreneurial culture among students, faculty and the broader community. Our incubator offers cutting-edge infrastructure, personalized mentorship from industry experts, strong networking opportunities and access to investors and funding resources. Whether you're launching a tech startup, social enterprise, or scalable business model, CGC VentureNest accelerates your journey from concept to market success.
               </p>
              </div>

              <button className="bg-brand-red text-white px-8 py-4 rounded-full font-bold uppercase text-sm hover:bg-brand-red-light transition-colors flex items-center space-x-2">
                <span>Apply Now</span>
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M22.731 12.0001L15.7662 18.9665L14.6334 17.8353L19.6686 12.8001L1.59976 12.8001L1.59976 11.2001L19.6686 11.2001L14.6334 6.16649L15.7662 5.03369L22.731 12.0001Z"/>
                </svg>
              </button>
            </div>

            {/* Right side would have an image */}
            <div className="hidden md:block"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h2 className="text-brand-red text-5xl font-bold font-jakarta mb-8">
              We Don't Just Promise<br />Growth—We Prove It.
            </h2>
            
            <p className="text-brand-dark text-lg leading-relaxed mb-12">
              Driven by the motto "Each One, One Job", CGC University, Mohali ensures every student secures desirable career opportunities with 86% placement rate, featuring 1,600+ offers from 650+ recruiters like Microsoft, Amazon, Deloitte and many more.
            </p>

            {/* Stats Grid */}
            <div className="bg-gray-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-brand-red text-4xl font-bold mb-2">1 Crore+</div>
                <div className="text-brand-dark text-sm">Of funding Granted to the startups</div>
              </div>
              <div className="text-center border-l border-black/20 pl-4">
                <div className="text-brand-red text-4xl font-bold mb-2">70+</div>
                <div className="text-brand-dark text-sm">Startups Incubated both physically and virtually</div>
              </div>
              <div className="text-center border-l border-black/20 pl-4">
                <div className="text-brand-red text-4xl font-bold mb-2">685+</div>
                <div className="text-brand-dark text-sm">Patents published successfully</div>
              </div>
              <div className="text-center border-l border-black/20 pl-4">
                <div className="text-brand-red text-4xl font-bold mb-2">10+</div>
                <div className="text-brand-dark text-sm">Unicorn Ventures are launched</div>
              </div>
            </div>

            <button className="mt-12 bg-brand-red text-white px-8 py-4 rounded-full font-bold uppercase text-sm hover:bg-brand-red-light transition-colors flex items-center space-x-2">
              <span>Apply Now</span>
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M22.731 12.0001L15.7662 18.9665L14.6334 17.8353L19.6686 12.8001L1.59976 12.8001L1.59976 11.2001L19.6686 11.2001L14.6334 6.16649L15.7662 5.03369L22.731 12.0001Z"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Company Logos */}
      <section className="bg-white py-12 border-y border-gray-100 overflow-hidden">
        <div className="container mx-auto px-4 mb-8 text-center">
           <span className="text-brand-red font-bold uppercase tracking-widest text-sm">Our Network</span>
           <h3 className="text-3xl font-bold font-jakarta mt-2 text-brand-dark">Incubated Partners</h3>
        </div>
        
        <div className="relative w-full overflow-hidden group">
          <div className="flex gap-16 items-center animate-scroll whitespace-nowrap min-w-full">
              {/* Duplicate list 3 times to ensure smooth scrolling on wide screens */}
              {[...startupLogos, ...startupLogos, ...startupLogos].map((logo, idx) => (
                  <div key={idx} className="flex-shrink-0 w-32 h-24 flex items-center justify-center transition-all duration-500 opacity-60 hover:opacity-100 hover:scale-110">
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

      {/* Student Cards Section */}
      <section className="bg-brand-red py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Suraj Yadav', company: 'Paloalto', package: '4 Lakhs', image: '/assets/success-1.jpeg', logo: '/assets/Start-up-logos/Techealth_logo - TecHealth.PNG' },
              { name: 'Omm Kumar', company: 'TechHealth', package: '2.5 Lakhs', image: '/assets/success-2.jpeg', logo: '/assets/Start-up-logos/Logo - Harris Babbar.png' },
              { name: 'Anmol Bhateja', company: 'V2R', package: '3 Lakhs', image: '/assets/success-3.jpeg', logo: '/assets/GalleryImages/V2R.jpg' },
              { name: 'Anmol Bhateja', company: 'Amazon', package: '3 Lakhs', image: '/assets/success-3.jpeg', logo: '/assets/GalleryImages/V2R.jpg' },
              // { name: 'Simran Saini', company: 'Autodesk', package: '33 LPA', image: '/assets/success-4.jpeg', logo: '/assets/autodesk.png' },
            ].map((student, idx) => (
              <div key={idx} className="relative bg-gray-800 h-[530px] overflow-hidden group">
                <img src={student.image} alt={student.name} className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[386px] w-auto object-cover" />
                {/* Overlay removed as requested */}
                
                <div className="absolute top-0 right-0 bg-brand-red rounded-bl-lg p-4">
                  <div className="text-white text-xs mb-1">Funding</div>
                  <div className="text-white font-bold text-2xl">{student.package}</div>
                </div>

                <div className="absolute top-8 left-4">
                  <img src={student.logo} alt="" className="h-7" />
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

      {/* Placement Records */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-brand-red text-5xl font-bold font-jakarta text-center mb-4">
            Our Outstanding Placement Record Over the Years
          </h2>
          <p className="text-brand-dark text-center mb-16">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
          </p>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-brand-red text-2xl font-semibold font-lato mb-8">Companies recruiting at CGC Mohali (Jhanjeri)</h3>
              <div className="bg-white p-8 rounded-lg">
                {/* Simple chart placeholder */}
                <div className="h-64 flex items-end justify-around space-x-2">
                  {[200, 250, 310, 420, 550, 650, 800].map((height, idx) => (
                    <div key={idx} className="flex-1 bg-brand-red/20 hover:bg-brand-red transition-colors" style={{ height: `${height / 10}%` }}></div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-brand-red text-2xl font-semibold font-lato mb-8">Companies offering CTC 5 Lacs P.a. or above</h3>
              <div className="bg-white p-8 rounded-lg">
                {/* Simple chart placeholder */}
                <div className="h-64 flex items-end justify-around space-x-2">
                  {[150, 220, 290, 350, 480, 580, 700].map((height, idx) => (
                    <div key={idx} className="flex-1 bg-brand-red/20 hover:bg-brand-red transition-colors" style={{ height: `${height / 10}%` }}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="bg-white py-20 relative overflow-hidden">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 pointer-events-none opacity-30" 
             style={{ backgroundImage: 'radial-gradient(#9E0203 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-brand-red text-5xl font-bold font-jakarta mb-4">
              Application Process
            </h2>
            <div className="h-1 w-24 bg-brand-red mx-auto"></div>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center gap-8 relative group">
               <div className="w-full md:w-1/2 text-right order-1 md:order-1 pr-8">
                  <h3 className="text-3xl font-bold text-gray-800 font-jakarta mb-2">Online Application</h3>
                  <p className="text-brand-red font-bold uppercase tracking-wider text-sm mb-3">Kickstart Your Journey</p>
                  <p className="text-gray-600 leading-relaxed font-lato">
                    Startups can easily apply via our intuitive online portal. Just share your innovative business concept, core team details, market traction and the current stage of your venture’s development.
                  </p>
               </div>
               
               {/* Center Icon/Marker */}
               <div className="hidden md:flex flex-col items-center justify-center order-2 absolute left-1/2 top-0 bottom-0 -translate-x-1/2">
                  <div className="w-12 h-12 rounded-full bg-brand-red text-white flex items-center justify-center font-bold text-xl shadow-lg z-10">1</div>
                  <div className="w-1 bg-gray-200 flex-grow -z-0"></div>
               </div>

               <div className="w-full md:w-1/2 order-2 md:order-3 pl-8">
                  <div className="bg-gray-50 p-6 rounded-2xl border-2 border-dashed border-gray-200 group-hover:border-brand-red transition-colors duration-300">
                    <img src="assets/application-step-1.svg" alt="Online Application" className="w-full h-48 object-contain" />
                  </div>
               </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row items-center gap-8 relative group">
               <div className="w-full md:w-1/2 order-2 md:order-1 pr-8">
                  <div className="bg-gray-50 p-6 rounded-2xl border-2 border-dashed border-gray-200 group-hover:border-brand-red transition-colors duration-300">
                    <img src="assets/application-step-2.svg" alt="Screening" className="w-full h-48 object-contain" />
                  </div>
               </div>
               
               {/* Center Icon/Marker */}
               <div className="hidden md:flex flex-col items-center justify-center order-2 absolute left-1/2 top-0 bottom-0 -translate-x-1/2">
                  <div className="w-12 h-12 rounded-full bg-white border-4 border-brand-red text-brand-red flex items-center justify-center font-bold text-xl shadow-lg z-10">2</div>
                  <div className="w-1 bg-gray-200 flex-grow -z-0"></div>
               </div>

               <div className="w-full md:w-1/2 text-left order-1 md:order-3 pl-8">
                  <h3 className="text-3xl font-bold text-gray-800 font-jakarta mb-2">Screening & Evaluation</h3>
                  <p className="text-brand-red font-bold uppercase tracking-wider text-sm mb-3">Your Idea, Our Insights</p>
                  <p className="text-gray-600 leading-relaxed font-lato">
                    Once you apply, our expert panel evaluates your submission based on the strength of your idea, team synergy, scalability and market readiness. Every application gets the attention it deserves.
                  </p>
               </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center gap-8 relative group">
               <div className="w-full md:w-1/2 text-right order-1 md:order-1 pr-8">
                  <h3 className="text-3xl font-bold text-gray-800 font-jakarta mb-2">Selection & Onboarding</h3>
                  <p className="text-brand-red font-bold uppercase tracking-wider text-sm mb-3">Welcome to Growth</p>
                  <p className="text-gray-600 leading-relaxed font-lato">
                    Selected startups are onboarded into our ecosystem, gaining access to tailored mentorship, strategic resources and hands-on support to scale efficiently and sustainably.
                  </p>
               </div>
               
               {/* Center Icon/Marker */}
               <div className="hidden md:flex flex-col items-center justify-center order-2 absolute left-1/2 top-0 bottom-0 -translate-x-1/2">
                  <div className="w-12 h-12 rounded-full bg-brand-red text-white flex items-center justify-center font-bold text-xl shadow-lg z-10">3</div>
               </div>

               <div className="w-full md:w-1/2 order-2 md:order-3 pl-8">
                  <div className="bg-gray-50 p-6 rounded-2xl border-2 border-dashed border-gray-200 group-hover:border-brand-red transition-colors duration-300">
                    <img src="assets/application-step-3.svg" alt="Onboarding" className="w-full h-48 object-contain" />
                  </div>
               </div>
            </div>

            <div className="text-center pt-12">
               <button className="bg-brand-red text-white px-10 py-5 rounded-full font-bold uppercase text-base hover:bg-brand-red-light transition-all shadow-xl hover:shadow-2xl flex items-center space-x-3 mx-auto">
                 <span>Start Your Application</span>
                 <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                   <path fillRule="evenodd" clipRule="evenodd" d="M22.731 12.0001L15.7662 18.9665L14.6334 17.8353L19.6686 12.8001L1.59976 12.8001L1.59976 11.2001L19.6686 11.2001L14.6334 6.16649L15.7662 5.03369L22.731 12.0001Z"/>
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
                <div className="text-5xl font-bold mb-2">70+</div>
                <div className="text-lg">Startups Incubated</div>
              </div>
              <div className="border-b border-white pb-6">
                <div className="text-5xl font-bold mb-2">1 Cr+</div>
                <div className="text-lg">Funding Raised</div>
              </div>
              <div className="border-b border-white pb-6">
                <div className="text-5xl font-bold mb-2">50+</div>
                <div className="text-lg">Corporate Partners</div>
              </div>
              <div className="border-b border-white pb-6">
                <div className="text-5xl font-bold mb-2">200+</div>
                <div className="text-lg">Mentors & Experts</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      <StudentStories />
    </div>
  );
}