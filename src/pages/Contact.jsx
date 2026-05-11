import React from 'react';
import Hero from '../components/Hero.jsx';

const Contact = () => {
  return (
    <div className="page fade-in">
      <Hero 
        eyebrow="Contact / Inquiry"
        title="Let's Get Started"
        lead="Tell us whether you're hiring or exploring new opportunities. We'll respond with a tailored next step."
        alignTop={true}
        panelContent={
          <form className="inquiry-form" onSubmit={(e) => e.preventDefault()}>
            <label>
              I am looking to:
              <select name="type">
                <option value="hire">Hire Talent</option>
                <option value="work">Find a Role</option>
              </select>
            </label>
            <label>
              Name
              <input type="text" name="name" placeholder="John Doe" required />
            </label>
            <label>
              Company / Current Role
              <input type="text" name="company" placeholder="Acme Corp / Senior Engineer" required />
            </label>
            <label>
              Email Address
              <input type="email" name="email" placeholder="john@example.com" required />
            </label>
            <label>
              Brief summary of your needs
              <textarea name="summary" rows="4" placeholder="I am looking for..."></textarea>
            </label>
            <button type="submit" className="button button-primary" style={{ marginTop: '1rem' }}>Send Inquiry</button>
          </form>
        }
      >
        <div style={{ marginTop: '3rem' }}>
          <img 
            src={`${import.meta.env.BASE_URL || '/'}images/corverse_logo.svg`} 
            alt="Corverse Talent Logo" 
            style={{ maxWidth: '200px', objectFit: 'contain' }} 
          />
        </div>
      </Hero>
      
      <section style={{ marginTop: '4rem', textAlign: 'center' }}>
        <span className="eyebrow">What Happens Next</span>
        <p style={{ margin: '0 auto', maxWidth: '600px' }}>
          Once we receive your inquiry, a Corverse Talent specialist will reach out to learn more and recommend the best path forward.
        </p>
      </section>
    </div>
  );
};

export default Contact;
