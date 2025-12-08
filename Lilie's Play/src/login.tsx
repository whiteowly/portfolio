import { useNavigate } from "react-router-dom";
import './login.css'; 
function Login() {
   const navigate = useNavigate();
  return (
    <>  
        
        <div className="auth-container">
      {/* <img src='./logo.png' alt="Logo" className="auth-logo" /> */}
      <h2>Welcome Back!</h2>
      <form className="auth-form">
        <input name="email" type="email" placeholder="Email" required />
        <input name="password" type="password" placeholder="Password" required />
        <button type="submit">Log In</button>
      </form>
       <p className="switch-link">
        New here?{" "}
        <span onClick={() => navigate('/signup')}>Sign Up</span>
      </p>
    </div>
        
    
    </>
  )
}

export default Login