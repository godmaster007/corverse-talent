import React from 'react';

const Careers = () => {
  return (
    <div className="page careers-page">
      {/* Careers Hero Section */}
      <section className="careers-hero">
        <span className="eyebrow">Corverse Careers</span>
        <h1 className="careers-title">Make Your Next Move Count</h1>
        <p className="careers-lead">
          Apply now to join a company that is building what's next
        </p>
      </section>

      {/* Open Positions — Powered by Recruiterflow */}
      <section className="opportunities-section">
        <div className="section-header">
          <h2>Explore Opportunities</h2>
          <p className="section-subtitle">
            Browse our open positions and apply directly through our careers portal.
          </p>
        </div>

        <div className="careers-portal-cta">
          <div className="careers-portal-card">
            <div className="portal-icon-wrapper" aria-hidden="true">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                <line x1="12" y1="12" x2="12" y2="16" />
                <line x1="10" y1="14" x2="14" y2="14" />
              </svg>
            </div>
            <h3>View All Open Positions</h3>
            <p>
              We are always looking for exceptional talent. Explore our current openings and find the role where you'll make the biggest impact.
            </p>
            <a
              href="https://recruiterflow.com/db_c4c144dfa5408eecf4b2df24cf4e7ae2/jobs"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-primary careers-portal-btn"
            >
              Browse Open Roles
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
