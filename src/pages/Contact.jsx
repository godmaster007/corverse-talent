import React, { useState } from 'react';
import Hero from '../components/Hero.jsx';

const Contact = () => {
  const [formData, setFormData] = useState({
    type: 'hire',
    name: '',
    company: '',
    email: '',
    summary: ''
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;
    if (!accessKey) {
      console.error("Web3Forms access key is missing!");
      setStatus('error');
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Corverse Inquiry: ${formData.type === 'hire' ? 'Hiring Talent' : 'Finding a Role'}`,
          ...formData
        })
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ type: 'hire', name: '', company: '', email: '', summary: '' });
      } else {
        console.error(result.message);
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <div className="page fade-in">
      <Hero 
        eyebrow="Contact / Inquiry"
        title="Let's Get Started"
        lead="Tell us whether you're hiring or exploring new opportunities. We'll respond with a tailored next step."
        alignTop={true}
        panelContent={
          <form className="inquiry-form" onSubmit={handleSubmit}>
            <label>
              I am looking to:
              <select name="type" value={formData.type} onChange={handleChange}>
                <option value="hire">Hire Talent</option>
                <option value="work">Find a Role</option>
              </select>
            </label>
            <label>
              Name
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required />
            </label>
            <label>
              Company / Current Role
              <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Acme Corp / Senior Engineer" required />
            </label>
            <label>
              Email Address
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" required />
            </label>
            <label>
              Brief summary of your needs
              <textarea name="summary" value={formData.summary} onChange={handleChange} rows="4" placeholder="I am looking for..."></textarea>
            </label>
            
            <button 
              type="submit" 
              className="button button-primary" 
              style={{ marginTop: '1rem', width: '100%' }}
              disabled={status === 'submitting' || status === 'success'}
            >
              {status === 'idle' && 'Send Inquiry'}
              {status === 'submitting' && 'Sending...'}
              {status === 'success' && 'Message Sent! ✓'}
              {status === 'error' && 'Error Sending - Try Again'}
            </button>
            {status === 'error' && <p style={{color: '#ef4444', fontSize: '0.875rem', marginTop: '0.5rem'}}>There was a problem sending your message. Please make sure the API key is configured.</p>}
          </form>
        }
      >
        <div style={{ marginTop: '3rem', width: '100%', display: 'flex', justifyContent: 'center' }}>
          <img 
            src={`${import.meta.env.BASE_URL || '/'}images/corverse_logo.svg`} 
            alt="Corverse Talent Logo" 
            style={{ width: '100%', maxHeight: '350px', objectFit: 'contain', borderRadius: '12px' }} 
          />
        </div>
      </Hero>
      
      <section style={{ marginTop: '3rem', textAlign: 'center' }}>
        <span className="eyebrow">What Happens Next</span>
        <p style={{ margin: '0 auto', maxWidth: '600px' }}>
          Once we receive your inquiry, a Corverse Talent specialist will reach out to learn more and recommend the best path forward.
        </p>
      </section>
    </div>
  );
};

export default Contact;
