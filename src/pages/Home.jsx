import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="page page-home">
      <div className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Specialized Staffing & Recruitment</p>
          <h1>Connecting industry leaders with exceptional talent.</h1>
          <p className="lead">
            Corverse Talent combines boutique precision with global reach to deliver a high-end
            recruitment experience for companies and candidates who expect more.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/clients">Find Talent</Link>
            <Link className="button button-secondary" to="/candidates">Find a Role</Link>
          </div>
        </div>
        <div className="hero-panel">
          <div className="hero-panel-card">
            <p className="panel-label">Our promise</p>
            <h2>We don’t just fill seats; we build the foundations of great companies.</h2>
            <ul>
              <li>Boutique luxury service with technical recruiting expertise</li>
              <li>Rapid, reliable placement for critical roles</li>
              <li>Refined experience for clients and candidates alike</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="feature-grid">
        <div className="feature-card">
          <h3>Executive Search</h3>
          <p>Identify senior leaders and strategic hires who shape company direction and culture.</p>
        </div>
        <div className="feature-card">
          <h3>Permanent Placement</h3>
          <p>Staff critical functions with professionals who contribute immediately and stay for the long term.</p>
        </div>
        <div className="feature-card">
          <h3>Specialized Technical Roles</h3>
          <p>Hire the domain experts who move high-impact engineering, product, and technology initiatives forward.</p>
        </div>
      </section>

      <section className="brand-bar">
        <p>Trusted by ambitious teams and innovative companies.</p>
        <div className="logos">[Partner logos go here]</div>
      </section>
    </section>
  );
}

export default Home;
