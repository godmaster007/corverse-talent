import React from 'react';
import Hero from '../components/Hero.jsx';
import { Link } from 'react-router-dom';

const Candidates = () => {
  return (
    <div className="page fade-in">
      <Hero 
        eyebrow="For Candidates"
        title="Your Next Role, Elevated."
        lead="Corverse Talent helps talented professionals find opportunities with companies that value expertise, ambition, and long-term impact. We focus on roles that offer thoughtful growth, strong culture, and meaningful work. Our candidate experience is personal, transparent, and built around your goals."
        primaryCta="Submit Your Resume"
        primaryLink="/contact"
      />

      <section style={{ marginTop: '6rem' }}>
        <span className="eyebrow">The Process</span>
        <h2>How It Works</h2>
        
        <div className="feature-grid">
          <div className="feature-card">
            <h3>1. Connect</h3>
            <p>Submit your resume or connect with our team.</p>
          </div>
          <div className="feature-card">
            <h3>2. Review</h3>
            <p>We review your experience and career priorities.</p>
          </div>
          <div className="feature-card">
            <h3>3. Match</h3>
            <p>We match you with roles that align to your expertise and ambition.</p>
          </div>
          <div className="feature-card">
            <h3>4. Guide</h3>
            <p>We guide you through interviews, offers, and transitions.</p>
          </div>
        </div>
      </section>

      <section style={{ marginTop: '8rem' }}>
        <div className="hero-panel-card">
          <span className="eyebrow">The Standard</span>
          <h2>What You Can Expect</h2>
          <ul style={{ marginTop: '2rem', fontSize: '1.125rem' }}>
            <li><strong>Tailored opportunities</strong> at premium organizations</li>
            <li><strong>A respectful, confidential</strong> process</li>
            <li><strong>Clear communication</strong> and dedicated support</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Candidates;
