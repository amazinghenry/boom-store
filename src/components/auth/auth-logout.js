import { auth } from '../../config/firebase';
import { signOut } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LogOut = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate('/')
  }


  const handleLogout = async () => {
    try {
      await signOut(auth);
      // logged out
      navigate('/signin');
    } catch (error) {
      setError(getCustomErrorMessage(error.code) || 'An error occurred during sign-out.');
    }
  };

  const getCustomErrorMessage = (errorCode) => {
    const customErrorMessages = {
      // Add more custom error messages as needed
    };

    return customErrorMessages[errorCode] || 'An unexpected error occurred during sign-out.';
  };

  return (
    <div className="logout-container">
      <h2>Are you sure you want to sign out</h2>
      <div className='button-group'>
        <button onClick={handleCancel} className='cancel-button' >Cancel</button>
        <button onClick={handleLogout} className='logout-button' >Log Out</button>
      </div>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default LogOut;
