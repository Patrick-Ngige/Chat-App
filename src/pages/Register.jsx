import React from 'react';
import '../styles.scss'; 

const Register = () => {
  return (
    <div className='formContainer'>
      <div className="formWrapper">
        <span className='logo'>Chat App</span>
        <span className='title'>Register</span>
        <form>
            <input type='text' placeholder='display name'/>
            <input type='email' placeholder='email'/>
            <input type='password' placeholder='password'/>
            <input style={{display:"none"}} type="file" id='file' />
            <label htmlFor="file">
              <img src="" alt="choose an icon" />
            </label>
            <button>Sign Up</button>
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  )
}

export default Register
