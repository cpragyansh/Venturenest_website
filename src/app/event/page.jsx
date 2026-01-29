"use client";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

// --- Design System Utilities ---
const TEXT_PRIMARY = "text-black";
const TEXT_SECONDARY = "text-gray-600";
const BRAND_RED = "#9E0203";

// Shared Utility
const createSlug = (name) => {
  if (!name) return "";
  return name
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

const EventCard = ({ event, index }) => {
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
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return {
      day: date.getDate(),
      month: date.toLocaleString("default", { month: "long" }).toUpperCase(),
      time: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      venue: "CGC MAIN AUDITORIUM",
      year: date.getFullYear()
    };
  };

  const { day, month, time, venue, year } = formatDate(event.eventDate);

  return (
    <div className="container mx-auto px-4 -mt-20 relative z-20">
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="bg-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] flex flex-col lg:flex-row overflow-hidden border border-gray-100"
      >
        {/* Visual Partition */}
        <div className="w-full lg:w-1/2 relative h-[350px] lg:h-auto overflow-hidden group">
          <img 
            src={event.imageUrl} 
            alt={event.eventName}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:hidden"></div>
          <div className="absolute bottom-6 left-6 lg:hidden">
            <span className="bg-[#9E0203] text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest">Featured</span>
          </div>
        </div>

        {/* Content Partition */}
        <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-[#9E0203] font-black uppercase tracking-[0.3em] text-[10px]">Upcoming Event</span>
              <div className="h-[1px] flex-1 bg-gray-100"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black font-jakarta text-black uppercase tracking-tighter leading-none">
              {event.eventName}
            </h2>
            
            <p className="text-gray-500 font-medium leading-relaxed italic">
              — {event.eventDescription || event.eventTitle}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-gray-50">
              <div className="space-y-1">
                <div className="text-gray-300 text-[9px] font-black uppercase tracking-widest">Date</div>
                <div className="text-black font-bold uppercase">{month} {day}, {year}</div>
              </div>
              <div className="space-y-1">
                <div className="text-gray-300 text-[9px] font-black uppercase tracking-widest">Time</div>
                <div className="text-black font-bold lowercase">{time}</div>
              </div>
              <div className="space-y-1 col-span-2 md:col-span-1">
                <div className="text-gray-300 text-[9px] font-black uppercase tracking-widest">Location</div>
                <div className="text-black font-bold uppercase truncate">{venue}</div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-6">
            <Link 
              to={`/Events/${createSlug(event.eventName)}`}
              className="bg-black text-white px-10 py-4 font-black uppercase tracking-widest hover:bg-[#9E0203] transition-all flex items-center gap-3 active:scale-95"
            >
              Reserve Seat <span>→</span>
            </Link>
            <div className="flex -space-x-3 items-center">
               {[1,2,3].map(i => (
                 <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/32?u=${i}`} alt="Attendee" />
                 </div>
               ))}
               <span className="pl-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">+84 Attending</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [selectedYear, setSelectedYear] = useState("");
  const [statusFilter, setStatusFilter] = useState("all"); // all, upcoming, past
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("https://venture-nest-backend.onrender.com/events");
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
    const now = new Date();

    // Status Filter
    if (statusFilter === "upcoming") {
      result = result.filter(e => new Date(e.eventDate) >= now);
    } else if (statusFilter === "past") {
      result = result.filter(e => new Date(e.eventDate) < now);
    }

    // Search Filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(e => 
        (e.eventName && e.eventName.toLowerCase().includes(query)) || 
        (e.eventDescription && e.eventDescription.toLowerCase().includes(query)) ||
        (e.eventTitle && e.eventTitle.toLowerCase().includes(query))
      );
    }

    // Year Filter
    if (selectedYear) {
      result = result.filter(e => {
        const date = new Date(e.eventDate);
        return !isNaN(date) && date.getFullYear().toString() === selectedYear;
      });
    }

    // Sorting
    result.sort((a, b) => {
      const dateA = new Date(a.eventDate);
      const dateB = new Date(b.eventDate);
      if (isNaN(dateA)) return 1;
      if (isNaN(dateB)) return -1;
      return sortBy === "newest" ? dateB - dateA : dateA - dateB;
    });

    setFilteredEvents(result);
  }, [selectedYear, statusFilter, searchQuery, sortBy, events]);

  // Force Featured Event to PRERNA 2.0 as requested
  const upcomingEvent = {
    eventName: "PRERNA 2.0",
    eventDate: "2026-03-08T10:00:00Z",
    imageUrl: "/assets/prerna_2.png",
    eventDescription: "A premier Women Empowerment Summit at Venturenest, celebrating the resilience and visionary spirit of women founders who are redefining the global startup landscape.",
    eventTitle: "Women Empowerment Summit"
  };

  const years = ["", ...new Set(events.map(e => {
    const d = new Date(e.eventDate);
    return isNaN(d) ? null : d.getFullYear().toString();
  }).filter(Boolean))].sort().reverse();

  return (
    <div className="min-h-screen bg-white font-jakarta">
      {/* 1. MAJESTIC TITLE CARD (HERO) */}
      <header className="relative bg-black py-24 overflow-hidden border-b-[16px] border-[#9E0203]">
        {/* Cinematic Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2670&auto=format&fit=crop" 
            alt="Event Atmosphere" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
          <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:32px_32px] opacity-5"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-3">
              <div className="w-10 h-[1px] bg-[#9E0203]"></div>
              <span className="text-[#9E0203] font-black uppercase tracking-[0.5em] text-[10px]">Registry & Archive</span>
              <div className="w-10 h-[1px] bg-[#9E0203]"></div>
            </div>
            
            <h1 className="text-white text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none select-none">
              EVENT <br />
              <span className="text-[#9E0203] italic">CHRONICLE</span>
            </h1>
            
            <p className="text-gray-400 font-bold uppercase tracking-widest text-[9px] max-w-lg mx-auto leading-loose pt-4 opacity-80">
               Documenting the evolution of radical entrepreneurship <br /> at Venturenest.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-30">
           <div className="w-[1px] h-8 bg-gradient-to-t from-[#9E0203] to-transparent"></div>
        </div>
      </header>

      {/* 2. UPCOMING EVENT CARD (Separated) */}
      <UpcomingEventBlock event={upcomingEvent} />

      {/* 3. FILTER & GRID - UX Friendly Console */}
      <section className="py-24 bg-gray-50 border-t border-gray-200 mt-20 scroll-mt-20" id="archive">
        <div className="container mx-auto px-4">
          <div className="flex flex-col space-y-12 mb-20">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
              <div className="space-y-3">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-[2px] bg-[#9E0203]"></div>
                    <span className="text-[#9E0203] font-black uppercase tracking-[0.4em] text-[10px]">Registry</span>
                 </div>
                 <h2 className="text-5xl md:text-6xl font-black font-jakarta text-black uppercase tracking-tighter">Event Archive</h2>
              </div>
              
              <div className="relative w-full lg:w-[450px] group">
                <input 
                  type="text" 
                  placeholder="SEARCH FOR EVENTS..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border-2 border-gray-200 p-5 pl-14 text-[10px] font-black tracking-widest uppercase focus:outline-none focus:border-black transition-all placeholder:text-gray-300 shadow-sm"
                />
                <div className="absolute left-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-300 group-focus-within:text-[#9E0203] transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 border border-gray-100 shadow-xl rounded-sm">
                <div className="flex flex-col xl:flex-row items-center justify-between gap-10">
                    
                    <div className="flex flex-wrap items-center gap-10 w-full xl:w-auto">
                        {/* Status Toggle */}
                        <div className="flex flex-col gap-2">
                            <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Event Status</span>
                            <div className="flex bg-gray-50 p-1.5 rounded-sm border border-gray-100">
                                {["all", "upcoming", "past"].map((status) => (
                                  <button 
                                    key={status}
                                    onClick={() => setStatusFilter(status)}
                                    className={`px-6 py-2.5 text-[9px] font-black uppercase tracking-widest transition-all rounded-sm ${statusFilter === status ? 'bg-black text-white shadow-xl' : 'text-gray-400 hover:text-black'}`}
                                  >
                                    {status}
                                  </button>
                                ))}
                            </div>
                        </div>

                        {/* Year Selection */}
                        <div className="flex flex-col gap-2 w-full md:w-56">
                           <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Archive Year</label>
                           <div className="relative">
                            <select 
                              value={selectedYear}
                              onChange={(e) => setSelectedYear(e.target.value)}
                              className="w-full bg-gray-50 border border-gray-100 px-5 py-3 text-[10px] font-black uppercase tracking-widest focus:border-black outline-none appearance-none cursor-pointer pr-10 hover:bg-white transition-colors"
                            >
                              <option value="">ALL YEARS</option>
                              {years.filter(y => y !== "").map(y => <option key={y} value={y}>{y}</option>)}
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                              <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth={3}/></svg>
                            </div>
                           </div>
                        </div>

                        {/* Sorting Toggle */}
                        <div className="flex flex-col gap-2">
                            <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Chronology</span>
                            <div className="flex bg-gray-50 p-1.5 rounded-sm border border-gray-100">
                                <button 
                                  onClick={() => setSortBy("newest")}
                                  className={`px-8 py-2.5 text-[9px] font-black uppercase tracking-widest transition-all rounded-sm ${sortBy === "newest" ? 'bg-black text-white shadow-xl translate-z-10' : 'text-gray-400 hover:text-black'}`}
                                >
                                  Recent
                                </button>
                                <button 
                                  onClick={() => setSortBy("oldest")}
                                  className={`px-8 py-2.5 text-[9px] font-black uppercase tracking-widest transition-all rounded-sm ${sortBy === "oldest" ? 'bg-black text-white shadow-xl' : 'text-gray-400 hover:text-black'}`}
                                >
                                  Oldest
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Meta Data & Reset */}
                    <div className="flex items-center gap-10 w-full xl:w-auto border-t xl:border-t-0 xl:border-l border-gray-100 pt-8 xl:pt-0 xl:pl-10">
                        <div className="flex flex-col items-center md:items-end gap-1">
                            <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Showing</span>
                            <div className="text-3xl font-black text-black leading-none">
                              {filteredEvents.length} <span className="text-gray-200">/ {events.length}</span>
                            </div>
                        </div>

                        {(selectedYear || searchQuery || statusFilter !== "all") && (
                          <button 
                            onClick={() => { setSelectedYear(""); setSearchQuery(""); setStatusFilter("all"); }}
                            className="bg-gray-100 text-[#9E0203] p-3 rounded-full hover:bg-[#9E0203] hover:text-white transition-all shadow-md group border border-transparent hover:border-[#9E0203]"
                            title="Reset All Filters"
                          >
                            <svg className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}><path d="M6 18L18 6M6 6l12 12"/></svg>
                          </button>
                        )}
                    </div>
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
