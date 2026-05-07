function Team() {
  return (
    <section className="page page-team">
      <div className="section-intro">
        <p className="eyebrow">Our Team</p>
        <h1>Meet the founders of Corverse Talent.</h1>
        <p className="lead">
          We bring deep industry expertise, a commitment to excellence, and a shared vision for reimagining talent acquisition.
        </p>
      </div>

      <div className="team-grid">
        <article className="team-card">
          <div className="team-image-placeholder"></div>
          <h2>Your Name</h2>
          <p className="role">Founder & [Your Title]</p>
          <p className="bio">
            [Add your bio here. Share your background, key achievements in recruiting or business, and what drives your passion for building Corverse Talent. Include relevant industry experience and vision.]
          </p>
        </article>

        <article className="team-card">
          <div className="team-image-placeholder"></div>
          <h2>Partner Name</h2>
          <p className="role">Founder & [Partner's Title]</p>
          <p className="bio">
            [Add your partner's bio here. Share their background, key achievements, and what they bring to the Corverse Talent partnership. Include relevant experience and perspective.]
          </p>
        </article>
      </div>
    </section>
  );
}

export default Team;
