import { Link } from 'react-router-dom';

function Candidates() {
  return (
    <section className="page page-candidates">
      <div className="section-intro">
        <p className="eyebrow">For Candidates</p>
        <h1>Your next role, elevated.</h1>
        <p className="lead">
          Corverse Talent connects skilled professionals with premium companies that value expertise, ambition, and long-term impact.
        </p>
      </div>

      <div className="content-grid">
        <div>
          <h2>How it works</h2>
          <ol>
            <li>Submit your resume or connect with our team.</li>
            <li>We review your experience and career priorities.</li>
            <li>We match you with roles aligned to your expertise and ambition.</li>
            <li>We guide you through interviews, offers, and transitions.</li>
          </ol>
        </div>
        <div>
          <h2>What you can expect</h2>
          <ul>
            <li>Curated opportunities at premium organizations</li>
            <li>A respectful, confidential process</li>
            <li>Clear communication and dedicated support</li>
          </ul>
          <Link className="button button-primary" to="/contact">Submit Your Resume</Link>
        </div>
      </div>
    </section>
  );
}

export default Candidates;
