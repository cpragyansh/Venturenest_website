import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./global.css";
import Mslider from '../MainSlider/Mslider';

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
                <div className="text-brand-red text-4xl font-bold mb-2">80 lakhs+</div>
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
           <h3 className="text-3xl font-bold font-jakarta mt-2 text-brand-dark">Incubated Startups</h3>
        </div>
        
        <div className="relative w-full overflow-hidden group">
          <div className="flex gap-16 items-center animate-scroll whitespace-nowrap min-w-full">
              {/* Duplicate list 3 times to ensure smooth scrolling on wide screens */}
              {[...startupLogos, ...startupLogos, ...startupLogos].map((logo, idx) => (
                  <div key={idx} className="flex-shrink-0 w-32 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100 hover:scale-110">
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
              { name: 'Suraj Yadav', company: 'Paloalto', package: '1 Crore/PA', image: '/assets/succes-1.jpeg', logo: '/assets/Start-up-logos/Techealth_logo - TecHealth.PNG' },
              { name: 'Omm Kumar', company: 'TechHealth', package: '44 LPA', image: '/assets/success-2.jpeg', logo: '/assets/Start-up-logos/Techealth_logo - TecHealth.PNG' },
              { name: 'Anmol Bhateja', company: 'V2R', package: '45.5 LPA', image: '/assets/success-3.jpeg', logo: '/assets/GalleryImages/V2R.jpg' },
              { name: 'Anmol Bhateja', company: 'Amazon', package: '45.5 LPA', image: '/assets/success-3.jpeg', logo: '/assets/GalleryImages/V2R.jpg' },
              // { name: 'Simran Saini', company: 'Autodesk', package: '33 LPA', image: '/assets/success-4.jpeg', logo: '/assets/autodesk.png' },
            ].map((student, idx) => (
              <div key={idx} className="relative bg-gray-800 h-[530px] overflow-hidden group">
                <img src={student.image} alt={student.name} className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[386px] w-auto object-cover" />
                {/* Overlay removed as requested */}
                
                <div className="absolute top-0 right-0 bg-brand-red rounded-bl-lg p-4">
                  <div className="text-white text-xs mb-1">Salary Package</div>
                  <div className="text-white font-bold text-2xl">{student.package}</div>
                </div>

                <div className="absolute top-8 left-4">
                  <img src={student.logo} alt="" className="h-7" />
                </div>

                <div className="absolute bottom-8 left-8">
                  <div className="text-white text-4xl font-bold mb-2">{student.name}</div>
                  <div className="text-white text-sm">- Placed in {student.company}</div>
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
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer. took a galley of type and scrambled it to make a type specimen book.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printe. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
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
              North India's Fastest-<br />Growing Institute
            </h2>
            
            <p className="text-2xl mb-12 leading-relaxed">
              North India's fastest-growing educational institutions, known for its rapid expansion and excellence in education. Established in 2012, it has achieved significant milestones, including NAAC A+ accreditation.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-12">
              <div className="border-b border-white pb-6">
                <div className="text-5xl font-bold mb-2">5.3 LPA</div>
                <div className="text-lg">Highest Package Offered</div>
              </div>
              <div className="border-b border-white pb-6">
                <div className="text-5xl font-bold mb-2">10000+</div>
                <div className="text-lg">Placement Offers</div>
              </div>
              <div className="border-b border-white pb-6">
                <div className="text-5xl font-bold mb-2">1200+</div>
                <div className="text-lg">Recruiters</div>
              </div>
              <div className="border-b border-white pb-6">
                <div className="text-5xl font-bold mb-2">50 LPA</div>
                <div className="text-lg">Package Offered by 9+ Companies</div>
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
            {[1, 2, 3, 4, 5, 6, 7, 8].map((_, idx) => (
              <div key={idx} className="bg-gray-100 p-8 relative">
                <svg className="absolute top-8 left-8 w-10 h-10 text-gray-400" fill="currentColor" viewBox="0 0 40 40">
                  <path fillRule="evenodd" clipRule="evenodd" d="M14.8665 30.824C13.1838 31.368 11.2425 31.3573 9.65584 30.544C5.99184 28.6613 4.40517 23.808 5.87984 18.6666C6.54117 16.36 7.7065 14.12 10.1705 11.8613C12.6345 9.59998 16.0532 8.26665 17.6372 8.26665C17.7705 8.26453 17.9029 8.28874 18.0268 8.33788C18.1507 8.38702 18.2637 8.46014 18.3594 8.55304C18.455 8.64593 18.5313 8.75678 18.584 8.87924C18.6367 9.00169 18.6648 9.13334 18.6665 9.26665C18.6665 9.81865 18.1972 10.2666 17.6372 10.2666C15.8265 10.2666 14.2078 11.2533 12.2905 12.704C10.8238 13.816 9.67717 15.2373 9.04517 16.4746C7.83184 18.8426 7.79184 22.1813 9.75183 23.0693C10.2069 22.5528 10.7677 22.1403 11.3962 21.8596C12.0247 21.579 12.7062 21.4367 13.3945 21.4426C16.5945 21.4426 18.4798 24.016 18.3972 26.3466C18.3198 28.5733 16.9038 30.16 14.8665 30.824ZM30.8665 30.824C29.1838 31.368 27.2425 31.3573 25.6558 30.544C21.9918 28.6613 20.4052 23.808 21.8798 18.6666C22.5412 16.36 23.7065 14.12 26.1705 11.8613C28.6345 9.59998 32.0532 8.26665 33.6372 8.26665C33.7705 8.26453 33.9029 8.28874 34.0268 8.33788C34.1507 8.38702 34.2637 8.46014 34.3594 8.55304C34.455 8.64593 34.5313 8.75678 34.584 8.87924C34.6367 9.00169 34.6648 9.13334 34.6665 9.26665C34.6665 9.81865 34.1972 10.2666 33.6372 10.2666C31.8265 10.2666 30.2078 11.2533 28.2905 12.704C26.8238 13.816 25.6772 15.2373 25.0452 16.4746C23.8318 18.8426 23.7918 22.1813 25.7518 23.0693C26.6932 22.04 27.9225 21.4426 29.3945 21.4426C32.5945 21.4426 34.4798 24.016 34.3972 26.3466C34.3198 28.5733 32.9038 30.16 30.8665 30.824Z" fillOpacity="0.4"/>
                </svg>
                
                <div className="mt-16 mb-6">
                  <p className="text-brand-dark leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo.
                  </p>
                </div>

                <div className="flex items-center space-x-4 pt-6 border-t border-gray-400">
                  <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                  <div>
                    <div className="text-brand-red font-bold">Megha Kwatra</div>
                    <div className="text-gray-600 text-sm">Placed in Adobe</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* About */}
            <div>
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/0f7026c13753e8627232c3949530eba492fe0048?width=356" alt="CGC Logo" className="h-20 mb-6" />
              <h3 className="text-brand-red-light text-lg font-bold mb-4">About Us</h3>
              <p className="text-sm leading-relaxed text-justify">
                Welcome to CGC University, Mohali, one of the best University in North India known for delivering excellent placements in top-ranked companies.
              </p>
              <p className="text-sm leading-relaxed text-justify mt-4">
                We offer various Undergraduate and Postgraduate Courses like B.Tech, BCA, BBA, B.Com, Law, Journalism, Pharmacy, Fashion Designing, Paramedical Science, MBA, MCA at affordable fees in Chandigarh.
              </p>
            </div>

            {/* Apply Here */}
            <div>
              <h3 className="text-brand-red-light text-lg font-bold mb-4">Apply Here</h3>
              <ul className="space-y-2 text-sm underline">
                <li><a href="#" className="hover:text-brand-red-light">Admissions</a></li>
                <li><a href="#" className="hover:text-brand-red-light">Online Admission</a></li>
                <li><a href="#" className="hover:text-brand-red-light">How to Apply?</a></li>
                <li><a href="#" className="hover:text-brand-red-light">Education Loan</a></li>
                <li><a href="#" className="hover:text-brand-red-light">CGCUET Scholarship</a></li>
                <li><a href="#" className="hover:text-brand-red-light">Placements</a></li>
                <li><a href="#" className="hover:text-brand-red-light">Hostels</a></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-brand-red-light text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm underline">
                <li><a href="#" className="hover:text-brand-red-light">International Tie Ups</a></li>
                <li><a href="#" className="hover:text-brand-red-light">CGC University Mohali Brochure 2025-26</a></li>
                <li><a href="#" className="hover:text-brand-red-light">Careers</a></li>
                <li><a href="#" className="hover:text-brand-red-light">Gallery</a></li>
                <li><a href="#" className="hover:text-brand-red-light">News</a></li>
                <li><a href="#" className="hover:text-brand-red-light">Events</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-brand-red-light text-lg font-bold mb-4">Contact Us</h3>
              <div className="space-y-4 text-sm">
                <p>CGC University, State Highway 12A, Chandigarh-Sirhind Road, Sahibzada Ajit Singh Nagar, Punjab 140307</p>
                
                <div>
                  <div className="text-brand-red-light font-semibold">Toll Free No:</div>
                  <a href="tel:18005005005" className="underline">1800-500-5005</a>
                </div>

                <div>
                  <div className="text-brand-red-light font-semibold">Email:</div>
                  <a href="mailto:info@cgc.ac.in" className="underline">info@cgc.ac.in</a>
                </div>

                <div className="flex space-x-3 pt-4">
                  {['facebook', 'twitter', 'linkedin', 'instagram', 'youtube'].map((social) => (
                    <a key={social} href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                      <span className="sr-only">{social}</span>
                      <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex space-x-6 text-sm opacity-50">
                <a href="#" className="hover:opacity-100">Privacy policy</a>
                <a href="#" className="hover:opacity-100">Terms of use</a>
                <a href="#" className="hover:opacity-100">Refund policy</a>
                <a href="#" className="hover:opacity-100">FAQ</a>
              </div>
              <div className="text-sm opacity-50">
                Copyright © 2025 CGC University (Mohali)
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
