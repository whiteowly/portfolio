import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import './auth.css';
import { authClient } from "../auth-client";


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


    await authClient.signUp.email({
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      name: formData.get("username") as string,
    }, {
      onRequest: () => setLoading(true),
      onSuccess: () => {
        setLoading(false);
        navigate('/login');
      },
      onError: (ctx) => {
        setLoading(false);
        alert(ctx.error.message);
      }
    });
  };


  return (
    <div className="auth-wrapper">
      <div className="auth-container">
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