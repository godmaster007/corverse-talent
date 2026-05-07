function Contact() {
  return (
    <section className="page page-contact">
      <div className="section-intro">
        <p className="eyebrow">Contact / Inquiry</p>
        <h1>Let’s get started.</h1>
        <p className="lead">
          Tell us whether you’re hiring or exploring new opportunities, and we’ll respond with a tailored next step.
        </p>
      </div>

      <form className="inquiry-form">
        <label>
          I am:
          <select name="role" defaultValue="hire">
            <option value="hire">Looking to hire</option>
            <option value="work">Looking for work</option>
          </select>
        </label>

        <label>
          Company name or current role
          <input type="text" name="company" placeholder="Corverse Talent or Senior Product Leader" />
        </label>

        <label>
          Industry or specialization
          <input type="text" name="industry" placeholder="Technology, Finance, Healthcare, or other focus" />
        </label>

        <label>
          Brief summary of your needs
          <textarea name="summary" rows="5" placeholder="Share your hiring needs or the type of role you are seeking"></textarea>
        </label>

        <label>
          Email
          <input type="email" name="email" placeholder="you@company.com" />
        </label>

        <label>
          Phone
          <input type="tel" name="phone" placeholder="(555) 123-4567" />
        </label>

        <button type="submit" className="button button-primary">Send Inquiry</button>
      </form>
    </section>
  );
}

export default Contact;
