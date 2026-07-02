import React, { useEffect } from 'react';

const Careers = () => {
  useEffect(() => {
    // iFrameResizer is loaded globally via index.html.
    // We call it after the component mounts to auto-resize the Recruiterflow widget.
    if (window.iFrameResize) {
      window.iFrameResize({ log: false }, '#recruiterflow-jobs-iframe');
    }
  }, []);

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
            Browse our open positions below and apply directly.
          </p>
        </div>

        <div className="recruiterflow-widget-wrapper">
          <iframe
            scrolling="yes"
            id="recruiterflow-jobs-iframe"
            src="https://recruiterflow.com/db_c4c144dfa5408eecf4b2df24cf4e7ae2/jobs-page-widget"
            style={{
              width: '1px',
              minWidth: '100%',
              border: 0,
              height: '1400px',
              overflowY: 'scroll',
            }}
            title="Open Job Positions"
          />
        </div>
      </section>
    </div>
  );
};

export default Careers;
