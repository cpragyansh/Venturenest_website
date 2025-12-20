import React from 'react';
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

export default function JoinUs() {
  return (
    <main className="incubate-page">

      {/* 1. HERO & MISSION (Side by Side) */}
      <section className="section-container">
        <div className="hero-wrapper">

          {/* Left: Title & CTA */}
          <div className="hero-left">
            <h1 className="editorial-title">
              Incubate<br />With Ourselves
            </h1>
            <p className="editorial-subtitle">
              Where Innovation Begins & Entrepreneurs Rise.
            </p>
            <a
              href="https://forms.gle/pPt5qsTXHLEs8pbV9"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial"
            >
              Apply Now <ArrowOutward />
            </a>
          </div>

          {/* Right: The Mission (Moved here) */}
          <div className="hero-right">
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
          </div>

        </div>
      </section>

      {/* 2. ECOSYSTEM - Glassmorphism Cards with Icons */}
      <section className="section-container" style={{ marginTop: 'var(--space-xl)' }}>
        <h2 className="section-header">Our Ecosystem</h2>

        <div className="glass-grid">
          <div className="glass-card">
            <Psychology className="card-icon" />
            <h3 className="card-title">Mentorship</h3>
            <p className="card-desc">Strategic guidance from seasoned entrepreneurs and industry experts who have been there.</p>
          </div>

          <div className="glass-card">
            <MonetizationOn className="card-icon" />
            <h3 className="card-title">Capital</h3>
            <p className="card-desc">Access to seed funding, angel investors, and venture capitalists to back your vision.</p>
          </div>

          <div className="glass-card">
            <Apartment className="card-icon" />
            <h3 className="card-title">Space</h3>
            <p className="card-desc">Modern co-working infrastructure designed to spark productivity and collaboration.</p>
          </div>

          <div className="glass-card">
            <Hub className="card-icon" />
            <h3 className="card-title">Network</h3>
            <p className="card-desc">A powerful network of fellow founders, corporate partners, and alumni.</p>
          </div>
        </div>
      </section>

      {/* 3. WHO WE BACK - Checklist Cards */}
      <section className="section-container" style={{ marginTop: 'var(--space-xl)' }}>
        <h2 className="section-header">Who We Back</h2>
        <div className="checklist-grid">
          {[
            "Aspiring student entrepreneurs with big ideas",
            "Early-stage startups seeking traction",
            "Growth-focused teams solving real problems",
            "Innovators in AI, Healthtech, Edtech, & Sustainability"
          ].map((item, index) => (
            <div key={index} className="check-card">
              <CheckCircle sx={{ color: 'var(--color-primary)', fontSize: 28 }} />
              <span className="check-text">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PROCESS - Tree / Timeline */}
      <section className="section-container" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-xl)' }}>
        <h2 className="section-header">The Process</h2>

        <div className="timeline-container">
          <div className="timeline-line"></div>

          <div className="timeline-node">
            <div className="timeline-circle">1</div>
            <div className="timeline-content">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <HowToReg sx={{ color: 'var(--color-primary)' }} />
                <h3 className="timeline-title" style={{ margin: 0 }}>Application</h3>
              </div>
              <p className="card-desc">Submit your initial concept via our online portal.</p>
            </div>
          </div>

          <div className="timeline-node">
            <div className="timeline-circle">2</div>
            <div className="timeline-content">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <Assessment sx={{ color: 'var(--color-primary)' }} />
                <h3 className="timeline-title" style={{ margin: 0 }}>Evaluation</h3>
              </div>
              <p className="card-desc">Screening by our investment committee and internal experts.</p>
            </div>
          </div>

          <div className="timeline-node">
            <div className="timeline-circle">3</div>
            <div className="timeline-content">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <RocketLaunch sx={{ color: 'var(--color-primary)' }} />
                <h3 className="timeline-title" style={{ margin: 0 }}>Onboarding</h3>
              </div>
              <p className="card-desc">Formal induction into the cohort and resource allocation.</p>
            </div>
          </div>

        </div>

        <div style={{ marginTop: 'var(--space-lg)', textAlign: 'center' }}>
          <a
            href="https://forms.gle/pPt5qsTXHLEs8pbV9"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-editorial"
            style={{ width: 'fit-content' }}
          >
            Start Your Journey
          </a>
        </div>
      </section>
    </main>
  );
}
