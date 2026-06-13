import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import AiConcierge from './AiConcierge.jsx';

const Layout = () => {
  return (
    <div className="app-shell">
      <header className="site-header">
        <NavLink to="/" className="brand" end>Corverse Talent</NavLink>
        <nav className="site-nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/team">Team</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/candidates">Candidates</NavLink>
          <NavLink to="/careers">Careers</NavLink>
          <NavLink to="/clients">Clients</NavLink>
        </nav>
        <NavLink className="cta-link" to="/contact">Work With Us</NavLink>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div>
          <strong>Corverse Talent</strong> — Boutique staffing for executives, technical leaders, and high-impact teams.
        </div>
        <div>
          © {new Date().getFullYear()} Corverse Talent. All rights reserved.
        </div>
      </footer>
      
      <AiConcierge />
    </div>
  );
};

export default Layout;
