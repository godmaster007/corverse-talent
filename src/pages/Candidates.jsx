import React, { useState, useRef } from 'react';
import Hero from '../components/Hero.jsx';
import { Link } from 'react-router-dom';
import { analyzeResume } from '../lib/gemini.js';

const Candidates = () => {
  const [resumeFile, setResumeFile] = useState(null);
  const [fileReady, setFileReady] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);
  const base64Ref = useRef(null);

  // Pre-load the file into memory as soon as it's selected
  const handleFileChange = (e) => {
    const file = e.target.files[0] || null;
    setResumeFile(file);
    setFileReady(false);
    base64Ref.current = null;

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        base64Ref.current = reader.result.split(',')[1];
        setFileReady(true);
      };
      reader.onerror = () => {
        console.error('Failed to read file');
        setFileReady(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = async (e) => {
    e.preventDefault();
    if (!resumeFile || !fileReady || !base64Ref.current) return;

    setIsAnalyzing(true);
    setAnalysisResult(null);

    const base64Data = base64Ref.current;
    const fileName = resumeFile.name;
    const fileType = resumeFile.type || 'application/pdf';
    const fileSize = (resumeFile.size / 1024).toFixed(1);

    // Run AI analysis
    let result;
    try {
      result = await analyzeResume(base64Data, fileType);
    } catch (error) {
      console.error(error);
      result = {
        score: 0,
        message: "Sorry, we encountered an error analyzing your resume. Please try again.",
        strengths: [],
        recommendations: [],
        resumeText: '',
      };
    }

    const normalizedResult = {
      score: result.score ?? 0,
      message: result.message ?? '',
      strengths: Array.isArray(result.strengths) ? result.strengths : [],
      recommendations: Array.isArray(result.recommendations) ? result.recommendations : [],
    };
    setAnalysisResult(normalizedResult);
    setIsAnalyzing(false);

    // Send email with analysis results + resume text AFTER analysis completes
    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;
      if (accessKey) {
        const resumeText = result.resumeText || '(Could not extract text from resume)';
        const emailBody = [
          `A candidate uploaded their resume for AI assessment on the Corverse Talent website.`,
          ``,
          `=== FILE DETAILS ===`,
          `Filename: ${fileName}`,
          `File Type: ${fileType}`,
          `File Size: ${fileSize} KB`,
          ``,
          `=== AI ANALYSIS RESULTS ===`,
          `Alignment Score: ${normalizedResult.score}%`,
          `Assessment: ${normalizedResult.message}`,
          ``,
          `Strengths:`,
          ...normalizedResult.strengths.map((s, i) => `  ${i + 1}. ${s}`),
          ``,
          `Recommendations:`,
          ...normalizedResult.recommendations.map((r, i) => `  ${i + 1}. ${r}`),
          ``,
          `=== FULL RESUME TEXT ===`,
          resumeText,
        ].join('\n');

        fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: accessKey,
            subject: `New Resume Submitted via AI Matcher: ${fileName} (${normalizedResult.score}% Match)`,
            from_name: 'Corverse Talent AI Matcher',
            name: 'AI Resume Matcher Submission',
            message: emailBody,
          }),
        })
          .then((r) => r.json())
          .then((res) => {
            if (res.success) {
              console.log('Resume notification sent successfully');
            } else {
              console.error('Web3Forms error:', res);
            }
          })
          .catch((err) => console.error('Resume email send error:', err));
      }
    } catch (err) {
      console.error('Resume email error:', err);
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

      <section style={{ marginTop: '4rem' }}>
        <span className="eyebrow">Instant Feedback</span>
        <h2>AI Resume Matcher</h2>
        <p>Curious if your profile fits our current technical or executive roles? Upload your resume for an instant AI match assessment against our open roles.</p>
        
        <div className="hero-panel-card" style={{ marginTop: '2rem' }}>
          {!analysisResult ? (
            <form onSubmit={handleAnalyze} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <input 
                type="file" 
                accept=".pdf,.txt"
                onChange={handleFileChange}
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
              {resumeFile && !fileReady && (
                <p style={{ fontSize: '0.875rem', color: '#facc15' }}>Loading file...</p>
              )}
              <button 
                type="submit" 
                className="button button-primary" 
                disabled={isAnalyzing || !fileReady}
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
                  onClick={() => { setAnalysisResult(null); setResumeFile(null); setFileReady(false); base64Ref.current = null; }}
                >
                  Analyze Another
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      <section style={{ marginTop: '5rem' }}>
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
