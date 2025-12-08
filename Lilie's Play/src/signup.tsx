import { useNavigate } from "react-router-dom";
import './signup.css'; 
import { authClient } from "../auth-client";


async function Signup() {
   const navigate = useNavigate();
   const { data, error } = await authClient.signUp.email({
        email, // user email address
        password, // user password -> min 8 characters by default
        name, // user display name
       
    }, {
        onRequest: (ctx) => {
            //show loading
        },
        onSuccess: (ctx) => {
            //redirect to the dashboard or sign in page
        },
        onError: (ctx) => {
            // display the error message
            alert(ctx.error.message);
        },
});
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