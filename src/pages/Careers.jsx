import React, { useState, useRef } from 'react';

// =========================================================================
// CORVERSE CAREERS - JOB DATABASE
// =========================================================================
// Non-technical team members can easily add, edit, or remove job listings
// by modifying this array. Each job object must contain:
// id, title, department, location, type, summary, description, and applyLink.
//
// Valid departments:
// • "Account Management"
// • "Sales"
// • "Sales Enablement"
// • "Marketing"
// • "Leadership"
// =========================================================================
const JOB_DATABASE = [
  {
    id: "acct-mgm-01",
    title: "Senior Account Manager",
    department: "Account Management",
    location: "Remote (US)",
    type: "Full-time",
    summary: "Lead relationship management and drive expansion strategy for our highest-impact enterprise clients.",
    description: "As a Senior Account Manager at Corverse Talent, you will serve as the primary advisor and strategic partner to a portfolio of our most critical enterprise accounts. You will coordinate closely with client executives and our recruiting teams to deliver high-quality talent placement solutions, drive service expansions, and maintain exceptional client retention rates.\n\nKey Responsibilities:\n• Manage and scale strategic relationships with executive stakeholders.\n• Lead regular business reviews and present metrics-driven talent insights.\n• Proactively identify areas for client expansion and cross-sell solutions.\n• Collaborate with talent acquisition squads to ensure placement alignment.\n\nRequirements:\n• 5+ years of account management experience, preferably in staffing, consulting, or professional services.\n• Outstanding written and verbal communication skills.\n• Proven ability to negotiate agreements and manage key accounts.",
    applyLink: "#"
  },
  {
    id: "acct-mgm-02",
    title: "Client Services Lead",
    department: "Account Management",
    location: "Chicago, IL (Hybrid)",
    type: "Full-time",
    summary: "Oversee operational delivery and nurture client partnerships within our mid-market segment.",
    description: "We are seeking a Client Services Lead to manage operational execution and maintain high satisfaction levels across our mid-market partnerships. You will bridge the gap between client hiring managers and our internal delivery teams to ensure candidate quality and fast placement cycle times.\n\nKey Responsibilities:\n• Coordinate day-to-day candidate presentation and feedback loops.\n• Audit service delivery against SLAs and resolve operational bottlenecks.\n• Conduct regular check-ins with client managers to gather feedback.\n• Support senior account leadership with key reports and analytics.\n\nRequirements:\n• 3+ years of customer success, account management, or agency recruiting experience.\n• High organization skill and ability to juggle multiple clients.\n• Great empathy and solutions-oriented mindset.",
    applyLink: "#"
  },
  {
    id: "sales-01",
    title: "Director of Business Development",
    department: "Sales",
    location: "New York, NY (Hybrid)",
    type: "Full-time",
    summary: "Drive net-new enterprise client acquisition and secure strategic staffing partnerships.",
    description: "We are seeking an ambitious Director of Business Development to lead our new client acquisition strategy. In this role, you will identify high-growth companies, build relationships with C-level executives, and pitch Corverse's boutique talent solutions.\n\nKey Responsibilities:\n• Build and run a high-volume pipeline of enterprise and mid-market prospective clients.\n• Conduct consultative pitches with founders, VPs of HR, and engineering leaders.\n• Structure and negotiate master services agreements (MSAs).\n• Partner with candidate-facing teams to ensure seamless handoff and delivery.\n\nRequirements:\n• 6+ years of B2B sales experience with a record of exceeding quotas.\n• Experience in recruitment services, HR tech, or professional services is highly preferred.\n• Strong executive presence and negotiation skills.",
    applyLink: "#"
  },
  {
    id: "sales-02",
    title: "Senior Enterprise Executive",
    department: "Sales",
    location: "Remote (US)",
    type: "Full-time",
    summary: "Focus on closing strategic talent partnerships with tech organizations and Fortune 500 businesses.",
    description: "As a Senior Enterprise Executive, you will target and secure large-scale talent delivery contracts. You will consultative-sell to VP and C-level executives, mapping Corverse Talent's offerings to their strategic technical roadmap requirements.\n\nKey Responsibilities:\n• Map and target enterprise accounts with large-scale contract hiring needs.\n• Present complex staffing solutions (RPO, Retained Search, Contract-to-Hire).\n• Negotiate large-scale agreements and custom pricing models.\n• Coordinate with delivery managers to assess capacity pre-signing.\n\nRequirements:\n• 8+ years of B2B agency sales or executive search sales experience.\n• Active network of client-side hiring managers and HR executives.\n• Master negotiator and presenter.",
    applyLink: "#"
  },
  {
    id: "sales-enablement-01",
    title: "Sales Enablement Specialist",
    department: "Sales Enablement",
    location: "Austin, TX (Hybrid)",
    type: "Full-time",
    summary: "Empower our sales and account teams with elite tools, content, and playbooks.",
    description: "Corverse is scaling rapidly, and we need a Sales Enablement Specialist to support our commercial teams. You will design, build, and implement the tools, resources, and training methodologies that accelerate our sales cycles and increase conversion rates.\n\nKey Responsibilities:\n• Design and curate pitching templates, case studies, and sales playbooks.\n• Onboard new account managers and sales representatives onto our systems.\n• Manage our sales tech stack (CRM, outreach systems, enablement platforms).\n• Analyze pipeline metrics to identify coaching opportunities.\n\nRequirements:\n• 3+ years of experience in sales training, enablement, or commercial operations.\n• Deep familiarity with modern sales tools (Salesforce, HubSpot, Gong, etc.).\n• Exceptional educational content creation and presentation skills.",
    applyLink: "#"
  },
  {
    id: "marketing-01",
    title: "Brand Marketing Manager",
    department: "Marketing",
    location: "San Francisco, CA (Hybrid)",
    type: "Full-time",
    summary: "Own the Corverse brand story across digital campaigns, socials, and design systems.",
    description: "We are looking for a creative and analytical Brand Marketing Manager to lead our outbound marketing efforts. You will shape how clients and candidates perceive Corverse Talent through curated content, digital campaigns, social channels, and event activations.\n\nKey Responsibilities:\n• Define and maintain our visual identity, tone of voice, and brand guidelines.\n• Design and launch digital marketing campaigns targeting client decision-makers.\n• Manage social channels and publish industry-leading whitepapers/newsletters.\n• Coordinate agency sponsorships, web presence, and industry events.\n\nRequirements:\n• 4+ years of marketing experience, with a portfolio of design and copy assets.\n• Proficient with creative tools (Figma, Adobe Creative Suite) and analytics.\n• Outstanding copywriting and visual design sense.",
    applyLink: "#"
  },
  {
    id: "leadership-01",
    title: "VP of Client Success & Operations",
    department: "Leadership",
    location: "Remote (US)",
    type: "Full-time",
    summary: "Oversee client fulfillment, delivery squads, and long-term operational success.",
    description: "As the VP of Client Success & Operations, you will join our executive team to lead the delivery and operational performance of Corverse Talent. You will scale our delivery processes, manage division leads, and ensure our boutique standards remain world-class as we grow.\n\nKey Responsibilities:\n• Own all service delivery KPIs, including placement ratios and client NPS.\n• Mentor and manage team directors across account management and recruiting.\n• Optimize operational workflows, budgeting, and tool procurement.\n• Manage strategic escalation issues and serve as executive sponsor.\n\nRequirements:\n• 10+ years of leadership in staffing agency operations or executive recruiting.\n• Proven track record of scaling professional services operations from 50 to 200+ employees.\n• High emotional intelligence and business acumen.",
    applyLink: "#"
  }
];

// Department categories array for filtering
const DEPARTMENTS = [
  "All Departments",
  "Account Management",
  "Sales",
  "Sales Enablement",
  "Marketing",
  "Leadership"
];

const Careers = () => {
  const [selectedDept, setSelectedDept] = useState("All Departments");
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApplyForm, setShowApplyForm] = useState(false);
  const detailsRef = useRef(null);
  
  // Apply Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    resume: null,
    resumeName: '',
    coverLetter: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Filtered Jobs List
  const filteredJobs = selectedDept === "All Departments" 
    ? JOB_DATABASE
    : JOB_DATABASE.filter(job => job.department === selectedDept);

  const handleOpenDetails = (job) => {
    if (selectedJob && selectedJob.id === job.id && !showApplyForm) {
      setSelectedJob(null);
    } else {
      setSelectedJob(job);
      setShowApplyForm(false);
      setSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        resume: null,
        resumeName: '',
        coverLetter: ''
      });
      setTimeout(() => {
        detailsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  const handleOpenApply = (job, e) => {
    e.stopPropagation(); // Avoid triggering open details if clicked on parent
    if (selectedJob && selectedJob.id === job.id && showApplyForm) {
      setSelectedJob(null);
    } else {
      setSelectedJob(job);
      setShowApplyForm(true);
      setSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        resume: null,
        resumeName: '',
        coverLetter: ''
      });
      setTimeout(() => {
        detailsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData(prev => ({
        ...prev,
        resume: file,
        resumeName: file.name
      }));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate API request delay
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="page careers-page">
      {/* Careers Hero Section */}
      <section className="careers-hero">
        <span className="eyebrow">Corverse Careers</span>
        <h1 className="careers-title">Make Your Next Move Count</h1>
        <p className="careers-lead">
          Apply now to join a company that is building what's next
        </p>
      </section>

      {/* Explore Opportunities Section */}
      <section className="opportunities-section">
        <div className="section-header">
          <h2 id="opportunities-title">Explore Opportunities</h2>
          <p className="section-subtitle">
            Find the team where you can make the biggest impact. Select a category below to browse open positions.
          </p>
        </div>

        {/* Dynamic Filtering: Tabs for Desktop, Dropdown for Mobile */}
        <div className="filter-container">
          {/* Desktop Category Tabs */}
          <div className="category-tabs" role="tablist" aria-labelledby="opportunities-title">
            {DEPARTMENTS.map(dept => (
              <button
                key={dept}
                role="tab"
                aria-selected={selectedDept === dept}
                className={`category-tab ${selectedDept === dept ? 'active' : ''}`}
                onClick={() => setSelectedDept(dept)}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Mobile Category Dropdown Select */}
          <div className="category-dropdown-wrapper">
            <select
              className="category-dropdown"
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              aria-label="Filter jobs by department"
            >
              {DEPARTMENTS.map(dept => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
            <div className="dropdown-arrow-icon" aria-hidden="true">
              <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
                <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Job Listing Cards Grid */}
        <div className="job-listings-grid">
          {filteredJobs.length > 0 ? (
            filteredJobs.map(job => (
              <React.Fragment key={job.id}>
                <div className={`job-card ${selectedJob?.id === job.id ? 'active-card' : ''}`}>
                  <div className="job-card-header">
                    <span className="job-dept-tag">{job.department}</span>
                    <div className="job-meta">
                      <span className="job-location">
                        <svg width="12" height="14" viewBox="0 0 12 14" fill="none" className="meta-icon" aria-hidden="true">
                          <path d="M6 7.66667C6.92047 7.66667 7.66667 6.92047 7.66667 6C7.66667 5.07953 6.92047 4.33333 6 4.33333C5.07953 4.33333 4.33333 5.07953 4.33333 6C4.33333 6.92047 5.07953 7.66667 6 7.66667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M6 12.6667C8.66667 10.6667 11 8.24 11 6C11 3.23857 8.76142 1 6 1C3.23858 1 1 3.23857 1 6C1 8.24 3.33333 10.6667 6 12.6667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {job.location}
                      </span>
                      <span className="job-type-tag">{job.type}</span>
                    </div>
                  </div>
                  <h3 className="job-card-title">{job.title}</h3>
                  <p className="job-card-summary">{job.summary}</p>
                  <div className="job-card-actions">
                    <button 
                      className="button button-secondary view-details-btn" 
                      onClick={() => handleOpenDetails(job)}
                    >
                      View Details
                    </button>
                    <button 
                      className="button button-primary apply-now-btn"
                      onClick={(e) => handleOpenApply(job, e)}
                    >
                      Apply Now
                    </button>
                  </div>
                </div>

                {selectedJob && selectedJob.id === job.id && (
                  <div ref={detailsRef} className="job-inline-details-wrapper">
                    {/* Header */}
                    <div className="modal-header">
                      <div>
                        <span className="job-dept-tag">{selectedJob.department}</span>
                        <h2>{selectedJob.title}</h2>
                        <div className="modal-job-meta">
                          <span>
                            <svg width="12" height="14" viewBox="0 0 12 14" fill="none" className="meta-icon">
                              <path d="M6 7.66667C6.92047 7.66667 7.66667 6.92047 7.66667 6C7.66667 5.07953 6.92047 4.33333 6 4.33333C5.07953 4.33333 4.33333 5.07953 4.33333 6C4.33333 6.92047 5.07953 7.66667 6 7.66667Z" stroke="currentColor" strokeWidth="1.5"/>
                              <path d="M6 12.6667C8.66667 10.6667 11 8.24 11 6C11 3.23857 8.76142 1 6 1C3.23858 1 1 3.23857 1 6C1 8.24 3.33333 10.6667 6 12.6667Z" stroke="currentColor" strokeWidth="1.5"/>
                            </svg>
                            {selectedJob.location}
                          </span>
                          <span className="dot">•</span>
                          <span>{selectedJob.type}</span>
                        </div>
                      </div>
                      <button className="close-modal-btn" onClick={() => setSelectedJob(null)} aria-label="Close details">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                    </div>

                    {/* Body */}
                    <div className="modal-body">
                      {!showApplyForm ? (
                        /* Mode A: Show Job Description Details */
                        <div className="modal-details-view">
                          <div className="job-description-content">
                            {selectedJob.description.split('\n\n').map((paragraph, index) => {
                              if (paragraph.startsWith('Key Responsibilities:') || paragraph.startsWith('Requirements:')) {
                                const lines = paragraph.split('\n');
                                const header = lines[0];
                                const items = lines.slice(1);
                                return (
                                  <div key={index} className="desc-section">
                                    <h3>{header}</h3>
                                    <ul>
                                      {items.map((item, i) => (
                                        <li key={i}>{item.replace(/^•\s*/, '')}</li>
                                      ))}
                                    </ul>
                                  </div>
                                );
                              }
                              return <p key={index}>{paragraph}</p>;
                            })}
                          </div>

                          <div className="modal-actions-footer">
                            <button 
                              className="button button-secondary" 
                              onClick={() => setSelectedJob(null)}
                            >
                              Close Details
                            </button>
                            <button 
                              className="button button-primary" 
                              onClick={() => {
                                setShowApplyForm(true);
                                setTimeout(() => {
                                  detailsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }, 50);
                              }}
                            >
                              Apply for this Role
                            </button>
                          </div>
                        </div>
                      ) : (
                        /* Mode B: Application Form */
                        <div className="modal-apply-view">
                          {submitted ? (
                            <div className="success-state">
                              <div className="success-icon-wrapper">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="success-check-icon">
                                  <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                              </div>
                              <h3>Application Submitted!</h3>
                              <p>
                                Thank you for applying for the <strong>{selectedJob.title}</strong> role. Our talent acquisition team will review your application and contact you soon.
                              </p>
                              <button 
                                className="button button-primary" 
                                onClick={() => setSelectedJob(null)}
                              >
                                Close Window
                              </button>
                            </div>
                          ) : (
                            <form className="application-form" onSubmit={handleFormSubmit}>
                              <div className="form-intro">
                                <h3>Apply for {selectedJob.title}</h3>
                                <p>Complete the form below to submit your details and resume to our hiring managers.</p>
                              </div>

                              <div className="form-group-row">
                                <div className="form-group">
                                  <label htmlFor="fullName">Full Name *</label>
                                  <input 
                                    type="text" 
                                    id="fullName" 
                                    name="fullName" 
                                    required 
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    placeholder="John Doe"
                                  />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="email">Email Address *</label>
                                  <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    required 
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="john@example.com"
                                  />
                                </div>
                              </div>

                              <div className="form-group-row">
                                <div className="form-group">
                                  <label htmlFor="phone">Phone Number</label>
                                  <input 
                                    type="tel" 
                                    id="phone" 
                                    name="phone" 
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="(555) 000-0000"
                                  />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="resume-file">Upload Resume (PDF/Word) *</label>
                                  <div className="file-input-wrapper">
                                    <input 
                                      type="file" 
                                      id="resume-file" 
                                      accept=".pdf,.doc,.docx"
                                      required
                                      onChange={handleFileChange}
                                      style={{ display: 'none' }}
                                    />
                                    <button 
                                      type="button" 
                                      className="file-custom-btn" 
                                      onClick={() => document.getElementById('resume-file').click()}
                                    >
                                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="file-icon">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                        <polyline points="17 8 12 3 7 8"></polyline>
                                        <line x1="12" y1="3" x2="12" y2="15"></line>
                                      </svg>
                                      {formData.resumeName || "Choose file..."}
                                    </button>
                                  </div>
                                </div>
                              </div>

                              <div className="form-group">
                                <label htmlFor="coverLetter">Cover Letter / Message</label>
                                <textarea 
                                  id="coverLetter" 
                                  name="coverLetter" 
                                  rows="4" 
                                  value={formData.coverLetter}
                                  onChange={handleInputChange}
                                  placeholder="Tell us briefly why you are a great fit for this position..."
                                ></textarea>
                              </div>

                              <div className="form-actions-footer">
                                <button 
                                  type="button" 
                                  className="button button-secondary" 
                                  onClick={() => setShowApplyForm(false)}
                                  disabled={submitting}
                                >
                                  Back to Description
                                </button>
                                <button 
                                  type="submit" 
                                  className="button button-primary submit-app-btn"
                                  disabled={submitting}
                                >
                                  {submitting ? "Submitting..." : "Submit Application"}
                                </button>
                              </div>
                            </form>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))
          ) : (
            <div className="no-jobs-state">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="no-jobs-icon">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12h8" />
              </svg>
              <h3>No openings found</h3>
              <p>We don't have any openings in this department right now. Please check back later or contact us directly.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Careers;
