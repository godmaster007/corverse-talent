import React from 'react';
import Hero from '../components/Hero.jsx';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="page fade-in">
      <Hero 
        eyebrow="About Us"
        title="We believe the best talent is found through relationships, not algorithms."
        lead="Corverse Talent was founded to bring a new kind of recruitment experience to specialized staffing. Our approach blends boutique care with deep market insight, so our clients and candidates feel confident at every stage."
        panelContent={
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <img 
              src={`${import.meta.env.BASE_URL || '/'}images/corverse_logo.svg`} 
              alt="Corverse Talent Logo" 
              style={{ maxWidth: '80%', maxHeight: '300px', objectFit: 'contain', borderRadius: '12px' }} 
            />
          </div>
        }
      />

      <section style={{ marginTop: '3rem' }}>
        <h2>What Sets Us Apart</h2>
        <p>We invest in understanding your business, culture, and long-term goals before we introduce the first candidate.</p>
        
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Personalized Service</h3>
            <p>Service from senior recruiters with sector expertise.</p>
          </div>
          <div className="feature-card">
            <h3>Selective Network</h3>
            <p>A carefully curated network of executive and sales professionals.</p>
          </div>
          <div className="feature-card">
            <h3>Premium Process</h3>
            <p>A process that perfectly balances speed, discretion, and quality.</p>
          </div>
        </div>
      </section>

      <section style={{ marginTop: '5rem' }}>
        <span className="eyebrow">Our Values</span>
        <div className="service-list">
          <div className="service-card">
            <h3>Trust</h3>
            <p>We earn it with every recommendation and every placement.</p>
          </div>
          <div className="service-card">
            <h3>Alignment</h3>
            <p>We match people to roles where they can thrive.</p>
          </div>
          <div className="service-card">
            <h3>Excellence</h3>
            <p>Our standard is exceptional fit, not volume.</p>
          </div>
        </div>
      </section>

      <section style={{ marginTop: '5rem' }}>
        <div className="hero-panel-card" style={{ textAlign: 'center' }}>
          <span className="eyebrow">Leadership</span>
          <h2>Built by Seasoned Operators</h2>
          <p style={{ margin: '0 auto 2rem', maxWidth: '800px' }}>
            Corverse Talent was built by seasoned recruiters and industry operators who understand both candidate ambition and client expectations. Our team brings clarity, discretion, and a forward-thinking mindset to every engagement.
          </p>
          <Link to="/services" className="button button-primary">Learn About Our Process</Link>
        </div>
      </section>
    </div>
  );
};

export default About;
