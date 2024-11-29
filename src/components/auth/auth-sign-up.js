import { auth } from '../../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import './auth.css';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const SignUp = () => {
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
            await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential)=>{
                const user = userCredential.user;
                console.log(user)
                console.log('account created')
                navigate('/')
                setEmail("");
                setPassword("");
                setError(null);
            });
            //signed up
    
          } catch (error) {
           
            setError(getCustomErrorMessage(error.code) || 'An error occurred during sign-up.');
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

            <h2>Create an Account on BoomStore</h2>

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
            <button type="submit" className='form-control sub-button'>Create Account</button>
          </form>

          <p className='signin-signup'>Already Have an Account? <Link to='/signin'>Login here</Link></p>

          {error && <p className="error-message">{error}</p>}

          
        </div>
      );
    };
 
export default SignUp;