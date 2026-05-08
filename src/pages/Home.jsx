import React from 'react';
import Hero from '../components/Hero.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="page fade-in">
      <Hero 
        eyebrow="Corverse Talent"
        title="Connecting industry leaders with exceptional talent."
        lead="At Corverse Talent, we make the match that changes the course of your business. We bring boutique precision, global reach, and a modern recruitment experience to every search."
        primaryCta="Work With Us"
        primaryLink="/contact"
      />

      <section className="brand-bar">
        <p>Trusted by ambitious teams and innovative companies.</p>
        <div className="logos" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '2rem' }}>
          <img 
            src={`${import.meta.env.BASE_URL || '/'}images/corverse_logo.jpeg`} 
            alt="Corverse Talent Logo" 
            style={{ maxHeight: '80px', objectFit: 'contain', borderRadius: '8px' }} 
          />
        </div>
      </section>

      <section style={{ marginTop: '6rem' }}>
        <span className="eyebrow">Why Corverse Talent</span>
        <h2>High-end staffing for ambitious organizations.</h2>
        <p>We are the high-end staffing partner for ambitious organizations and ambitious professionals. Our process is personal, our network is deeply rooted in specialized markets, and our focus is always on quality rather than volume.</p>
        
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Boutique Luxury Service</h3>
            <p>Combining technical recruiting expertise with a personalized touch.</p>
          </div>
          <div className="feature-card">
            <h3>Rapid & Reliable</h3>
            <p>Placement for critical roles without sacrificing quality.</p>
          </div>
          <div className="feature-card">
            <h3>Refined Experience</h3>
            <p>A seamless, respectful process for clients and candidates alike.</p>
          </div>
        </div>
      </section>

      <section style={{ marginTop: '8rem' }}>
        <div className="content-grid">
          <div className="service-card">
            <span className="eyebrow">For Clients</span>
            <h2>Find Talent</h2>
            <p>Connect with senior leaders, engineering experts, and specialized talent who shape the future of your business.</p>
            <ul>
              <li>Executive Search for market-moving hires</li>
              <li>Permanent Placement for strategic growth teams</li>
              <li>Technical recruitment designed for precision</li>
            </ul>
            <div style={{ marginTop: '2rem' }}>
              <Link to="/clients" className="cta-link">Hire Top Talent</Link>
            </div>
          </div>

          <div className="service-card">
            <span className="eyebrow">For Candidates</span>
            <h2>Find a Role</h2>
            <p>Advance your career with opportunities that fit your expertise, ambition, and lifestyle. We partner with companies that value thoughtful growth.</p>
            <ul>
              <li>Submit your resume for tailored opportunities</li>
              <li>Receive curated roles only after a personal review</li>
              <li>Enjoy a seamless, respectful hiring experience</li>
            </ul>
            <div style={{ marginTop: '2rem' }}>
              <Link to="/candidates" className="cta-link">Explore Roles</Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{ marginTop: '8rem', textAlign: 'center' }}>
        <span className="eyebrow">Our Promise</span>
        <h2>We don't just fill seats. We build the foundations of great companies.</h2>
        <div className="hero-actions" style={{ justifyContent: 'center', marginTop: '2rem' }}>
          <Link to="/contact" className="button button-primary">Start Your Search</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
