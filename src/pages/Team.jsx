import React from 'react';
import Hero from '../components/Hero.jsx';

const baseUrl = import.meta.env.BASE_URL || '/';
const coreyPic = `${baseUrl.endsWith('/') ? baseUrl : baseUrl + '/'}images/corey.webp`;

function Team() {
  return (
    <div className="page fade-in">
      <Hero 
        eyebrow="Our Team"
        title="Meet the founders of Corverse Talent."
        lead="We bring deep industry expertise, a commitment to excellence, and a shared vision for reimagining talent acquisition."
      />

      <div className="team-grid" style={{ marginTop: '4rem' }}>
        <article className="team-card">
          <div className="team-image">
            <img src={coreyPic} alt="Corey Williams" />
          </div>
          <h2>Corey Williams</h2>
          <p className="role">CEO & Co-Founder</p>
          <div className="bio">
            <p>A seasoned veteran with over 15 years of industry experience, Corey is driving the recruiting force behind our white-glove GTM recruiting agency. His journey began as a SaaS SDR in San Francisco during the tech boom, but it was the economic collapse of 2008 that defined his career path. Recognizing the natural synergy between high-level sales and talent acquisition, he transitioned into recruiting, mastering the art of the "perfect match" during one of the most challenging markets in history.</p>
            <p>After spending over a decade at the heart of the San Francisco tech scene, Corey is now thriving in Los Angeles, having scaled teams for some of the world's most innovative companies—including Tesla, Mckesson, and Blue Shield of California—across the US, APAC, and EMEA. His unique global perspective, born in Las Vegas to an Air Force family and raised in Germany, combined with a pre-law education from California State University, Chico, allows him to navigate complex organizational needs with a personal, high-touch approach. Today, he leverages that deep expertise to help founders and leaders build world-class sales teams through a bespoke, premium experience.</p>
          </div>
        </article>

        <article className="team-card">
          <div className="team-image">
            <img src={`${import.meta.env.BASE_URL || '/'}images/nick.webp`} alt="Nick Koron" />
          </div>
          <h2>Nick Koron</h2>
          <p className="role">COO & Co-Founder</p>
          <div className="bio">
            <p>Nick Koron is the Co-Founder and Chief Operating Officer of Corverse Talent, bringing 16 years of executive leadership, advanced technical infrastructure design, and enterprise-scale data operations to the firm. As an aggressive problem solver, Nick serves as the operational powerhouse behind Corverse Talent’s "white-glove" delivery workflow. Nick architected the agency's back-end tech stack to eliminate administrative friction, ensuring the firm remains focused entirely on high-touch talent acquisition and precision matching.</p>
            <p>This foundational business acumen is backed by a Bachelor of Science in Finance from California Polytechnic State University (San Luis Obispo), where he completed advanced coursework in financial engineering, quantitative methods, and corporate taxation. Nick began his professional career in corporate finance, serving as a Credit Analyst, Underwriter, and Credit Manager for premier West Coast institutions, including the Bank of San Francisco and Wells Fargo Financial. In these roles, he conducted rigorous cash flow analyses and utilized demographic data to forecast scaling capabilities for small to mid-sized corporate entities. At Corverse Talent, Nick merges his corporate finance precision with advanced technical operations to help mid-sized AI and technology companies seamlessly scale their elite GTM teams.</p>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Team;
