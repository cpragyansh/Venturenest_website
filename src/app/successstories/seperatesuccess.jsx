import React, { useEffect, useState } from "react";
import { useParams, Link as RouterLink } from "react-router-dom";
import axios from "axios";

const StoryDetails = () => {
    const { id } = useParams();
    const [story, setStory] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchStory();
        window.scrollTo(0, 0);
    }, [id]);

    const fetchStory = async () => {
        setLoading(true);
        try {
            const res = await axios.get(
                `https://venture-nest-backend.onrender.com/starred-stories/${id}`
            );
            setStory(res.data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-white">
                <div className="w-8 h-8 border-2 border-[#9E0203] border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (!story) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-white font-jakarta">
                <h2 className="text-2xl font-black text-black uppercase tracking-tighter">Story Not Found</h2>
                <RouterLink to="/successstories" className="mt-4 text-[#9E0203] font-bold uppercase tracking-widest text-xs hover:underline">
                    &larr; Back to Hall of Fame
                </RouterLink>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-white font-jakarta pb-24">
            {/* Minimal Header */}
            <div className="pt-32 pb-16">
                <div className="container mx-auto px-4">
                    <RouterLink 
                        to="/successstories" 
                        className="inline-block text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-[#9E0203] transition-colors mb-8"
                    >
                        &larr; Return to Success Stories
                    </RouterLink>
                    
                    <div className="max-w-5xl">
                        <h1 className="text-5xl md:text-8xl font-black text-black uppercase tracking-tighter leading-[0.9] mb-6">
                            {story.StartupName}
                        </h1>
                        <div className="flex flex-wrap items-center gap-6">
                            <div className="px-4 py-2 bg-[#9E0203] text-white text-[10px] font-black uppercase tracking-[0.2em]">
                                Featured Venture
                            </div>
                            <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">
                                {story.FounderName || "Alumni Founder"}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Core Content: Split Hero - Focused on the "About" as the main text */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div className="relative">
                            <img 
                                src={story.FounderImg || "/assets/default.jpg"} 
                                alt={story.FounderName}
                                className="w-full aspect-[4/5] object-cover shadow-2xl transition-all duration-700" 
                            />
                            {story.FounderLogoImg && (
                                <div className="absolute -bottom-8 -right-8 bg-white p-6 shadow-xl border border-gray-100 hidden md:block">
                                    <img src={story.FounderLogoImg} alt="Logo" className="h-12 object-contain" />
                                </div>
                            )}
                        </div>
                        
                        <div className="space-y-8 pt-4">
                            <div className="relative">
                                <span className="text-[#9E0203] font-black uppercase tracking-widest text-[10px] block mb-4">The Journey</span>
                                <h2 className="text-2xl md:text-4xl font-bold text-gray-800 leading-relaxed">
                                    {story.StartupAbout}
                                </h2>
                            </div>
                            
                            <div className="h-1 w-20 bg-gray-100"></div>
                            
                            <div className="flex items-center gap-4 text-gray-400">
                                <div className="w-8 h-[1px] bg-gray-300"></div>
                                <span className="text-[10px] font-black uppercase tracking-widest">End of Report</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom Navigation */}
            <div className="mt-20 text-center">
                <RouterLink 
                    to="/success" 
                    className="inline-block border-b-2 border-gray-200 py-2 font-black uppercase tracking-widest text-xs text-gray-400 hover:text-black hover:border-black transition-all"
                >
                    Explore More Stories
                </RouterLink>
            </div>
        </main>
    );
};

export default StoryDetails;
