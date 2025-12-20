import React from 'react';
import { motion } from 'framer-motion';
import './incubate.css';
import {
  ArrowOutward,
  Psychology,
  MonetizationOn,
  Apartment,
  Hub,
  CheckCircle,
  HowToReg,
  Assessment,
  RocketLaunch
} from "@mui/icons-material";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const slideRightVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const slideLeftVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const scaleVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "backOut" }
  }
};

export default function JoinUs() {
  return (
    <main className="incubate-page">

      {/* 1. HERO & MISSION (Side by Side) */}
      <section className="section-container">
        <div className="hero-wrapper">

          {/* Left: Title & CTA */}
          <motion.div
            className="hero-left"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1 className="editorial-title" variants={itemVariants}>
              Incubate<br />With Ourselves
            </motion.h1>
            <motion.p className="editorial-subtitle" variants={itemVariants}>
              Where Innovation Begins & Entrepreneurs Rise.
            </motion.p>
            <motion.div variants={itemVariants}>
              <a
                href="https://forms.gle/pPt5qsTXHLEs8pbV9"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial"
              >
                Apply Now <ArrowOutward />
              </a>
            </motion.div>
          </motion.div>

          {/* Right: The Mission (Moved here) */}
          <motion.div
            className="hero-right"
            initial="hidden"
            animate="visible"
            variants={slideLeftVariants}
          >
            <div className="mission-text">
              <p style={{ marginBottom: '1.5rem', fontWeight: 'bold', fontSize: '1.2rem', color: 'var(--color-primary)' }}>
                THE MISSION
              </p>
              <p style={{ marginBottom: '1rem' }}>
                CGC University VentureNest is your ultimate launchpad — an entrepreneurial ecosystem built to support and accelerate innovation, from ideation to execution.
              </p>
              <p>
                Join a dynamic community of changemakers, visionary mentors, and investors ready to fuel your journey. Whether you're a student founder or a growth-stage startup, VentureNest offers everything you need to scale smarter, faster, and stronger.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. ECOSYSTEM - Glassmorphism Cards with Icons */}
      <section className="section-container" style={{ marginTop: 'var(--space-xl)' }}>
        <motion.h2
          className="section-header"
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: 'auto' }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Our Ecosystem
        </motion.h2>

        <motion.div
          className="glass-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="glass-card" variants={scaleVariants}>
            <Psychology className="card-icon" />
            <h3 className="card-title">Mentorship</h3>
            <p className="card-desc">Strategic guidance from seasoned entrepreneurs and industry experts who have been there.</p>
          </motion.div>

          <motion.div className="glass-card" variants={scaleVariants}>
            <MonetizationOn className="card-icon" />
            <h3 className="card-title">Capital</h3>
            <p className="card-desc">Access to seed funding, angel investors, and venture capitalists to back your vision.</p>
          </motion.div>

          <motion.div className="glass-card" variants={scaleVariants}>
            <Apartment className="card-icon" />
            <h3 className="card-title">Space</h3>
            <p className="card-desc">Modern co-working infrastructure designed to spark productivity and collaboration.</p>
          </motion.div>

          <motion.div className="glass-card" variants={scaleVariants}>
            <Hub className="card-icon" />
            <h3 className="card-title">Network</h3>
            <p className="card-desc">A powerful network of fellow founders, corporate partners, and alumni.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* 3. WHO WE BACK - Checklist Cards */}
      <section className="section-container" style={{ marginTop: 'var(--space-xl)' }}>
        <motion.h2
          className="section-header"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Who We Back
        </motion.h2>
        <motion.div
          className="checklist-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            "Aspiring student entrepreneurs with big ideas",
            "Early-stage startups seeking traction",
            "Growth-focused teams solving real problems",
            "Innovators in AI, Healthtech, Edtech, & Sustainability"
          ].map((item, index) => (
            <motion.div key={index} className="check-card" variants={slideRightVariants}>
              <CheckCircle sx={{ color: 'var(--color-primary)', fontSize: 28 }} />
              <span className="check-text">{item}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 4. PROCESS - Tree / Timeline */}
      <section className="section-container" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-xl)' }}>
        <motion.h2
          className="section-header"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          The Process
        </motion.h2>

        <div className="timeline-container">
          <motion.div
            className="timeline-line"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true }}
          ></motion.div>

          {[
            { id: 1, title: 'Application', icon: <HowToReg sx={{ color: 'var(--color-primary)' }} />, text: 'Submit your initial concept via our online portal.' },
            { id: 2, title: 'Evaluation', icon: <Assessment sx={{ color: 'var(--color-primary)' }} />, text: 'Screening by our investment committee and internal experts.' },
            { id: 3, title: 'Onboarding', icon: <RocketLaunch sx={{ color: 'var(--color-primary)' }} />, text: 'Formal induction into the cohort and resource allocation.' }
          ].map((step, idx) => (
            <motion.div
              key={step.id}
              className="timeline-node"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="timeline-circle">{step.id}</div>
              <div className="timeline-content">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  {step.icon}
                  <h3 className="timeline-title" style={{ margin: 0 }}>{step.title}</h3>
                </div>
                <p className="card-desc">{step.text}</p>
              </div>
            </motion.div>
          ))}

        </div>

        <motion.div
          style={{ marginTop: 'var(--space-lg)', textAlign: 'center' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://forms.gle/pPt5qsTXHLEs8pbV9"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-editorial"
            style={{ width: 'fit-content' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Journey
          </motion.a>
        </motion.div>
      </section>
    </main>
  );
}
