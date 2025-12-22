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

const SectionHeader = () => (
  <motion.header
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20 px-6"
  >
    <h1
      className={`text-4xl md:text-5xl lg:text-6xl mb-8 ${TEXT_PRIMARY}`}
      style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.03em', fontWeight: 400 }}
    >
      Events
    </h1>
    <p
      className={`text-lg md:text-xl max-w-xl leading-relaxed ${TEXT_SECONDARY}`}
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
      className="group flex flex-col h-full relative"
    >
      {/* Image Container */}
      <Link to={`/Events/${createSlug(event.eventName)}`} className="block overflow-hidden mb-6 aspect-[4/3] bg-gray-100">
        <motion.img
          src={event.imageUrl}
          alt={event.eventName}
          className="w-full h-full object-cover transition-transform duration-700 ease-out will-change-transform grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105"
        />
      </Link>

      {/* Meta Data */}
      <div className={`flex items-baseline gap-3 mb-3 text-xs tracking-widest uppercase ${TEXT_SECONDARY}`} style={{ fontFamily: 'var(--font-ui)' }}>
        <span>{month} {day}, {year}</span>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-start">
        <h3
          className={`text-2xl mb-4 leading-tight group-hover:underline decoration-1 underline-offset-4 ${TEXT_PRIMARY}`}
          style={{ fontFamily: 'var(--font-display)' }}
        >
          <Link to={`/Events/${createSlug(event.eventName)}`}>
            {event.eventName}
          </Link>
        </h3>

        <p
          className={`text-sm leading-relaxed mb-6 line-clamp-3 ${TEXT_TERTIARY}`}
          style={{ fontFamily: 'var(--font-ui)' }}
        >
          {event.eventDescription || event.eventTitle}
        </p>

        <div className="mt-auto">
          <Link
            to={`/Events/${createSlug(event.eventName)}`}
            className={`inline-block text-xs uppercase tracking-widest border-b border-transparent group-hover:border-current transition-colors duration-300 ${TEXT_PRIMARY}`}
            style={{ fontFamily: 'var(--font-ui)' }}
          >
            Read More
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

const EventsGrid = ({ events }) => {
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

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("https://venturenest.onrender.com/events");
        setEvents(response.data);
        setFilteredEvents(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
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
        <FilterTabs
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
          events={events}
        />

        <EventsGrid events={filteredEvents} />
      </section>
    </main>
  );
}
