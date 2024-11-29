import { auth } from '../../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './auth.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleInputChange = (e, setter) => {
        setter(e.target.value);
      };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
            await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential)=>{
                const user = userCredential.user;
                console.log(user)
                navigate('/')
            });
            //signed in
    
          } catch (error) {
           
            setError(getCustomErrorMessage(error.code) || 'An error occurred during sign-in.');
          }
        };
      
        const getCustomErrorMessage = (errorCode) => {
        
          const customErrorMessages = {
            'auth/email-already-in-use': 'This email is already in use. Please use a different email.',
            // Add more custom error messages as needed
          };
      
          return customErrorMessages[errorCode];
        };
    
        setTimeout(() => {
            //   getCustomErrorMessage()
          }, 5000);
    
      return (
        <div className="auth-container container">

            <h2>Login to Continue</h2>

          <form onSubmit={handleSubmit}>
            <label>Email Address
              <input
                className='form-control'
                type="email"
                value={email}
                onChange={(e) => handleInputChange(e, setEmail)}
                required
              />
            </label>
            <label>Password 
               
              <input
                type="password"
                className='form-control'
                value={password}
                onChange={(e) => handleInputChange(e, setPassword)}
                required
              />
            </label>
            <Link className='password-reset' to='/passwordreset'>Forgot Password?</Link>
            
            <button type="submit" className='form-control sub-button'>Login</button>
          </form>

          <p className='signin-signup'>No Account yet? <Link to='/signup'>Create an Account!</Link></p>
          {error && <p className="error-message">{error}</p>}


        </div>
      );
    };
 
export default SignIn;