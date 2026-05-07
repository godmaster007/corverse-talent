import { Link } from 'react-router-dom';

function Clients() {
  return (
    <section className="page page-clients">
      <div className="section-intro">
        <p className="eyebrow">For Clients</p>
        <h1>Talent designed for critical moments.</h1>
        <p className="lead">
          When your business needs exceptional people quickly, Corverse Talent delivers with precision and confidence.
        </p>
      </div>

      <div className="content-grid">
        <div>
          <h2>Our methodology</h2>
          <ul>
            <li><strong>Discovery:</strong> We begin with a deep understanding of your business, team, and hiring mandate.</li>
            <li><strong>Search:</strong> We source elite candidates through proprietary networks and sector-specialized outreach.</li>
            <li><strong>Vetting:</strong> Every candidate is assessed for skills, culture fit, and long-term potential.</li>
            <li><strong>Delivery:</strong> We present a refined shortlist and support you through decisions and offers.</li>
          </ul>
        </div>
        <div>
          <h2>Why work with us</h2>
          <ul>
            <li>Faster time-to-hire for specialized and senior roles</li>
            <li>A high-quality talent pool curated for your needs</li>
            <li>Partnership-focused service aligned with your hiring goals</li>
          </ul>
          <p>
            You get access to candidates who are not actively applying elsewhere and a partner who understands both recruiting and business strategy.
          </p>
          <Link className="button button-primary" to="/contact">Talk to Our Team</Link>
        </div>
      </div>
    </section>
  );
}

export default Clients;
