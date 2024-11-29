import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../config/firebase';

const UserAuth = (props) => {
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

    );
}
 
export default UserAuth;