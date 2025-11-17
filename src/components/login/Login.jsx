import React from 'react'

const Login = () => {
  return (
    
    <div>
      <form>
        <label htmlFor="">Email:</label>
        <input type="email"  placeholder='Enter your email'/> <br /><br />

        <label htmlFor="">Password:</label>
        <input type="password" placeholder='Enter your password'/> <br /><br />

        <button id='logbutton' >Login</button>
      </form>
    </div>
    
  )
}

export default Login
