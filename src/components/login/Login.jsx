import React from 'react'
import "./login.css"
import {Link} from "react-router-dom"
const Login = () => {
  return (
    
    <div className="signupmain">
      <div className="signupcontainer">
        <div className="signup-left-section">
          <div className="signup-logo-box">
            <img className="tron-logo" src="Component 180[1](1).png" alt="Tron Logo"/>
          </div>
        </div>

        <div className="signup-right-section">
          <div className="signup-form-card">
            <div className="signup-login-and-signup">
              <Link to="/signup"><p className="inactive">Sign Up</p></Link>
              <p className="signupname">Login</p>
            </div>


            <form>
            <label className="signup-label">Email</label>
              <input
                type="email"
                className="signup-input"
                placeholder="Enter your email"
                required
              />

              <label className="signup-label">Password</label>
                <input
                  type="password"
                  className="signup-input password-input"
                  placeholder="Enter your password"
                  required
                />

              <button className="signupbutton" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Login
