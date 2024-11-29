import { auth } from '../../config/firebase';

const UserProfile = () => {
    const userEmail = auth?.currentUser.email

    return ( 
        <div className="container">
           {userEmail} is signed in
        </div>
     );
}
 
export default UserProfile;