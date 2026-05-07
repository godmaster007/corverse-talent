import React, { useState } from 'react';

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission would go here (e.g., API call)
    setSubmitted(true);
  };

  return (
    <section className="page page-contact">
      <div className="section-intro">
        <p className="eyebrow">Contact / Inquiry</p>
        <h1>Let’s get started.</h1>
        <p className="lead">
          Tell us whether you’re hiring or exploring new opportunities, and we’ll respond with a tailored next step.
        </p>
      </div>

      {submitted ? (
        <div className="submission-success">
          <h2>Thank you for your inquiry!</h2>
          <p>Once we receive your details, a Corverse Talent specialist will reach out to learn more and recommend the best path forward.</p>
        </div>
      ) : (
        <>
          <form className="inquiry-form" onSubmit={handleSubmit}>
            <label>
              I am:
              <select name="role" defaultValue="hire">
                <option value="hire">Looking to hire</option>
                <option value="work">Looking for work</option>
              </select>
            </label>

            <label>
              Company name or current role
              <input type="text" name="company" placeholder="Corverse Talent or Senior Product Leader" required />
            </label>

            <label>
              Industry or specialization
              <input type="text" name="industry" placeholder="Technology, Finance, Healthcare, or other focus" required />
            </label>

            <label>
              Brief summary of your needs
              <textarea name="summary" rows="5" placeholder="Share your hiring needs or the type of role you are seeking" required></textarea>
            </label>

            <label>
              Email
              <input type="email" name="email" placeholder="you@company.com" required />
            </label>

            <label>
              Phone
              <input type="tel" name="phone" placeholder="(555) 123-4567" />
            </label>

            <button type="submit" className="button button-primary">Send Inquiry</button>
          </form>

          <div className="form-info-footer">
            <h3>What Happens Next</h3>
            <p>Once we receive your inquiry, a Corverse Talent specialist will reach out to learn more and recommend the best path forward.</p>
          </div>
        </>
      )}
    </section>
  );
}

export default Contact;
