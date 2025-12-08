import { useNavigate } from "react-router-dom";
import './signup.css'; 
function Signup() {
   const navigate = useNavigate();
  return (
    <>  
        <div className="auth-container">
      {/* <img src='./logo.png' alt="Logo" className="logo" /> */}
      <h2>Welcome!!</h2>
      <p className="subtitle">Create an account to get started</p>

      <form >
        <input name='username' type='username' placeholder='Username'required/>
        <input name="email" type="email" placeholder="Email" />
        <input name="password" type="password" placeholder="Password" required />
        <input name="confirmPassword" type="password" placeholder="Confirm Password" required />
        <span onClick={() => navigate('/existing-user')}> <button type="submit">Sign Up</button></span>
      </form>
      <p className="switch-link">
        Already have an account?{" "}
        <span onClick={() => navigate('/existing-user')}>Sign In</span>
      </p>
    </div>
        
    
    </>
  )
}

export default Signup