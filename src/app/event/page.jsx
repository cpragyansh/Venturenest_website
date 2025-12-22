// "use client";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

// --- Design System Utilities ---
// Mapping visual hierarchy to opacity instead of color
const TEXT_PRIMARY = "opacity-100";
const TEXT_SECONDARY = "opacity-70";
const TEXT_TERTIARY = "opacity-50";

// --- Components ---
// I want the Header section to bit closer to top

const SectionHeader = () => (
  <motion.header
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className="relative flex flex-col items-center text-center max-w-4xl mx-auto -mt-40 mb-24 px-6 "
  >
    {/* Subtle Background Blob */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-b from-[#A40C1A]/5 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

    <h1
      className={`text-3xl md:text-3xl lg:text-5xl mb-4 ${TEXT_PRIMARY}`}
      style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.02em', fontWeight: 400 }}
    >
      Events
    </h1>
    <p
      className={`text-lg md:text-xl max-w-2xl leading-relaxed ${TEXT_SECONDARY}`}
      style={{ fontFamily: 'var(--font-reading)' }}
    >
      Curated experiences for the entrepreneurial mind.
      Connect, learn, and grow with our ecosystem.
    </p>
  </motion.header>
);

const FilterTabs = ({ selectedMonth, setSelectedMonth, selectedYear, setSelectedYear, events }) => {
  const years = ["", ...new Set(events.map(e => new Date(e.eventDate).getFullYear()))];
  const months = [
    { val: "", label: "All Months" },
    ...Array.from({ length: 12 }, (_, i) => ({
      val: String(i + 1).padStart(2, "0"),
      label: new Date(2000, i).toLocaleString("default", { month: "long" })
    }))
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-24 px-6"
    >
      {/* Year Filter */}
      <div className="flex gap-6 overflow-x-auto pb-2 no-scrollbar">
        {years.map(year => (
          <button
            key={year || "all"}
            onClick={() => setSelectedYear(year ? String(year) : "")}
            className={`relative pb-1 transition-all duration-300 ease-out text-sm uppercase tracking-widest ${String(selectedYear) === String(year) ? TEXT_PRIMARY : TEXT_TERTIARY
              }`}
            style={{ fontFamily: 'var(--font-ui)' }}
          >
            {year || "All Years"}
            {String(selectedYear) === String(year) && (
              <motion.div layoutId="year-underline" className="absolute bottom-0 left-0 right-0 h-px bg-current" />
            )}
          </button>
        ))}
      </div>

      <div className={`hidden md:block w-px h-4 bg-current ${TEXT_TERTIARY}`} />

      {/* Month Filter */}
      <div className="group relative">
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          className={`appearance-none bg-transparent border-b border-current pb-1 pr-8 text-sm uppercase tracking-widest cursor-pointer outline-none focus:opacity-100 transition-opacity ${selectedMonth ? TEXT_PRIMARY : TEXT_SECONDARY
            }`}
          style={{ fontFamily: 'var(--font-ui)' }}
        >
          {months.map((m) => (
            <option key={m.val} value={m.val} className="text-black bg-white">
              {m.label}
            </option>
          ))}
        </select>
        <span className={`pointer-events-none absolute right-0 bottom-1.5 text-[0.6em] transform rotate-90 ${TEXT_TERTIARY}`}>▶</span>
      </div>
    </motion.div>
  );
};
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
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col h-full bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-gray-100"
    >
      {/* Image Container */}
      <Link to={`/Events/${createSlug(event.eventName)}`} className="relative block h-64 overflow-hidden">
        <motion.img
          src={event.imageUrl}
          alt={event.eventName}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-700 ease-out will-change-transform grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105"
        />
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

        {/* Floating Date Badge */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-xl shadow-lg flex flex-col items-center min-w-[60px]">
          <span className="text-xs font-bold text-[#A40C1A] uppercase tracking-wider">{month}</span>
          <span className="text-xl font-bold text-gray-900 leading-none">{day}</span>
          <span className="text-[10px] text-gray-500 font-medium">{year}</span>
        </div>
      </Link>

      {/* Content */}
      <div className="flex-1 flex flex-col p-8">
        <h3
          className={`text-2xl mb-3 leading-tight text-[#A40C1A] group-hover:text-[#1A4880] transition-colors duration-300 ${TEXT_PRIMARY}`}
          style={{ fontFamily: 'var(--font-display)' }}
        >
          <Link to={`/Events/${createSlug(event.eventName)}`}>
            {event.eventName}
          </Link>
        </h3>

        <p
          className={`text-sm leading-relaxed mb-6 line-clamp-3 text-gray-600`}
          style={{ fontFamily: 'var(--font-ui)' }}
        >
          {event.eventDescription || event.eventTitle}
        </p>

        <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-6">
          <Link
            to={`/Events/${createSlug(event.eventName)}`}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1A4880] hover:text-[#A40C1A] transition-colors duration-300 group/link"
            style={{ fontFamily: 'var(--font-ui)' }}
          >
            Read Details
            <span className="transform group-hover/link:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

const SkeletonCard = () => (
  <div className="flex flex-col h-full animate-pulse">
    {/* Image Placeholder */}
    <div className="mb-6 aspect-[4/3] bg-gray-200/50 w-full" />

    {/* Meta Data Placeholder */}
    <div className="flex gap-3 mb-3">
      <div className="h-3 w-24 bg-gray-200 rounded" />
    </div>

    {/* Content Placeholders */}
    <div className="flex-1 flex flex-col justify-start space-y-4">
      <div className="h-8 w-3/4 bg-gray-200 rounded" />
      <div className="space-y-2">
        <div className="h-4 w-full bg-gray-200 rounded" />
        <div className="h-4 w-full bg-gray-200 rounded" />
        <div className="h-4 w-2/3 bg-gray-200 rounded" />
      </div>

      <div className="mt-auto pt-4">
        <div className="h-3 w-20 bg-gray-200 rounded" />
      </div>
    </div>
  </div>
);

const SkeletonGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
    {[...Array(6)].map((_, i) => (
      <SkeletonCard key={i} />
    ))}
  </div>
);

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    timerComponents.push(
      <div key={interval} className="flex flex-col items-center mx-2 md:mx-4">
        <span className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
          {timeLeft[interval] < 10 ? `0${timeLeft[interval]}` : timeLeft[interval]}
        </span>
        <span className="text-xs uppercase tracking-widest text-gray-400 mt-2">{interval}</span>
      </div>
    );
  });

  return (
    <div className="flex justify-center md:justify-start mt-8">
      {timerComponents.length ? timerComponents : <span className="text-xl">Event Started!</span>}
    </div>
  );
};

const UpcomingEvents = ({ events }) => {
  let upcomingEvent = events
    .filter(event => new Date(event.eventDate) > new Date())
    .sort((a, b) => new Date(a.eventDate) - new Date(b.eventDate))[0];

  // Fallback Gimmick Data if no future event exists
  if (!upcomingEvent) {
    const nextMonth = new Date();
    nextMonth.setDate(nextMonth.getDate() + 74); // 2 weeks from now

    upcomingEvent = {
      eventName: "VentureNest Prerna 2.0",
      eventDate: nextMonth.toISOString(),
      imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2670&auto=format&fit=crop",
      eventDescription: "On the Occasion of Women's Day Join world's leading Women innovators, investors, and entrepreneurs for a 2-day immersive experience redefining the future of startups. Featuring keynotes from industry giants and exclusive networking opportunities.",
      eventTitle: "The Future of Entrepreneurship"
    };
  }

  const createSlug = (name) => {
    return name
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };


  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative w-full rounded-3xl overflow-hidden shadow-2xl mb-24 bg-[#0a0a0a]"
    >
      {/* Background Gradient & Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#A40C1A] via-black to-[#1A4880] opacity-80" />
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#A40C1A] rounded-full blur-[128px] opacity-40 animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#1A4880] rounded-full blur-[128px] opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center p-8 md:p-16 gap-12 text-white">

        {/* Visual Content */}
        <div className="w-full md:w-1/2 relative group">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(255,255,255,0.1)]">
            <motion.img
              src={upcomingEvent.imageUrl}
              alt={upcomingEvent.eventName}
              className="w-full h-full object-cover aspect-video transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          </div>
          <div className="absolute -z-10 top-4 -right-4 w-full h-full border border-white/20 rounded-2xl"></div>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="inline-block px-4 py-1 rounded-full border border-[#f2a365] text-[#f2a365] text-xs font-bold tracking-[0.2em] uppercase mb-6 shadow-[0_0_15px_rgba(242,163,101,0.3)]">
            Next Major Event
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-4 font-display leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
            {upcomingEvent.eventName}
          </h2>

          <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto md:mx-0 font-light leading-relaxed">
            {upcomingEvent.eventDescription ? (upcomingEvent.eventDescription.length > 150 ? upcomingEvent.eventDescription.substring(0, 150) + "..." : upcomingEvent.eventDescription) : upcomingEvent.eventTitle}
          </p>

          <Countdown targetDate={upcomingEvent.eventDate} />

          <div className="mt-10">
            <Link
              to={`/Events/${createSlug(upcomingEvent.eventName)}`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-[#f2a365] transition-all duration-300 rounded-sm hover:shadow-[0_0_30px_rgba(242,163,101,0.5)] transform hover:-translate-y-1"
            >
              Reserve Your Spot
              <span className="text-lg">→</span>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const EventsGrid = ({ events, loading }) => {
  if (loading) {
    return <SkeletonGrid />;
  }

  if (events.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="text-center py-20"
      >
        <p className={`text-lg ${TEXT_TERTIARY}`} style={{ fontFamily: 'var(--font-ui)' }}>
          No events found matching your criteria.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
      {events.map((event, index) => (
        <EventCard key={event._id} event={event} index={index} />
      ))}
    </div>
  );
};

export default function Events() {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
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
    if (!selectedMonth && !selectedYear) {
      setFilteredEvents(events);
    } else {
      const filtered = events.filter((event) => {
        const date = new Date(event.eventDate);
        const eventMonth = (date.getMonth() + 1).toString().padStart(2, "0");
        const eventYear = date.getFullYear().toString();
        const monthMatch = selectedMonth ? selectedMonth === eventMonth : true;
        const yearMatch = selectedYear ? selectedYear === eventYear : true;
        return monthMatch && yearMatch;
      });
      setFilteredEvents(filtered);
    }
  }, [selectedMonth, selectedYear, events]);

  return (
    <main className="min-h-screen w-full pb-32" style={{
      backgroundColor: 'var(--color-bg-main)',
      color: 'var(--color-foreground)',
      paddingTop: 'calc(var(--space-xl) * 1.5)'
    }}>
      <SectionHeader />

      <section className="max-w-[90vw] lg:max-w-7xl mx-auto px-4 md:px-8">
        <UpcomingEvents events={events} />

        <FilterTabs
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
          events={events}
        />

        <EventsGrid events={filteredEvents} loading={loading} />
      </section>
    </main>
  );
}
