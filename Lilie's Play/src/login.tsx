import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import './auth.css';
import { projects } from './projectsData';
import type { Project } from './projectsData';



function Login() {
 
  const [dark, setDark] = useState<boolean>(() => {
    try {
      const stored = localStorage.getItem('theme');
      if (stored) return stored === 'dark';
      return typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch (e) {
      return false;
    }
  });

  useEffect(() => {
    try {
      if (dark) document.body.classList.add('dark-mode'); else document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', dark ? 'dark' : 'light');
    } catch (e) {
      // ignore
    }
  }, [dark]);

  return (
    <div className="auth-wrapper">
        <div className="auth-container">
          <button type="button" aria-label="Toggle theme" className="theme-toggle" onClick={() => setDark(!dark)}>{dark ? '🌙' : '☀️'}</button>

        <div className="auth-content">
          <div className="auth-left">
            <img src="/src/PHOTO.png" alt="Logo" className="auth-logo" />
            <ul className="social-list" aria-label="Social links">
              <li>
                <a href="https://github.com/whiteowly" target="_blank" rel="noreferrer" aria-label="GitHub" className="social-link">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.93 3.19 9.11 7.61 10.58.56.1.77-.24.77-.54 0-.27-.01-1-.02-1.95-3.09.67-3.74-1.49-3.74-1.49-.51-1.29-1.25-1.64-1.25-1.64-1.02-.7.08-.69.08-.69 1.12.08 1.71 1.15 1.71 1.15 1 .17 1.53-.75 1.7-1.16.66-1.08 1.71-.77 2.13-.59.06-.46.25-.77.45-1-2.47-.28-5.06-1.24-5.06-5.5 0-1.21.43-2.2 1.14-2.98-.12-.28-.49-1.42.11-2.96 0 0 .93-.3 3.05 1.13a10.64 10.64 0 0 1 2.78-.37c.94 0 1.88.12 2.78.37 2.12-1.43 3.05-1.13 3.05-1.13.6 1.54.23 2.68.11 2.96.71.78 1.14 1.77 1.14 2.98 0 4.27-2.6 5.22-5.08 5.5.26.22.49.66.49 1.33 0 .96-.01 1.74-.01 1.98 0 .3.2.65.78.54C19.06 20.86 22.25 16.68 22.25 11.75 22.25 5.48 17.27.5 12 .5z"/></svg>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/jerusalem-ayalew-629775313/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-link">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4v15h-4V8zm7.5 0h3.84v2.07h.05c.54-1.02 1.86-2.07 3.83-2.07 4.1 0 4.86 2.7 4.86 6.21V23h-4v-6.92c0-1.65-.03-3.77-2.3-3.77-2.3 0-2.66 1.8-2.66 3.66V23h-4V8z"/></svg>
                </a>
              </li>
              <li>
                <a href="https://t.me/jernal_y" target="_blank" rel="noreferrer" aria-label="Telegram" className="social-link">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm5.208 8.208l-1.43 6.73c-.108.5-.39.62-.79.39l-2.17-1.6-1.05 1.01c-.116.116-.213.213-.436.213l.156-2.22 4.04-3.66c.176-.156-.038-.242-.272-.086l-4.99 3.13-2.15-.67c-.468-.146-.478-.468.098-.69l8.41-3.24c.39-.146.73.094.59.71z"/></svg>
                </a>
              </li>
              <li>
                <a href="mailto:jerryayalew696@gmail.com" aria-label="Email" className="social-link">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M12 13.065L1.8 6.6V18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6.6L12 13.065zM12 11L22.2 4H1.8L12 11z"/></svg>
                </a>
              </li>
            </ul>
            <div className="resume-wrap">
              <a href="/Resume.pdf" download="Jerusalem-Resume.pdf" className="resume-btn" aria-label="Download resume">Download Resume</a>
            </div>
          </div>
          <div className="auth-right">
            <h2 className="Name-Title">JERUSALEM</h2>
            <p className="subtitle">Available For Hire</p>

            <form className="auth-form">
              <h2>HI! I'm Jer.</h2>
              <p>A software engineer who has stepped foot in most development realms but is now focusing mainly on mobile apps and a little bit of web apps.
                 I also love <a href="https://wave-aunt-f1c.notion.site/Feels-28f6f0bd6c9e80d18633daac58489f06?source=copy_link" target="_blank" rel="noreferrer">blogging!</a>
              </p>
            </form>

            <p className="switch-link">
              Say something here.
            </p>
          </div>
        </div>
        <h2>My Projects</h2>
        <div className="projects-grid" aria-live="polite">
          {projects && projects.map((p: Project) => (
            <p key={p.id} className="project-card" rel="noreferrer">
              <div className="card-inner">
                {p.image && <img src={p.image} alt={`${p.title} screenshot`} className="project-thumb" />}
                <div className="card-body">
                  <h3 className="project-title">{p.title}</h3>
                  <p className={`status ${String(p.status).toLowerCase().replace(/\s+/g, '-')}`}>{p.status}</p>
                  <p className="project-desc">{p.description}</p>
                    <div className="tech-list">
                      {p.tech.map((t, i) => (
                        <span key={i} className="tech-chip">{t}</span>
                      ))}
                    </div>
                    <div className="project-meta">
                    <div className="resume-wrap">
                   <a href="/Resume.pdf" download="Jerusalem-Resume.pdf" className="download-btn" aria-label="Download resume">App</a>
                   <a href={p.link} target="_blank" rel="noreferrer" className="download-btn">Github</a> 
                    </div>
                   
                  
                </div>
                </div>
              </div>
            </p>
          ))}
        </div>

      </div>
    </div>
  );
}


export default Login;