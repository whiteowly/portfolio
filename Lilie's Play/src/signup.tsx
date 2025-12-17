import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import './auth.css';
import authClient from './lib/authClient';



function Signup() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
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


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = (formData.get('username') as string) || '';
    const email = (formData.get('email') as string) || '';
    const password = (formData.get('password') as string) || '';
    const confirm = (formData.get('confirmPassword') as string) || '';

    if (password !== confirm) {
      alert('Passwords do not match');
      return;
    }

    setLoading(true);
    try {
      await authClient.signup({ email, password, name: username });
      setLoading(false);
      navigate('/login');
    } catch (err: any) {
      setLoading(false);
      alert(err?.message || String(err));
    }
  };


  return (
    <div className="auth-wrapper">
        <div className="auth-container">
          <button type="button" aria-label="Back to landing" className="back-button" onClick={() => navigate('/Landing')}>← Back</button>
          <button type="button" aria-label="Toggle theme" className="theme-toggle" onClick={() => setDark(!dark)}>{dark ? '🌙' : '☀️'}</button>
         
        <div className="lily-graphic">
          <span style={{ fontSize: '24px' }}>🌸</span>
        </div>
        <h2>Create Account</h2>
        <p className="subtitle">Lilie's Play</p>

        <form onSubmit={handleSubmit} className="auth-form">
          <input name="username" placeholder="Username" required />
          <input name="email" type="email" placeholder="Email" required />
          <input name="password" type="password" placeholder="Password" required />
          <input name="confirmPassword" type="password" placeholder="Confirm Password" required />

          <button type="submit" disabled={loading}>
            {loading ? "Creating..." : "Sign Up"}
          </button>
        </form>

        <p className="switch-link">
          Already have an account? <span onClick={() => navigate('/login')}>Sign in</span>
        </p>
      </div>
    </div>
  );
}


export default Signup;