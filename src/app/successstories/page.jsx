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

  return (
    <div className="relative mb-24 last:mb-0">
      {/* Title Section with Decorative Bar */}
      <div className="container mx-auto px-4 mb-6">
        <div className={`flex flex-col ${isEven ? 'items-start' : 'items-end'}`}>
          <div className={`flex items-start gap-4 ${isEven ? 'flex-row' : 'flex-row-reverse text-right'}`}>
            <div className={`w-2 h-16 ${highlightLineColor}`}></div>
            <div>
              <h3 className={`text-4xl md:text-5xl font-black font-jakarta ${titleColor} uppercase tracking-tighter leading-none`}>
                {story.StartupName}
              </h3>
              <p className="text-gray-700 font-bold text-sm mt-2 uppercase tracking-[0.2em] pl-0.5">
                {story.FounderName || "ALUMNI VENTURE"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative min-h-[400px] flex items-center">
        {/* The Colored Container - Spans from side */}
        <div 
          className={`absolute top-0 bottom-0 ${isEven ? 'left-0' : 'right-0'} w-[85%] lg:w-[80%] ${bgColor} z-0 shadow-2xl`}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center`}>
            
            {/* Text Side */}
            <div className={`w-full lg:w-3/5 py-12 ${isEven ? 'lg:pr-16' : 'lg:pl-16'} text-white`}>
              <div className="mb-6 opacity-20">
                 <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                 </svg>
              </div>

              <div className="prose prose-lg text-white/95 leading-relaxed font-medium">
                  {(story.StartupAbout || "A journey of innovation and impact. This startup has demonstrated exceptional growth and resilience in the market.").substring(0, 300)}...
              </div>

              <div className="mt-8 pt-6 border-t border-white/20 flex flex-wrap gap-4">
                  <span className="inline-block px-4 py-2 bg-white/10 text-xs font-bold uppercase tracking-widest rounded-sm border border-white/20">
                     Incubated Startup
                  </span>
                  <Link 
                    to={`/success/${story._id}`} 
                    className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-[#9E0203] hover:bg-white px-4 py-2 transition-all rounded-sm"
                  >
                    Read Full Story &rarr;
                  </Link>
              </div>
            </div>
            
            {/* Image Side - Breaking out of container */}
            <div className={`w-full lg:w-2/5 flex ${isEven ? 'justify-end' : 'justify-start'} mt-8 lg:mt-0`}>
              <div className="relative w-full h-[350px] lg:h-[450px] overflow-visible group">
                {/* Decorative border frame */}
                <div className={`absolute top-4 ${isEven ? 'right-4' : 'left-4'} w-full h-full border-4 ${isRedBg ? "border-black" : "border-[#9E0203]"} z-0 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2`}></div>
                
                <img 
                  src={story.FounderImg || "/assets/default.jpg"}
                  alt={story.StartupName} 
                  className={`relative z-10 h-full w-full object-cover shadow-2xl transition-transform duration-700 group-hover:scale-[1.02] ${isEven ? 'translate-x-[5%]' : 'translate-x-[-5%]'}`}
                />
              </div>
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
      {/* Hero Section - Matching About/Vision Page Theme */}
      <section className="relative py-28 overflow-hidden border-b-8 border-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/c7c728362241680d22384a377926978583492576?width=1920" 
            alt="Success Stories Hero" 
            className="w-full h-full object-cover grayscale opacity-60"
          />
          <div className="absolute inset-0 bg-[#9E0203]/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl bg-white/95 p-12 border-l-[16px] border-[#9E0203] shadow-2xl transform translate-y-8">
            <h1 className="text-black text-6xl md:text-7xl font-black uppercase tracking-tighter mb-2 leading-none">
              Success <span className="text-[#9E0203]">Stories</span>
            </h1>
            <p className="text-[#9E0203] font-black uppercase tracking-[0.3em] text-sm mb-6">
              REAL IMPACT • REAL VENTURES
            </p>
            <div className="bg-black h-2 w-32 mb-8"></div>
            <p className="text-black text-xl font-bold uppercase leading-tight max-w-xl">
              Celebrating the trailblazers who reduced the gap between ambition and achievement.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Text */}
      <section className="py-24 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-black text-black uppercase tracking-tighter">Hall of Fame</h2>
            <div className="flex justify-center space-x-2">
              <div className="h-1.5 w-20 bg-[#9E0203]"></div>
              <div className="h-1.5 w-10 bg-black"></div>
            </div>
            <p className="text-gray-700 text-xl font-medium leading-relaxed italic">
              "The entrepreneur always searches for change, responds to it, and exploits it as an opportunity." - Explore how our incubatees turned risks into rewards.
            </p>
          </div>
        </div>
      </section>

      {/* Stories List */}
      <section className="py-24 bg-white overflow-hidden">
        {loading ? (
           <div className="flex flex-col items-center justify-center py-20">
             <div className="w-16 h-16 border-8 border-gray-200 border-t-[#9E0203] rounded-full animate-spin mb-4"></div>
             <p className="text-xl font-bold text-gray-400 uppercase tracking-widest">Loading Success Stories...</p>
           </div>
        ) : starredStories.length > 0 ? (
          <div className="space-y-32">
            {starredStories.map((story, index) => (
              <SuccessStoryBlock key={index} story={story} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-32 text-gray-500 bg-gray-50 max-w-2xl mx-auto rounded-xl border-2 border-dashed border-gray-200">
            <p className="text-2xl font-black text-gray-300 uppercase">No stories published yet</p>
          </div>
        )}
      </section>

      {/* Bottom CTA */}
      <section className="bg-black py-20 border-t-8 border-[#9E0203]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8">
            Write Your <span className="text-[#9E0203]">Legacy</span> With Us
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link to="/IncubateWithUs" className="inline-block bg-[#9E0203] text-white px-12 py-5 font-black text-xl uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-xl">
              Apply For Incubation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
