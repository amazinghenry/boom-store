import { useEffect, useState } from 'react';
import { auth } from '../../config/firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      const auth = getAuth();

      if (user) {
        // User is signed in
        setIsUserSignedIn(true);
      } else {
        // User is signed out
        setIsUserSignedIn(false);
      }
    });

    // Cleanup the subscription when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <nav className='container-fluid'>
      <Link to = '/' className="main-logo">
        BoomStore
      </Link>
      <div className='link-group'>
        <Link to="/" className='link-item'>Home</Link>
        <Link to="/about" className='link-item'>About</Link>
        <Link to="/contact" className='link-item'>Contact</Link>
        {isUserSignedIn ? (
          <>
            <Link to="/profile" className='link-item'>Profile</Link>
            <Link to="/logout" className='link-item'>Log out</Link>
          </>
        ) : (
          <>
            <Link to="/signin" className='link-item signin'>Sign In</Link>
            {/* <Link to="/signup" className='link-item signup'>Register</Link> */}
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
