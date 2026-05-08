import React from 'react';
import Hero from '../components/Hero.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="page fade-in">
      <Hero 
        eyebrow="Our Services"
        title="Comprehensive recruitment solutions for critical functions."
        lead="We offer specialized staffing solutions designed to meet the exact needs of ambitious organizations."
      />

      <section className="content-grid" style={{ marginTop: '4rem' }}>
        <ServiceCard 
          title="Executive Search"
          description="For leadership hires that define company direction and culture. We identify board-level executives, senior managers, and chief officers who bring influence, vision, and the right strategic fit."
          features={[
            "Discreet searches for high-impact roles",
            "In-depth assessment of leadership capabilities",
            "A selective approach to candidate sourcing and vetting"
          ]}
        />
        
        <ServiceCard 
          title="Permanent Placement"
          description="Staff critical functions with professionals who will contribute immediately and stay for the long term. Our permanent placement service is ideal for teams that need reliable, sustainable hires."
          features={[
            "Technical specialists, experienced operators, and growth-minded professionals",
            "Clear evaluation of fit, skills, and long-term potential",
            "Support across interview, offer, and onboarding stages"
          ]}
        />

        <ServiceCard 
          title="Specialized Technical Roles"
          description="Hire the talent that moves technical initiatives forward—from engineering leaders to niche experts in AI, cloud, data, and product."
          features={[
            "Targeted searches in high-demand technical disciplines",
            "Candidates with proven domain experience and cultural fit",
            "Rapid access to a curated talent pool"
          ]}
        />

        <ServiceCard 
          title="Talent Advisory"
          description="We consult on market intelligence, hiring strategy, and compensation insights to help you make confident talent investments."
          features={[
            "Benchmarking for executive and technical hires",
            "Hiring strategy aligned to growth plans",
            "Market clarity for better decisions"
          ]}
        />
      </section>

      <section style={{ marginTop: '8rem', textAlign: 'center' }}>
        <div className="hero-panel-card">
          <h2>Ready to transform your team?</h2>
          <p style={{ margin: '0 auto 2rem', maxWidth: '600px' }}>
            Let's discuss how we can help you find the talent you need to succeed.
          </p>
          <Link to="/contact" className="button button-primary">Discuss Your Needs</Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
