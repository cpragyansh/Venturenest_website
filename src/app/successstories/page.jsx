// "use client";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { ArrowRight, FormatQuote } from "@mui/icons-material";

// --- Components ---

const SectionHeader = () => (
  <motion.header
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className="relative flex flex-col items-center text-center max-w-4xl mx-auto pt-12 mb-16 px-6"
  >
    {/* Subtle Background Blob */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-b from-[#A40C1A]/5 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

    <h1
      className={`text-4xl md:text-5xl font-bold text-[#A40C1A] mb-4`}
      style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}
    >
      Success Stories
    </h1>
    <p
      className={`text-lg text-gray-600 max-w-xl leading-relaxed`}
      style={{ fontFamily: 'var(--font-reading)' }}
    >
      Celebrating the trailblazers who transformed ideas into impact.
      Read the journeys of our most successful ventures.
    </p>
  </motion.header>
);

const SuccessStoryCard = ({ story, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col h-full bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-gray-100 relative"
    >
      {/* Image Container */}
      <Link to={`/success/${story._id}`} className="relative block h-72 overflow-hidden">
        <motion.img
          src={story.FounderImg || "/assets/default.jpg"}
          alt={story.StartupName}
          className="w-full h-full object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

        {/* Quote Icon Badge */}
        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full text-white border border-white/30">
          <FormatQuote fontSize="small" />
        </div>
      </Link>

      <div className="flex-1 flex flex-col p-8">
        <div className="mb-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#A40C1A] bg-red-50 px-2 py-1 rounded-md">
            Alumni Venture
          </span>
        </div>

        <h3
          className={`text-2xl font-bold leading-tight text-[#1A4880] group-hover:text-[#A40C1A] transition-colors duration-300 mb-3`}
          style={{ fontFamily: 'var(--font-display)' }}
        >
          <Link to={`/success/${story._id}`}>
            {story.StartupName}
          </Link>
        </h3>

        <p
          className={`text-sm leading-relaxed mb-6 line-clamp-3 text-gray-600`}
          style={{ fontFamily: 'var(--font-ui)' }}
        >
          {story.StartupAbout || "A journey of innovation, resilience, and success. Discover how this venture scaled new heights with VentureNest."}
        </p>

        <div className="mt-auto pt-6 border-t border-gray-100">
          <Link
            to={`/success/${story._id}`}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1A4880] hover:text-[#A40C1A] transition-colors duration-300 group/link"
          >
            Read Full Story
            <ArrowRight className="text-lg transform group-hover/link:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </motion.article>
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
    <main className="min-h-screen w-full pb-24" style={{
      color: 'var(--color-foreground)',
    }}>
      <SectionHeader />

      <section className="max-w-[90vw] lg:max-w-7xl mx-auto px-4 md:px-8">
        {loading ? (
          <div className="text-center py-20 text-gray-500">
            Loading stories...
          </div>
        ) : starredStories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {starredStories.map((story, index) => (
              <SuccessStoryCard key={index} story={story} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500">
            No success stories found.
          </div>
        )}
      </section>

    </main>
  );
}
