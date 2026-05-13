import React, { useState } from 'react';
import Hero from '../components/Hero.jsx';
import { Link } from 'react-router-dom';
import { analyzeResume } from '../lib/gemini.js';

const Candidates = () => {
  const [resumeFile, setResumeFile] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleAnalyze = async (e) => {
    e.preventDefault();
    if (!resumeFile) return;

    setIsAnalyzing(true);
    setAnalysisResult(null);

    // Convert file to base64 first — we need it for both the email and the AI analysis
    const base64Data = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result.split(',')[1]);
      reader.onerror = reject;
      reader.readAsDataURL(resumeFile);
    });

    // Send resume notification via Web3Forms (fire-and-forget)
    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;
      if (accessKey) {
        // Send via multipart/form-data with the file attached
        const emailForm = new FormData();
        emailForm.append('access_key', accessKey);
        emailForm.append('subject', `New Resume Submitted via AI Matcher: ${resumeFile.name}`);
        emailForm.append('from_name', 'Corverse Talent AI Matcher');
        emailForm.append('message', `A candidate uploaded their resume (${resumeFile.name}) for AI assessment via the Corverse Talent website.`);
        emailForm.append('attachment', resumeFile);

        fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: emailForm,
        })
          .then((r) => r.json())
          .then((result) => {
            if (!result.success) {
              console.warn('Web3Forms attachment failed, sending notification only:', result);
              // Fallback: send just the notification without attachment
              fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({
                  access_key: accessKey,
                  subject: `New Resume Submitted via AI Matcher: ${resumeFile.name}`,
                  from_name: 'Corverse Talent AI Matcher',
                  message: `A candidate uploaded their resume for AI assessment on the Corverse Talent website.\n\nFilename: ${resumeFile.name}\nFile Type: ${resumeFile.type || 'unknown'}\nFile Size: ${(resumeFile.size / 1024).toFixed(1)} KB\n\nPlease follow up with this candidate.`,
                }),
              }).catch(console.error);
            }
          })
          .catch(console.error);
      }
    } catch (err) {
      console.error('Resume email error:', err);
    }

    // Run AI analysis
    try {
      const result = await analyzeResume(base64Data, resumeFile.type || 'application/pdf');
      setAnalysisResult({
        score: result.score ?? 0,
        message: result.message ?? '',
        strengths: Array.isArray(result.strengths) ? result.strengths : [],
        recommendations: Array.isArray(result.recommendations) ? result.recommendations : [],
      });
    } catch (error) {
      console.error(error);
      setAnalysisResult({
        score: 0,
        message: "Sorry, we encountered an error analyzing your resume. Please try again.",
        strengths: [],
        recommendations: [],
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="page fade-in">
      <Hero 
        eyebrow="For Candidates"
        title="Your Next Role, Elevated."
        lead="Corverse Talent helps talented professionals find opportunities with companies that value expertise, ambition, and long-term impact. We focus on roles that offer thoughtful growth, strong culture, and meaningful work."
        primaryCta="Submit Your Resume"
        primaryLink="/contact"
      />

      <section style={{ marginTop: '6rem' }}>
        <span className="eyebrow">Instant Feedback</span>
        <h2>AI Resume Matcher</h2>
        <p>Curious if your profile fits our current technical or executive roles? Upload your resume for an instant AI match assessment against our open roles.</p>
        
        <div className="hero-panel-card" style={{ marginTop: '2rem' }}>
          {!analysisResult ? (
            <form onSubmit={handleAnalyze} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <input 
                type="file" 
                accept=".pdf,.txt"
                onChange={(e) => setResumeFile(e.target.files[0] || null)}
                style={{
                  width: '100%',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  background: 'rgba(0,0,0,0.2)',
                  border: '2px dashed rgba(255,255,255,0.2)',
                  color: '#fff',
                  cursor: 'pointer'
                }}
              />
              <button 
                type="submit" 
                className="button button-primary" 
                disabled={isAnalyzing || !resumeFile}
                style={{ alignSelf: 'flex-start' }}
              >
                {isAnalyzing ? 'Analyzing Profile...' : 'Analyze My Resume ✨'}
              </button>
              <p style={{ fontSize: '0.75rem', color: '#9ca3af', marginTop: '0.5rem' }}>
                By uploading your resume for an AI match assessment, you agree to have your information submitted to our recruiting team and stored in our ATS for consideration for current and future opportunities.
              </p>
            </form>
          ) : (
            <div className="fade-in">
              <h3 style={{ color: '#4ade80', marginBottom: '1rem' }}>Analysis Complete - {analysisResult.score}% Alignment</h3>
              <p>{analysisResult.message}</p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2rem' }}>
                <div>
                  <h4 style={{ color: '#38bdf8' }}>Strengths</h4>
                  <ul style={{ marginTop: '0.5rem' }}>
                    {(analysisResult.strengths || []).map((str, i) => <li key={i}>{str}</li>)}
                  </ul>
                </div>
                <div>
                  <h4 style={{ color: '#facc15' }}>Recommendations</h4>
                  <ul style={{ marginTop: '0.5rem' }}>
                    {(analysisResult.recommendations || []).map((rec, i) => <li key={i}>{rec}</li>)}
                  </ul>
                </div>
              </div>

              <p style={{ marginTop: '2rem', color: '#9ca3af', fontStyle: 'italic' }}>
                Thanks for submitting your resume. While there may not be a current match, we'll keep your information on file and reach out if a future opportunity aligns with your experience.
              </p>

              <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
                <Link to="/contact" className="button button-primary">Connect with a Recruiter</Link>
                <button 
                  className="button button-secondary"
                  onClick={() => { setAnalysisResult(null); setResumeFile(null); }}
                >
                  Analyze Another
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      <section style={{ marginTop: '8rem' }}>
        <span className="eyebrow">The Process</span>
        <h2>How It Works</h2>
        
        <div className="feature-grid">
          <div className="feature-card">
            <h3>1. Connect</h3>
            <p>Submit your resume or connect with our team.</p>
          </div>
          <div className="feature-card">
            <h3>2. Review</h3>
            <p>We review your experience and career priorities.</p>
          </div>
          <div className="feature-card">
            <h3>3. Match</h3>
            <p>We match you with roles that align to your expertise and ambition.</p>
          </div>
          <div className="feature-card">
            <h3>4. Guide</h3>
            <p>We guide you through interviews, offers, and transitions.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Candidates;
