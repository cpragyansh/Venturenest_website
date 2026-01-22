"use client";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

// --- Design System Utilities ---
const TEXT_PRIMARY = "text-black";
const TEXT_SECONDARY = "text-gray-600";
const BRAND_RED = "#9E0203";

const EventCard = ({ event, index }) => {
  const createSlug = (name) => {
    return name
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return {
      day: date.getDate(),
      month: date.toLocaleString("default", { month: "short" }).toUpperCase(),
      year: date.getFullYear()
    };
  };

  const { day, month, year } = formatDate(event.eventDate);

  return (
    <article className="group relative bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col overflow-hidden">
      {/* Editorial Marker */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-[#9E0203] flex items-center justify-center text-white z-20">
         <div className="flex flex-col items-center leading-none">
            <span className="text-[10px] font-black tracking-widest">{month}</span>
            <span className="text-2xl font-black">{day}</span>
         </div>
      </div>

      <Link to={`/Events/${createSlug(event.eventName)}`} className="relative block aspect-[4/3] overflow-hidden">
        <img
          src={event.imageUrl}
          alt={event.eventName}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
      </Link>

      <div className="p-8 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-0.5 bg-[#9E0203]"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Venturenest Event</span>
          </div>
          <h3 className="text-2xl font-black font-jakarta text-black uppercase tracking-tighter leading-tight group-hover:text-[#9E0203] transition-colors">
            {event.eventName}
          </h3>
          <p className="text-sm text-gray-600 font-medium line-clamp-2 leading-relaxed">
            {event.eventDescription || event.eventTitle}
          </p>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between">
           <Link
            to={`/Events/${createSlug(event.eventName)}`}
            className="text-[10px] font-black uppercase tracking-[0.3em] text-[#9E0203] hover:text-black transition-colors"
           >
            View Event details →
           </Link>
           <span className="text-[10px] font-black text-gray-300">{year}</span>
        </div>
      </div>
    </article>
  );
};

const UpcomingEventBlock = ({ event }) => {
  if (!event) return null;
  
  const createSlug = (name) => {
    return name
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return {
      day: date.getDate(),
      month: date.toLocaleString("default", { month: "long" }).toUpperCase(),
      time: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      venue: "CGC MAIN AUDITORIUM"
    };
  };

  const { day, month, time, venue } = formatDate(event.eventDate);

  return (
    <div className="container mx-auto px-4 mb-32">
      <div className="relative bg-[#0a0a0a] overflow-hidden group shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
        {/* Background Decorative Text - Agency Style */}
        <div className="absolute top-0 right-0 text-[15rem] font-black text-white/[0.03] leading-none select-none pointer-events-none transform translate-x-1/4 -translate-y-1/4">
          EVENT
        </div>

        <div className="flex flex-col lg:flex-row min-h-[600px]">
          {/* Left Side: Immersive Visual */}
          <div className="w-full lg:w-[55%] relative overflow-hidden h-[400px] lg:h-auto">
             <img 
               src={event.imageUrl} 
               alt={event.eventName} 
               className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent"></div>
             
             {/* Floating Status Badge */}
             <div className="absolute top-8 left-8 flex items-center space-x-3 bg-black/80 backdrop-blur-md px-4 py-2 border border-white/20">
                <div className="w-2 h-2 bg-[#9E0203] rounded-full animate-pulse shadow-[0_0_10px_#9E0203]"></div>
                <span className="text-white text-[10px] font-black uppercase tracking-[0.3em]">Registration Open</span>
             </div>
          </div>

          {/* Right Side: Editorial Content */}
          <div className="w-full lg:w-[45%] p-10 md:p-16 flex flex-col justify-between relative z-10">
             <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-0.5 bg-[#9E0203]"></div>
                  <span className="text-[#9E0203] font-black uppercase tracking-[0.4em] text-xs">Featured Experience</span>
                </div>

                <div className="space-y-4">
                   <h2 className="text-white text-5xl md:text-7xl font-black font-jakarta uppercase tracking-tighter leading-[0.9]">
                      <span className="block">{event.eventName.split(' ')[0]}</span>
                      <span className="block text-white/20 outline-text" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>{event.eventName.split(' ').slice(1).join(' ')}</span>
                   </h2>
                   <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed max-w-md">
                      {event.eventDescription || event.eventTitle}
                   </p>
                </div>

                {/* Technical Meta Grid */}
                <div className="grid grid-cols-2 gap-8 border-y border-white/10 py-8">
                   <div className="space-y-1">
                      <div className="text-white/40 text-[9px] font-black uppercase tracking-widest">Date & Time</div>
                      <div className="text-white font-bold">{month} {day} • {time}</div>
                   </div>
                   <div className="space-y-1">
                      <div className="text-white/40 text-[9px] font-black uppercase tracking-widest">Location</div>
                      <div className="text-white font-bold">{venue}</div>
                   </div>
                </div>
             </div>

             <div className="mt-12">
                <Link to={`/Events/${createSlug(event.eventName)}`} className="group/btn relative inline-flex items-center bg-[#9E0203] text-white px-12 py-5 font-black text-xl uppercase tracking-widest overflow-hidden transition-all hover:bg-white hover:text-black">
                   <span className="relative z-10 flex items-center gap-3">
                      Secure Access <span className="text-2xl group-hover/btn:translate-x-2 transition-transform">→</span>
                   </span>
                </Link>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("https://venturenest.onrender.com/events");
        setEvents(response.data);
        setFilteredEvents(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  useEffect(() => {
    let result = [...events];

    // Search Filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(e => 
        e.eventName.toLowerCase().includes(query) || 
        (e.eventDescription && e.eventDescription.toLowerCase().includes(query)) ||
        (e.eventTitle && e.eventTitle.toLowerCase().includes(query))
      );
    }

    // Month Filter
    if (selectedMonth) {
      result = result.filter(e => {
        const eventMonth = (new Date(e.eventDate).getMonth() + 1).toString().padStart(2, "0");
        return eventMonth === selectedMonth;
      });
    }

    // Year Filter
    if (selectedYear) {
      result = result.filter(e => {
        const eventYear = new Date(e.eventDate).getFullYear().toString();
        return eventYear === selectedYear;
      });
    }

    // Sorting
    result.sort((a, b) => {
      const dateA = new Date(a.eventDate);
      const dateB = new Date(b.eventDate);
      return sortBy === "newest" ? dateB - dateA : dateA - dateB;
    });

    setFilteredEvents(result);
  }, [selectedMonth, selectedYear, searchQuery, sortBy, events]);

  // Force Featured Event to PRERNA 2.0 as requested
  const upcomingEvent = {
    eventName: "PRERNA 2.0",
    eventDate: "2026-03-08T10:00:00Z",
    imageUrl: "/assets/prerna_2.png",
    eventDescription: "A premier Women Empowerment Summit at Venturenest, celebrating the resilience and visionary spirit of women founders who are redefining the global startup landscape.",
    eventTitle: "Women Empowerment Summit"
  };

  const months = [
    { val: "", label: "ALL MONTHS" },
    ...Array.from({ length: 12 }, (_, i) => ({
      val: String(i + 1).padStart(2, "0"),
      label: new Date(2000, i).toLocaleString("default", { month: "short" }).toUpperCase()
    }))
  ];

  const years = ["", ...new Set(events.map(e => new Date(e.eventDate).getFullYear().toString()))].sort().reverse();

  return (
    <div className="min-h-screen bg-white font-jakarta">
      {/* 1. MAJESTIC SPLIT HERO */}
      <section className="relative bg-black py-24 md:py-32 overflow-hidden border-b-[12px] border-[#9E0203]">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#9E0203]/5 skew-x-[-20deg] transform translate-x-1/3 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <div className="w-full md:w-5/12 space-y-8 text-left">
              <div className="flex items-center space-x-4">
                <div className="h-1 bg-[#9E0203] w-12"></div>
                <span className="text-white/60 font-black uppercase tracking-[0.5em] text-[10px]">Upcoming Experiences</span>
              </div>
              <h1 className="text-white text-6xl md:text-8xl font-black font-jakarta uppercase tracking-tighter leading-[0.8]">
                EVENT <br />
                <span className="text-[#9E0203]">CHRONICLE</span>
              </h1>
              <div className="space-y-4">
                <div className="h-1 w-32 bg-white"></div>
                <p className="text-gray-400 text-xl font-bold uppercase tracking-tight leading-snug max-w-md">
                   Curated experiences for the visionary entrepreneurial mind.
                </p>
              </div>
            </div>

            <div className="w-full md:w-7/12 relative">
              <div className="absolute -inset-4 border-2 border-white/5 rounded-3xl translate-x-4 translate-y-4"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)]">
                <img 
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2670&auto=format&fit=crop" 
                  alt="Events Hub" 
                  className="w-full h-full object-cover aspect-[16/9]"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-[#9E0203] p-8 shadow-2xl border-4 border-black">
                 <div className="text-white font-black text-4xl uppercase tracking-tighter leading-none">BEYOND<br/>ACADEMICS</div>
                 <div className="text-white/70 text-[10px] uppercase font-bold tracking-widest mt-2">Connecting Founders</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED EVENT - Majestic Block */}
      <section className="py-24 bg-white overflow-hidden">
        <UpcomingEventBlock event={upcomingEvent} />
      </section>

      {/* 3. FILTER & GRID - UX Friendly Console */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col space-y-12 mb-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="space-y-2">
                 <span className="text-[#9E0203] font-black uppercase tracking-[0.4em] text-[10px] block">Archive</span>
                 <h2 className="text-4xl md:text-5xl font-black font-jakarta text-black uppercase tracking-tighter border-b-4 border-black inline-block pb-2">All Events</h2>
              </div>
              
              {/* Search Bar - Professional & Clean */}
              <div className="relative w-full md:w-96">
                <input 
                  type="text" 
                  placeholder="SEARCH EVENTS..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border-2 border-black p-4 text-[10px] font-black tracking-widest uppercase focus:outline-none focus:bg-black focus:text-white transition-all placeholder:text-gray-300"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-20 group-focus:opacity-100">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                </div>
              </div>
            </div>

            {/* Filter Controls Row */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between border-t border-black/5 pt-8">
              <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                <span className="text-[10px] font-black text-gray-400 mr-2 uppercase tracking-widest hidden lg:block">Filter By:</span>
                
                {/* Year Select */}
                <select 
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="bg-white border border-gray-200 px-4 py-2 text-[10px] font-black uppercase tracking-widest focus:border-black outline-none appearance-none"
                >
                  <option value="">ALL YEARS</option>
                  {years.filter(y => y !== "").map(y => <option key={y} value={y}>{y}</option>)}
                </select>

                {/* Month Select */}
                <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
                   {months.map((month) => (
                     <button 
                      key={month.val}
                      onClick={() => setSelectedMonth(month.val)}
                      className={`whitespace-nowrap px-4 py-2 text-[10px] font-black uppercase tracking-widest transition-all border ${selectedMonth === month.val ? 'bg-black text-white border-black scale-105' : 'bg-white text-gray-400 border-gray-200 hover:border-black hover:text-black'}`}
                     >
                       {month.label}
                     </button>
                   ))}
                </div>
              </div>

              {/* Sort Controls */}
              <div className="flex items-center gap-3 w-full md:w-auto justify-end">
                <span className="text-[10px] font-black text-gray-400 mr-2 uppercase tracking-widest hidden lg:block">Sort:</span>
                <button 
                  onClick={() => setSortBy("newest")}
                  className={`px-4 py-2 text-[10px] font-black uppercase tracking-widest border transition-all ${sortBy === "newest" ? 'bg-[#9E0203] text-white border-[#9E0203]' : 'bg-white text-gray-400 border-gray-200 hover:text-black'}`}
                >
                  NEWEST
                </button>
                <button 
                  onClick={() => setSortBy("oldest")}
                  className={`px-4 py-2 text-[10px] font-black uppercase tracking-widest border transition-all ${sortBy === "oldest" ? 'bg-[#9E0203] text-white border-[#9E0203]' : 'bg-white text-gray-400 border-gray-200 hover:text-black'}`}
                >
                  OLDEST
                </button>
              </div>
            </div>
          </div>

          {loading ? (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
               {[1,2,3].map(i => <div key={i} className="h-[400px] bg-gray-200 animate-pulse"></div>)}
             </div>
          ) : (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
               {filteredEvents.map((event, index) => (
                 <EventCard key={event._id} event={event} index={index} />
               ))}
             </div>
          )}

          {!loading && filteredEvents.length === 0 && (
             <div className="text-center py-24">
                <p className="text-gray-400 font-black uppercase tracking-widest">No events found in this segment.</p>
             </div>
          )}
        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="bg-black py-24 border-t-8 border-[#9E0203]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="text-white space-y-4">
               <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">Have an <span className="text-[#9E0203]">EVENT</span> idea?</h2>
               <p className="text-gray-400 font-bold uppercase tracking-tight text-xl">Partner with us to host your visionary initiative.</p>
            </div>
            <Link to="/contact" className="inline-block bg-[#9E0203] text-white px-12 py-5 font-black text-xl uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-2xl">
              Pitch an Event
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
