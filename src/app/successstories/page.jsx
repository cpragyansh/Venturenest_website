"use client";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SuccessStoryBlock = ({ story, index }) => {
  const isEven = index % 2 === 0;
  // Alternating background colors for the content blocks
  const bgColors = ["bg-[#003366]", "bg-[#333333]", "bg-black", "bg-[#9E0203]"];
  const bgColor = bgColors[index % 4];
  
  // Decide text color based on background
  const isRedBg = bgColor === "bg-[#9E0203]";
  const titleColor = isRedBg ? "text-black" : "text-[#9E0203]";
  const highlightLineColor = isRedBg ? "bg-black" : "bg-[#9E0203]";

  const storyUrl = `/success/${story._id}`;

  return (
    <div className="relative mb-32 last:mb-0 font-jakarta">
      {/* Title Section with Decorative Bar */}
      <div className="container mx-auto px-4 mb-8">
        <div className={`flex flex-col ${isEven ? 'items-start' : 'items-end'}`}>
          <div className={`flex items-start gap-5 ${isEven ? 'flex-row' : 'flex-row-reverse text-right'}`}>
            <div className={`w-2.5 h-20 ${highlightLineColor}`}></div>
            <div>
              <Link to={storyUrl} className="group">
                <h3 className={`text-4xl md:text-6xl font-black font-jakarta ${titleColor} uppercase tracking-tighter leading-[0.9] transition-colors group-hover:text-black/80`}>
                  {story.StartupName}
                </h3>
              </Link>
              <p className="text-gray-900 font-extrabold text-sm mt-3 uppercase tracking-[0.3em] pl-0.5 opacity-80">
                {story.FounderName || "ALUMNI VENTURE"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative min-h-[450px] flex items-center">
        {/* The Colored Container - Spans from side */}
        <div 
          className={`absolute top-0 bottom-0 ${isEven ? 'left-0' : 'right-0'} w-[90%] lg:w-[85%] ${bgColor} z-0 shadow-[0_30px_60px_rgba(0,0,0,0.15)]`}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10`}>
            
            {/* Text Side */}
            <div className={`w-full lg:w-3/5 py-16 ${isEven ? 'lg:pr-20' : 'lg:pl-20'} text-white`}>
              <div className="mb-8 opacity-20">
                 <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                 </svg>
              </div>

              <div className="text-xl md:text-2xl text-white/95 leading-relaxed font-bold italic mb-10">
                  "{(story.StartupAbout || "A journey of innovation and impact. This startup has demonstrated exceptional growth and resilience in the market.").substring(0, 300)}"
              </div>

              <div className="mt-8 pt-8 border-t border-white/20 flex flex-wrap gap-6">
                  <span className="inline-block px-5 py-2.5 bg-white/10 text-xs font-black uppercase tracking-[0.2em] rounded-none border border-white/20">
                     Incubated Startup
                  </span>
                  <Link 
                    to={storyUrl} 
                    className="inline-flex items-center gap-3 text-sm font-black uppercase tracking-[0.2em] bg-white text-black hover:bg-black hover:text-white px-8 py-3 transition-all duration-300 rounded-none shadow-xl"
                  >
                    Explore Journey &rarr;
                  </Link>
              </div>
            </div>
            
            {/* Image Side - Breaking out of container */}
            <div className={`w-full lg:w-2/5 flex ${isEven ? 'justify-end' : 'justify-start'} mt-8 lg:mt-0`}>
              <Link to={storyUrl} className="relative w-full h-[400px] lg:h-[550px] overflow-visible group">
                {/* Decorative border frame */}
                <div className={`absolute top-6 ${isEven ? 'right-6' : 'left-6'} w-full h-full border-4 ${isRedBg ? "border-black" : "border-[#9E0203]"} z-0 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0`}></div>
                
                <img 
                  src={story.FounderImg || "/assets/default.jpg"}
                  alt={story.StartupName} 
                  className={`relative z-10 h-full w-full object-cover shadow-2xl transition-all duration-700 group-hover:grayscale-0 grayscale-[20%] ${isEven ? 'translate-x-[5%]' : 'translate-x-[-5%]'} group-hover:translate-x-0`}
                />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default function StartupStories() {
  const [starredStories, setStarredStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStarredStories = async () => {
      try {
        const response = await axios.get("https://venturenest.onrender.com/starred-stories");
        setStarredStories(response.data);
      } catch (err) {
        console.error("Error fetching starred stories:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchStarredStories();
  }, []);

  return (
    <div className="min-h-screen bg-white font-jakarta">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden border-b-[12px] border-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/c7c728362241680d22384a377926978583492576?width=1920" 
            alt="Success Stories Hero" 
            className="w-full h-full object-cover grayscale opacity-50"
          />
          <div className="absolute inset-0 bg-[#9E0203]/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl bg-white/95 p-16 border-l-[20px] border-[#9E0203] shadow-[0_50px_100px_rgba(0,0,0,0.3)] transform translate-y-12">
            <h1 className="text-black text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4 leading-none">
              Success <br /><span className="text-[#9E0203]">Stories</span>
            </h1>
            <p className="text-[#9E0203] font-black uppercase tracking-[0.4em] text-sm mb-8">
              ESTABLISHED • IMPACTFUL • SCALEABLE
            </p>
            <div className="bg-black h-3 w-48 mb-10"></div>
            <p className="text-black text-2xl font-extrabold uppercase leading-tight max-w-2xl">
              Showcasing the excellence of ventures that redefined the startup landscape under our mentorship.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-28 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <h2 className="text-5xl font-black text-black uppercase tracking-tight">Hall of Fame</h2>
            <div className="flex justify-center items-center gap-3">
              <div className="h-2 w-24 bg-[#9E0203]"></div>
              <div className="h-2 w-2 bg-black rounded-full"></div>
              <div className="h-2 w-12 bg-black"></div>
            </div>
            <p className="text-gray-800 text-2xl font-bold leading-relaxed italic max-w-3xl mx-auto">
              "Every great achievement was once considered impossible." - Meet the founders who proved the skeptics wrong.
            </p>
          </div>
        </div>
      </section>

      {/* Stories List */}
      <section className="py-32 bg-white overflow-hidden">
        {loading ? (
           <div className="flex flex-col items-center justify-center py-20">
             <div className="w-20 h-20 border-8 border-gray-100 border-t-[#9E0203] rounded-full animate-spin mb-6"></div>
             <p className="text-xl font-black text-gray-300 uppercase tracking-widest">Compiling Success Stories...</p>
           </div>
        ) : starredStories.length > 0 ? (
          <div className="space-y-48">
            {starredStories.map((story, index) => (
              <SuccessStoryBlock key={index} story={story} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-40 text-gray-500 bg-gray-50 max-w-4xl mx-auto rounded-none border-2 border-dashed border-gray-300">
            <p className="text-3xl font-black text-gray-200 uppercase tracking-tighter">No stories currently in the Hall of Fame</p>
          </div>
        )}
      </section>

      {/* Bottom CTA */}
      <section className="bg-black py-28 border-t-[12px] border-[#9E0203]">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[#9E0203] font-black uppercase tracking-[0.5em] text-sm mb-6">NEXT SUCCESS STORY</p>
          <h2 className="text-white text-5xl md:text-7xl font-black uppercase tracking-tighter mb-12">
            Write Your <span className="text-[#9E0203]">Legacy</span>
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <Link to="/IncubateWithUs" className="group relative inline-block bg-[#9E0203] text-white px-16 py-6 font-black text-xl uppercase tracking-widest transition-all hover:bg-white hover:text-black shadow-2xl overflow-hidden">
              <span className="relative z-10">Apply For Incubation</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
