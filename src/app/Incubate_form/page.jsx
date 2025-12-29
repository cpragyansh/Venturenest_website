import React from 'react';
import { motion } from 'framer-motion';
import './incubate.css';
import { Meteors } from "../Components/ui/Meteors";
import {
  ArrowOutward,
  Psychology,
  MonetizationOn,
  Apartment,
  Hub,
  CheckCircle,
  HowToReg,
  Assessment,
  RocketLaunch,
  School,
  ArrowRight
} from "@mui/icons-material";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
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

const slideLeftVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const scaleVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "backOut" }
  }
};

export default function JoinUs() {
  return (
    <main className="incubate-page">

      {/* Global Background Overlay for Depth & Meteors */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        background: 'rgba(202, 202, 202, 0.25)', /* Translucent dark overlay */
        overflow: 'hidden'
      }}>
        <Meteors number={40} />
      </div>

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

          {/* Right: The Mission / Welcome */}
          <motion.div
            className="hero-right"
            initial="hidden"
            animate="visible"
            variants={slideLeftVariants}
            style={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '1.5rem',
              boxShadow: '0 20px 50px -10px rgba(164, 12, 26, 0.5)'
            }}
          >
            <div
              className="mission-text"
              style={{
                position: 'relative',
                zIndex: 10,
                background: 'linear-gradient(135deg, #a40c1a 0%, #6d0610 100%)',
                padding: '2.5rem',
                borderRadius: '1.5rem',
                border: '1px solid rgba(255,255,255,0.2)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <p style={{ marginBottom: '1rem', fontWeight: 'bold', fontSize: '1.5rem', color: '#fff', fontFamily: 'var(--font-display)' }}>
                WELCOME TO CGC VENTURENEST
              </p>
              <p style={{ marginBottom: '1rem', color: '#f8fafc', fontSize: '1.1rem', lineHeight: '1.6' }}>
                Welcome to CGC University VentureNest – The Innovation Hub for Emerging Startups.
                Looking to transform your startup dream into a thriving business?
              </p>
              <p style={{ marginBottom: '1rem', color: '#f8fafc', fontSize: '1.1rem', lineHeight: '1.6' }}>
                CGC University VentureNest is your ultimate launchpad — an entrepreneurial ecosystem built to support and accelerate innovation, from ideation to execution.
              </p>
              <p style={{ color: '#f8fafc', fontSize: '1.1rem', lineHeight: '1.6' }}>
                Join a dynamic community of changemakers, visionary mentors and investors ready to fuel your journey. Whether you're a student founder or a growth-stage startup, VentureNest offers everything you need to scale smarter, faster and stronger.
              </p>

              <div style={{ marginTop: '2rem' }}>
                <button style={{
                  background: '#fff',
                  border: 'none',
                  color: '#a40c1a',
                  padding: '12px 28px',
                  borderRadius: '9999px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                }}
                  onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 15px rgba(0,0,0,0.3)'; }}
                  onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)'; }}
                >
                  Explore
                </button>
              </div>
            </div>
            <Meteors number={20} />
          </motion.div>

        </div>
      </section>

      {/* 2. ABOUT US (New Section) */}
      <section className="section-container" style={{ marginTop: 'var(--space-lg)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-md)' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-header" style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>About CGC University VentureNest</h2>
            <p className="card-desc" style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
              At VentureNest, we empower startups at every stage — turning ambitious ideas into sustainable ventures.
            </p>
            <p className="card-desc" style={{ fontWeight: '600', marginBottom: '0.5rem' }}>
              Our incubation program is designed to provide:
            </p>
            <ul className="about-list">
              {[
                "Strategic Mentorship from seasoned entrepreneurs and industry experts",
                "Seed Funding & Investor Access to back your vision",
                "Co-working Infrastructure that sparks productivity",
                "Workshops & Training to sharpen your startup skills",
                "Exposure to Ecosystem Networks, events and pitch opportunities"
              ].map((item, i) => (
                <li key={i} className="about-item">
                  <ArrowRight className="about-icon" /> {item}
                </li>
              ))}
            </ul>
            <p className="card-desc" style={{ marginTop: '1rem', fontStyle: 'italic', color: 'var(--color-primary)' }}>
              Our goal is to create future-ready entrepreneurs equipped with the tools, knowledge and confidence to lead the next wave of innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. WHY CHOOSE VENTURENEST (Cards) */}
      <section className="section-container" style={{ marginTop: 'var(--space-lg)' }}>
        <motion.h2
          className="section-header"
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: 'auto' }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Why Choose VentureNest?
        </motion.h2>

        <motion.div
          className="glass-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Card 1 */}
          <motion.div className="glass-card" variants={scaleVariants}>
            <Psychology className="card-icon" />
            <h3 className="card-title">Expert Mentorship</h3>
            <p className="card-desc">Get one-on-one guidance from startup veterans, industry leaders and domain experts.</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div className="glass-card" variants={scaleVariants}>
            <MonetizationOn className="card-icon" />
            <h3 className="card-title">Funding Access</h3>
            <p className="card-desc">Connect with angel investors, venture capitalists and funding bodies to raise capital.</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div className="glass-card" variants={scaleVariants}>
            <Apartment className="card-icon" />
            <h3 className="card-title">World-Class Infrastructure</h3>
            <p className="card-desc">Work in modern, tech-enabled office spaces that support focus, collaboration and creativity.</p>
          </motion.div>

          {/* Card 4 */}
          <motion.div className="glass-card" variants={scaleVariants}>
            <Hub className="card-icon" />
            <h3 className="card-title">Powerful Networking</h3>
            <p className="card-desc">Build valuable connections with fellow founders, investors, alumni and corporate partners.</p>
          </motion.div>

          {/* Card 5 */}
          <motion.div className="glass-card" variants={scaleVariants}>
            <School className="card-icon" />
            <h3 className="card-title">Skill-Building Bootcamps</h3>
            <p className="card-desc">Attend interactive masterclasses, startup workshops and intensive training sessions tailored to your growth stage.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* 4. WHO SHOULD APPLY - Checklist Cards */}
      <section className="section-container" style={{ marginTop: 'var(--space-lg)' }}>
        <motion.h2
          className="section-header"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Who Should Apply?
        </motion.h2>
        <motion.div
          className="checklist-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            "Aspiring student entrepreneurs with big ideas Early-stage startups seeking traction and guidance",
            "Growth-focused teams solving real-world problems",
            "Innovators in tech, AI/ML, sustainability, healthtech, edtech and more",
            "Whether you're at the prototype stage or looking to raise your first round — VentureNest is the place for you."
          ].map((item, index) => (
            <motion.div key={index} className="check-card p-6" variants={scaleVariants}>
              <CheckCircle sx={{ color: 'var(--color-primary)', fontSize: 24, marginRight: '10px', marginTop: '2px' }} />
              <span className="check-text">{item}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 5. PROCESS - Tree / Timeline */}
      <section className="section-container" style={{ marginTop: 'var(--space-lg)', marginBottom: 'var(--space-lg)' }}>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          style={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '1.5rem',
            boxShadow: '0 20px 50px -10px rgba(164, 12, 26, 0.5)'
          }}
        >
          <div style={{
            position: 'relative',
            zIndex: 10,
            background: 'linear-gradient(135deg, #a40c1a 0%, #6d0610 100%)',
            padding: '3rem 2rem',
            borderRadius: '1.5rem',
            border: '1px solid rgba(255,255,255,0.2)'
          }}>

            <motion.h2
              className="section-header"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              style={{ color: '#fff', borderBottomColor: 'rgba(255,255,255,0.2)' }}
            >
              Application Process
            </motion.h2>

            <div className="timeline-container">
              <motion.div
                className="timeline-line"
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                viewport={{ once: true }}
                style={{ background: 'linear-gradient(to bottom, #fff, rgba(255,255,255,0.2))' }}
              ></motion.div>

              {[
                { id: 1, title: 'Submit Your Application', icon: <HowToReg sx={{ color: '#a40c1a' }} />, text: 'Fill out our simple online form.' },
                { id: 2, title: 'Screening & Evaluation', icon: <Assessment sx={{ color: '#a40c1a' }} />, text: 'We review and invite top candidates for interviews.' },
                { id: 3, title: 'Selection & Onboarding', icon: <RocketLaunch sx={{ color: '#a40c1a' }} />, text: 'Join our program and start your journey.' }
              ].map((step, idx) => (
                <motion.div
                  key={step.id}
                  className="timeline-node"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2, duration: 0.5 }}
                >
                  <div className="timeline-circle" style={{ background: '#fff', borderColor: '#fff', color: '#a40c1a' }}>{step.id}</div>
                  <div className="timeline-content" style={{ background: 'rgba(255,255,255,0.95)', border: 'none', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      {step.icon}
                      <h3 className="timeline-title" style={{ margin: 0, fontSize: '1.1rem', color: '#a40c1a' }}>{step.title}</h3>
                    </div>
                    <p className="card-desc" style={{ fontSize: '1rem', color: '#333' }}>{step.text}</p>
                  </div>
                </motion.div>
              ))}

            </div>

            <motion.div
              style={{ marginTop: '3rem', textAlign: 'center' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="https://forms.gle/pPt5qsTXHLEs8pbV9"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial"
                style={{
                  width: 'fit-content',
                  background: '#fff',
                  color: '#a40c1a',
                  fontWeight: 'bold',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                }}
                whileHover={{ scale: 1.05, backgroundColor: '#fff', boxShadow: '0 6px 20px rgba(0,0,0,0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Journey
              </motion.a>
            </motion.div>

          </div>
          <Meteors number={20} />
        </motion.div>
      </section>
    </main>
  );
}
