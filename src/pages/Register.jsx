import React, { useState } from 'react';
import '../styles.scss'; 
import Add from '../img/addAvatar.png';
import { createUserWithEmailAndPaasword} from 'firebase/auth';
import auth from '../firebase'

const Register = () => {
  const [err, setErr] = useState('false');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
    createUserWithEmailAndPaasword(auth, email, password)
    .then((userCredential) => {
      //if signed in
      const user = userCredential.user;
    })
  }catch (err) {
      const errorCode = error.code;
      const errorMessage = error.Message;
    }

  }
  return (
    <div className='formContainer'>
      <div className="formWrapper">
        <span className='logo'>Chat App</span>
        <span className='title'>Register</span>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='display name'/>
            <input type='email' placeholder='email'/>
            <input type='password' placeholder='password'/>
            <input style={{display:"none"}} type="file" id='file' />
            <label htmlFor="file">
              <img src={Add} alt="Add an avatar" />
              <span>Add an avatar</span>
            </label>
            <button>Sign Up</button>
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  )
}

export default Register
