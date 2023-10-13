import React from 'react';
import '../styles.scss'; 

const Login = () => {

  const [err, setErr] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
   

    try {
      
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className='formContainer'>
      <div className="formWrapper">
        <span className='logo'>Chat App</span>
        <span className='title'>Login</span>
        <form onSubmit={handleSubmit}>
            <input type='email' placeholder='email'/>
            <input type='password' placeholder='password'/>
            <button>Sign In</button>
        </form>
        <p>You don't have an account? Sign Up</p>
      </div>
    </div>
  )
}

export default Login
