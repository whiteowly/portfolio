import { useNavigate } from "react-router-dom";
import './auth.css';


function Login() {
  const navigate = useNavigate();


  return (
    <div className="auth-wrapper">
      <div className="auth-container">
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