import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Team from './pages/Team.jsx';
import Services from './pages/Services.jsx';
import Candidates from './pages/Candidates.jsx';
import Careers from './pages/Careers.jsx';
import Clients from './pages/Clients.jsx';
import Contact from './pages/Contact.jsx';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="team" element={<Team />} />
          <Route path="services" element={<Services />} />
          <Route path="candidates" element={<Candidates />} />
          <Route path="careers" element={<Careers />} />
          <Route path="clients" element={<Clients />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
