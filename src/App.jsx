import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Team from './pages/Team.jsx';
import Services from './pages/Services.jsx';
import Candidates from './pages/Candidates.jsx';
import Clients from './pages/Clients.jsx';
import Contact from './pages/Contact.jsx';

function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="brand">Corverse Talent</div>
        <nav className="site-nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/team">Team</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/candidates">Candidates</NavLink>
          <NavLink to="/clients">Clients</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        <a className="cta-link" href="/contact">Work With Us</a>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/services" element={<Services />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <div>Corverse Talent — Boutique staffing for executives, technical leaders, and high-impact teams.</div>
        <div>© {new Date().getFullYear()} Corverse Talent</div>
      </footer>
    </div>
  );
}

export default App;
