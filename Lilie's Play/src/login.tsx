import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import './auth.css';


function Login() {
  const navigate = useNavigate();
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
        <div className="lily-graphic">
          <span style={{ fontSize: '24px' }}>✨</span>
        </div>
        <h2>Welcome Back</h2>
        <p className="subtitle">Let’s continue where you left off</p>

        <form className="auth-form">
          <input name="email" type="email" placeholder="Email" required />
          <input name="password" type="password" placeholder="Password" required />
          <button type="submit">Log In</button>
        </form>

        <p className="switch-link">
          New here? <span onClick={() => navigate('/signup')}>Create account</span>
        </p>
      </div>
    </div>
  );
}


export default Login;