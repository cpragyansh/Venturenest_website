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
    <div className="relative mb-24 last:mb-0 font-jakarta">
      {/* Title Section with Decorative Bar */}
      <div className="container mx-auto px-4 mb-6">
        <div className={`flex flex-col ${isEven ? 'items-start' : 'items-end'}`}>
          <div className={`flex items-start gap-4 ${isEven ? 'flex-row' : 'flex-row-reverse text-right'}`}>
            <div className={`w-1.5 h-12 ${highlightLineColor}`}></div>
            <div>
              <Link to={storyUrl} className="group">
                <h3 className={`text-3xl md:text-5xl font-black font-jakarta ${titleColor} uppercase tracking-tighter leading-none transition-colors group-hover:text-black/70`}>
                  {story.StartupName}
                </h3>
              </Link>
              <p className="text-gray-900 font-bold text-xs mt-2 uppercase tracking-[0.2em] pl-0.5 opacity-70">
                {story.FounderName || "ALUMNI VENTURE"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative min-h-[350px] flex items-center">
        {/* The Colored Container - Spans from side */}
        <div 
          className={`absolute top-0 bottom-0 ${isEven ? 'left-0' : 'right-0'} w-[90%] lg:w-[80%] ${bgColor} z-0 shadow-lg`}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8`}>
            
            {/* Text Side */}
            <div className={`w-full lg:w-3/5 py-12 ${isEven ? 'lg:pr-12' : 'lg:pl-12'} text-white`}>
              <div className="mb-6 opacity-10">
                 <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                 </svg>
              </div>

              <div className="text-lg md:text-xl text-white/90 leading-relaxed font-bold italic mb-8">
                  "{(story.StartupAbout || "A journey of innovation and impact. This startup has demonstrated exceptional growth and resilience in the market.").substring(0, 250)}"
              </div>

              <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap gap-4">
                  <span className="inline-block px-4 py-2 bg-white/5 text-[10px] font-black uppercase tracking-[0.2em] rounded-none border border-white/10">
                     Incubated Startup
                  </span>
                  <Link 
                    to={storyUrl} 
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] bg-white text-black hover:bg-[#9E0203] hover:text-white px-6 py-2.5 transition-all duration-300 rounded-none shadow-md"
                  >
                    Journey &rarr;
                  </Link>
              </div>
            </div>
            
            {/* Image Side */}
            <div className={`w-full lg:w-2/5 flex ${isEven ? 'justify-end' : 'justify-start'} mt-4 lg:mt-0`}>
              <Link to={storyUrl} className="relative w-full h-[300px] lg:h-[400px] overflow-visible group">
                <div className={`absolute top-4 ${isEven ? 'right-4' : 'left-4'} w-full h-full border-2 ${isRedBg ? "border-black" : "border-[#9E0203]"} z-0 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0`}></div>
                
                <img 
                  src={story.FounderImg || "/assets/default.jpg"}
                  alt={story.StartupName} 
                  className={`relative z-10 h-full w-full object-cover shadow-xl transition-all duration-700 grayscale group-hover:grayscale-0 ${isEven ? 'translate-x-[4%]' : 'translate-x-[-4%]'} group-hover:translate-x-0`}
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
        const response = await axios.get("https://venture-nest-backend.onrender.com/starred-stories");
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
      {/* Hero Section - Text to Left Screen, Grayscale Background Overlay */}
      <section className="relative py-32 overflow-hidden border-b-4 border-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/c7c728362241680d22384a377926978583492576?width=1920" 
            alt="Success Stories Hero" 
            className="w-full h-full object-cover grayscale opacity-40 blur-[1px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl py-12">
            <h1 className="text-white text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 leading-[0.9]">
              Success <br /><span className="text-[#9E0203]">Stories</span>
            </h1>
            <p className="text-[#9E0203] font-black uppercase tracking-[0.3em] text-[10px] mb-8">
              ESTABLISHED • IMPACTFUL • SCALEABLE
            </p>
            <div className="bg-[#9E0203] h-2 w-32 mb-8"></div>
            <p className="text-white/90 text-lg md:text-xl font-bold uppercase leading-tight max-w-xl">
              Showcasing the excellence of ventures that redefined the startup landscape under our mentorship.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-black text-black uppercase tracking-tight">Hall of Fame</h2>
            <div className="flex justify-center items-center gap-2">
              <div className="h-1.5 w-16 bg-[#9E0203]"></div>
              <div className="h-1.5 w-1.5 bg-black rounded-full"></div>
              <div className="h-1.5 w-8 bg-black"></div>
            </div>
            <p className="text-gray-700 text-xl font-bold leading-relaxed italic max-w-2xl mx-auto">
              "Every great achievement was once considered impossible." - Meet the founders who proved the skeptics wrong.
            </p>
          </div>
        </div>
      </section>

      {/* Stories List */}
      <section className="py-24 bg-white overflow-hidden">
        {loading ? (
           <div className="flex flex-col items-center justify-center py-20">
             <div className="w-16 h-16 border-4 border-gray-100 border-t-[#9E0203] rounded-full animate-spin mb-4"></div>
             <p className="text-sm font-black text-gray-300 uppercase tracking-widest">Loading Hall of Fame...</p>
           </div>
        ) : starredStories.length > 0 ? (
          <div className="space-y-32">
            {starredStories.map((story, index) => (
              <SuccessStoryBlock key={index} story={story} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-32 text-gray-500 bg-gray-50 max-w-4xl mx-auto border border-dashed border-gray-300">
            <p className="text-xl font-black text-gray-200 uppercase tracking-tighter">No stories currently published</p>
          </div>
        )}
      </section>

      {/* Bottom CTA */}
      <section className="bg-black py-24 border-t-8 border-[#9E0203]">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[#9E0203] font-black uppercase tracking-[0.4em] text-[10px] mb-4">NEXT SUCCESS STORY</p>
          <h2 className="text-white text-4xl md:text-6xl font-black uppercase tracking-tighter mb-10">
            Write Your <span className="text-[#9E0203]">Legacy</span>
          </h2>
          <div className="flex justify-center">
            <Link to="/IncubateWithUs" className="relative inline-block bg-[#9E0203] text-white px-12 py-4 font-black text-lg uppercase tracking-widest transition-all hover:bg-white hover:text-black shadow-lg">
              Apply For Incubation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
