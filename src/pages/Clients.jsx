import React from 'react';
import Hero from '../components/Hero.jsx';
import { Link } from 'react-router-dom';

const Clients = () => {
  return (
    <div className="page fade-in">
      <Hero 
        eyebrow="For Clients"
        title="Talent Designed for Critical Moments."
        lead="When your company needs exceptional people quickly, Corverse Talent delivers with precision and confidence. Our recruitment methodology is built for speed without sacrificing fit."
        primaryCta="Talk to Our Team"
        primaryLink="/contact"
      />

      <section style={{ marginTop: '6rem' }}>
        <span className="eyebrow">Our Methodology</span>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Discovery</h3>
            <p>We start with a deep understanding of your business, team, and hiring mandate.</p>
          </div>
          <div className="feature-card">
            <h3>Search</h3>
            <p>We source elite candidates through proprietary networks and sector-specialized outreach.</p>
          </div>
          <div className="feature-card">
            <h3>Vetting</h3>
            <p>Every candidate is assessed for skills, culture fit, and long-term potential.</p>
          </div>
          <div className="feature-card">
            <h3>Delivery</h3>
            <p>We present a refined shortlist and support you through decisions and offers.</p>
          </div>
          <div className="feature-card">
            <h3>Contact Us</h3>
            <p>Ready to start a search? Reach out to us directly at <a href="mailto:hello@corversetalent.com" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>hello@corversetalent.com</a> or use our contact form.</p>
          </div>
        </div>
      </section>

      <section style={{ marginTop: '8rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }} className="hero-section">
        <div>
          <h2>Why Work With Us</h2>
          <ul>
            <li>Faster time-to-hire for specialized and senior roles</li>
            <li>A higher-quality talent pool curated for your needs</li>
            <li>Partnership-focused service that aligns with your hiring goals</li>
          </ul>
        </div>
        <div>
          <h2>Results You Can Count On</h2>
          <ul>
            <li>Access to candidates who are not actively applying elsewhere</li>
            <li>A partner that understands both recruiting and business strategy</li>
            <li>A recruitment process that feels premium and efficient</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Clients;
