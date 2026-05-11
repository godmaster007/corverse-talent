import React from 'react';
import { Link } from 'react-router-dom';

const Hero = ({ eyebrow, title, lead, primaryCta, primaryLink, secondaryCta, secondaryLink, panelContent, alignTop, children }) => {
  return (
    <section className="hero-section" style={alignTop ? { alignItems: 'flex-start' } : {}}>
      <div className="hero-copy">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        {lead && <p className="lead">{lead}</p>}
        
        <div className="hero-actions">
          {primaryCta && (
            <Link to={primaryLink || "/contact"} className="button button-primary">
              {primaryCta}
            </Link>
          )}
          {secondaryCta && (
            <Link to={secondaryLink || "/about"} className="button button-secondary">
              {secondaryCta}
            </Link>
          )}
        </div>
        {children}
      </div>
      
      {panelContent && (
        <div className="hero-panel">
          <div className="hero-panel-card">
            {panelContent}
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
